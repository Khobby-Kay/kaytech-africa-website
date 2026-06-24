import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { footerNav } from "@/lib/navigation";
import { footerServices, workingHours } from "@/lib/home-content";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-10 bg-surface-dark text-on-dark">
      <Container className="px-5 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display text-xl text-on-dark"
            >
              <LogoMark className="h-8 w-auto" />
              {siteConfig.shortName}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-on-dark/70">
              {siteConfig.description}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-on-dark/55">
              Best web developer in Ghana · Top web designer Accra · Website
              design Kumasi &amp; Tema · SEO company Ghana
            </p>
            <p className="mt-6 font-display text-lg font-semibold text-on-dark">
              Contact with us
            </p>
          </div>

          <div className="space-y-5 sm:col-span-1 lg:col-span-3">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-semantic-up" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-on-dark/50">
                  Address
                </p>
                <p className="mt-1 text-sm text-on-dark/85">
                  {siteConfig.location.line1}, Ghana
                </p>
                <a
                  href={siteConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-semantic-up hover:underline"
                >
                  Receive directions
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-semantic-up" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-on-dark/50">
                  Email address
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-1 block text-sm text-on-dark/85 hover:text-on-dark"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-semantic-up" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-on-dark/50">
                  Working time
                </p>
                <p className="mt-1 text-sm text-on-dark/85">
                  {workingHours.days}: {workingHours.hours}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-semantic-up" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-on-dark/50">
                  Call us
                </p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="mt-1 block text-sm font-semibold text-on-dark hover:text-semantic-up"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-on-dark/75 hover:text-on-dark"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-on-dark">Services links</p>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-on-dark/70 transition hover:text-semantic-up"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-on-dark">Company</p>
            <ul className="mt-4 space-y-2.5">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-on-dark/70 transition hover:text-semantic-up"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm font-semibold text-on-dark">
              Subscribe newsletter
            </p>
            <p className="mt-2 text-sm text-on-dark/65">
              Sign up for updates on web, SEO, and academy cohorts—we won&apos;t
              spam your inbox.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Newsletter%20signup`}
              className="mt-4 inline-flex h-10 items-center rounded-pill bg-semantic-up px-5 text-sm font-semibold text-surface-dark transition hover:brightness-110"
            >
              Subscribe via email
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 px-5 py-6 text-xs text-on-dark/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {siteConfig.name} © {new Date().getFullYear()} — All rights reserved
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
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
              Sitemap
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
