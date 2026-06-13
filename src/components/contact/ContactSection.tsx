import {
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="rounded-3xl border border-hairline bg-surface-soft p-6 sm:p-8 lg:col-span-3">
            <h3 className="font-display text-xl font-semibold text-ink">
              Start a conversation
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Tell us about your project, academy interest, or partnership idea.
              We typically respond within one business day.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-semantic-up/30 bg-semantic-up/10 p-4 transition hover:bg-semantic-up/15"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-semantic-up/20 text-semantic-up-deep">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    WhatsApp
                  </p>
                  <p className="font-semibold text-ink">
                    {siteConfig.contact.phoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-4 rounded-2xl border border-hairline bg-canvas p-4 transition hover:border-primary/30"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Call us
                  </p>
                  <p className="font-semibold text-ink">
                    {siteConfig.contact.phoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneAlt}`}
                className="flex items-center gap-4 rounded-2xl border border-hairline bg-canvas p-4 transition hover:border-primary/30"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Alt line
                  </p>
                  <p className="font-semibold text-ink">
                    {siteConfig.contact.phoneAltDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 rounded-2xl border border-hairline bg-canvas p-4 transition hover:border-primary/30"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Email
                  </p>
                  <p className="font-semibold text-ink">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill border border-hairline px-4 py-2 text-sm text-muted hover:text-ink"
              >
                <ExternalLink className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill border border-hairline px-4 py-2 text-sm text-muted hover:text-ink"
              >
                <ExternalLink className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-hairline bg-surface-soft p-6 sm:p-8 lg:col-span-2">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                  Location
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-ink">
                  {siteConfig.location.line1}
                </p>
                <p className="text-sm text-muted">{siteConfig.location.line2}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  Listed on Google &amp; LinkedIn as an Accra-based tech company.
                  Remote-first with in-person sessions available.
                </p>
                <a
                  href={siteConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-pill border border-hairline px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-canvas"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-hairline bg-canvas p-4">
              <p className="text-xs uppercase tracking-wider text-muted">
                Office hours
              </p>
              <p className="mt-2 text-sm text-ink">Mon – Fri · 9:00 – 18:00 GMT</p>
              <p className="mt-1 text-sm text-muted">Sat · By appointment</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
