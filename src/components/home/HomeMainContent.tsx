import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { numberedServices, whyPartner } from "@/lib/home-content";
import { stats } from "@/lib/site";

export function HomeMainContent() {
  return (
    <>
      <section className="border-b border-hairline bg-surface-soft px-5 py-12 sm:py-16 lg:px-20 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-pill bg-canvas px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink ring-1 ring-hairline">
              Tailored services
            </span>
            <h2 className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Professional web design &amp; development services in Ghana
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              The best website designer in Accra for SEO, e-commerce, and
              affordable business websites — serving Accra, Kumasi, Tema, and all
              of Ghana.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {numberedServices.map((service) => (
              <article
                key={service.num}
                className="group rounded-3xl border border-hairline bg-canvas p-5 transition hover:border-primary/25 hover:shadow-card sm:p-6 lg:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                  <span className="font-display text-3xl font-semibold text-primary/30 sm:text-4xl">
                    {service.num}.
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                      {service.body}
                    </p>
                    <Link
                      href={service.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex h-11 items-center rounded-pill border border-hairline bg-canvas px-6 text-sm font-semibold text-ink transition hover:bg-surface-soft"
            >
              View all services
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-12 sm:py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
                Why partner with us
              </span>
              <h2 className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
                Why hire the best web developer in Ghana?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                When you search for the best web designer in Accra or an
                affordable website design company in Ghana, you need a partner
                who delivers leads and sales — not just a pretty homepage.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                More why choose us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyPartner.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-hairline bg-surface-soft p-5"
                >
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary px-5 py-12 text-on-primary sm:py-16 lg:px-20 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-on-primary/70">
              Revenue-generating service
            </p>
            <h2 className="mt-3 font-display text-2xl tracking-tight sm:text-3xl lg:text-4xl">
              Top web design company in Ghana — 250+ projects delivered
            </h2>
            <p className="mt-4 max-w-xl text-sm text-on-primary/85 sm:text-base">
              Trusted as one of the best web developers in Accra and the go-to
              website design company for brands in Kumasi, Tema, and nationwide.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-semibold sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-on-primary/75 sm:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-pill bg-semantic-up px-8 text-sm font-semibold text-surface-dark transition hover:brightness-110"
          >
            Get started today
          </Link>
        </Container>
      </section>
    </>
  );
}
