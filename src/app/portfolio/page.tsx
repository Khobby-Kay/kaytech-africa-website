import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { portfolioProjects } from "@/lib/portfolio-projects";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio — Best Web Design Projects in Accra, Ghana | KayTech Africa",
  description:
    "See KayTech Africa's web design and development portfolio — high-performing websites, e-commerce stores, and digital experiences built for brands across Accra and Ghana.",
  path: "/portfolio",
  keywords: [
    ...ghanaSearchKeywords,
    "web design portfolio Ghana",
    "web design projects Accra",
    "best web design Accra Ghana",
  ],
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Transforming visions into digital success"
        description="We take pride in our clients' success stories. From startups to established enterprises across Ghana, brands trust KayTech Africa to turn digital visions into high-performing websites that deliver real results."
        cta={{ label: "Start your project", href: "/contact" }}
        image={pageImages.features}
      />

      <section className="border-b border-hairline bg-canvas px-5 py-14 lg:px-20 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-pill bg-surface-soft px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-primary ring-1 ring-hairline">
              Our portfolio
            </span>
            <h2 className="mt-5 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Results-driven web design &amp; development projects
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              At KayTech Africa, we don&apos;t just design websites — we create
              high-performance, conversion-driven digital experiences that help
              businesses grow. As a leading web design company in Ghana, we
              specialise in user-centric websites, e-commerce platforms, and
              digital marketing strategies that produce tangible results, all
              tailored to the Ghanaian market and beyond.
            </p>
          </div>
        </Container>
      </section>

      <section
        aria-label="KayTech Africa featured web design and development work"
        className="border-b border-hairline bg-surface-soft px-5 py-14 lg:px-20 lg:py-20"
      >
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Our featured work
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Every website we build is engineered with a purpose: to drive
              measurable success for our clients. Explore a selection of the
              brands and platforms we showcase.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-3xl border border-hairline bg-canvas transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-float"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(
                      project.url,
                    )}?w=1280&h=960`}
                    alt={`${project.name} website preview — ${project.image.alt}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {project.sector} · {project.location}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                    {project.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Visit live site
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
            >
              Start your project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-surface-dark px-5 py-16 text-on-dark lg:px-20">
        <Container>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-semantic-up">
                Let us bring your website to life
              </p>
              <h2 className="mt-3 font-display text-2xl tracking-tight text-on-dark sm:text-3xl">
                Ready to be our next success story?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-on-dark/70">
                Call {siteConfig.contact.phoneDisplay} or start your project
                online. We respond within one business day.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-pill bg-semantic-up px-7 text-sm font-semibold text-surface-dark transition hover:brightness-110"
            >
              Get started now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
