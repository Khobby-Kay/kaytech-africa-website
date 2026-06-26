"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "fade";

const variantHidden: Record<RevealVariant, string> = {
  "fade-up": "translate-y-8 opacity-0",
  "fade-down": "-translate-y-8 opacity-0",
  "fade-left": "translate-x-8 opacity-0",
  "fade-right": "-translate-x-8 opacity-0",
  "zoom-in": "scale-95 opacity-0",
  fade: "opacity-0",
};

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  /** Intersection threshold 0–1 */
  threshold?: number;
  /** Re-animate when scrolling back out of view */
  repeat?: boolean;
};

export function RevealOnScroll({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.12,
  repeat = false,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.disconnect();
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, repeat]);

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reduce:translate-none motion-reduce:scale-100 motion-reduce:opacity-100",
        "transition-[opacity,transform] ease-out will-change-[opacity,transform]",
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : variantHidden[variant],
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

type StaggerRevealProps = {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  variant?: RevealVariant;
  staggerMs?: number;
  as?: "div" | "ul";
};

/** Stagger child reveals — Doctor Barns-style sequential fade-up on cards. */
export function StaggerReveal({
  children,
  className,
  itemClassName,
  variant = "fade-up",
  staggerMs = 100,
  as: Tag = "div",
}: StaggerRevealProps) {
  return (
    <Tag className={className}>
      {children.map((child, i) => (
        <RevealOnScroll
          key={i}
          variant={variant}
          delay={i * staggerMs}
          className={itemClassName}
        >
          {child}
        </RevealOnScroll>
      ))}
    </Tag>
  );
}
