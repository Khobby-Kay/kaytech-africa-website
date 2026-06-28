"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  CircleCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HeroHeadlineDots } from "@/components/ui/HeroHeadlineDots";
import { HeroCta, HeroCtaRow } from "@/components/ui/HeroCta";
import { siteConfig } from "@/lib/site";
import { homeHeroHeadlines } from "@/lib/home-hero-content";
import { cn } from "@/lib/utils";
import { useHeroCarousel } from "@/hooks/useHeroCarousel";
import { HeroBackground } from "@/components/home/HeroBackground";
import { HeroTicker } from "@/components/home/HeroTicker";

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

          <HeroCtaRow>
            <HeroCta
              href="/portfolio"
              track="portfolio_click"
              trackLocation="hero"
            >
              See our work
              <ArrowRight className="h-4 w-4" />
            </HeroCta>
            <HeroCta href="/pricing" variant="secondary">
              Website pricing
            </HeroCta>
          </HeroCtaRow>

          <div className="mt-5 hidden items-center gap-4 text-sm text-on-dark/70 sm:flex">
            <Link
              href="/services"
              className="font-semibold text-on-dark underline-offset-4 transition hover:underline"
            >
              View all services
            </Link>
            <span className="text-on-dark/40" aria-hidden>
              ·
            </span>
            <span className="inline-flex items-center gap-2">
              <CircleCheck className="h-4 w-4 text-semantic-up" />
              1914+ businesses served · Accra since {siteConfig.founded}
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
