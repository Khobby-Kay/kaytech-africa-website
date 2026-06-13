"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/hero-slides";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 5000;

export function HeroBackground() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((c) => (c + 1) % heroSlides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === active ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="scale-[1.15] object-cover object-[center_20%]"
          />
        </div>
      ))}
      <div aria-hidden className="absolute inset-0 bg-surface-dark/55" />

      <div className="absolute bottom-24 left-5 z-10 flex gap-2 lg:left-12 lg:bottom-28">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show slide ${index + 1} of ${heroSlides.length}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => setActive(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === active ? "w-8 bg-on-dark" : "w-2 bg-on-dark/40 hover:bg-on-dark/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}
