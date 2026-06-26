import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { footerNav } from "@/lib/navigation";
import { workingHours } from "@/lib/home-content";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-10 bg-surface-dark text-on-dark">
      <Container className="px-5 py-8 sm:py-9">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display text-lg text-on-dark"
            >
              <LogoMark className="h-7 w-auto" />
              {siteConfig.shortName}
            </Link>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-on-dark/65">
              Web design, development, SEO &amp; AI automation — Accra-based,
              serving all Ghana.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-1 font-semibold text-on-dark hover:text-semantic-up"
              >
                <Phone className="h-3.5 w-3.5" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-dark/75 hover:text-on-dark"
              >
                WhatsApp {siteConfig.contact.whatsappDisplay}
              </a>
            </div>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-1 block text-xs text-on-dark/65 hover:text-on-dark"
            >
              {siteConfig.contact.email}
            </a>
            <p className="mt-1 text-xs text-on-dark/50">
              {siteConfig.location.line1}, Ghana · {workingHours.days}{" "}
              {workingHours.hours}
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-on-dark/50">
              Services
            </p>
            <ul className="mt-2 columns-2 gap-x-3 space-y-1 text-xs">
              {footerNav.services.map((item) => (
                <li key={item.label} className="break-inside-avoid">
                  <Link
                    href={item.href}
                    className="text-on-dark/70 transition hover:text-semantic-up"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-on-dark/50">
              Company
            </p>
            <ul className="mt-2 columns-2 gap-x-3 space-y-1 text-xs">
              {footerNav.company.map((item) => (
                <li key={item.href} className="break-inside-avoid">
                  <Link
                    href={item.href}
                    className="text-on-dark/70 transition hover:text-semantic-up"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-on-dark/50">
              Locations
            </p>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
              {footerNav.locations.map((item, i) => (
                <span key={item.href} className="inline-flex items-center">
                  {i > 0 ? (
                    <span className="mr-3 text-on-dark/30" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  <Link
                    href={item.href}
                    className="text-on-dark/70 hover:text-semantic-up"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-on-dark/50">
              More
            </p>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
              <Link
                href="/website-cost-ghana"
                className="text-on-dark/70 hover:text-semantic-up"
              >
                Website cost
              </Link>
              <span className="text-on-dark/30">·</span>
              <Link
                href="/features"
                className="text-on-dark/70 hover:text-semantic-up"
              >
                Capabilities
              </Link>
              <span className="text-on-dark/30">·</span>
              <Link
                href="/ai-automation"
                className="text-on-dark/70 hover:text-semantic-up"
              >
                AI automation
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 px-5 py-4 text-[11px] text-on-dark/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {siteConfig.name} © {new Date().getFullYear()}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-on-dark"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="hover:text-on-dark">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
