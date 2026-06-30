import { caseStudies } from "@/lib/portfolio";
import { stats } from "@/lib/site";

/** Roll-up metrics shown in the proof-of-impact layer — studio-wide + client outcomes. */
export const aggregateImpactMetrics = [
  {
    value: stats[0].value,
    label: stats[0].label,
    detail: "Accra studio · Ghana-wide delivery",
  },
  {
    value: "20+",
    label: "Daily enquiries",
    detail: "Melcom · first 30 days after launch",
  },
  {
    value: "70%",
    label: "WhatsApp conversions",
    detail: "Melcom · primary sales channel",
  },
  {
    value: "60%",
    label: "Fewer missed leads",
    detail: "After-hours capture · retail client",
  },
] as const;

export const proofOfImpactCopy = {
  eyebrow: "Proof of impact",
  title: "Measurable outcomes — not just pretty websites",
  description:
    "KayTech Africa builds for Ghanaian reality: WhatsApp funnels, Mobile Money, mobile-first speed, and lead systems that show up in your inbox — not just your analytics dashboard.",
} as const;

/** Client outcome cards — sourced from case studies for a single proof layer. */
export const clientImpactHighlights = caseStudies.map((study) => ({
  slug: study.slug,
  client: study.client,
  logo: study.logo,
  sector: study.sector,
  headline: study.headline,
  result: study.result,
  timeline: study.timeline,
}));
