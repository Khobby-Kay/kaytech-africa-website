import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import {
  getAllServicePages,
  getServiceBySlug,
  getServicePath,
} from "@/lib/service-pages";
import {
  ServiceLanding,
  ServiceRelatedLinks,
} from "@/components/services/ServiceLanding";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllServicePages().map((page) => ({ slug: page.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const page = getServiceBySlug(params.slug);
  if (!page) {
    return createPageMetadata({
      title: "Service not found | KayTech Africa",
      description: "The service page you are looking for could not be found.",
      path: "/services",
    });
  }

  return createPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: getServicePath(page.slug),
    keywords: [...page.keywords, ...ghanaSearchKeywords],
  });
}

export default function ServicePage({ params }: { params: Params }) {
  const page = getServiceBySlug(params.slug);
  if (!page) notFound();

  const allPages = getAllServicePages();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.heroTitle,
    description: page.metaDescription,
    provider: {
      "@type": "Organization",
      name: "KayTech Africa",
      url: "https://www.kaytechafrica.com",
    },
    areaServed: { "@type": "Country", name: "Ghana" },
    url: `https://www.kaytechafrica.com${getServicePath(page.slug)}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceLanding page={page} />
      <ServiceRelatedLinks currentSlug={page.slug} pages={allPages} />
    </>
  );
}
