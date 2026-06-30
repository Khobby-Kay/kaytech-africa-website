import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProofOfImpact } from "@/components/home/ProofOfImpact";
import { getAllServicePages, getServicePath } from "@/lib/service-pages";
import { siteConfig, stats } from "@/lib/site";

const coreValues = [
  "Customer-centric approach: your business goals drive our strategy.",
  "Innovation and expertise: we keep up with modern web and SEO standards.",
  "Integrity and transparency: clear scope, clear communication, clear delivery.",
] as const;

const whyChoose = [
  {
    title: "Local market expertise",
    body: "We understand Ghanaian buyer behavior, mobile usage, and payment expectations.",
  },
  {
    title: "Proven track record",
    body: "Trusted by 1914+ businesses with measurable growth outcomes.",
  },
  {
    title: "All-inclusive services",
    body: "Web design, e-commerce, SEO, digital marketing, and AI automation under one roof.",
  },
  {
    title: "Data-driven execution",
    body: "We optimize based on analytics and conversion signals, not guesswork.",
  },
] as const;

export function AboutExpansion() {
  const featuredServices = getAllServicePages().slice(0, 5);

  return (
    <>
      <section className="border-b border-hairline bg-surface-soft px-5 py-5 lg:px-20">
        <Container className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-ink">
            Consultation: {siteConfig.contact.phoneDisplay}
          </p>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex h-10 items-center gap-2 rounded-pill bg-primary px-5 text-sm font-semibold text-on-primary"
          >
            <Phone className="h-4 w-4" />
            Call now
          </a>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-14 lg:px-20 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-primary">
              Welcome to KayTech Africa
            </span>
            <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Leading web development and digital marketing agency in Accra, Ghana
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              We are a results-driven web development and digital marketing agency
              helping Ghanaian businesses grow with conversion-focused websites,
              SEO, e-commerce, and automation systems that deliver measurable
              outcomes.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Get your project started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-3xl border border-hairline bg-surface-soft p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-ink">
              Our core values
            </h3>
            <ul className="mt-4 space-y-3">
              {coreValues.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-14 lg:px-20 lg:py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-hairline bg-canvas p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-ink">Our mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              To empower businesses in Ghana with cutting-edge web development
              and digital marketing strategies that increase visibility, grow
              sales, and build long-term digital success.
            </p>
          </article>
          <article className="rounded-3xl border border-hairline bg-canvas p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-ink">Our vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              To be the leading web development and digital marketing studio in
              Ghana, known for exceptional execution and innovative digital
              solutions that turn businesses into category leaders.
            </p>
          </article>
        </Container>
      </section>

      <ProofOfImpact />

      <section className="border-b border-hairline bg-canvas px-5 py-14 lg:px-20 lg:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Why choose KayTech for web development in Accra?
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
            We build custom, mobile-first websites and growth systems designed to
            improve visibility, user experience, and conversions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-hairline bg-surface-soft p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-hairline bg-surface-soft p-4"
              >
                <p className="font-display text-2xl font-semibold text-ink">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-14 lg:px-20 lg:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Services that drive results
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((page, i) => (
              <Link
                key={page.slug}
                href={getServicePath(page.slug)}
                className="group rounded-2xl border border-hairline bg-canvas p-5 transition hover:border-primary/30"
              >
                <p className="text-xs font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}.
                </p>
                <h3 className="mt-2 font-display text-base font-semibold text-ink">
                  {page.eyebrow}
                </h3>
                <p className="mt-2 text-sm text-muted">{page.heroDescription}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
