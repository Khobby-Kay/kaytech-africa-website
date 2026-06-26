import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { siteConfig } from "@/lib/site";

type MarketingPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  imageCaption: string;
  location: string;
};

/** Barns-inspired hero — soft gradient, large type, image with caption overlay. */
export function MarketingPageHero({
  eyebrow,
  title,
  description,
  image,
  imageCaption,
  location,
}: MarketingPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-br from-surface-soft via-canvas to-surface-accent px-5 pt-24 pb-14 sm:pt-28 lg:px-20 lg:pt-32 lg:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-pill bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
              {eyebrow}
            </span>
            <h1 className="mt-5 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
              {title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg lg:text-xl lg:leading-relaxed">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                data-track="get_started_click"
                data-track-location="marketing_hero"
                className="inline-flex h-12 items-center justify-center rounded-pill bg-gradient-to-r from-primary to-primary-light px-7 text-sm font-semibold text-on-primary shadow-card transition hover:brightness-110"
              >
                Get a free quote
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                data-track="call_click"
                data-track-location="marketing_hero"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-pill border border-hairline bg-canvas px-6 text-sm font-semibold text-ink transition hover:border-accent/40 hover:bg-surface-accent"
              >
                <Phone className="h-4 w-4 text-accent" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-track-location="marketing_hero"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-pill border border-accent/30 bg-surface-accent px-6 text-sm font-semibold text-accent transition hover:bg-accent/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              Free consultation · {location}
            </p>
          </div>

          <Media
            src={image.src}
            alt={image.alt}
            ratio="4/3"
            priority
            sizes="(max-width: 1024px) 100vw, 540px"
            className="lg:aspect-[5/4]"
            scrim
          >
            <div className="absolute bottom-0 left-0 right-0 p-6 text-on-dark sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-on-dark/75">
                {location}
              </p>
              <p className="mt-2 font-display text-xl font-semibold leading-snug sm:text-2xl">
                {imageCaption}
              </p>
              <p className="mt-2 text-sm text-on-dark/85">
                Quick call: {siteConfig.contact.phoneDisplay}
              </p>
            </div>
          </Media>
        </div>
      </Container>
    </section>
  );
}
