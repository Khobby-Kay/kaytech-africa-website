"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

type TestimonialCarouselProps = {
  items: readonly TestimonialItem[];
  className?: string;
  intervalMs?: number;
};

/** Auto-rotating testimonial block — Barns-style social proof with KayTech copy. */
export function TestimonialCarousel({
  items,
  className,
  intervalMs = 6000,
}: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [items.length, intervalMs]);

  if (items.length === 0) return null;

  return (
    <RevealOnScroll variant="fade-up">
      <div className={cn("relative", className)}>
        <div className="overflow-hidden rounded-3xl border border-hairline bg-canvas p-6 shadow-card sm:p-8 lg:p-10">
          {items.map((t, i) => (
            <blockquote
              key={t.name}
              className={cn(
                "transition-all duration-700 ease-out motion-reduce:transition-none",
                i === active
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-0 p-6 opacity-0 sm:p-8 lg:p-10",
              )}
              aria-hidden={i !== active}
            >
              <p className="text-base leading-relaxed text-ink sm:text-lg">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-muted">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        {items.length > 1 ? (
          <div className="mt-4 flex justify-center gap-2">
            {items.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === active ? "w-6 bg-primary" : "w-2 bg-hairline hover:bg-muted",
                )}
              />
            ))}
          </div>
        ) : null}
      </div>
    </RevealOnScroll>
  );
}
