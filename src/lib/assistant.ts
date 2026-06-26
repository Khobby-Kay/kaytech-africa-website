import { siteConfig, services, academyCourses } from "@/lib/site";
import { allFaqs } from "@/lib/seo";

/** A retrieval-based knowledge entry the on-site assistant can answer from. */
type KnowledgeEntry = {
  keywords: string[];
  answer: string;
};

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "do", "does", "you", "your", "i", "we",
  "to", "of", "for", "in", "on", "and", "or", "can", "how", "what", "where",
  "much", "me", "my", "with", "have", "get", "need", "want", "please", "tell",
  "about", "would", "could", "should", "give",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));
}

/** Build the knowledge base from the same data that powers the site + SEO. */
function buildKnowledge(): KnowledgeEntry[] {
  const fromFaqs: KnowledgeEntry[] = allFaqs.map((faq) => ({
    keywords: tokenize(`${faq.question} ${faq.answer}`),
    answer: faq.answer,
  }));

  const fromServices: KnowledgeEntry[] = services.map((service) => ({
    keywords: tokenize(`${service.title} ${service.description} ${service.tags.join(" ")}`),
    answer: `${service.title}: ${service.description}`,
  }));

  const academyAnswer = `KayTech Academy runs practical, cohort-based tracks: ${academyCourses
    .map((c) => c.title)
    .join(", ")}. Each is taught by working practitioners. Visit ${siteConfig.url}/academy for details.`;

  const extras: KnowledgeEntry[] = [
    {
      keywords: tokenize(
        "price pricing cost quote budget how much affordable cheap rate fee package",
      ),
      answer:
        "Pricing is scoped per project — no fixed packages. Most business websites start affordably, and we send a clear proposal after a quick discovery chat. Tell me what you need or tap “Get a quote” and the team will give you a figure.",
    },
    {
      keywords: tokenize(
        "academy course learn training class student teach web design development",
      ),
      answer: academyAnswer,
    },
    {
      keywords: tokenize("location based where office accra ghana address area serve"),
      answer: `KayTech Africa is based in ${siteConfig.location.line1}, ${siteConfig.location.line2}. We're remote-first and serve Accra, Kumasi, Tema, Takoradi and all of Ghana.`,
    },
    {
      keywords: tokenize("contact reach phone call whatsapp email talk human speak person"),
      answer: `You can reach the team directly — call ${siteConfig.contact.phoneDisplay}, WhatsApp ${siteConfig.contact.whatsappDisplay}, or email ${siteConfig.contact.email}.`,
    },
    {
      keywords: tokenize(
        "ai automation chatbot bot workflow automate business assistant agent whatsapp",
      ),
      answer:
        "Yes — AI business automation is one of our specialties: chatbots, WhatsApp automation, workflow bots, and Teedra-style assistants on your site that capture leads and save your team hours. See /ai-automation or ask for a quote.",
    },
    {
      keywords: tokenize("time long timeline deliver fast how soon weeks duration build"),
      answer:
        "Timelines depend on scope, but most marketing sites ship in 2–4 weeks and larger builds in 6–12 weeks. We agree milestones up front so you always know what's next.",
    },
  ];

  return [...extras, ...fromServices, ...fromFaqs];
}

const KNOWLEDGE = buildKnowledge();

export type AssistantReply = {
  text: string;
  /** When the assistant can't answer confidently, suggest escalating. */
  escalate: boolean;
};

/** Retrieval matcher — returns the best knowledge answer for a user message. */
export function getAssistantReply(message: string): AssistantReply {
  const words = tokenize(message);
  if (words.length === 0) {
    return {
      text: "I'm Teedra — ask me about KayTech's services, pricing, the academy, timelines, or how to get a quote.",
      escalate: false,
    };
  }

  let best: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE) {
    const set = new Set(entry.keywords);
    let score = 0;
    for (const word of words) if (set.has(word)) score += 1;
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  if (best && bestScore >= 1) {
    return { text: best.answer, escalate: bestScore < 2 };
  }

  return {
    text: `Good question — I'll connect you with our team. Tap "Chat on WhatsApp" below, or call ${siteConfig.contact.phoneDisplay}.`,
    escalate: true,
  };
}

export const assistantPrompts = [
  "What services do you offer?",
  "How much does a website cost?",
  "Do you do AI automation?",
  "Tell me about the academy",
  "Get a quote",
] as const;

export function whatsappQuoteLink(context?: string): string {
  const base = siteConfig.contact.whatsapp;
  const msg = context
    ? `Hi KayTech, I'd like a quote. ${context}`
    : "Hi KayTech, I'd like a quote for a project.";
  return `${base}?text=${encodeURIComponent(msg)}`;
}
