import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { HeroBackground } from "@/components/home/HeroBackground";
import { HeroTicker } from "@/components/home/HeroTicker";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[62vh] w-full overflow-hidden sm:min-h-[72vh] lg:min-h-screen"
    >
      <HeroBackground />

      <Container className="relative pb-24 pt-20 lg:pb-32 lg:pt-40">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-xl lg:max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-pill bg-white/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-on-dark sm:mb-6 sm:px-4 sm:py-1.5 sm:text-xs">
              <span className="size-1.5 rounded-full bg-semantic-up sm:size-2" />
              Accra · Since {siteConfig.founded}
            </span>

            <h1 className="font-display text-[2rem] leading-[1.05] tracking-tight text-on-dark sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="lg:hidden">Built for Africa.</span>
              <span className="hidden lg:inline">
                African digital infrastructure.
              </span>
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-on-dark/80 sm:mt-5 sm:text-lg lg:mt-6 lg:max-w-xl lg:text-xl">
              <span className="lg:hidden">
                AI, web, and growth systems — shipped fast for mobile-first
                markets.
              </span>
              <span className="hidden lg:inline">
                AI automation, web development, Web3, and growth systems — plus
                an academy training Africa&apos;s next wave of talent. Ideas in,
                products out, in weeks not quarters.
              </span>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 lg:mt-10">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-pill bg-semantic-up px-5 text-sm font-semibold text-surface-dark transition hover:brightness-110 sm:h-12 sm:px-7 sm:text-base"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                Start on WhatsApp
              </a>
              <Link
                href="#why"
                className="hidden h-11 items-center gap-1.5 rounded-pill border border-white/50 px-5 text-sm font-semibold text-on-dark transition hover:bg-white/10 sm:inline-flex lg:h-12 lg:px-7"
              >
                Why KayTech
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-5 hidden text-sm text-on-dark/65 lg:block">
              MoMo-ready · 3G-optimised · Free discovery call
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative ml-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/20 shadow-float">
              <Image
                src="/images/hero/hero-2.jpg"
                alt="KayTech client success — digital growth in Ghana"
                fill
                priority
                sizes="(max-width: 1024px) 50vw, 420px"
                className="object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-on-dark/70">
                  Live delivery
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-on-dark">
                  50+ projects shipped
                </p>
                <p className="mt-1 text-sm text-on-dark/75">
                  Next.js · MoMo · WhatsApp commerce
                </p>
              </div>
            </div>
            <div className="absolute -left-6 top-8 rounded-2xl border border-hairline bg-canvas px-4 py-3 shadow-card">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                Avg. uplift
              </p>
              <p className="font-display text-xl font-semibold text-semantic-up-deep">
                +40%
              </p>
            </div>
          </div>
        </div>
      </Container>

      <HeroTicker />
    </section>
  );
}
