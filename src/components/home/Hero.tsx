"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowDownToLine,
  CircleCheck,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HeroHeadlineDots } from "@/components/ui/HeroHeadlineDots";
import { siteConfig } from "@/lib/site";
import { homeHeroHeadlines } from "@/lib/home-hero-content";
import { cn } from "@/lib/utils";
import { useHeroCarousel } from "@/hooks/useHeroCarousel";
import { HeroBackground } from "@/components/home/HeroBackground";
import { HeroTicker } from "@/components/home/HeroTicker";

function ActionButton({
  href,
  icon,
  label,
  title,
  external,
  track,
  trackLocation,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  title: string;
  external?: boolean;
  track?: string;
  trackLocation?: string;
}) {
  const className =
    "inline-flex h-9 min-h-[36px] items-center justify-center gap-1.5 rounded-lg border border-white/90 px-2.5 text-white transition hover:opacity-85 sm:h-11 sm:min-h-[44px] sm:gap-2.5 sm:px-3.5 sm:min-w-[8.75rem]";

  const trackProps =
    track && trackLocation
      ? { "data-track": track, "data-track-location": trackLocation }
      : {};

  const inner = (
    <>
      <span className="shrink-0">{icon}</span>
      <span className="hidden flex-col leading-none text-left sm:flex">
        <span className="text-[9px] font-medium tracking-wide opacity-90">
          {label}
        </span>
        <span className="mt-0.5 text-[15px] font-semibold tracking-tight">
          {title}
        </span>
      </span>
      <span className="text-[11px] font-semibold sm:hidden">{label}</span>
    </>
  );

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={className}
        {...trackProps}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...trackProps}>
      {inner}
    </Link>
  );
}

function FloatingCard({
  icon,
  title,
  subtitle,
  value,
  valueClass = "text-semantic-up-deep",
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex min-w-[260px] items-center gap-3 rounded-2xl border border-hairline bg-canvas px-4 py-3 shadow-card">
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-strong text-primary">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{title}</p>
        <p className="truncate font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          {subtitle}
        </p>
      </div>
      <span className={cn("font-mono text-sm font-semibold", valueClass)}>
        {value}
      </span>
    </div>
  );
}

export function Hero() {
  const { active, setActive } = useHeroCarousel(homeHeroHeadlines.length, 7000);
  const slide = homeHeroHeadlines[active];

  return (
    <section
      id="hero"
      className="relative min-h-[62vh] w-full overflow-hidden sm:min-h-[75vh] lg:min-h-screen"
    >
      <HeroBackground active={active} />

      <Container className="relative pb-28 pt-[5.25rem] sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-40">
        <div className="max-w-3xl max-lg:mt-6">
          <h1
            key={slide.title}
            className="animate-hero-fade-up font-display text-[2rem] leading-[1.02] tracking-tight text-on-dark motion-reduce:animate-none sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[64px] 2xl:text-[78px]"
          >
            {slide.title}
          </h1>

          <HeroHeadlineDots
            count={homeHeroHeadlines.length}
            active={active}
            onSelect={setActive}
          />

          <p
            key={slide.description}
            className="mt-4 max-w-2xl animate-hero-fade-up text-sm leading-relaxed text-on-dark/85 motion-reduce:animate-none sm:mt-6 sm:text-lg lg:text-xl [animation-delay:80ms]"
          >
            {slide.description}
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <div className="hidden gap-2 sm:flex sm:flex-wrap sm:items-center">
              <ActionButton
                href={`tel:${siteConfig.contact.phone}`}
                label="Quick call"
                title={siteConfig.contact.phoneDisplay}
                icon={<Phone className="h-5 w-5 sm:h-6 sm:w-6" />}
                track="call_click"
                trackLocation="hero"
              />
              <ActionButton
                href={siteConfig.contact.whatsapp}
                external
                label="Chat on"
                title="WhatsApp"
                icon={<MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
                track="whatsapp_click"
                trackLocation="hero"
              />
            </div>
            <Link
              href="/contact"
              data-track="get_started_click"
              data-track-location="hero"
              className="inline-flex h-11 min-h-[44px] w-full items-center justify-center rounded-lg bg-semantic-up px-6 text-sm font-semibold tracking-[-0.005em] text-surface-dark transition hover:brightness-110 sm:h-14 sm:w-auto sm:px-8 sm:text-base"
            >
              Get a free quote
            </Link>
          </div>

          <div className="mt-6 hidden items-center gap-4 text-sm text-on-dark/70 sm:flex">
            <Link
              href="/services"
              className="font-semibold text-on-dark underline-offset-4 transition hover:underline"
            >
              View all our services
            </Link>
            <span className="text-on-dark/40" aria-hidden>
              ·
            </span>
            <span className="inline-flex items-center gap-2">
              <CircleCheck className="h-4 w-4 text-semantic-up" />
              Free consultation · Accra-based since {siteConfig.founded}
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="pointer-events-auto absolute right-12 top-[44%] w-[340px] animate-float">
            <FloatingCard
              icon={<ArrowDownToLine className="h-4 w-4" />}
              title="Project shipped"
              subtitle="Production · Live"
              value="+ 40%"
            />
          </div>
          <div className="pointer-events-auto absolute right-[92px] top-[58%] w-[360px] animate-float [animation-delay:1s]">
            <FloatingCard
              icon={<CircleCheck className="h-4 w-4" />}
              title="Academy enrolled"
              subtitle="Web Dev · Cohort 12"
              value="Ready"
              valueClass="text-ink"
            />
          </div>
        </div>
      </Container>

      <HeroTicker />
    </section>
  );
}
