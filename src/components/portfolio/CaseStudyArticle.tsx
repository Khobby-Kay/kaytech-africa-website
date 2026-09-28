import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImpactMetricBar } from "@/components/ui/ImpactMetricBar";
import type { CaseStudy } from "@/lib/portfolio";
export function CaseStudyArticle({
  study,
  showBackLink = false,
}: {
  study: CaseStudy;
  showBackLink?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-hairline bg-canvas">
      {showBackLink ? (
        <div className="border-b border-hairline bg-surface-soft px-6 py-4 sm:px-8">
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-primary hover:underline"
          >
            ← All case studies
          </Link>
        </div>
      ) : null}

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
              <h1 className="mt-1 font-display text-xl font-semibold text-ink sm:text-3xl">
                {study.client}
              </h1>
            </div>
          </div>
          <p className="rounded-2xl border border-accent/25 bg-surface-accent px-4 py-3 text-sm font-semibold text-ink sm:max-w-sm">
            {study.headline}
          </p>
        </div>
        <p className="mt-4 text-sm font-medium text-primary sm:max-w-2xl">
          {study.highlightMetric}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          {study.summary}
        </p>

        {study.metrics.length > 0 ? (
          <div className="mt-8 grid gap-4 border-t border-hairline pt-8 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <ImpactMetricBar key={metric.label} metric={metric} />
            ))}
          </div>
        ) : null}
      </div>

      <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:py-10">
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-muted">
            The challenge
          </h2>
          <ul className="mt-3 space-y-2">
            {study.challenge.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-muted">
            What KayTech delivered
          </h2>
          <ul className="mt-3 space-y-2">
            {study.solution.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline px-6 py-8 sm:px-8 lg:py-10">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-muted">
          Results
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {study.results.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-hairline bg-surface-soft p-4 text-sm text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
        <blockquote className="mt-8 rounded-2xl border border-accent/20 bg-surface-accent p-5 text-sm leading-relaxed text-ink">
          <span className="font-semibold text-accent">Key insight: </span>
          {study.keyInsight}
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

      <div className="border-t border-hairline bg-surface-soft px-6 py-8 sm:px-8">
        <Link
          href="/contact"
          data-track="get_started_click"
          data-track-location={`case_study_${study.slug}`}
          className="inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary"
        >
          Discuss a project like this
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
