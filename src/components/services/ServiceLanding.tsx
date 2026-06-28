import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { RevealOnScroll, StaggerReveal } from "@/components/ui/RevealOnScroll";
import type { ServicePage } from "@/lib/service-pages";
import { getServicePath } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";

export function ServiceLanding({ page }: { page: ServicePage }) {
  return (
    <>
      <RevealOnScroll variant="fade-down" duration={800}>
        <PageHero
          title={page.heroTitle}
          description={page.heroDescription}
          cta={{ label: "Get a quote", href: "/contact" }}
          image={page.image}
        />
      </RevealOnScroll>

      <LeadCaptureStrip location={`service_${page.slug}`} compact />

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <div className="max-w-3xl">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                {page.intro}
              </p>
            </div>
          </RevealOnScroll>

          <StaggerReveal className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" staggerMs={80}>
            {page.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex list-none items-start gap-3 rounded-2xl border border-hairline bg-surface-soft p-4 text-sm text-ink transition hover:-translate-y-0.5 hover:shadow-card motion-reduce:transform-none"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {benefit}
              </li>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {page.sections.map((section, index) => (
        <section
          key={section.heading}
          className="border-b border-hairline bg-surface-soft px-5 py-16 even:bg-canvas lg:px-20 lg:py-24"
        >
          <Container>
            <RevealOnScroll variant="fade-up" delay={index * 40}>
              <div className="max-w-3xl">
              <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-4 text-sm leading-relaxed text-muted sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-6 space-y-2">
                  {section.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              </div>
            </RevealOnScroll>
          </Container>
        </section>
      ))}

      <section className="bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="zoom-in">
            <div className="rounded-3xl border border-hairline bg-primary p-8 text-on-primary sm:p-12">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Ready to start your project?
            </h2>
            <p className="mt-3 max-w-xl text-sm text-on-primary/85 sm:text-base">
              Talk to KayTech Africa — Accra-based, serving Kumasi, Tema, and all
              of Ghana. Call {siteConfig.contact.phoneDisplay} or WhatsApp{" "}
              {siteConfig.contact.whatsappDisplay} for a clear, tailored quote.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                data-track="get_started_click"
                data-track-location={`service_${page.slug}`}
                className="inline-flex h-11 items-center justify-center rounded-pill bg-on-primary px-6 text-sm font-semibold text-primary transition hover:bg-white"
              >
                Request a quote
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                data-track="call_click"
                data-track-location={`service_${page.slug}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-pill border border-white/30 px-6 text-sm font-semibold text-on-primary transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call now
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-track-location={`service_${page.slug}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-pill border border-white/30 px-6 text-sm font-semibold text-on-primary transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <Link
                href="/pricing"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-pill border border-white/30 px-6 text-sm font-semibold text-on-primary transition hover:bg-white/10"
              >
                View pricing approach
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}

/** Related services block — import at page level to avoid unused vars in component */
export function ServiceRelatedLinks({
  currentSlug,
  pages,
}: {
  currentSlug: string;
  pages: ServicePage[];
}) {
  const related = pages.filter((p) => p.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="border-t border-hairline bg-surface-soft px-5 py-12 lg:px-20">
      <Container>
        <h2 className="font-display text-xl font-semibold text-ink">
          More services in Ghana
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {related.map((p) => (
            <li key={p.slug}>
              <Link
                href={getServicePath(p.slug)}
                className="text-sm font-semibold text-primary hover:underline"
              >
                {p.heroTitle}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
