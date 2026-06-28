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
    "bg-semantic-up text-surface-dark hover:brightness-110",
  secondary:
    "border border-white/90 text-white hover:opacity-85",
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
    "inline-flex h-10 items-center justify-center gap-1.5 rounded-lg px-4 text-sm font-semibold tracking-tight transition",
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
