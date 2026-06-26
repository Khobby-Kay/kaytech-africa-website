import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const pages = [
  {
    href: "/services",
    eyebrow: "Services",
    title: "All services",
    description:
      "Web development, SEO, e-commerce, digital marketing, and AI automation — each with a dedicated Ghana-focused landing page.",
  },
  {
    href: "/pricing",
    eyebrow: "Pricing",
    title: "How we price projects",
    description:
      "Value-focused proposals scoped to your goals — no surprise add-ons. See our approach before you request a quote.",
  },
  {
    href: "/features",
    eyebrow: "Studio",
    title: "Features & capabilities",
    description:
      "AI automation, web development, Web3, robotics, and growth systems — scoped for African operators.",
  },
  {
    href: "/about",
    eyebrow: "Company",
    title: "About KayTech",
    description:
      "Our story, leadership team, and the Afrocentric build ethos behind every project.",
  },
  {
    href: "/academy",
    eyebrow: "Academy",
    title: "Learn with builders",
    description:
      "Web design, development, marketing, AI, and freelance business tracks taught by practitioners.",
  },
  {
    href: "/security",
    eyebrow: "Trust",
    title: "Security & delivery",
    description:
      "MoMo-ready flows, 3G-optimised builds, and studio-grade principles on every launch.",
  },
  {
    href: "/support",
    eyebrow: "Support",
    title: "Client support",
    description:
      "WhatsApp, phone, and email support for active projects and academy learners.",
  },
  {
    href: "/faq",
    eyebrow: "Help",
    title: "FAQ",
    description:
      "How projects start, payment options, academy programs, and where we are based.",
  },
  {
    href: "/contact",
    eyebrow: "Contact",
    title: "Get in touch",
    description:
      "Start a project, enroll in the academy, or explore a partnership from Accra.",
  },
] as const;

export function HomeOverview() {
  return (
    <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
            Explore
          </span>
          <h2 className="mt-6 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Everything KayTech, in one place
          </h2>
          <p className="mt-4 text-muted">
            Browse services, meet the team, enroll in the academy, or reach out
            — each section has its own page.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group flex flex-col rounded-3xl border border-hairline bg-surface-soft p-6 transition hover:border-primary/30 hover:shadow-card"
            >
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                {page.eyebrow}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                {page.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {page.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-primary">
                View page
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
