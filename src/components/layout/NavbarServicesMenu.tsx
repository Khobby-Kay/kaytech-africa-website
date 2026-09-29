"use client";

import Link from "next/link";
import {
  Bot,
  ChevronDown,
  Code2,
  CreditCard,
  Database,
  LineChart,
  ShoppingBag,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import { coreServices, type CoreService } from "@/lib/core-services";
import { cn } from "@/lib/utils";

const serviceIcons: Record<CoreService["icon"], LucideIcon> = {
  Code2,
  Bot,
  ShoppingBag,
  LineChart,
  Smartphone,
  Database,
  Users,
  CreditCard,
};

export function isServicesNavActive(pathname: string): boolean {
  if (pathname === "/services" || pathname.startsWith("/services/")) {
    return true;
  }
  return coreServices.some(
    (s) => pathname === s.href || pathname.startsWith(`${s.href}/`),
  );
}

function ServiceMenuItem({
  service,
  onNavigate,
}: {
  service: CoreService;
  onNavigate?: () => void;
}) {
  const Icon = serviceIcons[service.icon];

  return (
    <Link
      href={service.href}
      onClick={onNavigate}
      role="menuitem"
      className="group/item flex gap-3 rounded-xl p-3 transition hover:bg-white/75"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover/item:bg-primary group-hover/item:text-on-primary">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-ink">{service.title}</span>
          {service.badge ? (
            <span className="rounded-pill bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">
              {service.badge}
            </span>
          ) : null}
        </span>
        <span className="mt-0.5 block text-xs font-semibold text-primary">
          {service.offerFrom}
          {service.offerDetail ? (
            <span className="font-normal text-muted"> · {service.offerDetail}</span>
          ) : null}
        </span>
        <span className="mt-1 block text-xs leading-snug text-muted line-clamp-2">
          {service.description}
        </span>
      </span>
    </Link>
  );
}

type NavbarServicesMenuProps = {
  pathname: string;
  lightHeaderText: boolean;
  scrolled: boolean;
};

/** Desktop: hover mega-menu with offers. Uses focus-within for keyboard access. */
export function NavbarServicesMenu({
  pathname,
  lightHeaderText,
  scrolled,
}: NavbarServicesMenuProps) {
  const onHero = lightHeaderText && !scrolled;
  const active = isServicesNavActive(pathname);

  return (
    <div className="group relative">
      <Link
        href="/services"
        className={cn(
          "inline-flex items-center gap-1 text-sm font-medium transition-colors",
          onHero
            ? "text-white/85 hover:text-on-dark"
            : active
              ? "text-ink"
              : "text-muted hover:text-ink",
        )}
        aria-haspopup="true"
      >
        Services
        <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180 group-focus-within:rotate-180" />
      </Link>

      <div
        className="pointer-events-none absolute left-1/2 top-full z-50 w-[min(calc(100vw-2rem),40rem)] -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
        role="menu"
      >
        <div className="glass overflow-hidden rounded-2xl shadow-float">
          <div className="border-b border-hairline bg-gradient-to-r from-primary/8 via-accent/10 to-primary/5 px-4 py-3">
            <p className="text-xs font-semibold text-ink">
              Studio offers in GHS · written quote before you pay
            </p>
            <p className="mt-0.5 text-[11px] text-muted">
              Free discovery call · 50% upfront, 50% on launch on most projects
            </p>
          </div>
          <ul className="grid max-h-[min(70vh,26rem)] gap-0.5 overflow-y-auto p-2 sm:grid-cols-2">
            {coreServices.map((service) => (
              <li key={service.id} role="none">
                <ServiceMenuItem service={service} />
              </li>
            ))}
          </ul>
          <div className="grid gap-1 border-t border-hairline p-2 sm:grid-cols-2">
            <Link
              href="/services"
              role="menuitem"
              className="rounded-xl px-3 py-2.5 text-center text-xs font-semibold text-primary hover:bg-white/60"
            >
              All services
            </Link>
            <Link
              href="/digital-growth-bundle"
              role="menuitem"
              className="rounded-xl bg-primary/10 px-3 py-2.5 text-center text-xs font-semibold text-primary hover:bg-primary/15"
            >
              Digital growth bundle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

type MobileServicesNavProps = {
  pathname: string;
  onNavigate: () => void;
};

export function MobileServicesNav({
  pathname,
  onNavigate,
}: MobileServicesNavProps) {
  const active = isServicesNavActive(pathname);

  return (
    <div className="rounded-xl border border-hairline bg-surface-soft/80">
      <Link
        href="/services"
        onClick={onNavigate}
        className={cn(
          "flex items-center justify-between px-3 py-3.5 text-[15px] font-medium",
          active ? "font-semibold text-primary" : "text-ink",
        )}
      >
        Services
        <span className="text-xs font-normal text-muted">From GHS 2,000/mo</span>
      </Link>
      <ul className="space-y-1 border-t border-hairline px-2 pb-2 pt-1">
        {coreServices.map((service) => {
          const itemActive = pathname === service.href;
          return (
            <li key={service.id}>
              <Link
                href={service.href}
                onClick={onNavigate}
                className={cn(
                  "block rounded-lg px-3 py-2.5 transition",
                  itemActive
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-canvas",
                )}
              >
                <span className="text-sm font-medium text-ink">{service.title}</span>
                <span className="mt-0.5 block text-xs font-semibold text-primary">
                  {service.offerFrom}
                </span>
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href="/digital-growth-bundle"
            onClick={onNavigate}
            className="block rounded-lg bg-primary/10 px-3 py-2.5 text-sm font-semibold text-primary"
          >
            Digital growth bundle
          </Link>
        </li>
      </ul>
    </div>
  );
}
