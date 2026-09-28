import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyArticle } from "@/components/portfolio/CaseStudyArticle";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/page-metadata";
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
  getCaseStudyPath,
} from "@/lib/portfolio";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) {
    return createPageMetadata({
      title: "Case study | KayTech Africa",
      description: "KayTech Africa client case studies in Ghana.",
      path: "/portfolio",
    });
  }

  return createPageMetadata({
    title: `${study.client} Case Study | Web Design Ghana | KayTech Africa`,
    description: `${study.summary} ${study.result}`,
    path: getCaseStudyPath(study.slug),
    keywords: [
      study.client,
      "web design case study Ghana",
      study.sector,
      "KayTech Africa portfolio",
    ],
  });
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.client}. ${study.headline}`,
    description: study.summary,
    author: { "@type": "Organization", name: "KayTech Africa" },
    about: study.client,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-b border-hairline bg-surface-soft px-5 pt-24 pb-12 sm:pt-28 lg:px-20 lg:pt-32 lg:pb-16">
        <Container>
          <CaseStudyArticle study={study} showBackLink />
        </Container>
      </section>
    </>
  );
}
