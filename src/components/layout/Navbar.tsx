"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { workingHours } from "@/lib/home-content";
import { mainNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onHero = pathname === "/" && !scrolled;
  const lightHeaderText = onHero;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
          lightHeaderText
            ? "max-lg:bg-surface-dark/45 max-lg:backdrop-blur-md lg:bg-transparent"
            : "border-b border-hairline bg-canvas/95 backdrop-blur-xl",
          scrolled &&
            "border-b border-hairline bg-canvas/95 shadow-sm backdrop-blur-xl",
        )}
      >
        <Container className="flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-3 lg:h-20">
          <Link
            href="/"
            className={cn(
              "inline-flex min-w-0 flex-1 items-center gap-2 font-display text-base leading-none tracking-[-0.01em] transition-colors sm:text-[22px] lg:flex-none",
              lightHeaderText && !scrolled ? "text-on-dark" : "text-ink",
            )}
          >
            <LogoMark className="h-8 w-8 shrink-0 rounded-lg sm:h-9 sm:w-9" />
            <span className="truncate">kaytech</span>
          </Link>

          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {mainNav.map((l) => {
              const isActive =
                pathname === l.href ||
                (l.href.startsWith("/services/") &&
                  pathname.startsWith("/services"));

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    lightHeaderText && !scrolled
                      ? "text-white/85 hover:text-on-dark"
                      : isActive
                        ? "text-ink"
                        : "text-muted hover:text-ink",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              data-track="call_click"
              data-track-location="navbar"
              className={cn(
                "hidden items-center gap-1.5 text-sm font-semibold transition xl:inline-flex",
                lightHeaderText && !scrolled
                  ? "text-on-dark hover:text-white"
                  : "text-primary hover:text-primary-deep",
              )}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-pill px-5 text-sm font-semibold transition xl:h-11 xl:px-6",
                lightHeaderText && !scrolled
                  ? "bg-semantic-up text-surface-dark hover:brightness-110"
                  : "bg-primary text-on-primary hover:bg-primary-deep",
              )}
            >
              Get started now
            </Link>
          </div>

          <div className="flex shrink-0 items-center lg:hidden">
            <button
              type="button"
              className={cn(
                "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition",
                lightHeaderText && !scrolled
                  ? "border-white/40 bg-white/10 text-on-dark"
                  : "border-hairline bg-canvas text-ink",
              )}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-surface-dark/50 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-full max-w-[min(100vw,380px)] flex-col bg-canvas shadow-float transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="flex items-center justify-between border-b border-hairline px-4 py-3.5 sm:px-5">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 font-display text-lg font-semibold text-ink"
          >
            <LogoMark className="h-8 w-8 rounded-lg" />
            kaytech
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-surface-soft"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5">
          <nav className="flex flex-col gap-0.5">
            {mainNav.map((l) => {
              const isActive =
                pathname === l.href ||
                (l.href.startsWith("/services/") &&
                  pathname.startsWith("/services"));

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-3.5 text-[15px] font-medium transition active:scale-[0.99]",
                    isActive
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-ink hover:bg-surface-soft",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 rounded-2xl border border-hairline bg-surface-soft p-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-ink">
                  {siteConfig.location.line1}, Ghana
                </p>
                <p className="text-xs text-muted">{siteConfig.location.line2}</p>
                <a
                  href={siteConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xs font-semibold text-primary"
                >
                  Get directions
                </a>
              </div>
            </div>
            <div className="mt-3 flex items-start gap-3 border-t border-hairline pt-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Office hours
                </p>
                <p className="mt-0.5 text-sm text-ink">
                  {workingHours.days} · {workingHours.hours}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-hairline p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:p-5">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            data-track="get_started_click"
            data-track-location="navbar_drawer"
            className="flex h-12 w-full items-center justify-center rounded-pill bg-primary text-sm font-semibold text-on-primary"
          >
            Get started now
          </Link>
        </div>
      </aside>
    </>
  );
}
