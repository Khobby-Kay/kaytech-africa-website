"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { RevealOnScroll, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import {
  academyDelivery,
  academyFeaturedCourses,
  academyGains,
  academyPageMeta,
  academyPricingPlans,
  academyPromise,
  academyStats,
  academySuccessStory,
  academyTestimonials,
  academyTransform,
  academyWelcome,
  academyWhyChoose,
} from "@/lib/academy-content";
import { getAllPosts } from "@/lib/blog";
import { contentImages } from "@/lib/image-seo";
import { pageImages } from "@/lib/page-images";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function applyWhatsApp(message: string) {
  return `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

function AcademyHeroSlider() {
  const slides = academyPageMeta.heroSlides;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-br from-primary via-primary-deep to-[#0c2d4a] px-5 pt-24 pb-16 text-on-primary sm:pt-28 lg:px-20 lg:pt-32 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-on-primary/90">
              KayTech Academy · Accra, Ghana
            </span>
            <h1
              key={slide.title}
              className="mt-5 animate-fade-up font-display text-[1.75rem] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl"
            >
              {slide.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-on-primary/85 sm:text-lg">
              Ghana&apos;s practical web design and development school — studio-backed
              training for students, career switchers, and aspiring freelancers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={slide.href}
                className="inline-flex h-11 items-center rounded-pill bg-accent px-6 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-bright"
              >
                {slide.cta}
              </a>
              <a
                href={applyWhatsApp("Hi KayTech! I want to apply to KayTech Academy.")}
                target="_blank"
                rel="noopener noreferrer"
                id="apply"
                className="inline-flex h-11 items-center gap-2 rounded-pill border border-white/30 px-6 text-sm font-semibold transition hover:bg-white/10"
              >
                Apply now
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() =>
                  setActive((prev) => (prev - 1 + slides.length) % slides.length)
                }
                className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition hover:bg-white/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => setActive((prev) => (prev + 1) % slides.length)}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition hover:bg-white/10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === active ? "w-6 bg-accent" : "w-2 bg-white/30",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <Media
            src={pageImages.academy.src}
            alt={pageImages.academy.alt}
            ratio="4/3"
            priority
            sizes="(max-width: 1024px) 100vw, 540px"
            className="lg:aspect-[5/4]"
            scrim
          >
            <div className="absolute bottom-0 left-0 right-0 p-6 text-on-dark">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-on-dark/75">
                Top awarded academy · Ghana
              </p>
              <p className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                Global career opportunities start here
              </p>
            </div>
          </Media>
        </div>
      </Container>
    </section>
  );
}

export function AcademyPageContent() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <AcademyHeroSlider />
      <LeadCaptureStrip location="academy" compact />

      <section className="border-b border-hairline bg-canvas px-5 py-12 lg:px-20 lg:py-16">
        <Container>
          <StaggerReveal
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            staggerMs={80}
          >
            {academyStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-3xl border border-hairline bg-surface-soft p-6 text-center transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none"
              >
                <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {stat.label}
                </p>
              </article>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              Our promise
            </span>
            <h2 className="mt-3 max-w-3xl font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              {academyPromise.headline}
            </h2>
            <ul className="mt-6 max-w-3xl space-y-3">
              {academyPromise.bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-ink sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-semibold text-primary">
              {academyPromise.urgency}
            </p>
            <a
              href={applyWhatsApp("Hi KayTech! I want to apply to the next academy cohort.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center rounded-pill bg-gradient-to-r from-primary to-primary-light px-6 text-sm font-semibold text-on-primary shadow-card transition hover:brightness-110"
            >
              {academyPromise.ctaLabel}
            </a>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Why choose KayTech Academy?
            </h2>
          </RevealOnScroll>
          <StaggerReveal className="mt-10 grid gap-4 md:grid-cols-3" staggerMs={100}>
            {academyWhyChoose.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-hairline bg-surface-soft p-6 transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-accent px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {academyDelivery.headline}
            </h2>
          </RevealOnScroll>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <RevealOnScroll variant="fade-right">
              <article className="rounded-3xl border border-hairline bg-canvas p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {academyDelivery.online.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {academyDelivery.online.body}
                </p>
              </article>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-left" delay={100}>
              <article className="rounded-3xl border border-hairline bg-canvas p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {academyDelivery.onsite.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {academyDelivery.onsite.body}
                </p>
              </article>
            </RevealOnScroll>
          </div>
          <RevealOnScroll variant="fade-up" delay={120} className="mt-8">
            <p className="max-w-3xl text-sm text-muted sm:text-base">
              {academyDelivery.note}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-5 text-sm font-semibold text-on-primary"
              >
                <Phone className="h-4 w-4" />
                Call today: {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={applyWhatsApp("Hi KayTech! I want to apply to KayTech Academy.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-pill border border-hairline bg-canvas px-5 text-sm font-semibold text-ink"
              >
                Apply now
              </a>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              {academySuccessStory.label}
            </p>
            <blockquote className="mt-4 max-w-4xl rounded-3xl border border-hairline bg-surface-soft p-6 sm:p-8">
              <p className="text-base leading-relaxed text-ink sm:text-lg">
                &ldquo;{academySuccessStory.quote}&rdquo;
              </p>
            </blockquote>
          </RevealOnScroll>
        </Container>
      </section>

      <section
        id="courses"
        className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24"
      >
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              {academyTransform.headline}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
              {academyTransform.body}
            </p>
            <p className="mt-3 text-sm font-semibold text-primary">
              {academyTransform.subhead}
            </p>
          </RevealOnScroll>

          <StaggerReveal
            className="mt-10 grid gap-5 md:grid-cols-2"
            staggerMs={90}
          >
            {academyFeaturedCourses.map((course, i) => (
              <article
                key={course.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-hairline bg-canvas transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none"
              >
                <Media
                  src={
                    [
                      contentImages.courseDev.src,
                      contentImages.courseMarketing.src,
                      contentImages.courseDesign.src,
                      contentImages.courseAi.src,
                    ][i]
                  }
                  alt={course.title}
                  ratio="16/9"
                  rounded="none"
                  framed={false}
                  sizes="(max-width: 768px) 100vw, 480px"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {course.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {course.excerpt}
                  </p>
                  <a
                    href={course.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <RevealOnScroll variant="fade-right">
              <Media
                src={contentImages.academyLearning.src}
                alt={contentImages.academyLearning.alt}
                ratio="4/3"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </RevealOnScroll>
            <RevealOnScroll variant="fade-left" delay={100}>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  Welcome to KayTech Academy
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {academyWelcome.headline}
                </h2>
                <p className="mt-5 text-sm italic leading-relaxed text-muted sm:text-base">
                  {academyWelcome.quote}
                </p>
                <ul className="mt-6 space-y-3">
                  {academyWelcome.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>

          <StaggerReveal className="mt-10 grid gap-4 sm:grid-cols-2" staggerMs={80}>
            {academyWelcome.stats.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-hairline bg-surface-soft p-6"
              >
                <h3 className="font-display text-base font-semibold text-ink">
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
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              What you&apos;ll gain
            </h2>
          </RevealOnScroll>
          <StaggerReveal className="mt-8 grid gap-4 sm:grid-cols-2" staggerMs={100}>
            {academyGains.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-hairline bg-canvas p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </StaggerReveal>
          <RevealOnScroll variant="fade-up" delay={120} className="mt-8 flex flex-wrap gap-3">
            <a href="#courses" className="inline-flex h-11 items-center rounded-pill border border-hairline bg-canvas px-6 text-sm font-semibold text-ink">
              Our courses
            </a>
            <a
              href={applyWhatsApp("Hi KayTech! I want to apply to KayTech Academy.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary"
            >
              Apply now
            </a>
          </RevealOnScroll>
        </Container>
      </section>

      <section
        id="pricing"
        className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24"
      >
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Affordable pricing plans
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
              Choose your preferred course — online and on-site options, hands-on
              learning, and career support included.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Most affordable courses", "Online and on-site class", "Career support included"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-pill bg-surface-accent px-3 py-1 text-xs font-semibold text-accent"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </RevealOnScroll>

          <StaggerReveal className="mt-10 grid gap-6 lg:grid-cols-3" staggerMs={100}>
            {academyPricingPlans.map((plan) => (
              <article
                key={plan.id}
                className={cn(
                  "flex flex-col rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none sm:p-8",
                  plan.featured
                    ? "border-primary bg-surface-accent shadow-glow"
                    : "border-hairline bg-surface-soft",
                )}
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {plan.title}
                </h3>
                <p className="mt-2 font-display text-xl font-bold text-primary">
                  {plan.priceLabel}
                </p>
                <p className="mt-1 text-xs text-muted">{plan.priceNote}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {plan.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={applyWhatsApp(
                    `Hi KayTech! I'm interested in the ${plan.title} academy program.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-6 inline-flex h-11 items-center justify-center rounded-pill px-5 text-sm font-semibold transition",
                    plan.featured
                      ? "bg-primary text-on-primary hover:brightness-110"
                      : "border border-hairline bg-canvas text-ink hover:border-accent/40",
                  )}
                >
                  Get started with plan
                </a>
              </article>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="fade-up">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              What our students say
            </h2>
          </RevealOnScroll>
          <div className="mt-10 lg:hidden">
            <TestimonialCarousel items={academyTestimonials} />
          </div>
          <StaggerReveal
            className="mt-10 hidden gap-4 lg:grid lg:grid-cols-3"
            staggerMs={100}
          >
            {academyTestimonials.map((t) => (
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
          </StaggerReveal>
        </Container>
      </section>

      {latestPosts.length > 0 ? (
        <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
          <Container>
            <RevealOnScroll variant="fade-up">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Featured news and insights
              </h2>
              <p className="mt-3 text-sm text-muted">
                Read the latest from KayTech Africa and the impact we are making
                across Ghana.
              </p>
            </RevealOnScroll>
            <StaggerReveal className="mt-10 grid gap-5 md:grid-cols-3" staggerMs={90}>
              {latestPosts.map((post) => (
                <article
                  key={post.slug}
                  className="overflow-hidden rounded-3xl border border-hairline bg-surface-soft transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none"
                >
                  <Media
                    src={post.image.src}
                    alt={post.image.alt}
                    ratio="16/9"
                    rounded="none"
                    framed={false}
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {post.category}
                    </p>
                    <h3 className="mt-2 font-display text-base font-semibold text-ink">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </StaggerReveal>
            <RevealOnScroll variant="fade-up" className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex h-11 items-center rounded-pill border border-hairline bg-surface-soft px-6 text-sm font-semibold text-ink transition hover:border-accent/40"
              >
                View all blog posts
              </Link>
            </RevealOnScroll>
          </Container>
        </section>
      ) : null}

      <section className="bg-primary px-5 py-16 text-on-primary lg:px-20 lg:py-24">
        <Container>
          <RevealOnScroll variant="zoom-in">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Ready to join KayTech Academy?
              </h2>
              <p className="mt-4 text-sm text-on-primary/85 sm:text-base">
                Accra-based with online cohorts nationwide. Call{" "}
                {siteConfig.contact.phoneDisplay} or WhatsApp{" "}
                {siteConfig.contact.whatsappDisplay} to secure your seat.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={applyWhatsApp("Hi KayTech! I want to enroll in KayTech Academy.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-pill bg-on-primary px-6 text-sm font-semibold text-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  Apply on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center rounded-pill border border-white/30 px-6 text-sm font-semibold transition hover:bg-white/10"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
