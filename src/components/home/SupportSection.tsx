import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function SupportSection() {
  return (
    <section id="support" className="bg-surface-dark px-5 py-16 text-on-dark lg:px-20 lg:py-32">
      <Container>
        <span className="inline-flex items-center gap-2 rounded-pill bg-white/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-on-dark">
          Client support
        </span>
        <h2 className="mt-6 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          Need help mid-project? We&apos;ve got you covered.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-on-dark/75">
          Reach our team on WhatsApp, phone, or email. Whether you&apos;re
          shipping a product or enrolling in the academy, support is one message
          away.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-pill border border-white/30 px-6 text-sm font-semibold text-on-dark transition hover:bg-white/10"
          >
            Get help on WhatsApp
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex h-11 items-center rounded-pill border border-white/30 px-6 text-sm font-semibold text-on-dark transition hover:bg-white/10"
          >
            Email support
          </a>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex h-11 items-center rounded-pill border border-white/30 px-6 text-sm font-semibold text-on-dark transition hover:bg-white/10"
          >
            Call the studio
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Fast response",
              body: "We typically reply within one business day on WhatsApp and email.",
            },
            {
              title: "Hands-on delivery",
              body: "Practitioners who ship — not account managers reading from a script.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="font-semibold text-on-dark">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-on-dark/70">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
