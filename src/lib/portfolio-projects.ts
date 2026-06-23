import { SEO_IMAGE_PHRASE, SEO_IMAGE_SLUG } from "@/lib/image-seo";

/**
 * Featured-work showcase entries.
 *
 * Each entry shows a locally-hosted homepage screenshot (captured via
 * scripts/capture-portfolio-shots.mjs) so previews load instantly with no
 * external dependency. Swap the `url`, `image`, and copy for genuine KayTech
 * client work as it becomes available.
 */
export type PortfolioProject = {
  name: string;
  sector: string;
  location: string;
  url: string;
  summary: string;
  image: { src: string; alt: string };
};

function shot(index: number, name: string) {
  return {
    src: `/images/portfolio/${SEO_IMAGE_SLUG}-portfolio-${index}.jpg`,
    alt: `${name} website preview — ${SEO_IMAGE_PHRASE} portfolio ${index}`,
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Toyota Motor Manufacturing",
    sector: "Automotive · Manufacturing",
    location: "Canada",
    url: "https://tmmc.ca/en/",
    summary:
      "A bold corporate and careers website for a major automotive manufacturer, built for clarity, recruitment, and brand storytelling.",
    image: shot(1, "Toyota Motor Manufacturing"),
  },
  {
    name: "LA City Law",
    sector: "Legal · Law firm",
    location: "Los Angeles, USA",
    url: "https://lacitylaw.com/",
    summary:
      "A conversion-focused law firm website with strong calls to action, case results, and a lead-capture intake flow.",
    image: shot(2, "LA City Law"),
  },
  {
    name: "Arguson Projects",
    sector: "Construction · Real estate",
    location: "Canada",
    url: "https://www.arguson.ca/",
    summary:
      "A premium construction and project-management site showcasing a portfolio of industrial, commercial, and residential builds.",
    image: shot(3, "Arguson Projects"),
  },
  {
    name: "Hollard Insurance Ghana",
    sector: "Insurance · Finance",
    location: "Accra, Ghana",
    url: "https://www.hollard.com.gh/",
    summary:
      "A customer-first insurance platform with quote forms, product discovery, and a WhatsApp-driven service experience.",
    image: shot(4, "Hollard Insurance Ghana"),
  },
  {
    name: "SIC Insurance",
    sector: "Insurance · Finance",
    location: "Accra, Ghana",
    url: "https://www.sic-gh.com/",
    summary:
      "A nationwide insurance website with policy pages, claims guidance, branch locator, and a busy news and media hub.",
    image: shot(5, "SIC Insurance"),
  },
  {
    name: "Davies Howe LLP",
    sector: "Legal · Law firm",
    location: "Toronto, Canada",
    url: "https://davieshowe.com/",
    summary:
      "A refined legal practice website highlighting expertise across land development, expropriation, and litigation.",
    image: shot(6, "Davies Howe LLP"),
  },
  {
    name: "Oxford Properties",
    sector: "Real estate · Investment",
    location: "Global",
    url: "https://www.oxfordproperties.com/",
    summary:
      "A global real estate investor and developer site with a rich portfolio, leadership profiles, and impact storytelling.",
    image: shot(7, "Oxford Properties"),
  },
  {
    name: "AMP Smart EMV",
    sector: "Fintech · Payments",
    location: "International",
    url: "https://www.amobilepayment.com/",
    summary:
      "A modern fintech product site presenting a payments ecosystem of devices, POS, and self-service solutions.",
    image: shot(8, "AMP Smart EMV"),
  },
  {
    name: "FanMilk Ghana",
    sector: "FMCG · Food & beverage",
    location: "Ghana",
    url: "https://fanmilk.danone.com/our-footprint/ghana.html",
    summary:
      "A vibrant consumer-brand site for a leading dairy and frozen-treats company, organised around products and heritage.",
    image: shot(9, "FanMilk Ghana"),
  },
];
