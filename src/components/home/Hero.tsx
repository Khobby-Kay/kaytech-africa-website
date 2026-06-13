import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowDownToLine,
  CircleCheck,
  MessageCircle,
  GraduationCap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { HeroBackground } from "@/components/home/HeroBackground";
import { HeroTicker } from "@/components/home/HeroTicker";

function ActionButton({
  href,
  icon,
  label,
  title,
  external,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  title: string;
  external?: boolean;
}) {
  const className =
    "inline-flex h-11 min-w-[8.75rem] items-center gap-2.5 rounded-lg border border-white/90 px-3.5 text-white transition hover:opacity-85";

  const inner = (
    <>
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col leading-none text-left">
        <span className="text-[9px] font-medium tracking-wide opacity-90">
          {label}
        </span>
        <span className="mt-0.5 text-[15px] font-semibold tracking-tight">
          {title}
        </span>
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
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
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] w-full overflow-hidden lg:min-h-screen"
    >
      <HeroBackground />

      <Container className="relative pb-28 pt-16 lg:pb-32 lg:pt-40">
        <div className="max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-pill bg-white/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-on-dark">
            <span className="size-2 rounded-full bg-semantic-up" />
            Now building across Ghana
          </span>

          <h1 className="font-display text-[36px] leading-[1.02] tracking-tight text-on-dark md:text-[44px] lg:text-[52px] xl:text-[64px] 2xl:text-[78px]">
            African digital infrastructure.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark/85 lg:text-xl">
            AI automation, web development, Web3, and growth systems — plus an
            academy training Africa&apos;s next wave of talent. Ideas in,
            products out, in weeks not quarters.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ActionButton
              href={siteConfig.contact.whatsapp}
              external
              label="Chat on"
              title="WhatsApp"
              icon={<MessageCircle className="h-6 w-6" />}
            />
            <ActionButton
              href="/academy"
              label="Explore the"
              title="Academy"
              icon={<GraduationCap className="h-6 w-6" />}
            />
            <Link
              href="/features"
              className="inline-flex h-14 items-center justify-center rounded-pill border border-white/60 px-8 text-base font-semibold tracking-[-0.005em] text-on-dark transition hover:border-white/80 hover:bg-white/10"
            >
              See how it works
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-on-dark/70">
            <CircleCheck className="h-4 w-4 text-semantic-up" />
            Free consultation · MoMo-ready builds · Accra-based since{" "}
            {siteConfig.founded}.
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:max-w-sm lg:hidden">
          <FloatingCard
            icon={<ArrowDownToLine className="h-4 w-4" />}
            title="Project shipped"
            subtitle="Next.js · Live"
            value="+ 40%"
          />
          <FloatingCard
            icon={<CircleCheck className="h-4 w-4" />}
            title="Academy enrolled"
            subtitle="Web Dev · Cohort 12"
            value="Ready"
            valueClass="text-ink"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="pointer-events-auto absolute right-12 top-[44%] w-[340px] animate-float">
            <FloatingCard
              icon={<ArrowDownToLine className="h-4 w-4" />}
              title="Project shipped"
              subtitle="Next.js · Live"
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
