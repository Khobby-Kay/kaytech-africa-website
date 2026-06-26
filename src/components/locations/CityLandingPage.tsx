import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { MarketingPageHero } from "@/components/ui/MarketingPageHero";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import type { CityPage } from "@/lib/city-pages";
import { getServicePath } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";

const cityServices = [
  {
    title: "Web Development & Design",
    slug: "best-web-development-design-accra-ghana",
  },
  {
    title: "E-Commerce Development",
    slug: "best-ecommerce-development-accra-ghana",
  },
  {
    title: "SEO Services",
    slug: "best-seo-services-accra-ghana",
  },
  {
    title: "Digital Marketing & PPC Ads",
    slug: "best-digital-marketing-accra-ghana",
  },
  {
    title: "Software As A Services (SAAS)",
    slug: "best-software-as-a-services-saas-accra-ghana",
  },
] as const;

export function CityLandingPage({ page }: { page: CityPage }) {
  return (
    <>
      <RevealOnScroll variant="fade-down" duration={800}>
        <MarketingPageHero
          eyebrow={`Web design · ${page.cityName}, Ghana`}
          title={page.heroTitle}
          description={page.heroDescription}
          image={page.image}
          imageCaption={page.imageCaption}
          location={`${page.cityName} · ${page.region}`}
        />
      </RevealOnScroll>

      <LeadCaptureStrip location={`city_${page.slug}`} compact />

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
            <RevealOnScroll variant="fade-right">
              <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                Website design in {page.cityName} that drives real business
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  data-track="get_started_click"
                  data-track-location={`city_${page.slug}`}
                  className="inline-flex h-11 items-center rounded-pill bg-gradient-to-r from-primary to-primary-light px-6 text-sm font-semibold text-on-primary shadow-card transition hover:brightness-110"
                >
                  Get a free quote
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  data-track="call_click"
                  data-track-location={`city_${page.slug}`}
                  className="inline-flex h-11 items-center gap-2 rounded-pill border border-hairline bg-surface-soft px-6 text-sm font-semibold text-ink transition hover:border-accent/40"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-left" delay={100}>
            <div className="rounded-3xl border border-hairline bg-surface-accent p-6 sm:p-8">
              <div className="flex items-center gap-2 text-accent">
                <MapPin className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-wider">
                  Areas we serve in {page.cityName}
                </p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {page.areas.map((area) => (
                  <li
                    key={area}
                    className="rounded-pill border border-accent/20 bg-canvas px-3 py-1.5 text-sm font-medium text-ink"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Why {page.cityName} businesses choose KayTech
            </h2>
          </RevealOnScroll>
          <StaggerReveal className="mt-10 grid gap-4 sm:grid-cols-2" staggerMs={90}>
            {page.whyChoose.map((item, i) => (
              <article
                key={item.title}
                className="rounded-3xl border border-hairline bg-canvas p-6 shadow-card transition hover:-translate-y-1 motion-reduce:transform-none"
              >
                <span className="font-display text-2xl font-bold text-accent/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Services for {page.cityName} businesses
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
            Full-service web studio — design, development, SEO, e-commerce, and AI
            automation for brands in {page.cityName} and across Ghana.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {cityServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={getServicePath(s.slug)}
                  className="group flex items-center justify-between rounded-2xl border border-hairline bg-surface-soft px-5 py-4 transition hover:border-accent/30 hover:bg-surface-accent"
                >
                  <span className="text-sm font-semibold text-ink group-hover:text-primary">
                    {s.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted transition group-hover:translate-x-0.5 group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            FAQs — web design in {page.cityName}
          </h2>
          <div className="mt-8 space-y-4">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-hairline bg-canvas p-5 sm:p-6"
              >
                <h3 className="text-base font-semibold text-ink">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-primary via-primary-deep to-[#0c2d4a] px-5 py-16 text-on-primary lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Ready to grow your {page.cityName} business online?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-on-primary/85 sm:text-base">
              Free consultation — no obligation. Tell us what you need and we&apos;ll
              send a clear proposal with timeline and investment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                data-track="get_started_click"
                data-track-location={`city_${page.slug}_footer`}
                className="inline-flex h-11 items-center rounded-pill bg-accent px-6 text-sm font-semibold text-white shadow-card transition hover:bg-accent-bright"
              >
                Request a quote
              </Link>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-track-location={`city_${page.slug}_footer`}
                className="inline-flex h-11 items-center gap-2 rounded-pill border border-white/25 px-6 text-sm font-semibold transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                data-track="call_click"
                data-track-location={`city_${page.slug}_footer`}
                className="inline-flex h-11 items-center gap-2 rounded-pill border border-white/25 px-6 text-sm font-semibold transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call now
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
