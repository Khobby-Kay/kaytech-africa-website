import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { createPageMetadata } from "@/lib/page-metadata";
import { contentImages } from "@/lib/image-seo";
import { websiteCostRecurring } from "@/lib/website-cost-content";
import {
  hostingMaintenanceFaqs,
  hostingMaintenanceQuickAnswer,
} from "@/lib/hosting-maintenance-content";

export const metadata: Metadata = createPageMetadata({
  title: "Website Hosting, .com.gh Domain & Maintenance Costs in Ghana | KayTech",
  description:
    "Recurring website costs in Ghana. domains, hosting, maintenance retainers, and gateway fees. 2026 GHS guide from KayTech Africa with links to full website cost tables.",
  path: "/website-hosting-maintenance-ghana",
  keywords: [
    "website hosting cost Ghana",
    "domain com.gh price",
    "website maintenance Ghana",
    "hosting Ghana cedis",
  ],
});

export default function HostingMaintenancePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hostingMaintenanceFaqs.map((faq) => ({
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
        title="Hosting, domains & maintenance in Ghana"
        description={hostingMaintenanceQuickAnswer}
        cta={{ label: "Full website cost guide", href: "/website-cost-ghana" }}
        secondaryCta={{ label: "Request maintenance quote", href: "/contact" }}
        image={contentImages.serviceWeb}
      />
      <LeadCaptureStrip location="hosting_maintenance" compact />
      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <ul className="grid gap-3 sm:grid-cols-2">
            {websiteCostRecurring.map((row) => (
              <li
                key={row.item}
                className="rounded-2xl border border-hairline bg-surface-soft p-5"
              >
                <p className="font-semibold text-ink">{row.item}</p>
                <p className="mt-1 text-sm font-medium text-accent">{row.range}</p>
                <p className="mt-2 text-sm text-muted">{row.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            One-time build costs are covered in{" "}
            <Link href="/website-cost-ghana" className="font-medium text-primary">
              how much a website costs in Ghana (2026)
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="space-y-4">
            {hostingMaintenanceFaqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-hairline bg-canvas p-5"
              >
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
