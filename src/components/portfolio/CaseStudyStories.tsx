import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/lib/portfolio";

export function CaseStudyStories() {
  return (
    <section
      aria-label="KayTech Africa client success stories"
      className="border-b border-hairline bg-surface-soft px-5 py-14 lg:px-20 lg:py-20"
    >
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-pill bg-canvas px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-primary ring-1 ring-hairline">
            Client results
          </span>
          <h2 className="mt-5 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Success stories from brands we&apos;ve built for
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Real outcomes from Ghanaian businesses — WhatsApp funnels, Mobile
            Money, and mobile-first design that turns interest into enquiries
            and sales.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {caseStudies.map((study, index) => (
            <article
              key={study.slug}
              id={study.slug}
              className="scroll-mt-28 overflow-hidden rounded-3xl border border-hairline bg-canvas"
            >
              <div className="border-b border-hairline bg-surface-soft px-6 py-8 sm:px-8 sm:py-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-5">
                    <div className="relative h-14 w-[140px] shrink-0 sm:h-16 sm:w-[160px]">
                      <Image
                        src={study.logo.src}
                        alt={study.logo.alt}
                        fill
                        sizes="160px"
                        className="object-contain object-left"
                      />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                        {study.sector} · {study.location} · {study.timeline}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
                        {study.client}
                      </h3>
                    </div>
                  </div>
                  <p className="rounded-2xl border border-accent/25 bg-surface-accent px-4 py-3 text-sm font-semibold text-ink sm:max-w-xs sm:text-right">
                    {study.headline}
                  </p>
                </div>
              </div>

              <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:py-10">
                <div>
                  <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted">
                    The challenge
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {study.challenge.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-ink"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h4 className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-muted">
                    What we built
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {study.solution.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-ink"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted">
                    Results
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {study.results.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-ink"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <blockquote className="mt-8 rounded-2xl border border-hairline bg-surface-soft p-5">
                    <p className="text-sm font-medium leading-relaxed text-ink">
                      &ldquo;{study.keyInsight}&rdquo;
                    </p>
                    <footer className="mt-2 text-xs text-muted">
                      — KayTech insight from the {study.client} project
                    </footer>
                  </blockquote>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-pill border border-hairline bg-surface-soft px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < caseStudies.length - 1 ? (
                <div className="border-t border-hairline px-6 py-4 sm:px-8">
                  <p className="text-center text-xs text-muted">
                    Case study {index + 1} of {caseStudies.length}
                  </p>
                </div>
              ) : null}
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
