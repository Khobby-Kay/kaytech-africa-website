import { Container } from "@/components/ui/Container";
import {
  homepageSearchBlock,
  localizedServicePhrases,
} from "@/lib/localized-seo";

export function LocalizedSeoSection() {
  return (
    <section
      aria-label="Web design and development services in Ghana"
      className="border-b border-hairline bg-surface-soft px-5 py-12 sm:py-16 lg:px-20 lg:py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-pill bg-canvas px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-primary ring-1 ring-hairline">
            {homepageSearchBlock.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
            {homepageSearchBlock.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            {homepageSearchBlock.intro}
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2 sm:mt-10">
          {homepageSearchBlock.areas.map((phrase) => (
            <li
              key={phrase}
              className="rounded-pill border border-hairline bg-canvas px-3 py-1.5 text-xs font-medium text-ink sm:px-4 sm:text-sm"
            >
              {phrase}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {localizedServicePhrases.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-hairline bg-canvas p-5 sm:p-6"
            >
              <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
