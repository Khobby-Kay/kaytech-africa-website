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
import { EcommerceServicePage } from "@/components/services/EcommerceServicePage";
import { WebDevelopmentServicePage } from "@/components/services/WebDevelopmentServicePage";
import { ecommerceFaqs, ecommercePageMeta } from "@/lib/ecommerce-service-content";
import {
  webDevFaqs,
  webDevPageMeta,
} from "@/lib/web-development-service-content";
import { siteConfig } from "@/lib/site";
import { servicePriceFromGhs } from "@/lib/trust-metrics";

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

  const isEcommerce = params.slug === "best-ecommerce-development-accra-ghana";
  const isWebDev = params.slug === "best-web-development-design-ghana";
  const allPages = getAllServicePages();

  const meta = isEcommerce
    ? { title: ecommercePageMeta.heroTitle, description: ecommercePageMeta.metaDescription, faqs: ecommerceFaqs }
    : isWebDev
      ? { title: webDevPageMeta.heroTitle, description: webDevPageMeta.metaDescription, faqs: webDevFaqs }
      : { title: page.heroTitle, description: page.metaDescription, faqs: page.faqs ?? [] };
  const pricing = servicePriceFromGhs[page.slug];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: meta.title,
        description: meta.description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "Country", name: "Ghana" },
        url: `${siteConfig.url}${getServicePath(page.slug)}`,
        ...(pricing
          ? {
              offers: {
                "@type": "Offer",
                priceCurrency: "GHS",
                price: pricing.from,
                description: pricing.label,
              },
            }
          : {}),
      },
      ...(meta.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: meta.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {isEcommerce ? (
        <EcommerceServicePage />
      ) : isWebDev ? (
        <WebDevelopmentServicePage />
      ) : (
        <>
          <ServiceLanding page={page} />
          <ServiceRelatedLinks currentSlug={page.slug} pages={allPages} />
        </>
      )}
    </>
  );
}
