import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/lib/portfolio";

export function Portfolio() {
  return (
    <section
      aria-label="KayTech Africa web design and development work in Ghana"
      className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24"
    >
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-pill bg-surface-soft px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-primary ring-1 ring-hairline">
              Our work
            </span>
            <h2 className="mt-5 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Web design &amp; development projects across Ghana
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              A snapshot of the websites, online stores, and automations KayTech
              Africa builds for businesses in Accra, Kumasi, Tema, and beyond.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-pill border border-hairline px-5 text-sm font-semibold text-ink transition hover:border-primary/40"
          >
            Full case studies
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/portfolio#${study.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-hairline bg-surface-soft transition hover:border-primary/30 hover:shadow-card"
            >
              <div className="flex h-28 items-center justify-center border-b border-hairline bg-canvas px-8">
                <div className="relative h-12 w-full max-w-[160px]">
                  <Image
                    src={study.logo.src}
                    alt={study.logo.alt}
                    fill
                    sizes="160px"
                    className="object-contain opacity-90 transition group-hover:opacity-100"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                  {study.sector} · {study.location}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {study.client}
                </h3>
                <p className="mt-2 text-sm font-semibold text-primary">
                  {study.headline}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {study.summary}
                </p>
                <p className="mt-4 rounded-2xl bg-canvas px-4 py-3 text-sm font-medium text-ink">
                  {study.highlightMetric}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-pill border border-hairline bg-canvas px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
