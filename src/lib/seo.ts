import { getOrganizationLogoSchema } from "@/lib/brand-assets";
import { coreServices } from "@/lib/core-services";
import { brandSitelinks, siteUrl } from "@/lib/discoverability";
import { faqs as coreFaqs, siteConfig } from "@/lib/site";
import { ghanaSearchKeywords, seoFaqs } from "@/lib/localized-seo";
import { getAllServicePages, getServicePath } from "@/lib/service-pages";

export const allFaqs = [...seoFaqs, ...coreFaqs];

export const seoKeywords = [
  ...ghanaSearchKeywords,
] as const;

export const defaultTitle =
  "KayTech Africa | Web Design & Development Studio in Accra, Ghana";

export const defaultDescription =
  "Websites, online stores, SEO and AI automation for businesses in Accra, Kumasi and across Ghana. Published case studies and pricing in cedis.";

export const siteName = "KayTech Africa";

export function getOrganizationJsonLd() {
  const orgLogo = getOrganizationLogoSchema(siteConfig.url);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        legalName: siteConfig.name,
        url: siteConfig.url,
        description: defaultDescription,
        slogan: siteConfig.tagline,
        foundingDate: String(siteConfig.founded),
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        logo: orgLogo,
        image: `${siteConfig.url}/og.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.line1,
          addressRegion: siteConfig.location.line2,
          addressCountry: "GH",
        },
        areaServed: [
          "Accra",
          "Kumasi",
          "Tema",
          "East Legon",
          "Takoradi",
          "Cape Coast",
          "Ghana",
        ].map((name) => ({ "@type": "City", name })),
        knowsAbout: [
          "Web design",
          "Web development",
          "SEO",
          "E-commerce development",
          "Digital marketing",
          "AI automation",
          "Mobile Money integration",
          "Paystack integration",
          "Flutterwave integration",
          "WhatsApp business automation",
          "WordPress development",
          "Shopify development",
          "Custom software development",
          "Mobile app development",
          "Website redesign",
          "Website maintenance",
          "Landing page design",
          "Website speed optimization",
          "Church website design",
          "School website design",
          "Restaurant website design",
          "Real estate website design",
          "Hotel website design",
          "Hospital website design",
          "NGO website design",
        ],
        knowsLanguage: ["en"],
        keywords: [...ghanaSearchKeywords].join(", "),
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.instagram,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.contact.phone,
          email: siteConfig.contact.email,
          contactType: "customer service",
          areaServed: "GH",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        description: defaultDescription,
        image: `${siteConfig.url}/og.jpg`,
        logo: { "@id": orgLogo["@id"] },
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
        areaServed: [
          "Accra",
          "Kumasi",
          "Tema",
          "East Legon",
          "Takoradi",
          "Cape Coast",
          "Ghana",
        ].map((name) => ({ "@type": "City", name })),
        knowsAbout: [
          "Web design",
          "Web development",
          "SEO",
          "E-commerce development",
          "Digital marketing",
          "AI automation",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web design & digital services in Ghana",
          itemListElement: coreServices.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              url: siteUrl(service.href),
              areaServed: "GH",
            },
          })),
        },
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
      ...getAllServicePages().map((page) => ({
        "@type": "Service",
        "@id": `${siteConfig.url}${getServicePath(page.slug)}#service`,
        serviceType: page.eyebrow,
        name: page.heroTitle,
        description: page.metaDescription,
        url: `${siteConfig.url}${getServicePath(page.slug)}`,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "Country", name: "Ghana" },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${siteConfig.url}${getServicePath(page.slug)}`,
          servicePhone: siteConfig.contact.phone,
        },
      })),
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#sitenavigation`,
        name: "KayTech Africa main site sections",
        itemListElement: brandSitelinks.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          url: siteUrl(item.path),
          description: item.description,
        })),
      },
      ...brandSitelinks.map((item) => ({
        "@type": "SiteNavigationElement",
        "@id": `${siteUrl(item.path)}#navigation`,
        name: item.name,
        description: item.description,
        url: siteUrl(item.path),
        isPartOf: { "@id": `${siteConfig.url}/#website` },
      })),
    ],
  };
}

/** Homepage-only FAQ schema (TECH-03. not injected site-wide). */
export function getHomepageFaqJsonLd() {
  return {
    "@context": "https://schema.org",
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
  };
}

export const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "KayTech Africa web design studio, Accra, Ghana",
};
