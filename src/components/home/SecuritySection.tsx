import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { principles } from "@/lib/site";
import { principleImages } from "@/lib/page-images";

const badges = ["3G-optimised", "MoMo-ready", "Conversion-first", "Accra-based"];

export function SecuritySection() {
  return (
    <section id="security" className="bg-canvas px-5 py-12 sm:py-16 lg:px-20 lg:py-32">
      <Container>
        <h2 className="max-w-2xl font-display text-2xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Studio-grade delivery for African markets.
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted sm:mt-4 sm:text-lg">
          Every payment flow, page load, and launch is protected by principles we
          ship with on every project.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
          {badges.map((tag) => (
            <span
              key={tag}
              className="rounded-pill border border-hairline bg-surface-soft px-3 py-1.5 text-xs font-semibold text-muted sm:px-4 sm:py-2 sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {principles.map((p, i) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-3xl border border-hairline bg-surface-soft transition duration-300 hover:-translate-y-1 hover:shadow-float"
            >
              <Media
                src={principleImages[i].src}
                alt={principleImages[i].alt}
                ratio="16/9"
                rounded="none"
                framed={false}
                scrim
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="p-5 sm:p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
