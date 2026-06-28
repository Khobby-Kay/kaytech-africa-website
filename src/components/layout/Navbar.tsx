"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { mainNav, secondaryNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHero = pathname === "/" && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300",
          onHero
            ? "bg-transparent"
            : "border-b border-hairline bg-canvas/95 backdrop-blur-xl"
        )}
      >
        <Container className="flex h-14 items-center justify-between gap-4 sm:h-16 lg:h-20">
          <Link
            href="/"
            className={cn(
              "inline-flex min-w-0 items-center gap-2 font-display text-lg leading-none tracking-[-0.01em] transition-colors sm:text-[22px]",
              onHero ? "text-on-dark" : "text-ink"
            )}
          >
            <LogoMark className="h-8 w-8 shrink-0 rounded-lg" />
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
                  onHero
                    ? "text-white/80 hover:text-on-dark"
                    : isActive
                      ? "text-ink"
                      : "text-muted hover:text-ink"
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
                onHero
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
                onHero
                  ? "bg-semantic-up text-surface-dark hover:brightness-110"
                  : "bg-primary text-on-primary hover:bg-primary-deep"
              )}
            >
              Get started now
            </Link>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-pill border lg:hidden",
              onHero
                ? "border-white/40 bg-white/10 text-on-dark"
                : "border-hairline text-muted"
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-surface-dark/40 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[min(100vw,320px)] flex-col bg-canvas shadow-float transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
          <span className="font-display text-lg font-semibold text-ink">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-hairline"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <div className="rounded-2xl border border-hairline bg-surface-soft p-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
              Contact
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Call us
            </p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="mt-1 block text-base font-semibold text-ink"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Email us at{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-medium text-ink underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>
            <div className="mt-4 flex items-start gap-2 text-sm text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p>{siteConfig.location.line1}</p>
                <p>{siteConfig.location.line2}</p>
                <a
                  href={siteConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-primary"
                >
                  Receive directions
                </a>
              </div>
            </div>
          </div>

          <nav className="mt-5 flex flex-col gap-1">
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
                  "rounded-xl px-3 py-3.5 text-base font-medium transition",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-ink hover:bg-surface-soft"
                )}
              >
                {l.label}
              </Link>
              );
            })}
          </nav>

          <div className="mt-6 border-t border-hairline pt-5">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted">
              More from KayTech
            </p>
            <div className="mt-2 flex flex-col gap-1">
              {secondaryNav.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-3 text-base font-medium text-ink transition hover:bg-surface-soft",
                    pathname === l.href && "bg-primary/10 text-primary",
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-hairline p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex h-12 w-full items-center justify-center rounded-pill bg-primary text-sm font-semibold text-on-primary"
          >
            Get started now
          </Link>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-pill border border-hairline text-sm font-semibold text-ink"
          >
            <Phone className="h-4 w-4" />
            Quick call
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-pill border border-hairline text-sm font-semibold text-ink"
          >
            <Mail className="h-4 w-4" />
            Email us
          </a>
        </div>
      </aside>
    </>
  );
}
