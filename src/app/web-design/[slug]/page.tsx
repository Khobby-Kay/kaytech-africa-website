import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import {
  getAllCityPages,
  getCityBySlug,
  getCityPath,
} from "@/lib/city-pages";
import { CityLandingPage } from "@/components/locations/CityLandingPage";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllCityPages().map((page) => ({ slug: page.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const page = getCityBySlug(params.slug);
  if (!page) {
    return createPageMetadata({
      title: "Location not found | KayTech Africa",
      description: "The location page you are looking for could not be found.",
      path: "/",
    });
  }

  return createPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: getCityPath(page.slug),
    keywords: [...page.keywords, ...ghanaSearchKeywords],
  });
}

export default function WebDesignCityPage({ params }: { params: Params }) {
  const page = getCityBySlug(params.slug);
  if (!page) notFound();

  const serviceJsonLd = {
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
            "@type": "City",
            name: page.cityName,
            containedInPlace: { "@type": "Country", name: "Ghana" },
          },
        },
        url: `https://www.kaytechafrica.com${getCityPath(page.slug)}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <CityLandingPage page={page} />
    </>
  );
}
