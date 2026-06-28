"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import {
  HeroImageBackground,
  type HeroImageSlide,
} from "@/components/ui/HeroImageBackground";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string; external?: boolean };
  /** Single hero background image */
  image?: HeroImageSlide;
  /** Optional carousel — overrides `image` when provided */
  images?: readonly HeroImageSlide[];
  /** Optional overlay caption (desktop, bottom-right) */
  imageCaption?: string;
  imageCaptionMeta?: string;
  /** Custom action row — replaces default CTA when set */
  actions?: ReactNode;
  /** Trust line under actions */
  footnote?: ReactNode;
  className?: string;
  compact?: boolean;
};

function resolveSlides(
  image?: HeroImageSlide,
  images?: readonly HeroImageSlide[],
): readonly HeroImageSlide[] {
  if (images?.length) return images;
  if (image) return [image];
  return [];
}

export function PageHero({
  eyebrow,
  title,
  description,
  cta,
  image,
  images,
  imageCaption,
  imageCaptionMeta,
  actions,
  footnote,
  className,
  compact = false,
}: PageHeroProps) {
  const slides = resolveSlides(image, images);

  const ctaClass =
    "inline-flex h-11 min-h-[44px] w-full items-center justify-center rounded-lg bg-semantic-up px-6 text-base font-semibold tracking-[-0.005em] text-surface-dark transition hover:brightness-110 sm:h-12 sm:w-auto sm:px-8";

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden border-b border-hairline",
        compact
          ? "min-h-[52vh] sm:min-h-[58vh]"
          : "min-h-[62vh] sm:min-h-[72vh] lg:min-h-[85vh]",
        className,
      )}
    >
      {slides.length > 0 ? (
        <HeroImageBackground slides={slides} />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary-deep to-[#0c2d4a]"
        />
      )}

      <Container
        className={cn(
          "relative",
          compact
            ? "pb-16 pt-[6.25rem] sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-36"
            : "pb-20 pt-[6.25rem] sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-40",
        )}
      >
        <div className="max-w-3xl max-lg:mt-4">
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 rounded-pill bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-on-dark/90">
              {eyebrow}
            </span>
          ) : null}
          <h1
            className={cn(
              "font-display leading-[1.02] tracking-tight text-on-dark",
              eyebrow ? "mt-5" : "mt-0",
              compact
                ? "text-[1.75rem] sm:text-[32px] lg:text-[40px]"
                : "text-[2rem] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[58px]",
            )}
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-on-dark/85 sm:mt-6 sm:text-lg lg:text-xl">
              {description}
            </p>
          ) : null}

          {actions ? (
            <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              {actions}
            </div>
          ) : cta ? (
            <div className="mt-6 sm:mt-10">
              {cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaClass}
                >
                  {cta.label}
                </a>
              ) : cta.href.startsWith("#") ? (
                <a href={cta.href} className={ctaClass}>
                  {cta.label}
                </a>
              ) : (
                <Link href={cta.href} className={ctaClass}>
                  {cta.label}
                </Link>
              )}
            </div>
          ) : null}

          {footnote ? (
            <div className="mt-6 hidden text-sm text-on-dark/70 sm:block">
              {footnote}
            </div>
          ) : null}
        </div>

        {imageCaption ? (
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="absolute bottom-[18%] right-12 max-w-sm animate-float">
              <div className="rounded-2xl border border-white/15 bg-surface-dark/35 px-5 py-4 backdrop-blur-sm">
                {imageCaptionMeta ? (
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-on-dark/75">
                    {imageCaptionMeta}
                  </p>
                ) : null}
                <p className="mt-2 font-display text-xl font-semibold leading-snug text-on-dark">
                  {imageCaption}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
