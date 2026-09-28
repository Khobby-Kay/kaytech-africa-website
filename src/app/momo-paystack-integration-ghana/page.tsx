import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Smartphone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { createPageMetadata } from "@/lib/page-metadata";
import { contentImages } from "@/lib/image-seo";
import {
  momoPaystackFaqs,
  momoPaystackPricing,
  momoPaystackQuickAnswer,
  momoPaystackSteps,
  momoPaystackWallets,
} from "@/lib/momo-paystack-content";

export const metadata: Metadata = createPageMetadata({
  title: "MoMo & Paystack Integration from GHS 3,000 | Ghana Websites | KayTech",
  description:
    "Accept MTN MoMo, Telecel Cash, AirtelTigo Money, and cards on your Ghana site. Pricing, how it works, and Paystack setup. KayTech Africa.",
  path: "/momo-paystack-integration-ghana",
  keywords: [
    "MoMo payment integration Ghana website",
    "Paystack integration Ghana",
    "Mobile Money checkout Ghana",
    "e-commerce MoMo Ghana",
  ],
});

const useCases = [
  "E-commerce stores selling products nationwide",
  "Churches & NGOs collecting tithes, offerings, and donations",
  "Schools accepting fees and application payments",
  "Hotels & restaurants taking deposits or orders",
  "Service businesses collecting booking fees upfront",
];

export default function MomoPaystackPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: momoPaystackFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="MoMo & Paystack integration for Ghana websites"
        description={momoPaystackQuickAnswer}
        cta={{ label: "E-commerce from GHS 8,000", href: "/services/best-ecommerce-development-accra-ghana" }}
        secondaryCta={{ label: "WhatsApp ordering", href: "/whatsapp-ordering-website-ghana" }}
        image={contentImages.principleMomo}
      />

      <LeadCaptureStrip location="momo_paystack" compact />

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {momoPaystackPricing.map((tier) => (
              <article
                key={tier.name}
                className="rounded-3xl border border-hairline bg-surface-soft p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">{tier.name}</h3>
                <p className="mt-2 font-bold text-primary">{tier.range}</p>
                <ul className="mt-4 space-y-2">
                  {tier.includes.map((item) => (
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
            <ol className="list-decimal space-y-3 pl-5 text-sm text-muted">
              {momoPaystackSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <ul className="space-y-4">
              {momoPaystackWallets.map((w) => (
                <li key={w.name} className="rounded-2xl border border-hairline bg-canvas p-4">
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-ink">{w.name}</p>
                      <p className="text-sm text-muted">{w.note}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <ul className="space-y-2">
            {useCases.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary"
            >
              Discuss payment setup
            </Link>
            <Link
              href="/website-cost-ghana"
              className="inline-flex h-11 items-center rounded-pill border border-hairline px-6 text-sm font-semibold text-ink"
            >
              Full cost guide
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="space-y-4">
            {momoPaystackFaqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-hairline bg-canvas p-5">
                <h3 className="font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
