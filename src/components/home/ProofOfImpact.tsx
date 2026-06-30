import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { ImpactMetricBar } from "@/components/ui/ImpactMetricBar";
import { clientLogos } from "@/lib/client-logos";
import {
  aggregateImpactMetrics,
  clientImpactHighlights,
  proofOfImpactCopy,
} from "@/lib/proof-of-impact";

export function ProofOfImpact() {
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      aria-label="KayTech Africa proof of impact — client results and metrics"
      className="border-b border-hairline bg-gradient-to-br from-primary via-primary-deep to-[#0c2d4a] text-on-primary"
    >
      <Container className="px-5 py-14 lg:px-20 lg:py-20">
        <RevealOnScroll variant="fade-up">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-pill border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-on-primary/90">
              {proofOfImpactCopy.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {proofOfImpactCopy.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-on-primary/80 sm:text-base">
              {proofOfImpactCopy.description}
            </p>
          </div>
        </RevealOnScroll>

        <StaggerReveal
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          staggerMs={80}
        >
          {aggregateImpactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
            >
              <p className="font-display text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-on-primary">
                {metric.label}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-on-primary/65">
                {metric.detail}
              </p>
            </div>
          ))}
        </StaggerReveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {clientImpactHighlights.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio#${item.slug}`}
              className="group flex flex-col rounded-3xl border border-white/15 bg-canvas p-6 text-ink transition hover:border-accent/40 hover:shadow-glow"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="relative h-10 w-[120px] shrink-0">
                  <Image
                    src={item.logo.src}
                    alt={item.logo.alt}
                    fill
                    sizes="120px"
                    className="object-contain object-left"
                  />
                </div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted">
                  {item.timeline}
                </span>
              </div>
              <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                {item.sector}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {item.client}
              </h3>
              <p className="mt-3 rounded-xl bg-surface-accent px-3 py-2 text-sm font-semibold text-ink">
                {item.headline}
              </p>
              {item.topMetric ? (
                <div className="mt-4">
                  <ImpactMetricBar metric={item.topMetric} />
                </div>
              ) : null}
              <p className="mt-3 text-xs font-medium text-primary">
                {item.highlightMetric}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {item.result}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read full story
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/portfolio"
            className="inline-flex h-11 items-center gap-2 rounded-pill bg-accent px-6 text-sm font-semibold text-white transition hover:brightness-110"
          >
            All case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            data-track="get_started_click"
            data-track-location="proof_of_impact"
            className="inline-flex h-11 items-center rounded-pill border border-white/25 px-6 text-sm font-semibold text-on-primary transition hover:bg-white/10"
          >
            Get similar results
          </Link>
        </div>
      </Container>

      <div className="border-t border-white/10 py-8">
        <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-on-primary/55">
          Trusted by leading brands we have worked with
        </p>
        <div className="hero-ticker-mask mt-6">
          <div className="marquee-track flex min-w-max items-center gap-10 px-5 sm:gap-16 lg:px-12">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="relative h-10 w-[150px] shrink-0 opacity-75 brightness-0 invert sm:h-12 sm:w-[190px]"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  fill
                  sizes="190px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
