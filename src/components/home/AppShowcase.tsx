import Link from "next/link";
import { GraduationCap, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { servicePreviewImages } from "@/lib/page-images";
import { contentImages } from "@/lib/image-seo";
import { siteConfig } from "@/lib/site";

const cards = [
  {
    title: "AI automation studio",
    body: "Workflow bots, assistants, and LLM integrations for African operators.",
    image: servicePreviewImages[0],
  },
  {
    title: "Web & product builds",
    body: "Professional web development in Accra — fast, mobile-first sites for Ghana.",
    image: servicePreviewImages[1],
  },
  {
    title: "KayTech Academy",
    body: "Cohort-based training in web, marketing, and AI — portfolio-ready projects.",
    image: contentImages.academyLearning,
  },
];

export function AppShowcase() {
  return (
    <section id="academy" className="border-y border-hairline bg-surface-soft px-5 py-12 sm:py-16 lg:px-20 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Everything in one studio
          </h2>
          <p className="mt-3 text-sm text-muted sm:mt-4 sm:text-lg">
            A dev shop, a growth team, and an academy — all under one roof.
            Based in Accra, ready for Africa.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 min-w-[8.75rem] items-center gap-2.5 rounded-lg border border-ink/15 bg-canvas px-3.5 text-ink shadow-card transition hover:opacity-85"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="flex flex-col leading-none text-left">
                <span className="text-[9px] font-medium tracking-wide opacity-90">
                  Chat on
                </span>
                <span className="mt-0.5 text-[15px] font-semibold tracking-tight">
                  WhatsApp
                </span>
              </span>
            </a>
            <Link
              href="/academy"
              className="inline-flex h-11 min-w-[8.75rem] items-center gap-2.5 rounded-lg border border-ink/15 bg-canvas px-3.5 text-ink shadow-card transition hover:opacity-85"
            >
              <GraduationCap className="h-6 w-6" />
              <span className="flex flex-col leading-none text-left">
                <span className="text-[9px] font-medium tracking-wide opacity-90">
                  Explore the
                </span>
                <span className="mt-0.5 text-[15px] font-semibold tracking-tight">
                  Academy
                </span>
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group overflow-hidden rounded-3xl border border-hairline bg-canvas shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float"
            >
              <Media
                src={card.image.src}
                alt={card.image.alt}
                ratio="4/5"
                rounded="none"
                framed={false}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-4 sm:p-5">
                <p className="font-semibold text-ink">{card.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
