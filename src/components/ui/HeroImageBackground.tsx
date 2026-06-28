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
  intervalMs?: number;
  overlayClassName?: string;
  imageClassName?: string;
};

export function HeroImageBackground({
  slides,
  intervalMs = 5000,
  overlayClassName = "bg-surface-dark/55",
  imageClassName = "scale-[1.15] object-cover object-[center_20%]",
}: HeroImageBackgroundProps) {
  const [active, setActive] = useState(0);
  const hasMultiple = slides.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [hasMultiple, intervalMs, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className="absolute inset-0">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
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
            className={imageClassName}
          />
        </div>
      ))}
      <div aria-hidden className={cn("absolute inset-0", overlayClassName)} />
    </div>
  );
}
