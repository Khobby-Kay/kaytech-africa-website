import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getAllCityPages, getCityPath } from "@/lib/city-pages";
import {
  homepageSearchBlock,
  localizedServicePhrases,
} from "@/lib/localized-seo";

export function LocalizedSeoSection() {
  const cities = getAllCityPages();

  return (
    <section
      aria-label="Web design and development services in Ghana"
      className="border-b border-hairline bg-gradient-to-b from-surface-soft to-canvas px-5 py-12 sm:py-16 lg:px-20 lg:py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-pill bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
            {homepageSearchBlock.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            {homepageSearchBlock.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {homepageSearchBlock.intro}
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={getCityPath(city.slug)}
              className="group flex items-center justify-between rounded-2xl border border-hairline bg-canvas p-4 shadow-card transition hover:border-accent/30 hover:shadow-glow"
            >
              <div>
                <p className="font-display text-lg font-semibold text-ink group-hover:text-primary">
                  Web design {city.cityName}
                </p>
                <p className="mt-0.5 text-xs text-muted">{city.region}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted transition group-hover:translate-x-0.5 group-hover:text-accent" />
            </Link>
          ))}
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
              className="rounded-3xl border border-hairline bg-canvas p-5 shadow-card sm:p-6"
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
