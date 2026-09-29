/** City-specific cost notes. only where market differs (AGENCY-08) */

export type CityCostPage = {
  slug: string;
  cityName: string;
  title: string;
  metaDescription: string;
  localIntro: string;
  priceNotes: { heading: string; body: string }[];
  typicalRange: string;
  linkCityHub: string;
};

export const cityCostPages: CityCostPage[] = [
  {
    slug: "kumasi",
    cityName: "Kumasi",
    title: "Website Cost in Kumasi, Ghana (2026) | KayTech Africa",
    metaDescription:
      "How much does a website cost in Kumasi? 2026 GHS ranges for Ashanti Region businesses. remote delivery from KayTech Accra with Kumasi-focused SEO.",
    localIntro:
      "Kumasi businesses often compete on trust and mobile search across Ahodwo, Adum, and Kejetia trade corridors. Most KayTech Kumasi projects are delivered remotely with the same GHS tiers as nationwide. local difference is mainly SEO targeting (Kumasi + neighbourhood keywords) and occasional on-site content days, not a separate ‘Kumasi tax’ on development.",
    typicalRange: "GHS 1,800 – 8,000 for most SME sites; e-commerce from GHS 8,000",
    linkCityHub: "/web-design/kumasi-ghana",
    priceNotes: [
      {
        heading: "Remote-first delivery",
        body: "Discovery, design, and launch run on WhatsApp and video. no requirement to travel to Accra for a standard business site.",
      },
      {
        heading: "Local SEO line items",
        body: "Optional GHS 800–2,000 add-on for Kumasi landing copy, Google Business Profile alignment, and ‘service + Kumasi’ page structure.",
      },
      {
        heading: "When prices rise",
        body: "Large product catalogues, MoMo checkout, or multi-branch Ashanti listings. scoped like Accra e-commerce, not inflated by city alone.",
      },
    ],
  },
  {
    slug: "tema",
    cityName: "Tema",
    title: "Website Cost in Tema, Ghana (2026) | KayTech Africa",
    metaDescription:
      "Website prices for Tema and port-industrial businesses. 2026 GHS guide for Greater Accra east corridor. KayTech scopes quotes for logistics, retail, and services.",
    localIntro:
      "Tema and Community 25 brands often need credibility with corporate buyers and fast mobile UX for industrial customers. Pricing follows national KayTech tiers; Tema-specific work usually means clear location/service pages for Tema, Harbour City, and Spintex-linked logistics. not a different base rate.",
    typicalRange: "GHS 2,500 – 10,000 for B2B and service sites; stores from GHS 9,000",
    linkCityHub: "/web-design/tema-ghana",
    priceNotes: [
      {
        heading: "B2B & logistics sites",
        body: "Catalogue and enquiry forms for warehouses and distributors often sit in the GHS 6,000–14,000 band depending on SKU count.",
      },
      {
        heading: "Greater Accra proximity",
        body: "Optional in-person workshops in Tema/Accra for photography or training. travel billed transparently if requested.",
      },
      {
        heading: "Payments",
        body: "MoMo and Paystack setup uses the same integration fees as Accra. see /momo-paystack-integration-ghana.",
      },
    ],
  },
  {
    slug: "takoradi",
    cityName: "Takoradi",
    title: "Website Cost in Takoradi, Ghana (2026) | KayTech Africa",
    metaDescription:
      "Website cost guide for Takoradi and Western Region businesses. 2026 GHS ranges, remote delivery, and SEO for oil, logistics, and retail.",
    localIntro:
      "Takoradi and Sekondi businesses sell to corporate partners and mobile-first retail customers alike. KayTech delivers from Accra remotely; Western Region projects use standard national pricing with optional local SEO for Takoradi, Sekondi, and Tarkwa search terms.",
    typicalRange: "GHS 2,000 – 7,500 typical SME; e-commerce from GHS 8,500",
    linkCityHub: "/web-design/takoradi-ghana",
    priceNotes: [
      {
        heading: "Corporate credibility",
        body: "Professional service firms often invest GHS 4,000–9,000 for case studies, team pages, and secure contact flows.",
      },
      {
        heading: "Regional SEO",
        body: "Add Western Region keywords when your customers search ‘service + Takoradi’. usually part of SEO scope, not double web build cost.",
      },
      {
        heading: "Timeline",
        body: "Same 2–8 week windows as Accra; content readiness from your team is usually the gating factor.",
      },
    ],
  },
];

export function getCityCostBySlug(slug: string): CityCostPage | undefined {
  return cityCostPages.find((p) => p.slug === slug);
}

export function getCityCostPath(slug: string): string {
  return `/website-cost-ghana/${slug}`;
}
