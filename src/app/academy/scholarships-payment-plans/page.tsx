import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { academyScholarshipsContent } from "@/lib/academy-scholarships-content";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: academyScholarshipsContent.title,
  description: academyScholarshipsContent.metaDescription,
  path: academyScholarshipsContent.path,
  keywords: [
    "web development scholarship Ghana",
    "coding bootcamp payment plan Ghana",
    "free web development course Ghana",
  ],
});

export default function AcademyScholarshipsPage() {
  const c = academyScholarshipsContent;
  return (
    <>
      <PageHero
        eyebrow="KayTech Academy"
        title="Scholarships, payment plans & free resources"
        description={c.intro}
        cta={{ label: "Apply now", href: "/academy#apply" }}
      />

      <section className="border-b border-hairline bg-canvas px-5 py-12 lg:px-20 lg:py-16">
        <Container className="max-w-3xl space-y-12">
          <article>
            <h2 className="font-display text-xl font-semibold text-ink">{c.scholarshipSeats.headline}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
              {c.scholarshipSeats.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink">{c.scholarshipSeats.note}</p>
          </article>

          <article>
            <h2 className="font-display text-xl font-semibold text-ink">{c.paymentPlans.headline}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
              {c.paymentPlans.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="font-display text-xl font-semibold text-ink">{c.freeResources.headline}</h2>
            {c.freeResources.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className="mt-4 text-sm leading-relaxed text-muted">
                {p}
              </p>
            ))}
            <ul className="mt-6 space-y-2">
              {c.freeResources.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-semibold text-primary hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <dl className="space-y-6">
            {c.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-ink">{faq.question}</dt>
                <dd className="mt-2 text-sm text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
