import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { createPageMetadata } from "@/lib/page-metadata";
import { contentImages } from "@/lib/image-seo";
import { siteConfig } from "@/lib/site";
import {
  whatsappOrderingFaqs,
  whatsappOrderingFit,
  whatsappOrderingFlow,
  whatsappOrderingMeta,
  whatsappOrderingNeeds,
  whatsappOrderingPackages,
  whatsappOrderingSetup,
  whatsappOrderingWallets,
} from "@/lib/whatsapp-ordering-content";

const path = "/whatsapp-ordering-website-ghana";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "WhatsApp ordering website",
      serviceType: "WhatsApp catalogue website with MoMo payments",
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: { "@type": "Country", name: "Ghana" },
      url: `${siteConfig.url}${path}`,
      offers: {
        "@type": "Offer",
        priceCurrency: "GHS",
        price: whatsappOrderingMeta.priceFrom,
        description: "Starting price for catalogue + WhatsApp ordering",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: whatsappOrderingFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "E-Commerce",
          item: `${siteConfig.url}/services/best-ecommerce-development-accra-ghana`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "WhatsApp ordering website",
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
  ],
};

export const metadata: Metadata = createPageMetadata({
  title: whatsappOrderingMeta.title,
  description: whatsappOrderingMeta.description,
  path,
  keywords: [
    "WhatsApp ordering website Ghana",
    "WhatsApp shop Ghana",
    "catalogue website MoMo Ghana",
    "order on WhatsApp Ghana business",
  ],
});

export default function WhatsAppOrderingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        title={whatsappOrderingMeta.heroTitle}
        description={whatsappOrderingMeta.heroDescription}
        cta={{ label: "Voltic case study", href: "/portfolio/voltic" }}
        secondaryCta={{ label: "Website cost guide", href: "/website-cost-ghana" }}
        image={contentImages.principleMomo}
      />
      <LeadCaptureStrip location="whatsapp_ordering" compact />
      <section className="border-b border-hairline bg-surface-accent px-5 py-8 lg:px-20">
        <Container>
          <p className="text-sm font-semibold text-primary">
            From GHS {whatsappOrderingMeta.priceFrom.toLocaleString("en-GH")} · scoped after discovery
          </p>
        </Container>
      </section>
      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {whatsappOrderingPackages.map((pkg) => (
              <article
                key={pkg.name}
                className={`rounded-3xl border p-6 ${
                  "featured" in pkg && pkg.featured
                    ? "border-accent/40 bg-surface-accent"
                    : "border-hairline bg-surface-soft"
                }`}
              >
                <h3 className="font-display text-lg font-semibold text-ink">{pkg.name}</h3>
                <p className="mt-2 font-bold text-primary">{pkg.price}</p>
                <ul className="mt-4 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              WhatsApp ordering suits you if
            </h2>
            <ul className="mt-6 space-y-3">
              {whatsappOrderingFit.suits.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              A full cart is better if
            </h2>
            <ul className="mt-6 space-y-3">
              {whatsappOrderingFit.cartBetter.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-muted" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services/best-ecommerce-development-accra-ghana"
              className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
            >
              See checkout stores from GHS 8,000 →
            </Link>
          </div>
        </Container>
      </section>
      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink">What we set up</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatsappOrderingSetup.map((item) => (
              <article key={item.title} className="rounded-3xl border border-hairline bg-surface-soft p-6">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">How the flow works</h2>
            <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm text-muted">
              {whatsappOrderingFlow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Supported wallets</h2>
            <ul className="mt-6 space-y-2">
              {whatsappOrderingWallets.map((w) => (
                <li key={w} className="flex gap-2 text-sm text-ink">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {w}
                </li>
              ))}
            </ul>
            <Link
              href="/momo-paystack-integration-ghana"
              className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
            >
              MoMo & Paystack integration details →
            </Link>
            <h2 className="mt-10 font-display text-2xl font-bold text-ink">What we need from you</h2>
            <ul className="mt-6 space-y-2">
              {whatsappOrderingNeeds.map((n) => (
                <li key={n} className="flex gap-2 text-sm text-ink">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="space-y-4">
            {whatsappOrderingFaqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-hairline p-5">
                <h3 className="font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
          <a
            href={siteConfig.contact.whatsapp}
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp KayTech
          </a>
        </Container>
      </section>
    </>
  );
}
