import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import { getAllAreas, getAreaBySlug, getAreaPath } from "@/lib/area-pages";
import { CityLandingPage } from "@/components/locations/CityLandingPage";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllAreas().map((page) => ({ slug: page.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const page = getAreaBySlug(params.slug);
  if (!page) {
    return createPageMetadata({
      title: "Area not found | KayTech Africa",
      description: "The area page you are looking for could not be found.",
      path: "/web-design/accra-ghana",
    });
  }

  return createPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: getAreaPath(page.slug),
    keywords: [...page.keywords, ...ghanaSearchKeywords],
  });
}

export default function AreaLandingRoute({ params }: { params: Params }) {
  const page = getAreaBySlug(params.slug);
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Web Design in ${page.cityName}, Ghana`,
        description: page.metaDescription,
        provider: {
          "@type": "LocalBusiness",
          name: "KayTech Africa",
          url: "https://www.kaytechafrica.com",
          telephone: "+233248408154",
          areaServed: {
            "@type": "Place",
            name: page.cityName,
            containedInPlace: { "@type": "Country", name: "Ghana" },
          },
        },
        url: `https://www.kaytechafrica.com${getAreaPath(page.slug)}`,
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
      <CityLandingPage page={page} />
    </>
  );
}
