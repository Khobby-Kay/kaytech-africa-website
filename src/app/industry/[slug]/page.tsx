import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import {
  getAllIndustries,
  getIndustryBySlug,
  getIndustryPath,
} from "@/lib/industry-pages";
import { IndustryLandingPage } from "@/components/industry/IndustryLandingPage";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllIndustries().map((page) => ({ slug: page.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const page = getIndustryBySlug(params.slug);
  if (!page) {
    return createPageMetadata({
      title: "Industry not found | KayTech Africa",
      description: "The industry page you are looking for could not be found.",
      path: "/industry",
    });
  }

  return createPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: getIndustryPath(page.slug),
    keywords: [...page.keywords, ...ghanaSearchKeywords],
  });
}

export default function IndustryPage({ params }: { params: Params }) {
  const page = getIndustryBySlug(params.slug);
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${page.industryName} Website Design Ghana`,
        description: page.metaDescription,
        provider: {
          "@type": "Organization",
          name: "KayTech Africa",
          url: "https://www.kaytechafrica.com",
        },
        areaServed: { "@type": "Country", name: "Ghana" },
        url: `https://www.kaytechafrica.com${getIndustryPath(page.slug)}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustryLandingPage page={page} />
    </>
  );
}
