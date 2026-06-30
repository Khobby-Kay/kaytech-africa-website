import { contentImages } from "@/lib/image-seo";

export type CaseStudy = {
  slug: string;
  client: string;
  logo: { src: string; alt: string };
  sector: string;
  location: string;
  timeline: string;
  headline: string;
  summary: string;
  result: string;
  challenge: string[];
  solution: string[];
  results: string[];
  keyInsight: string;
  tags: string[];
  image: { src: string; alt: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "melcom",
    client: "Melcom",
    logo: { src: "/images/clients/melcom.png", alt: "Melcom logo" },
    sector: "Retail",
    location: "Accra, Ghana",
    timeline: "21 days",
    headline: "3–5 enquiries/day → 20+ enquiries/day",
    summary:
      "Conversion-focused website with WhatsApp funnel integration — turning walk-in interest into structured, trackable leads around the clock.",
    result: "20+ daily enquiries via WhatsApp; 70% of conversions through chat",
    challenge: [
      "Strong physical retail presence but no structured online enquiry system",
      "Customers mostly walked in or called randomly — leads lost after hours",
      "No tracking of where enquiries came from",
    ],
    solution: [
      "Mobile-first conversion website built for Ghanaian mobile users",
      "WhatsApp click-to-chat funnel on every product and service page",
      "Mobile Money payment integration setup",
      "Fast-loading design optimised for low data usage",
      "Clear CTA flow: Enquire → Chat → Convert",
      "Basic analytics tracking for lead sources",
    ],
    results: [
      "3–5 inquiries/day grew to 20+ inquiries/day within the first 30 days",
      "WhatsApp became the main sales channel (70% of conversions)",
      "Reduced missed customer enquiries by over 60%",
      "Client reported more structured customer flow than physical store alone",
    ],
    keyInsight:
      "When customers are guided into a WhatsApp funnel instead of just browsing, conversion rates increase significantly in African markets.",
    tags: ["WhatsApp", "MoMo", "Lead capture", "Mobile-first"],
    image: contentImages.whyPayments,
  },
  {
    slug: "the-alfred",
    client: "The Alfred",
    logo: { src: "/images/clients/the-alfred.png", alt: "The Alfred logo" },
    sector: "Professional services",
    location: "Accra, Ghana",
    timeline: "14–18 days",
    headline: "Website became the pre-sales pitch",
    summary:
      "Authority-based brand website with trust signals and proof of work — so high-value clients arrive already convinced.",
    result: "Cold leads reference the site before meetings; less reliance on verbal pitch",
    challenge: [
      "No professional online presence to support high-value client conversations",
      "Difficulty closing premium clients without visual credibility",
      "Heavy reliance on referrals with no central portfolio",
    ],
    solution: [
      "Professional landing page focused on trust signals",
      "Service breakdown structured for clarity — not confusion",
      "Proof-of-work section for instant credibility",
      "Linked contact system: email, WhatsApp, and booking flow",
      "SEO-ready structure for future local visibility",
    ],
    results: [
      "Improved conversion rate during client pitch meetings",
      "Increased trust from cold leads who discovered the brand online",
      "Clients began referencing the website before meetings",
      "Reduced dependency on long verbal explanations in every sales call",
    ],
    keyInsight:
      "For service businesses, a website is not information — it is pre-sales persuasion.",
    tags: ["Web design", "Credibility", "SEO-ready", "Lead capture"],
    image: contentImages.serviceGrowth,
  },
  {
    slug: "voltic",
    client: "Voltic",
    logo: { src: "/images/clients/voltic.png", alt: "Voltic logo" },
    sector: "Trading & commerce",
    location: "Ghana",
    timeline: "3 weeks",
    headline: "Orders from beyond Accra via WhatsApp commerce",
    summary:
      "Lightweight e-commerce with product catalogue, WhatsApp ordering, and MoMo — built for how Ghanaians actually buy online.",
    result: "Expanded reach beyond immediate location; repeat WhatsApp orders",
    challenge: [
      "Sales happened only through physical interactions",
      "No structured catalogue or online visibility",
      "Losing younger, digital-first customers to competitors",
      "Could not scale beyond local foot traffic",
    ],
    solution: [
      "Simple product catalogue — no unnecessary checkout friction",
      "Mobile-first browsing experience for everyday smartphones",
      "WhatsApp ordering system instead of complex checkout flows",
      "Mobile Money payment integration options",
      "Fast-loading design for low-bandwidth users",
    ],
    results: [
      "Expanded customer base beyond the immediate store location",
      "Increased repeat enquiries via WhatsApp",
      "Reduced friction in the ordering process",
      "Client began receiving orders from outside the Accra region",
    ],
    keyInsight:
      "In Ghana, WhatsApp + Mobile Money commerce often outperforms complex checkout systems.",
    tags: ["E-commerce", "WhatsApp", "MoMo", "Mobile-first"],
    image: contentImages.principleMomo,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
