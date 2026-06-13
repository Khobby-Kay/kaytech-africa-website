"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { footerNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

const groups = [
  { title: "Product", links: footerNav.product },
  { title: "Company", links: footerNav.company },
  { title: "Legal", links: footerNav.legal },
] as const;

export function Footer() {
  return (
    <footer className="mt-8 rounded-t-[2rem] bg-surface-dark text-on-dark sm:mt-12 sm:rounded-t-[2.5rem]">
      <Container className="px-5 py-10 sm:py-14">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display text-xl text-on-dark sm:text-[22px]"
            >
              <LogoMark className="h-7 w-7" />
              kaytech
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-on-dark/70">
              {siteConfig.tagline}
            </p>
          </div>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-pill bg-semantic-up text-sm font-semibold text-surface-dark transition hover:brightness-110 sm:w-auto sm:px-6"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:rounded-3xl sm:p-5"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-on-dark/50">
                {group.title}
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-1.5">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-9 w-full items-center rounded-xl px-2 text-sm text-on-dark/75 transition hover:bg-white/10 hover:text-on-dark sm:min-h-0 sm:rounded-lg sm:px-0 sm:py-1.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-on-dark/65 sm:mt-10">
          <p>{siteConfig.location.line1}, {siteConfig.location.line2}</p>
          <p>{siteConfig.contact.phoneDisplay} · hello@kaytechafrica.com</p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center gap-2 px-5 py-5 text-center text-xs text-on-dark/50 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Accra · kaytechafrica.com</p>
        </Container>
      </div>
    </footer>
  );
}
