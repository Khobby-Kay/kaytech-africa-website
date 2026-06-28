"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type HeroImageSlide = {
  src: string;
  alt: string;
};

type HeroImageBackgroundProps = {
  slides: readonly HeroImageSlide[];
  /** Controlled active slide — when set, parent owns carousel timing */
  active?: number;
  intervalMs?: number;
  overlayClassName?: string;
  imageClassName?: string;
};

export function HeroImageBackground({
  slides,
  active: controlledActive,
  intervalMs = 6000,
  overlayClassName = "bg-surface-dark/55",
  imageClassName = "object-cover object-[center_20%]",
}: HeroImageBackgroundProps) {
  const [internalActive, setInternalActive] = useState(0);
  const isControlled = controlledActive !== undefined;
  const active = isControlled ? controlledActive : internalActive;
  const hasMultiple = slides.length > 1;

  useEffect(() => {
    if (isControlled || !hasMultiple) return;
    const timer = window.setInterval(() => {
      setInternalActive((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [hasMultiple, intervalMs, isControlled, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className="absolute inset-0">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === active ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={cn(
              imageClassName,
              index === active && "animate-hero-ken-burns motion-reduce:animate-none",
            )}
          />
        </div>
      ))}
      <div aria-hidden className={cn("absolute inset-0", overlayClassName)} />
    </div>
  );
}
