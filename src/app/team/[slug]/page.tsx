import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { createPageMetadata } from "@/lib/page-metadata";
import {
  getAllTeamMembers,
  getTeamMemberBySlug,
  getTeamPath,
} from "@/lib/team-pages";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllTeamMembers().map((member) => ({ slug: member.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const member = getTeamMemberBySlug(params.slug);
  if (!member) {
    return createPageMetadata({
      title: "Team | KayTech Africa",
      description: "Meet the KayTech Africa team in Accra, Ghana.",
      path: "/about",
    });
  }

  return createPageMetadata({
    title: `${member.name} — ${member.title} | KayTech Africa`,
    description: `${member.name}, ${member.title} at KayTech Africa — ${member.bio.slice(0, 140)}…`,
    path: getTeamPath(member.slug),
    keywords: [
      "KayTech Africa team",
      member.name,
      "web design company Accra",
      "web developer Ghana",
    ],
  });
}

export default function TeamMemberPage({ params }: { params: Params }) {
  const member = getTeamMemberBySlug(params.slug);
  if (!member) notFound();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    description: member.bio,
    image: `${siteConfig.url}${member.image.src}`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
    ...(member.email ? { email: member.email } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="border-b border-hairline bg-surface-soft px-5 pt-24 pb-12 sm:pt-28 lg:px-20 lg:pt-32 lg:pb-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Media
              src={member.image.src}
              alt={member.image.alt}
              ratio="4/5"
              priority
              objectPosition="top"
              sizes="(max-width: 1024px) 100vw, 480px"
              className="mx-auto w-full max-w-md lg:max-w-none"
            />
            <div>
              <span className="inline-flex items-center gap-2 rounded-pill bg-canvas px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
                KayTech team
              </span>
              <h1 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {member.name}
              </h1>
              <p className="mt-2 text-lg font-semibold text-primary">
                {member.title}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {member.bio}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {member.linkedin ? (
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    LinkedIn profile
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:underline"
                >
                  Contact KayTech
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
