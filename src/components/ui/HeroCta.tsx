import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroCtaProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary";
  track?: string;
  trackLocation?: string;
  className?: string;
};

export function HeroCtaRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-6 flex flex-wrap items-center gap-2 sm:mt-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

const variantClass = {
  primary:
    "bg-white text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)] hover:bg-white/90",
  secondary:
    "border border-white/25 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20",
} as const;

export function HeroCta({
  href,
  children,
  external,
  variant = "primary",
  track,
  trackLocation,
  className,
}: HeroCtaProps) {
  const cls = cn(
    "inline-flex h-11 items-center justify-center gap-1.5 rounded-full px-5 text-sm font-semibold tracking-tight transition",
    variantClass[variant],
    className,
  );

  const trackProps =
    track && trackLocation
      ? { "data-track": track, "data-track-location": trackLocation }
      : {};

  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={cls}
        {...trackProps}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls} {...trackProps}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...trackProps}>
      {children}
    </Link>
  );
}
