import { contentImages } from "@/lib/image-seo";
import type { ImpactMetric } from "@/components/ui/ImpactMetricBar";

export type CaseStudy = {
  slug: string;
  client: string;
  logo: { src: string; alt: string };
  sector: string;
  location: string;
  timeline: string;
  headline: string;
  highlightMetric: string;
  summary: string;
  result: string;
  metrics: ImpactMetric[];
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
    headline: "Up to 4–6× daily enquiries in the first 30 days",
    highlightMetric: "20+ enquiries/day · 7 in 10 via WhatsApp",
    summary:
      "Conversion-focused website with WhatsApp funnel integration — turning walk-in interest into structured, trackable leads around the clock.",
    result: "4–6× more daily enquiries; 7 in 10 conversions through WhatsApp chat",
    metrics: [
      {
        label: "Daily enquiries",
        before: "3–5 / day",
        after: "20+ / day",
        beforeScale: 20,
        afterScale: 100,
        period: "First 30 days post-launch",
      },
      {
        label: "Conversions via WhatsApp",
        before: "Ad hoc calls",
        after: "70% of sales",
        beforeScale: 30,
        afterScale: 70,
      },
      {
        label: "Missed after-hours leads",
        before: "High volume lost",
        after: "~60% reduction",
        beforeScale: 100,
        afterScale: 40,
      },
    ],
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
      "Daily enquiries grew from 3–5 to 20+ within the first 30 days — up to 4–6×",
      "7 in 10 conversions now flow through WhatsApp (70% of sales)",
      "Cut missed after-hours enquiries by roughly 60%",
      "More structured customer flow than walk-in and phone alone",
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
    highlightMetric: "Cold leads arrive site-ready · faster closes in meetings",
    summary:
      "Authority-based brand website with trust signals and proof of work — so high-value clients arrive already convinced.",
    result: "Prospects reference the site before calls; pitches start ahead, not from zero",
    metrics: [
      {
        label: "Lead source mix",
        before: "Referrals only",
        after: "Web + referral",
        beforeScale: 35,
        afterScale: 85,
      },
      {
        label: "Pre-meeting preparation",
        before: "Long verbal intro",
        after: "Site reviewed first",
        beforeScale: 25,
        afterScale: 90,
      },
      {
        label: "Pitch meeting outcomes",
        before: "Trust built on call",
        after: "Trust built pre-call",
        beforeScale: 40,
        afterScale: 80,
      },
    ],
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
      "Higher conversion rate in client pitch meetings — prospects arrive informed",
      "Cold leads who find the brand online show stronger trust from the first call",
      "Clients routinely reference the website before meetings",
      "Less time spent on basic explanations; more time closing",
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
    headline: "Regional orders opened up via WhatsApp commerce",
    highlightMetric: "Orders beyond Accra · repeat WhatsApp buyers",
    summary:
      "Lightweight e-commerce with product catalogue, WhatsApp ordering, and MoMo — built for how Ghanaians actually buy online.",
    result: "Catalogue + WhatsApp + MoMo — orders from outside Accra, less ordering friction",
    metrics: [
      {
        label: "Customer geography",
        before: "Local foot traffic",
        after: "Accra + regional",
        beforeScale: 30,
        afterScale: 85,
      },
      {
        label: "Ordering channel",
        before: "In-person only",
        after: "WhatsApp + MoMo",
        beforeScale: 25,
        afterScale: 90,
      },
      {
        label: "Repeat digital orders",
        before: "Rare",
        after: "Growing weekly",
        beforeScale: 20,
        afterScale: 75,
      },
    ],
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
      "Customer base expanded beyond the immediate store location",
      "Repeat WhatsApp orders became a regular channel",
      "Ordering friction dropped — browse, chat, pay on mobile",
      "First orders received from outside the Accra region",
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
