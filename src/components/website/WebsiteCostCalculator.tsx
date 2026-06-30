"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const siteTypes = [
  {
    id: "starter",
    label: "Starter / landing page",
    range: "GHS 800 – 2,500",
    note: "Quick online presence, 1–5 pages",
  },
  {
    id: "business",
    label: "Business website",
    range: "GHS 2,500 – 6,000",
    note: "Custom design, SEO, lead capture",
  },
  {
    id: "ecommerce",
    label: "E-commerce store",
    range: "GHS 5,000 – 15,000+",
    note: "MoMo, Paystack, product catalogue",
  },
  {
    id: "enterprise",
    label: "Custom / enterprise",
    range: "GHS 15,000 – 50,000+",
    note: "Portals, integrations, advanced features",
  },
] as const;

export function WebsiteCostCalculator() {
  const [selected, setSelected] = useState<(typeof siteTypes)[number]["id"]>("business");
  const active = siteTypes.find((t) => t.id === selected)!;

  return (
    <div className="rounded-3xl border border-hairline bg-surface-soft p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold text-ink">
        Estimate your website budget
      </h3>
      <p className="mt-2 text-sm text-muted">
        Market ranges in Ghana (2026). Your exact quote depends on features — we
        scope every project individually.
      </p>

      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {siteTypes.map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() => setSelected(type.id)}
            className={cn(
              "rounded-xl border px-4 py-3 text-left text-sm transition",
              selected === type.id
                ? "border-accent bg-surface-accent font-semibold text-ink"
                : "border-hairline bg-canvas text-muted hover:border-accent/30",
            )}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-accent/25 bg-canvas p-5">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          Typical range
        </p>
        <p className="mt-1 font-display text-2xl font-bold text-ink">{active.range}</p>
        <p className="mt-2 text-sm text-muted">{active.note}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/contact"
          data-track="get_started_click"
          data-track-location="cost_calculator"
          className="inline-flex h-10 items-center rounded-pill bg-primary px-5 text-sm font-semibold text-on-primary"
        >
          Get your exact quote
        </Link>
        <Link
          href="/pricing"
          className="inline-flex h-10 items-center rounded-pill border border-hairline bg-canvas px-5 text-sm font-semibold text-ink"
        >
          Our pricing approach
        </Link>
      </div>
    </div>
  );
}
