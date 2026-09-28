import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { MarketingPageHero } from "@/components/ui/MarketingPageHero";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import type { CityPage } from "@/lib/city-pages";
import {
  accraHubClients,
  accraHubExtraIntro,
  accraHubPricing,
  accraHubReviews,
} from "@/lib/accra-hub-content";
import { getServicePath } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";
import { getCityCostPath } from "@/lib/website-cost-city-content";

const cityCostSlugByHub: Record<string, string> = {
  "kumasi-ghana": "kumasi",
  "tema-ghana": "tema",
  "takoradi-ghana": "takoradi",
};

const cityServices = [
  {
    title: "Web Development & Design",
    href: getServicePath("best-web-development-design-ghana"),
  },
  {
    title: "E-Commerce Development",
    href: getServicePath("best-ecommerce-development-accra-ghana"),
  },
  {
    title: "SEO packages",
    href: "/seo-packages-ghana",
  },
  {
    title: "Digital Marketing & PPC Ads",
    href: getServicePath("best-digital-marketing-accra-ghana"),
  },
  {
    title: "Software As A Services (SAAS)",
    href: getServicePath("best-software-as-a-services-saas-accra-ghana"),
  },
] as const;

export function CityLandingPage({ page }: { page: CityPage }) {
  const isAccraHub = page.slug === "accra-ghana";
  const cityCostSlug = cityCostSlugByHub[page.slug];

  return (
    <>
      <RevealOnScroll variant="fade-down" duration={800}>
        <MarketingPageHero
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
              {isAccraHub ? (
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  {accraHubExtraIntro}
                </p>
              ) : null}
              {cityCostSlug ? (
                <p className="mt-4 text-sm">
                  <Link
                    href={getCityCostPath(cityCostSlug)}
                    className="font-semibold text-primary hover:underline"
                  >
                    Website cost in {page.cityName} (2026 GHS notes) →
                  </Link>
                </p>
              ) : null}
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

      {isAccraHub ? (
        <>
          <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
            <Container>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Accra clients & sectors we serve
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
                Osu, Spintex, Adenta, Labone, and East Legon projects run through this
                hub. one team, one delivery process.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {accraHubClients.map((client) => (
                  <li
                    key={`${client.name}-${client.area}`}
                    className="rounded-2xl border border-hairline bg-canvas p-5"
                  >
                    <p className="font-semibold text-ink">{client.name}</p>
                    <p className="mt-1 text-sm text-accent">{client.area}</p>
                    <p className="mt-2 text-sm text-muted">{client.note}</p>
                  </li>
                ))}
              </ul>
            </Container>
          </section>

          <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
            <Container>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Typical web design prices in Accra
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
                Every project is scoped after a free discovery call. Ranges below reflect
                what most Accra SMEs invest. see{" "}
                <Link href="/website-cost-ghana" className="font-medium text-primary">
                  website cost Ghana
                </Link>{" "}
                for a full breakdown.
              </p>
              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {accraHubPricing.map((tier) => (
                  <article
                    key={tier.name}
                    className="rounded-3xl border border-hairline bg-surface-soft p-6"
                  >
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-accent">{tier.range}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                      Timeline: {tier.timeline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {tier.includes}
                    </p>
                  </article>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
            <Container>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                What Accra clients say
              </h2>
              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {accraHubReviews.map((review) => (
                  <blockquote
                    key={review.name}
                    className="rounded-3xl border border-hairline bg-canvas p-6"
                  >
                    <p className="text-sm leading-relaxed text-ink">&ldquo;{review.quote}&rdquo;</p>
                    <footer className="mt-4 text-sm font-semibold text-ink">
                      {review.name}
                      <span className="block font-normal text-muted">{review.business}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
            <Container>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Find KayTech in Accra
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
                {siteConfig.location.line1}, {siteConfig.location.line2}. Remote-first
                delivery with in-person workshops in Greater Accra when helpful.
              </p>
              <div className="mt-6 overflow-hidden rounded-3xl border border-hairline">
                <iframe
                  title="KayTech Africa. Accra, Ghana"
                  src={`https://maps.google.com/maps?q=${siteConfig.location.coordinates.lat},${siteConfig.location.coordinates.lng}&z=12&output=embed`}
                  className="h-72 w-full sm:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={siteConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Open in Google Maps
              </a>
            </Container>
          </section>
        </>
      ) : null}

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
            Full-service web studio. design, development, SEO, e-commerce, and AI
            automation for brands in {page.cityName} and across Ghana.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {cityServices.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
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
            FAQs. web design in {page.cityName}
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
              Free consultation. no obligation. Tell us what you need and we&apos;ll
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
