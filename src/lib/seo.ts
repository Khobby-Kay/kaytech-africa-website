import { faqs as coreFaqs, siteConfig } from "@/lib/site";
import { ghanaSearchKeywords, seoFaqs } from "@/lib/localized-seo";

export const allFaqs = [...seoFaqs, ...coreFaqs];

export const seoKeywords = [
  ...ghanaSearchKeywords,
] as const;

export const defaultTitle =
  "Best Web Developer in Ghana | Top Web Designer Accra | KayTech Africa";

export const defaultDescription =
  "KayTech Africa — the best web design company in Ghana. Hire the top web developer or website designer in Accra, Kumasi & nationwide. Affordable SEO, e-commerce & digital marketing. 250+ projects delivered.";

export const siteName =
  "KayTech Africa — Best Web Design Company in Ghana | Web Development & SEO";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.svg`,
        },
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.instagram,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.contact.phone,
          contactType: "customer service",
          areaServed: "GH",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        image: `${siteConfig.url}/images/sections/service-web.jpg`,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.line1,
          addressRegion: siteConfig.location.line2,
          addressCountry: "GH",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.location.coordinates.lat,
          longitude: siteConfig.location.coordinates.lng,
        },
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteName,
        alternateName: siteConfig.shortName,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-GH",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/faq?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: defaultTitle,
        description: defaultDescription,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-GH",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: allFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export const ogImage = {
  url: "/images/sections/service-web.jpg",
  width: 1200,
  height: 630,
  alt: "KayTech Africa — Best Web Design Company in Ghana | Web Development, SEO & E-Commerce",
};
