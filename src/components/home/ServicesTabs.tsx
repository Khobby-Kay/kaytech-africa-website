"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { coreServices } from "@/lib/core-services";
import { cn } from "@/lib/utils";

const tabLabels: Record<(typeof coreServices)[number]["id"], string> = {
  web: "Web",
  ai: "AI",
  ecommerce: "Store",
  marketing: "Marketing",
  mobile: "Mobile",
  erp: "ERP",
  crm: "CRM",
  payments: "Payments",
};

export function ServicesTabs() {
  const [active, setActive] = useState<(typeof coreServices)[number]["id"]>(
    coreServices[0].id,
  );
  const current = coreServices.find((s) => s.id === active)!;

  return (
    <section id="services" className="bg-canvas px-5 py-16 lg:px-20 lg:py-32">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
            What we build
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Eight services. One studio. From your first website to ERP, CRM, and
            payments.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-hairline pb-px">
          {coreServices.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={cn(
                "-mb-px border-b-2 px-3 py-3 text-sm font-semibold transition sm:px-4",
                active === tab.id
                  ? "border-primary text-ink"
                  : "border-transparent text-muted hover:text-ink",
              )}
            >
              {tabLabels[tab.id]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
              {current.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">
              {current.description}
            </p>
            <Link
              href={current.href}
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
            >
              View {current.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {current.tags.map((tag) => (
              <div
                key={tag}
                className="rounded-2xl border border-hairline bg-surface-soft p-5"
              >
                <p className="font-semibold text-ink">{tag}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Scoped for Ghanaian businesses and mobile-first users.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
