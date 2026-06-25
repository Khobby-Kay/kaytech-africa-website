import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Layers,
  Rocket,
  ShoppingCart,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import { contentImages } from "@/lib/image-seo";
import { siteConfig } from "@/lib/site";

const pricingKeywords = [
  "how much does a website cost in Ghana",
  "website design prices in Ghana",
  "web design packages Ghana",
  "affordable web design Ghana",
  "website cost in cedis",
  "web design pricing Accra",
];

export const metadata: Metadata = createPageMetadata({
  title: "Web Design Pricing in Ghana | What a Website Costs | KayTech Africa",
  description:
    "How much does a website cost in Ghana? KayTech Africa prices around value, not templates — clear, scoped quotes for business sites, e-commerce, SEO, and AI automation in Accra and nationwide. Request a tailored quote.",
  path: "/pricing",
  keywords: [...pricingKeywords, ...ghanaSearchKeywords],
});

/** Value tiers described by outcome and scope — no fixed prices, since every
 *  project is scoped to the client. Each links to a tailored quote. */
const tiers = [
  {
    icon: Rocket,
    name: "Starter site",
    bestFor: "New businesses and personal brands getting online with credibility.",
    value:
      "A fast, professional presence that builds trust and turns searches into calls and WhatsApp messages.",
    includes: [
      "Mobile-first, responsive design",
      "Up to a handful of core pages",
      "Contact & WhatsApp lead capture",
      "Basic on-page SEO setup",
      "Launch, training & handover",
    ],
  },
  {
    icon: Layers,
    name: "Business site",
    bestFor: "Established companies that want their site to win and convert customers.",
    value:
      "A conversion-focused website engineered to rank locally and generate qualified enquiries month after month.",
    includes: [
      "Everything in Starter",
      "Custom design around your brand",
      "Service / portfolio sections",
      "Stronger SEO & analytics",
      "Blog or news section",
      "Priority support",
    ],
    featured: true,
  },
  {
    icon: ShoppingCart,
    name: "E-commerce store",
    bestFor: "Brands selling products or services online across Ghana.",
    value:
      "A storefront built around how Ghanaians pay — MoMo, Paystack, Flutterwave — so more visits become real orders.",
    includes: [
      "Everything in Business",
      "Product catalogue & checkout",
      "Mobile Money & card payments",
      "Order & delivery management",
      "WhatsApp ordering support",
    ],
  },
  {
    icon: Sparkles,
    name: "Custom & automation",
    bestFor: "Teams needing web apps, integrations, or AI automation.",
    value:
      "Tailored platforms, chatbots, and workflow automation that save hours and scale with your growth.",
    includes: [
      "Custom web apps & dashboards",
      "AI chatbots & WhatsApp automation",
      "CRM & payment integrations",
      "Ongoing optimisation",
      "Dedicated support",
    ],
  },
];

const costFactors = [
  {
    title: "Scope & number of pages",
    body: "A focused starter site is a smaller investment than a multi-section corporate platform.",
  },
  {
    title: "E-commerce & payments",
    body: "Selling online with MoMo, Paystack, and inventory adds functionality beyond a brochure site.",
  },
  {
    title: "Custom design vs template",
    body: "A bespoke, brand-led design takes more craft than a lightly customised theme.",
  },
  {
    title: "Integrations & automation",
    body: "CRMs, chatbots, booking systems, and AI workflows are scoped to what you actually need.",
  },
  {
    title: "Content & SEO depth",
    body: "Copywriting, photography, and a deeper SEO build can be included or phased to fit budget.",
  },
  {
    title: "Support & maintenance",
    body: "Ongoing updates, security, and improvements keep your site performing after launch.",
  },
];

const alwaysIncluded = [
  "Mobile-first design that loads fast on Ghanaian networks",
  "On-page SEO so customers can find you on Google",
  "Secure SSL and reliable hosting guidance",
  "Clear, itemised proposal — no hidden costs",
  "Training and handover so you stay in control",
  "Honest advice on what you do and don't need",
];

const pricingFaqs = [
  {
    question: "How much does a website cost in Ghana?",
    answer:
      "It depends on what your business actually needs. A simple starter site is a smaller investment than a custom business website or a full e-commerce store with Mobile Money and inventory. Rather than quote a one-size-fits-all figure, KayTech Africa scopes your project and gives you a clear, itemised proposal so you only pay for what delivers value. Call 024 840 8154 or WhatsApp 055 992 1979 for a tailored quote.",
  },
  {
    question: "Why don't you list fixed prices?",
    answer:
      "Because honest pricing depends on scope. Two businesses asking for 'a website' often need very different things. We scope each project to your goals so you get real value — not an inflated package or a cheap site that never performs.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. We commonly stage payments across project milestones, and larger builds can be phased so you can start lean and grow. We'll discuss what works for your budget on the call.",
  },
  {
    question: "Is a cheaper website worth it?",
    answer:
      "A very cheap site that loads slowly, never ranks on Google, and never converts usually costs far more in lost sales than it saves. We focus on value: a website that pays for itself by bringing in customers.",
  },
];

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />

      <PageHero
        eyebrow="Web design pricing Ghana"
        title="Pricing built around value, not templates"
        description="Wondering how much a website costs in Ghana? The honest answer is: it depends on what will actually grow your business. We scope every project clearly and price around the value it delivers — so you invest in results, not a guess."
        cta={{ label: "Request a tailored quote", href: "/contact" }}
        image={contentImages.serviceGrowth}
      />

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
              A website is an investment, not an expense
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              The best-performing websites in Ghana pay for themselves — bringing
              in enquiries, orders, and customers around the clock. Our job is to
              build you that kind of asset and scope it to your budget, so the
              price always maps to real business value.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={
                  tier.featured
                    ? "flex flex-col rounded-3xl border-2 border-primary bg-surface-soft p-6"
                    : "flex flex-col rounded-3xl border border-hairline bg-surface-soft p-6"
                }
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <tier.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {tier.name}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-primary">
                  {tier.bestFor}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {tier.value}
                </p>
                <ul className="mt-4 space-y-2">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex h-10 items-center justify-center rounded-pill bg-primary px-5 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
                >
                  Get a quote
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              What shapes your investment
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Every quote is built from the same honest factors. Knowing these
              helps you decide what to include now and what to phase later.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {costFactors.map((factor) => (
              <article
                key={factor.title}
                className="rounded-3xl border border-hairline bg-canvas p-6"
              >
                <h3 className="font-display text-base font-semibold text-ink">
                  {factor.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {factor.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <TrendingUp className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-3xl">
                Always included, whatever the budget
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                No matter the size of your project, the essentials are never an
                upsell. Value comes standard.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-1">
              {alwaysIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-hairline bg-surface-soft p-4 text-sm text-ink"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            Pricing questions Ghanaians ask
          </h2>
          <div className="mt-8 space-y-4">
            {pricingFaqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-hairline bg-canvas p-6"
              >
                <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-hairline bg-primary p-8 text-on-primary sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Get a clear, no-pressure quote
              </h2>
              <p className="mt-3 text-sm text-on-primary/85 sm:text-base">
                Tell us about your business and goals. We&apos;ll scope a website
                that fits your budget and pays for itself — with a transparent,
                itemised proposal and no surprise costs.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                data-track="get_started_click"
                data-track-location="pricing_page"
                className="inline-flex h-11 items-center justify-center rounded-pill bg-on-primary px-6 text-sm font-semibold text-primary transition hover:bg-white"
              >
                Request a quote
              </Link>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-track-location="pricing_page"
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
