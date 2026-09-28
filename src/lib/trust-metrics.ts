/** Verifiable studio facts. do not publish unverified client counts or tenure claims (TRUST-01). */
export const studioFoundedYear = 2020;

export const studioProofLine =
  "Accra-based studio serving clients across Ghana since 2020";

export const academyProofLine =
  "Practical cohorts led by working KayTech studio practitioners";

export const publicStudioStats = [
  { value: String(studioFoundedYear), label: "Founded in Accra" },
  { value: "3", label: "Published client case studies" },
  { value: "6+", label: "Academy learning tracks" },
  { value: "100%", label: "Mobile-first delivery" },
] as const;

/** Published starting prices (GHS). align with /website-cost-ghana & Accra hub (TRUST-03). */
export const servicePriceFromGhs: Record<
  string,
  { from: number; unit: "project" | "month"; label: string }
> = {
  "best-web-development-design-ghana": {
    from: 3500,
    unit: "project",
    label: "typical business website",
  },
  "best-ecommerce-development-accra-ghana": {
    from: 8000,
    unit: "project",
    label: "MoMo-ready online store",
  },
  "best-digital-marketing-accra-ghana": {
    from: 2000,
    unit: "month",
    label: "managed campaigns",
  },
  "best-software-as-a-services-saas-accra-ghana": {
    from: 18000,
    unit: "project",
    label: "MVP build",
  },
};

export const academyCourseFeesGhs = {
  "web-dev-101": { from: 2800, duration: "8–12 weeks" },
  "digital-marketing-101": { from: 2200, duration: "6–8 weeks" },
  "advanced-web-marketing": { from: 4500, duration: "12 weeks" },
  "saas-development": { from: 6500, duration: "12 weeks" },
} as const;

export function formatPriceFromGhs(amount: number, unit: "project" | "month"): string {
  const formatted = amount.toLocaleString("en-GH");
  return unit === "month" ? `from GHS ${formatted}/mo` : `from GHS ${formatted}`;
}
