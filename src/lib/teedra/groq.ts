import { siteConfig } from "@/lib/site";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

export function isGroqConfigured(): boolean {
  return Boolean(process.env.GROQ_API_KEY?.trim());
}

export function teedraSystemPrompt(): string {
  return `You are Teedra, the on-site assistant for KayTech Africa (web design & development studio in Accra, Ghana).
Answer in 2–4 short sentences. Be practical and friendly. Topics: websites, e-commerce, MoMo/Paystack, SEO, digital marketing, AI automation, KayTech Academy, timelines, and quotes.
Do not invent exact GHS prices; say KayTech sends a written quote after discovery. For complex or custom work, suggest WhatsApp ${siteConfig.contact.whatsappDisplay} or call ${siteConfig.contact.phoneDisplay}.
Site: ${siteConfig.url}`;
}

type GroqMessage = { role: "system" | "user" | "assistant"; content: string };

export async function chatWithGroq(
  messages: GroqMessage[],
): Promise<{ ok: true; text: string } | { ok: false; error: string }> {
  const apiKey = process.env.GROQ_API_KEY?.trim();
  if (!apiKey) {
    return { ok: false, error: "not_configured" };
  }

  const model = process.env.GROQ_MODEL?.trim() || "llama-3.3-70b-versatile";

  try {
    const res = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.4,
        max_tokens: 400,
        messages,
      }),
    });

    if (!res.ok) {
      const reason = await res.text();
      console.error("[teedra:groq]", res.status, reason);
      return { ok: false, error: "provider_error" };
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = data.choices?.[0]?.message?.content?.trim();
    if (!text) return { ok: false, error: "empty_response" };
    return { ok: true, text };
  } catch (error) {
    console.error("[teedra:groq] network", error);
    return { ok: false, error: "network" };
  }
}
