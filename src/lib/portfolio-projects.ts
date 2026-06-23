import { contentImages } from "@/lib/image-seo";

/**
 * Featured-work showcase entries.
 *
 * NOTE: These are sample reference sites used as visual placeholders while real
 * KayTech project screenshots and case studies are collected. Swap the `url`,
 * `image`, and copy for genuine KayTech client work as it becomes available.
 */
export type PortfolioProject = {
  name: string;
  sector: string;
  location: string;
  url: string;
  summary: string;
  image: { src: string; alt: string };
};

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Toyota Motor Manufacturing",
    sector: "Automotive · Manufacturing",
    location: "Canada",
    url: "https://tmmc.ca/en/",
    summary:
      "A bold corporate and careers website for a major automotive manufacturer, built for clarity, recruitment, and brand storytelling.",
    image: contentImages.serviceWeb,
  },
  {
    name: "LA City Law",
    sector: "Legal · Law firm",
    location: "Los Angeles, USA",
    url: "https://lacitylaw.com/",
    summary:
      "A conversion-focused law firm website with strong calls to action, case results, and a lead-capture intake flow.",
    image: contentImages.serviceGrowth,
  },
  {
    name: "Arguson Projects",
    sector: "Construction · Real estate",
    location: "Canada",
    url: "https://www.arguson.ca/",
    summary:
      "A premium construction and project-management site showcasing a portfolio of industrial, commercial, and residential builds.",
    image: contentImages.principleSpeed,
  },
  {
    name: "Hollard Insurance Ghana",
    sector: "Insurance · Finance",
    location: "Accra, Ghana",
    url: "https://www.hollard.com.gh/",
    summary:
      "A customer-first insurance platform with quote forms, product discovery, and a WhatsApp-driven service experience.",
    image: contentImages.whyPayments,
  },
  {
    name: "SIC Insurance",
    sector: "Insurance · Finance",
    location: "Accra, Ghana",
    url: "https://www.sic-gh.com/",
    summary:
      "A nationwide insurance website with policy pages, claims guidance, branch locator, and a busy news and media hub.",
    image: contentImages.principleConvert,
  },
  {
    name: "Davies Howe LLP",
    sector: "Legal · Law firm",
    location: "Toronto, Canada",
    url: "https://davieshowe.com/",
    summary:
      "A refined legal practice website highlighting expertise across land development, expropriation, and litigation.",
    image: contentImages.whyStudio,
  },
  {
    name: "Oxford Properties",
    sector: "Real estate · Investment",
    location: "Global",
    url: "https://www.oxfordproperties.com/",
    summary:
      "A global real estate investor and developer site with a rich portfolio, leadership profiles, and impact storytelling.",
    image: contentImages.principleLocal,
  },
  {
    name: "AMP Smart EMV",
    sector: "Fintech · Payments",
    location: "International",
    url: "https://www.amobilepayment.com/",
    summary:
      "A modern fintech product site presenting a payments ecosystem of devices, POS, and self-service solutions.",
    image: contentImages.serviceAi,
  },
  {
    name: "FanMilk Ghana",
    sector: "FMCG · Food & beverage",
    location: "Ghana",
    url: "https://fanmilk.danone.com/our-footprint/ghana.html",
    summary:
      "A vibrant consumer-brand site for a leading dairy and frozen-treats company, organised around products and heritage.",
    image: contentImages.principleMomo,
  },
];
