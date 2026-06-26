"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, MessageCircle, Phone } from "lucide-react";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import {
  ecommerceComprehensive,
  ecommerceFaqs,
  ecommercePageMeta,
  ecommerceSpotlight,
  ecommerceTestimonials,
  ecommerceWhyChoose,
} from "@/lib/ecommerce-service-content";
import { getAllServicePages, getServicePath } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { RevealOnScroll, StaggerReveal } from "@/components/ui/RevealOnScroll";

export function EcommerceServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const related = getAllServicePages().filter(
    (p) => p.slug !== "best-ecommerce-development-accra-ghana",
  );

  return (
    <>
      <RevealOnScroll variant="fade-down" duration={800}>
        <PageHero
          eyebrow="E-commerce · Online store development · Accra"
          title={ecommercePageMeta.heroTitle}
          description={ecommercePageMeta.heroDescription}
          cta={{ label: "Book a consultation", href: "/contact" }}
          image={ecommercePageMeta.image}
        />
      </RevealOnScroll>

      <LeadCaptureStrip location="service_ecommerce" compact />

      <section className="border-b border-hairline bg-surface-soft px-5 py-12 lg:px-20 lg:py-16">
        <Container>
          <RevealOnScroll variant="fade-up">
            <blockquote className="max-w-3xl rounded-3xl border border-hairline bg-canvas p-8 shadow-card">
            <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
              &ldquo;{ecommerceSpotlight.quote}&rdquo;
            </p>
            <footer className="mt-6 text-sm text-muted">
              — {ecommerceSpotlight.name}, {ecommerceSpotlight.role}
            </footer>
            </blockquote>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={120} className="mt-8">
            <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-5 text-sm font-semibold text-on-primary"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <Link
              href="/pricing"
              className="inline-flex h-11 items-center gap-2 rounded-pill border border-hairline bg-canvas px-5 text-sm font-semibold text-ink"
            >
              Price estimates
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-pill border border-hairline bg-canvas px-5 text-sm font-semibold text-ink"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Online store development in Accra for unmatched growth
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              Whether you run a B2C shop, wholesale catalogue, or service business
              taking orders online — KayTech Africa builds e-commerce platforms
              that match how Ghana shops: mobile-first, MoMo-ready, and built to
              convert browsers into buyers.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              With online shopping growing across Accra, Kumasi, and nationwide,
              your business needs a store that loads fast, takes local payments,
              and keeps customers coming back. That is what we deliver.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Why choose KayTech for e-commerce in Ghana?
            </h2>
          </RevealOnScroll>
          <StaggerReveal className="mt-10 grid gap-4 sm:grid-cols-2" staggerMs={100}>
            {ecommerceWhyChoose.map((item, i) => (
              <article
                key={item.title}
                className="rounded-3xl border border-hairline bg-canvas p-6 transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none"
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

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Comprehensive e-commerce development in Ghana
            </h2>
          </RevealOnScroll>
          <div className="mt-10 space-y-8">
            {ecommerceComprehensive.map((block, i) => (
              <RevealOnScroll key={block.num} variant="fade-up" delay={i * 80}>
                <article className="rounded-3xl border border-hairline bg-surface-soft p-6 transition hover:shadow-card sm:p-8">
                  <span className="font-display text-3xl font-semibold text-primary/30">
                    {block.num}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {block.body}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {block.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-ink"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
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

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            What our e-commerce clients say
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {ecommerceTestimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-3xl border border-hairline bg-canvas p-6"
              >
                <p className="text-sm leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-muted">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            FAQs about e-commerce development
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
            Common questions about online stores in Ghana. Don&apos;t see yours?
            Contact us or chat with Teedra on this site.
          </p>
          <div className="mt-8 divide-y divide-hairline rounded-3xl border border-hairline bg-surface-soft">
            {ecommerceFaqs.map((faq, i) => (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-semibold text-ink sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted transition",
                      openFaq === i && "rotate-180",
                    )}
                  />
                </button>
                {openFaq === i ? (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary px-5 py-16 text-on-primary lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Get started with the best e-commerce solutions in Ghana
            </h2>
            <p className="mt-4 text-sm text-on-primary/85 sm:text-base">
              Accra-based, serving all of Ghana. Call {siteConfig.contact.phoneDisplay}{" "}
              or WhatsApp {siteConfig.contact.whatsappDisplay} for a free
              consultation and a clear proposal.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-pill bg-on-primary px-6 text-sm font-semibold text-primary"
              >
                Book consultation
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-11 items-center rounded-pill border border-white/30 px-6 text-sm font-semibold"
              >
                View pricing approach
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-surface-soft px-5 py-12 lg:px-20">
        <Container>
          <h2 className="font-display text-xl font-semibold text-ink">
            More KayTech services
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {related.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link
                  href={getServicePath(p.slug)}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {p.eyebrow}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
