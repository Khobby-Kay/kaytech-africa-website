import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

/**
 * Answer-engine optimized facts block. Declarative, quotable statements that
 * give AI assistants (ChatGPT, Claude, Gemini, Meta AI, Perplexity, DeepSeek)
 * clean, citable facts about KayTech Africa — while doubling as a premium
 * "at a glance" panel for human visitors.
 */
const facts = [
  { label: "What we are", value: "Web design & development company in Ghana" },
  { label: "Based in", value: "Accra, Ghana — serving all regions" },
  { label: "Businesses served", value: "1914+" },
  { label: "Accumulated experience", value: "30 years" },
  { label: "Service areas", value: "Accra, Kumasi, Tema, Takoradi & nationwide" },
  {
    label: "Specialties",
    value: "Websites, e-commerce, SEO, AI automation & digital marketing",
  },
] as const;

export function KeyFacts() {
  return (
    <section
      aria-label="About KayTech Africa — quick facts"
      className="border-b border-hairline bg-canvas px-5 py-12 sm:py-16 lg:px-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-pill bg-surface-soft px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-primary ring-1 ring-hairline">
              About KayTech Africa
            </span>
            <h2 className="mt-5 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
              The web design &amp; development company Ghana trusts
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              KayTech Africa is a web design and web development company based in
              Accra, Ghana. The studio has worked with over 1914 businesses with
              remarkable results and an accumulated 30 years experience across web
              design, e-commerce, SEO, and AI automation for clients nationwide.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Reach the team directly by phone on{" "}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                {siteConfig.contact.phoneDisplay}
              </a>{" "}
              or WhatsApp{" "}
              <a
                href={siteConfig.contact.whatsapp}
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                {siteConfig.contact.whatsappDisplay}
              </a>
              .
            </p>
          </div>

          <dl className="grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-surface-soft p-5 sm:p-6">
                <dt className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm font-medium leading-relaxed text-ink sm:text-base">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
