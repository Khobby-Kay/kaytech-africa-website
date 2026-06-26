"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import {
  webDevComprehensive,
  webDevFaqs,
  webDevGrowth,
  webDevPageMeta,
  webDevResults,
  webDevTestimonials,
  webDevWhyChooseDetailed,
  webDevWhyChooseShort,
} from "@/lib/web-development-service-content";
import { getAllServicePages, getServicePath } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const sidebarServices = [
  {
    label: "Web Development & Design",
    slug: "best-web-development-design-accra-ghana",
    active: true,
  },
  {
    label: "E-Commerce Development",
    slug: "best-ecommerce-development-accra-ghana",
  },
  {
    label: "Search Engine Optimization",
    slug: "best-seo-services-accra-ghana",
  },
  {
    label: "Digital Marketing & PPC Ads",
    slug: "best-digital-marketing-accra-ghana",
  },
  {
    label: "Software As A Services (SAAS)",
    slug: "best-software-as-a-services-saas-accra-ghana",
  },
] as const;

export function WebDevelopmentServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const related = getAllServicePages().filter(
    (p) => p.slug !== "best-web-development-design-accra-ghana",
  );

  return (
    <>
      <RevealOnScroll variant="fade-down" duration={800}>
        <PageHero
          eyebrow="Web development & design · Accra, Ghana"
          title={webDevPageMeta.heroTitle}
          description={webDevPageMeta.heroDescription}
          cta={{ label: "Book consultation", href: "/contact" }}
          image={webDevPageMeta.image}
        />
      </RevealOnScroll>

      <LeadCaptureStrip location="service_web_dev" compact />

      <section className="border-b border-hairline bg-surface-soft px-5 py-12 lg:px-20 lg:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
            <RevealOnScroll variant="fade-right" className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-hairline bg-canvas p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Consultation
                </p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="mt-2 flex items-center gap-2 font-display text-lg font-semibold text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.phoneDisplay}
                </a>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Services
                </p>
                <ul className="mt-3 space-y-2">
                  {sidebarServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={getServicePath(s.slug)}
                        className={cn(
                          "block rounded-xl px-3 py-2 text-sm transition hover:bg-surface-soft",
                          "active" in s && s.active
                            ? "bg-primary/10 font-semibold text-primary"
                            : "text-ink",
                        )}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <div>
              <RevealOnScroll variant="fade-up">
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                  {webDevGrowth.headline}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                  {webDevGrowth.body}
                </p>
              </RevealOnScroll>

              <RevealOnScroll variant="fade-up" delay={120} className="mt-8">
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center rounded-pill bg-gradient-to-r from-primary to-primary-light px-5 text-sm font-semibold text-on-primary shadow-card transition hover:brightness-110"
                  >
                    Want a website?
                  </Link>
                  <a
                    href={siteConfig.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-pill border border-hairline bg-canvas px-5 text-sm font-semibold text-ink transition hover:border-accent/40"
                  >
                    <MapPin className="h-4 w-4 text-accent" />
                    Our office location
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center rounded-pill border border-hairline bg-canvas px-5 text-sm font-semibold text-ink transition hover:border-accent/40"
                  >
                    Book consultation
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex h-11 items-center gap-2 rounded-pill border border-hairline bg-canvas px-5 text-sm font-semibold text-ink transition hover:border-accent/40"
                  >
                    Price estimates
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Why choose us?
            </h2>
          </RevealOnScroll>
          <StaggerReveal
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            staggerMs={90}
          >
            {webDevWhyChooseShort.map((item) => (
              <article
                key={item}
                className="rounded-3xl border border-hairline bg-surface-soft p-5 transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none"
              >
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm font-semibold leading-snug text-ink">
                  {item}
                </p>
              </article>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="max-w-3xl font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Custom web development in Accra for unmatched business growth
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Your website is more than a digital presence — it is a tool for
              traffic, conversions, and sales. KayTech Africa specialises in
              custom websites that are visually strong, fast on mobile networks,
              and optimised for search engines across Accra, Kumasi, Tema, and
              nationwide.
            </p>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Why choose our web development services in Ghana?
            </h2>
          </RevealOnScroll>
          <StaggerReveal
            className="mt-10 grid gap-4 sm:grid-cols-2"
            staggerMs={100}
          >
            {webDevWhyChooseDetailed.map((item, i) => (
              <article
                key={item.title}
                className="rounded-3xl border border-hairline bg-surface-soft p-6 transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none"
              >
                <span className="font-display text-2xl font-semibold text-primary/40">
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

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              What our customers say
            </h2>
            <p className="mt-2 text-sm text-muted">
              Trusted by businesses across Ghana — with 1914+ served and 30 years
              accumulated experience.
            </p>
          </RevealOnScroll>

          <div className="mt-10 lg:hidden">
            <TestimonialCarousel items={webDevTestimonials} />
          </div>

          <StaggerReveal
            className="mt-10 hidden gap-4 lg:grid lg:grid-cols-2"
            staggerMs={120}
          >
            {webDevTestimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-3xl border border-hairline bg-canvas p-6 transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none"
              >
                <p className="text-sm leading-relaxed text-ink sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-muted">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              The results we deliver
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
              At KayTech Africa, we measure success by the outcomes your
              business sees online.
            </p>
          </RevealOnScroll>
          <StaggerReveal className="mt-10 grid gap-4 sm:grid-cols-3" staggerMs={100}>
            {webDevResults.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-hairline bg-surface-accent p-6 transition hover:-translate-y-1 hover:shadow-glow motion-reduce:transform-none"
              >
                <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
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

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Web development services in Ghana — drive traffic, conversions, and
              growth
            </h2>
          </RevealOnScroll>
          <div className="mt-10 space-y-8">
            {webDevComprehensive.map((block, i) => (
              <RevealOnScroll key={block.num} variant="fade-up" delay={i * 80}>
                <article className="rounded-3xl border border-hairline bg-canvas p-6 transition hover:shadow-card sm:p-8">
                  <span className="font-display text-3xl font-semibold text-primary/30">
                    {block.num}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {block.body}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                    Key features
                  </p>
                  <ul className="mt-3 space-y-2">
                    {block.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-ink"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              FAQs about web development
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
              Common questions about websites in Ghana. Don&apos;t see yours?
              Contact us or chat with Teedra on this site.
            </p>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" delay={100} className="mt-8">
            <div className="divide-y divide-hairline rounded-3xl border border-hairline bg-surface-soft">
              {webDevFaqs.map((faq, i) => (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-canvas/60 sm:px-6 sm:py-5"
                  >
                    <span className="text-sm font-semibold text-ink sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                        openFaq === i && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      openFaq === i
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-primary px-5 py-16 text-on-primary lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="zoom-in">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Get started with the best web development in Ghana
              </h2>
              <p className="mt-4 text-sm text-on-primary/85 sm:text-base">
                Accra-based, serving all of Ghana. Call{" "}
                {siteConfig.contact.phoneDisplay} or WhatsApp{" "}
                {siteConfig.contact.whatsappDisplay} for a free consultation and
                a clear proposal.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center rounded-pill bg-on-primary px-6 text-sm font-semibold text-primary transition hover:bg-white"
                >
                  Book consultation
                </Link>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-pill border border-white/30 px-6 text-sm font-semibold transition hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp us
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex h-11 items-center rounded-pill border border-white/30 px-6 text-sm font-semibold transition hover:bg-white/10"
                >
                  View pricing approach
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="border-t border-hairline bg-surface-soft px-5 py-12 lg:px-20">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-xl font-semibold text-ink">
              More KayTech services
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {related.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={getServicePath(p.slug)}
                    className="text-sm font-semibold text-primary transition hover:underline"
                  >
                    {p.eyebrow}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
