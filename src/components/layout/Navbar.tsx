"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300",
        onHero
          ? "bg-transparent"
          : "border-b border-hairline bg-canvas/90 backdrop-blur-xl"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link
          href="/"
          className={cn(
            "inline-flex items-center gap-2 font-display text-[22px] leading-none tracking-[-0.01em] transition-colors",
            onHero ? "text-on-dark" : "text-ink"
          )}
        >
          <LogoMark className="h-7 w-7" />
          kaytech
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                onHero
                  ? "text-white/80 hover:text-on-dark"
                  : pathname === l.href
                    ? "text-ink"
                    : "text-muted hover:text-ink"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/academy"
            className={cn(
              "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors",
              onHero
                ? "text-on-dark hover:text-white"
                : "text-ink hover:text-primary"
            )}
          >
            For learners
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/contact"
            className={cn(
              "inline-flex h-11 items-center justify-center rounded-pill px-6 text-sm font-semibold tracking-[-0.005em] transition",
              onHero
                ? "border border-white/60 text-on-dark hover:border-white/80 hover:bg-white/10"
                : "border border-hairline bg-canvas text-ink hover:bg-surface-soft"
            )}
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-pill border lg:hidden",
            onHero
              ? "border-white/40 bg-white/10 text-on-dark"
              : "border-hairline text-muted"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "border-t border-hairline bg-canvas lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {mainNav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm text-muted hover:bg-surface-soft hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-pill bg-primary px-5 py-3 text-center text-sm font-semibold text-on-primary"
          >
            Start a project
          </Link>
        </Container>
      </div>
    </header>
  );
}
