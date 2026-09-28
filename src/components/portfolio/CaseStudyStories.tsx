import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { caseStudies, getCaseStudyPath } from "@/lib/portfolio";

export function CaseStudyStories() {
  return (
    <section
      id="case-studies"
      aria-label="KayTech Africa client success stories"
      className="border-b border-hairline bg-surface-soft px-5 py-14 lg:px-20 lg:py-20"
    >
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Success stories from brands we&apos;ve built for
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Each project has a dedicated case study with challenge, solution, and
            measurable results. built for Ghanaian mobile users, WhatsApp, and MoMo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="flex flex-col rounded-3xl border border-hairline bg-canvas p-6 transition hover:border-primary/25 hover:shadow-card"
            >
              <div className="relative h-12 w-32">
                <Image
                  src={study.logo.src}
                  alt={study.logo.alt}
                  fill
                  sizes="128px"
                  className="object-contain object-left"
                />
              </div>
              <p className="mt-4 text-xs font-semibold text-primary">
                {study.sector} · {study.timeline}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {study.client}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {study.headline}
              </p>
              <p className="mt-2 text-xs font-medium text-accent">
                {study.highlightMetric}
              </p>
              <Link
                href={getCaseStudyPath(study.slug)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Read full case study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            data-track="get_started_click"
            data-track-location="portfolio_case_studies"
            className="inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary"
          >
            Start your success story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
