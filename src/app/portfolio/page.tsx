import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { PageHero } from "@/components/ui/PageHero";
import { portfolioProjects } from "@/lib/portfolio-projects";
import { clientLogos } from "@/lib/client-logos";
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
        aria-label="KayTech Africa featured web design clients in Ghana"
        className="border-b border-hairline bg-surface-soft px-5 py-14 lg:px-20 lg:py-20"
      >
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            Brands we&apos;ve worked with
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            A selection of organisations across Ghana and beyond that have
            trusted KayTech Africa with their digital presence.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-28 items-center justify-center rounded-2xl border border-hairline bg-canvas p-6"
              >
                <div className="relative h-12 w-full">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} — KayTech Africa web design client in Ghana`}
                    fill
                    sizes="200px"
                    className="object-contain opacity-85 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-14 lg:px-20 lg:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                Our featured work
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Every website we build is engineered with a purpose: to drive
                measurable success for our clients across web design, SEO,
                e-commerce, and AI automation.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-pill border border-hairline px-5 text-sm font-semibold text-ink transition hover:border-primary/40"
            >
              Start your project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-3xl border border-hairline bg-surface-soft transition duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <Media
                  src={project.image.src}
                  alt={`${project.name} — ${project.image.alt}`}
                  ratio="16/10"
                  rounded="none"
                  framed={false}
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {project.sector} · {project.location}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Visit live site
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
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
