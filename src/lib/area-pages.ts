import { contentImages } from "@/lib/image-seo";
import type { CityPage } from "@/lib/city-pages";

/** Accra neighbourhood & high-intent area landing pages */
export const areaPages: CityPage[] = [
  {
    slug: "east-legon-ghana",
    cityName: "East Legon",
    region: "Greater Accra",
    title: "Web Design East Legon, Accra | Website Designer | KayTech Africa",
    metaDescription:
      "Web design in East Legon, Accra. custom business websites, e-commerce, and SEO for East Legon brands. KayTech Africa. Call 024 840 8154.",
    keywords: [
      "web design East Legon",
      "website designer East Legon Accra",
      "web developer East Legon",
      "best web design East Legon Ghana",
      "website design East Legon",
    ],
    heroTitle: "Web design in East Legon, Accra",
    heroDescription:
      "Premium websites for East Legon businesses. fast, mobile-first, and built to rank on Google.",
    intro:
      "East Legon is one of Accra's busiest commercial hubs. home to restaurants, clinics, agencies, boutiques, and professional services. Businesses here compete on credibility and visibility. KayTech Africa builds East Legon websites that load fast on mobile, capture WhatsApp leads, and rank when customers search your service + East Legon.",
    areas: ["East Legon", "American House", "Adjiringanor", "Trasacco", "Greater Accra"],
    whyChoose: [
      {
        title: "East Legon market knowledge",
        body: "We understand how East Legon customers browse, compare, and contact businesses. phone, WhatsApp, and Google first.",
      },
      {
        title: "Premium without pretension",
        body: "Clean, credible design that matches East Legon brand expectations. scoped to your budget.",
      },
      {
        title: "Local SEO",
        body: "Rank for “web design East Legon”, your industry + East Legon, and neighbourhood searches.",
      },
      {
        title: "Full studio stack",
        body: "Web, SEO, e-commerce, and AI automation from one Accra-based team.",
      },
    ],
    faqs: [
      {
        question: "Do you meet East Legon clients in person?",
        answer:
          "Most projects run via WhatsApp, phone, and video. We can arrange in-person meetings in Accra when needed.",
      },
      {
        question: "How much does a website cost in East Legon?",
        answer:
          "See our guide at /website-cost-ghana or request a free quote. we scope every East Legon project individually.",
      },
    ],
    image: contentImages.serviceWeb,
    imageCaption: "Web design for East Legon businesses",
  },
  // Osu, Spintex, Adenta, Labone folded into /web-design/accra-ghana (301). CONS-05
];

export const retiredAreaSlugs = [
  "osu-accra-ghana",
  "spintex-accra-ghana",
  "adenta-accra-ghana",
  "labone-accra-ghana",
] as const;

export function getAreaBySlug(slug: string): CityPage | undefined {
  return areaPages.find((p) => p.slug === slug);
}

export function getAllAreas(): CityPage[] {
  return areaPages;
}

export function getAreaPath(slug: string): string {
  return `/web-design/areas/${slug}`;
}

export function getAreaFlatPath(slug: string): string {
  return `/web-design-${slug.replace("-accra-ghana", "").replace("-ghana", "")}-accra`;
}
