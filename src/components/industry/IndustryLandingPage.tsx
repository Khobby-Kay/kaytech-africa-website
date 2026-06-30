import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MarketingPageHero } from "@/components/ui/MarketingPageHero";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { HeroCta, HeroCtaRow } from "@/components/ui/HeroCta";
import type { IndustryPage } from "@/lib/industry-pages";
import { getServicePath } from "@/lib/service-pages";

const industryServices = [
  { title: "Web Development & Design", slug: "best-web-development-design-accra-ghana" },
  { title: "E-Commerce Development", slug: "best-ecommerce-development-accra-ghana" },
  { title: "SEO Services", slug: "best-seo-services-accra-ghana" },
] as const;

export function IndustryLandingPage({ page }: { page: IndustryPage }) {
  return (
    <>
      <RevealOnScroll variant="fade-down" duration={800}>
        <MarketingPageHero
          title={page.heroTitle}
          description={page.heroDescription}
          image={page.image}
          imageCaption={page.imageCaption}
          location={`${page.industryName} · Ghana`}
        />
      </RevealOnScroll>

      <LeadCaptureStrip location={`industry_${page.slug}`} compact />

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <RevealOnScroll variant="fade-right">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {page.industryName} website design in Ghana
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                  {page.intro}
                </p>
                <p className="mt-4 rounded-xl border border-accent/20 bg-surface-accent px-4 py-3 text-sm font-medium text-ink">
                  Typical investment: {page.pricingRange}
                </p>
                <HeroCtaRow className="mt-6">
                  <HeroCta href="/portfolio">See our work</HeroCta>
                  <HeroCta href="/website-cost-ghana" variant="secondary">
                    Cost guide
                  </HeroCta>
                </HeroCtaRow>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-left" delay={100}>
              <div className="rounded-3xl border border-hairline bg-surface-soft p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  What we build
                </p>
                <ul className="mt-5 space-y-3">
                  {page.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
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
              Why {page.industryName.toLowerCase()} choose KayTech
            </h2>
          </RevealOnScroll>
          <StaggerReveal className="mt-10 grid gap-4 sm:grid-cols-2" staggerMs={90}>
            {page.whyChoose.map((item, i) => (
              <article
                key={item.title}
                className="rounded-3xl border border-hairline bg-canvas p-6 shadow-card"
              >
                <span className="font-display text-2xl font-bold text-accent/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Related services
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {industryServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={getServicePath(s.slug)}
                  className="group flex items-center justify-between rounded-2xl border border-hairline bg-surface-soft px-5 py-4 transition hover:border-accent/30"
                >
                  <span className="text-sm font-semibold text-ink">{s.title}</span>
                  <ArrowRight className="h-4 w-4 text-muted group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
          {page.relatedBlogSlug ? (
            <Link
              href={`/blog/${page.relatedBlogSlug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Read our {page.industryName.toLowerCase()} guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            FAQs — {page.industryName.toLowerCase()} websites in Ghana
          </h2>
          <div className="mt-8 space-y-4">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-hairline bg-canvas p-5 sm:p-6"
              >
                <h3 className="text-base font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-primary via-primary-deep to-[#0c2d4a] px-5 py-16 text-on-primary lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Ready to build your {page.industryName.toLowerCase()} website?
            </h2>
            <p className="mt-4 text-sm text-on-primary/85 sm:text-base">
              Free consultation — scoped quote within one business day. 1914+ businesses
              served across Ghana and West Africa.
            </p>
            <HeroCtaRow className="mt-8 [&_a]:border-white/25 [&_a.bg-semantic-up]:text-surface-dark">
              <HeroCta href="/contact">Start your project</HeroCta>
              <HeroCta href="/digital-growth-bundle" variant="secondary">
                Web + SEO + AI
              </HeroCta>
            </HeroCtaRow>
          </div>
        </Container>
      </section>
    </>
  );
}
