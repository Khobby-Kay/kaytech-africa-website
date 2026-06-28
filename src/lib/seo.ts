import { ORGANIZATION_LOGO, withBrandVersion } from "@/lib/brand-assets";
import { faqs as coreFaqs, siteConfig } from "@/lib/site";
import { ghanaSearchKeywords, seoFaqs } from "@/lib/localized-seo";
import { getAllServicePages, getServicePath } from "@/lib/service-pages";

export const allFaqs = [...seoFaqs, ...coreFaqs];

export const seoKeywords = [
  ...ghanaSearchKeywords,
] as const;

export const defaultTitle =
  "Best Web Developer in Ghana | Top Web Designer Accra | KayTech Africa";

export const defaultDescription =
  "KayTech Africa — the best web design company in Ghana. Hire the top web developer or website designer in Accra, Kumasi & nationwide. Affordable SEO, e-commerce & digital marketing. 1914+ businesses served with remarkable results.";

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
        alternateName: siteConfig.shortName,
        legalName: siteConfig.name,
        url: siteConfig.url,
        description: defaultDescription,
        slogan: siteConfig.tagline,
        foundingDate: String(siteConfig.founded),
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteConfig.url}${withBrandVersion(ORGANIZATION_LOGO)}#logo`,
          url: `${siteConfig.url}${withBrandVersion(ORGANIZATION_LOGO)}`,
          contentUrl: `${siteConfig.url}${withBrandVersion(ORGANIZATION_LOGO)}`,
          width: 1024,
          height: 1024,
        },
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
          "Web3 development",
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
        image: `${siteConfig.url}/og.jpg?v=5`,
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
          itemListElement: getAllServicePages().map((page) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: page.heroTitle,
              url: `${siteConfig.url}${getServicePath(page.slug)}`,
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
        name: "KayTech Africa — Main Navigation",
        itemListElement: [
          { "@type": "SiteLinksSearchBox", target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/faq?q={search_term_string}` } },
          ...[
            { name: "Web Design & Development", url: `${siteConfig.url}/services/best-web-development-design-accra-ghana`, description: "Custom websites and web apps built for Ghana" },
            { name: "SEO Services", url: `${siteConfig.url}/services/best-seo-services-accra-ghana`, description: "Search engine optimisation for Ghanaian businesses" },
            { name: "E-Commerce Development", url: `${siteConfig.url}/services/best-ecommerce-development-accra-ghana`, description: "Online stores with MoMo and card payment integration" },
            { name: "Digital Marketing & PPC", url: `${siteConfig.url}/services/best-digital-marketing-accra-ghana`, description: "Paid ads, content, and growth campaigns" },
            { name: "KayTech Academy", url: `${siteConfig.url}/academy`, description: "Practical web and digital marketing training in Ghana" },
            { name: "Portfolio", url: `${siteConfig.url}/portfolio`, description: "Web design projects across Ghana" },
            { name: "Pricing", url: `${siteConfig.url}/pricing`, description: "Website cost and pricing guide for Ghana" },
            { name: "Contact Us", url: `${siteConfig.url}/contact`, description: "Get a free web design quote in Accra" },
          ].map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            url: item.url,
            description: item.description,
          })),
        ],
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
  url: "/og.jpg?v=5",
  width: 1200,
  height: 630,
  alt: "KayTech Africa — Best Web Design Company in Accra, Ghana",
};
