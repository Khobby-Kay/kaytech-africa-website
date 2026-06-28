"use client";

import { cn } from "@/lib/utils";

type HeroHeadlineDotsProps = {
  count: number;
  active: number;
  onSelect: (index: number) => void;
  className?: string;
};

export function HeroHeadlineDots({
  count,
  active,
  onSelect,
  className,
}: HeroHeadlineDotsProps) {
  if (count <= 1) return null;

  return (
    <div className={cn("mt-5 flex items-center gap-2", className)}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Show headline ${index + 1} of ${count}`}
          aria-current={index === active ? "true" : undefined}
          onClick={() => onSelect(index)}
          className={cn(
            "h-1.5 rounded-full transition-all duration-300",
            index === active
              ? "w-8 bg-on-dark"
              : "w-2 bg-on-dark/40 hover:bg-on-dark/70",
          )}
        />
      ))}
    </div>
  );
}
