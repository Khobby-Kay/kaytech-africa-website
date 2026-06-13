import { Container } from "@/components/ui/Container";

const lines = [
  { text: "Africa runs on ambition.", muted: false },
  {
    text: "But scaling still means slow sites, Western templates, and agencies that don't understand MoMo, WhatsApp, or 3G networks.",
    muted: true,
  },
  {
    text: "KayTech turns ideas into live infrastructure — inside a studio built for how African businesses actually grow.",
    muted: false,
  },
  {
    text: "No brochureware. No copy-paste. Just one team and systems you can trust.",
    muted: true,
  },
];

export function WhyKayTech() {
  return (
    <section id="why" className="bg-surface-soft px-5 py-16 lg:px-20 lg:py-32">
      <Container className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div className="min-w-0">
          <span className="mb-8 inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
            Why KayTech
          </span>
          <div className="max-w-2xl font-display text-[24px] tracking-tight sm:text-[28px] md:text-4xl lg:text-[44px]">
            {lines.map((line) => (
              <p
                key={line.text.slice(0, 24)}
                className={`mb-4 break-words leading-[1.22] last:mb-0 ${
                  line.muted ? "text-muted" : "text-ink"
                }`}
              >
                {line.text}
              </p>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-hairline bg-canvas p-8 shadow-card lg:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Studio snapshot
          </p>
          <dl className="mt-6 space-y-5">
            {[
              ["Projects delivered", "50+"],
              ["Founded", "Accra · 2020"],
              ["Academy tracks", "6+"],
              ["Build ethos", "100% Africa-first"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-hairline pb-5 last:border-0 last:pb-0"
              >
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="font-display text-lg font-semibold text-ink">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
