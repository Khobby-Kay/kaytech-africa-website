import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  MessageCircle,
  Workflow,
  Clock,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords, pageSeoCopy } from "@/lib/localized-seo";
import { siteConfig } from "@/lib/site";

const automationKeywords = [
  "AI business automation Ghana",
  "AI chatbot developer Ghana",
  "WhatsApp automation Ghana",
  "business process automation Accra",
  "AI agency Ghana",
  "customer service chatbot Ghana",
];

export const metadata: Metadata = createPageMetadata({
  title: pageSeoCopy.aiAutomation.title,
  description: pageSeoCopy.aiAutomation.description,
  path: "/ai-automation",
  keywords: [...automationKeywords, ...ghanaSearchKeywords],
});

const capabilities = [
  {
    icon: MessageCircle,
    title: "AI chatbots & WhatsApp automation",
    body: "Answer customers instantly on your website and WhatsApp — qualify leads, book appointments, and never miss an enquiry, day or night.",
  },
  {
    icon: Bot,
    title: "Lead-capture assistants",
    body: "Teedra-style smart assistants that greet visitors, answer questions, and push hot leads straight to your sales team — on your website 24/7.",
  },
  {
    icon: Workflow,
    title: "Workflow & process bots",
    body: "Automate invoicing, follow-ups, data entry, and reporting so your team spends time on customers, not repetitive admin.",
  },
  {
    icon: Sparkles,
    title: "Custom AI integrations",
    body: "Connect AI to your existing tools — CRM, sheets, payments, and messaging — with secure, reliable integrations built for African businesses.",
  },
];

const outcomes = [
  { icon: Clock, stat: "24/7", label: "Always-on customer response" },
  { icon: TrendingUp, stat: "More leads", label: "Captured instead of lost" },
  { icon: Workflow, stat: "Hours saved", label: "Every week on busywork" },
];

const useCases = [
  "Online stores answering product & delivery questions automatically",
  "Clinics, salons & services booking appointments via WhatsApp",
  "Agencies qualifying leads before a human ever picks up",
  "SMEs automating quotes, follow-ups, and customer reminders",
];

export default function AiAutomationPage() {
  return (
    <>
      <PageHero
        title={pageSeoCopy.aiAutomation.heroTitle}
        description={pageSeoCopy.aiAutomation.heroDescription}
        cta={{ label: "Get an automation quote", href: "/contact" }}
        image={pageImages.aiAutomation}
      />

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
              What we automate for Ghanaian businesses
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              KayTech Africa is an Accra-based AI automation company helping
              businesses across Ghana win more customers and cut manual work with
              practical, reliable AI — not hype.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-hairline bg-surface-soft p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {outcomes.map((o) => (
              <div
                key={o.label}
                className="rounded-3xl border border-hairline bg-canvas p-6 text-center"
              >
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <o.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display text-2xl font-semibold text-ink">
                  {o.stat}
                </p>
                <p className="mt-1 text-sm text-muted">{o.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Real ways businesses use KayTech automation
            </h2>
            <ul className="mt-6 space-y-3">
              {useCases.map((u) => (
                <li
                  key={u}
                  className="flex items-start gap-3 rounded-2xl border border-hairline bg-canvas p-4 text-sm text-ink"
                >
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-hairline bg-primary p-8 text-on-primary sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Ready to put AI to work in your business?
              </h2>
              <p className="mt-3 text-sm text-on-primary/85 sm:text-base">
                Tell us what&apos;s slowing your team down. We&apos;ll scope an
                automation that pays for itself — and you can start with Teedra,
                our on-site assistant, right now.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                data-track="get_started_click"
                data-track-location="ai_automation_page"
                className="inline-flex h-11 items-center justify-center rounded-pill bg-on-primary px-6 text-sm font-semibold text-primary transition hover:bg-white"
              >
                Get a quote
              </Link>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-track-location="ai_automation_page"
                className="inline-flex h-11 items-center justify-center rounded-pill border border-white/30 px-6 text-sm font-semibold text-on-primary transition hover:bg-white/10"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
