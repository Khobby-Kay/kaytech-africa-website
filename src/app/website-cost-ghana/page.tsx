import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { MarketingPageHero } from "@/components/ui/MarketingPageHero";
import { Container } from "@/components/ui/Container";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import { contentImages } from "@/lib/image-seo";
import { siteConfig } from "@/lib/site";
import {
  websiteCostFactors,
  websiteCostFaqs,
  websiteCostTiers,
} from "@/lib/website-cost-content";

const costKeywords = [
  "how much does a website cost in Ghana",
  "website design prices in Ghana",
  "website cost in cedis",
  "web design packages Ghana",
  "affordable website Ghana",
  "website price Accra",
];

export const metadata: Metadata = createPageMetadata({
  title: "How Much Does a Website Cost in Ghana? (2026 Guide) | KayTech Africa",
  description:
    "Website cost in Ghana explained — what affects price, typical tiers, and how to get a clear quote. KayTech Africa scopes affordable, professional sites for Accra, Kumasi, and nationwide.",
  path: "/website-cost-ghana",
  keywords: [...costKeywords, ...ghanaSearchKeywords],
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: websiteCostFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function WebsiteCostGhanaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <MarketingPageHero
        eyebrow="Pricing guide · Ghana"
        title="How much does a website cost in Ghana?"
        description="No one-size-fits-all price — but here's what drives cost, what you should expect, and how to get a clear, honest quote from KayTech Africa."
        image={contentImages.academyLearning}
        imageCaption="Value-focused websites — scoped to your goals"
        location="Accra · Serving all Ghana"
      />

      <LeadCaptureStrip location="website_cost" compact />

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Website prices in Ghana depend on what you need
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              If you search “how much does a website cost in Ghana”, you will see
              everything from GHS 500 templates to premium custom builds. The
              right investment depends on your goals: a simple online presence, a
              lead-generation machine, or a full e-commerce store with Mobile
              Money. KayTech scopes every project individually — you get a clear
              proposal, not a surprise invoice.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {websiteCostFactors.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-hairline bg-surface-soft p-5"
              >
                <h3 className="font-display font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Typical website tiers in Ghana
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
            We do not publish fixed prices — every business is different. These
            tiers describe scope and value. Request a quote for your exact figure.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {websiteCostTiers.map((tier) => (
              <article
                key={tier.name}
                className={`rounded-3xl border p-6 sm:p-8 ${
                  "featured" in tier && tier.featured
                    ? "border-accent/40 bg-canvas shadow-glow"
                    : "border-hairline bg-canvas"
                }`}
              >
                {"featured" in tier && tier.featured ? (
                  <span className="rounded-pill bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    Most popular
                  </span>
                ) : null}
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {tier.range}
                </p>
                <p className="mt-3 text-sm text-muted">{tier.bestFor}</p>
                <ul className="mt-4 space-y-2">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              data-track="get_started_click"
              data-track-location="website_cost"
              className="inline-flex h-11 items-center rounded-pill bg-gradient-to-r from-primary to-primary-light px-6 text-sm font-semibold text-on-primary shadow-card"
            >
              Get your exact quote
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-11 items-center rounded-pill border border-hairline bg-canvas px-6 text-sm font-semibold text-ink"
            >
              Full pricing approach
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            FAQs — website cost in Ghana
          </h2>
          <div className="mt-8 space-y-4">
            {websiteCostFaqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-hairline bg-surface-soft p-5 sm:p-6"
              >
                <h3 className="text-base font-semibold text-ink">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-primary via-primary-deep to-[#0c2d4a] px-5 py-16 text-on-primary lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Ready for a clear, honest quote?
            </h2>
            <p className="mt-4 text-sm text-on-primary/85 sm:text-base">
              Tell us what you need — we will reply with scope, timeline, and
              investment. No obligation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                data-track="get_started_click"
                data-track-location="website_cost_footer"
                className="inline-flex h-11 items-center rounded-pill bg-accent px-6 text-sm font-semibold text-white"
              >
                Request a quote
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                data-track="call_click"
                data-track-location="website_cost_footer"
                className="inline-flex h-11 items-center gap-2 rounded-pill border border-white/25 px-6 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-track-location="website_cost_footer"
                className="inline-flex h-11 items-center gap-2 rounded-pill border border-white/25 px-6 text-sm font-semibold"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
