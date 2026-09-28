import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { createPageMetadata } from "@/lib/page-metadata";
import {
  cityCostPages,
  getCityCostBySlug,
  getCityCostPath,
} from "@/lib/website-cost-city-content";

type Params = { city: string };

export function generateStaticParams(): Params[] {
  return cityCostPages.map((p) => ({ city: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const page = getCityCostBySlug(params.city);
  if (!page) {
    return createPageMetadata({
      title: "Website cost | KayTech Africa",
      description: "Website cost guides for Ghana.",
      path: "/website-cost-ghana",
    });
  }
  return createPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: getCityCostPath(page.slug),
  });
}

export default function CityWebsiteCostPage({ params }: { params: Params }) {
  const page = getCityCostBySlug(params.city);
  if (!page) notFound();

  return (
    <>
      <section className="border-b border-hairline bg-surface-soft px-5 pt-24 pb-12 lg:px-20 lg:pt-28">
        <Container>
          <Link
            href="/website-cost-ghana"
            className="text-sm font-semibold text-primary hover:underline"
          >
            ← Full Ghana website cost guide (2026)
          </Link>
          <h1 className="mt-6 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Website cost in {page.cityName}, Ghana
          </h1>
          <p className="mt-2 text-lg font-medium text-accent">{page.typicalRange}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            {page.localIntro}
          </p>
          <Link
            href={page.linkCityHub}
            className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            Web design in {page.cityName} →
          </Link>
        </Container>
      </section>

      <LeadCaptureStrip location={`website_cost_${page.slug}`} compact />

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink">
            Local pricing notes
          </h2>
          <div className="mt-8 space-y-6">
            {page.priceNotes.map((note) => (
              <article key={note.heading} className="rounded-2xl border border-hairline bg-surface-soft p-6">
                <h3 className="font-semibold text-ink">{note.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{note.body}</p>
              </article>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary"
          >
            Get a {page.cityName} quote
          </Link>
        </Container>
      </section>
    </>
  );
}
