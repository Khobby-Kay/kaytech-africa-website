import type { Metadata } from "next";
import { AcademyPageContent } from "@/components/academy/AcademyPageContent";
import { academyFaqs, academyPageMeta } from "@/lib/academy-content";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import { createPageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: academyPageMeta.title,
  description: academyPageMeta.description,
  path: "/academy",
  keywords: [
    ...ghanaSearchKeywords,
    "web design course Ghana",
    "web development school Ghana",
    "coding academy Accra",
    "learn web development Ghana",
    "digital marketing course Accra",
    "SaaS course Ghana",
  ],
});

const academyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      name: "KayTech Academy",
      description: academyPageMeta.description,
      url: `${siteConfig.url}/academy`,
      parentOrganization: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      areaServed: { "@type": "Country", name: "Ghana" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: academyFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function AcademyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(academyJsonLd) }}
      />
      <AcademyPageContent />
    </>
  );
}
