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
      className="relative min-h-[72vh] w-full overflow-hidden sm:min-h-[80vh] lg:min-h-screen"
    >
      <HeroBackground />

      <Container className="relative pb-24 pt-20 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-40">
        <div className="max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-pill bg-white/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-on-dark sm:mb-6 sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="size-1.5 rounded-full bg-semantic-up sm:size-2" />
            Now building across Ghana
          </span>

          <h1 className="font-display text-[2rem] leading-[1.02] tracking-tight text-on-dark sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[64px] 2xl:text-[78px]">
            African digital infrastructure.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-on-dark/85 sm:mt-6 sm:text-lg lg:text-xl">
            <span className="sm:hidden">
              AI, web &amp; growth — shipped for mobile-first Africa.
            </span>
            <span className="hidden sm:inline">
              AI automation, web development, Web3, and growth systems — plus an
              academy training Africa&apos;s next wave of talent. Ideas in,
              products out, in weeks not quarters.
            </span>
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-10">
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
              className="hidden h-14 items-center justify-center rounded-pill border border-white/60 px-8 text-base font-semibold tracking-[-0.005em] text-on-dark transition hover:border-white/80 hover:bg-white/10 sm:inline-flex"
            >
              See how it works
            </Link>
          </div>

          <div className="mt-6 hidden items-center gap-2 text-sm text-on-dark/70 sm:flex">
            <CircleCheck className="h-4 w-4 text-semantic-up" />
            Free consultation · MoMo-ready builds · Accra-based since{" "}
            {siteConfig.founded}.
          </div>
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
