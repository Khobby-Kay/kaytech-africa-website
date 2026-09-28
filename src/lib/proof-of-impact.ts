import { caseStudies } from "@/lib/portfolio";
import { stats } from "@/lib/site";

/** Roll-up metrics. polished from approved case study figures only. */
export const aggregateImpactMetrics = [
  {
    value: stats[0].value,
    label: stats[0].label,
    detail: "Accra studio · Ghana-wide delivery",
  },
  {
    value: "4–6×",
    label: "More daily enquiries",
    detail: "Melcom · 3–5 to 20+ per day (first 30 days)",
  },
  {
    value: "7 in 10",
    label: "Via WhatsApp",
    detail: "Melcom · primary conversion channel (70%)",
  },
  {
    value: "~60%",
    label: "Fewer missed leads",
    detail: "After-hours capture · retail client",
  },
] as const;

export const proofOfImpactCopy = {
  title: "What changed after launch",
  description:
    "Numbers from client projects: WhatsApp funnels, Mobile Money checkouts, faster mobile pages and lead forms that land in the right inbox.",
} as const;

/** Client outcome cards. sourced from case studies for a single proof layer. */
export const clientImpactHighlights = caseStudies.map((study) => ({
  slug: study.slug,
  client: study.client,
  logo: study.logo,
  sector: study.sector,
  headline: study.headline,
  highlightMetric: study.highlightMetric,
  result: study.result,
  timeline: study.timeline,
  topMetric: study.metrics[0],
}));
