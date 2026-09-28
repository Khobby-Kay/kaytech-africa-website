import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { MarketingPageHero } from "@/components/ui/MarketingPageHero";
import { Container } from "@/components/ui/Container";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { WebsiteCostCalculator } from "@/components/website/WebsiteCostCalculator";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import { contentImages } from "@/lib/image-seo";
import { siteConfig } from "@/lib/site";
import {
  getCityCostPath,
  cityCostPages,
} from "@/lib/website-cost-city-content";
import {
  websiteCostExampleQuotes,
  websiteCostFactors,
  websiteCostFaqs,
  websiteCostPriceTable,
  websiteCostQuickAnswer,
  websiteCostRecurring,
  websiteCostTimelines,
  websiteCostTiers,
  websiteCostVsPricing,
} from "@/lib/website-cost-content";

const costKeywords = [
  "how much does a website cost in Ghana",
  "how much does a website cost in Ghana 2026",
  "website design prices in Ghana",
  "website cost in cedis",
  "web design packages Ghana",
  "affordable website Ghana",
  "website price Accra",
];

export const metadata: Metadata = createPageMetadata({
  title: "How Much Does a Website Cost in Ghana? (2026 GHS Guide) | KayTech Africa",
  description:
    "2026 website cost in Ghana. GHS price table, timelines, recurring fees, example quotes, and FAQs. KayTech Africa scopes affordable sites for Accra, Kumasi, and nationwide.",
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
        title="How much does a website cost in Ghana? (2026)"
        description="GHS ranges for typical builds. KayTech quote process: /pricing."
        image={contentImages.academyLearning}
        imageCaption="Scoped to your goals"
        location="Accra · Serving all Ghana"
      />

      <LeadCaptureStrip location="website_cost" compact />

      <section className="border-b border-hairline bg-surface-accent px-5 py-10 lg:px-20">
        <Container>
          <p className="max-w-3xl text-base leading-relaxed text-ink sm:text-lg">
            {websiteCostQuickAnswer}
          </p>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            {websiteCostVsPricing.body}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pricing"
              className="inline-flex h-11 items-center rounded-pill border border-hairline bg-surface-soft px-6 text-sm font-semibold text-ink"
            >
              KayTech pricing approach
            </Link>
            <Link
              href="/website-hosting-maintenance-ghana"
              className="inline-flex h-11 items-center rounded-pill border border-hairline bg-surface-soft px-6 text-sm font-semibold text-ink"
            >
              Hosting & maintenance costs
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <p className="max-w-2xl text-sm text-muted sm:text-base">
            Typical GHS ranges when we scope. Your quote may fall inside or outside a row depending on features.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-hairline bg-canvas">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-hairline bg-surface-soft">
                <tr>
                  <th className="px-4 py-3 font-semibold text-ink">Project type</th>
                  <th className="px-4 py-3 font-semibold text-ink">Typical range</th>
                  <th className="px-4 py-3 font-semibold text-ink">Timeline</th>
                  <th className="px-4 py-3 font-semibold text-ink">Best for</th>
                </tr>
              </thead>
              <tbody>
                {websiteCostPriceTable.map((row) => (
                  <tr key={row.type} className="border-b border-hairline last:border-0">
                    <td className="px-4 py-3 font-medium text-ink">{row.type}</td>
                    <td className="px-4 py-3 text-accent">{row.range}</td>
                    <td className="px-4 py-3 text-muted">{row.timeline}</td>
                    <td className="px-4 py-3 text-muted">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Ranges assume professional delivery, not a one-page template with no SEO.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {websiteCostFactors.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-hairline bg-surface-soft p-5"
              >
                <h3 className="font-display font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {websiteCostTimelines.map((step) => (
              <li
                key={step.phase}
                className="rounded-2xl border border-hairline bg-canvas p-5"
              >
                <p className="text-xs font-semibold text-primary">
                  {step.duration}
                </p>
                <h3 className="mt-2 font-semibold text-ink">{step.phase}</h3>
                <p className="mt-2 text-sm text-muted">{step.note}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <p className="max-w-2xl text-sm text-muted">
            After launch, budget for{" "}
            <Link href="/website-hosting-maintenance-ghana" className="font-medium text-primary">
              hosting & maintenance guide
            </Link>{" "}
            for KayTech retainer details.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {websiteCostRecurring.map((row) => (
              <li
                key={row.item}
                className="flex flex-col rounded-2xl border border-hairline bg-surface-soft p-5 sm:flex-row sm:justify-between sm:gap-4"
              >
                <div>
                  <p className="font-semibold text-ink">{row.item}</p>
                  <p className="mt-1 text-xs text-muted">{row.note}</p>
                </div>
                <p className="mt-2 shrink-0 text-sm font-medium text-accent sm:mt-0">
                  {row.range}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <p className="text-sm text-muted">
            Sample line-item stacks. Real proposals follow discovery.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {websiteCostExampleQuotes.map((quote) => (
              <article
                key={quote.title}
                className="rounded-3xl border border-hairline bg-canvas p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {quote.title}
                </h3>
                <p className="mt-2 text-xl font-bold text-primary">{quote.total}</p>
                <p className="text-xs text-muted">Timeline: {quote.timeline}</p>
                <ul className="mt-4 space-y-2">
                  {quote.breakdown.map((line) => (
                    <li key={line} className="text-sm text-muted">
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <p className="max-w-2xl text-sm text-muted">
            National build rates apply in most cases. City pages note local SEO or industry differences only.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {cityCostPages.map((city) => (
              <li key={city.slug}>
                <Link
                  href={getCityCostPath(city.slug)}
                  className="block rounded-2xl border border-hairline bg-surface-soft p-5 transition hover:border-primary/30"
                >
                  <p className="font-semibold text-ink">{city.cityName}</p>
                  <p className="mt-1 text-sm text-accent">{city.typicalRange}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <WebsiteCostCalculator />
            <div className="grid gap-4">
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
                  <p className="mt-1 text-sm font-medium text-accent">{tier.range}</p>
                  {"timeline" in tier ? (
                    <p className="mt-1 text-xs text-muted">Timeline: {tier.timeline}</p>
                  ) : null}
                  <p className="mt-3 text-sm text-muted">{tier.bestFor}</p>
                  <ul className="mt-4 space-y-2">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
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
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="space-y-4">
            {websiteCostFaqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-hairline bg-surface-soft p-5 sm:p-6"
              >
                <h3 className="text-base font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-primary via-primary-deep to-[#0c2d4a] px-5 py-16 text-on-primary lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm text-on-primary/85 sm:text-base">
              Contact or WhatsApp with your scope. We reply with GHS line items and timeline.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-pill bg-accent px-6 text-sm font-semibold text-white"
              >
                Request a quote
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex h-11 items-center gap-2 rounded-pill border border-white/25 px-6 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
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
