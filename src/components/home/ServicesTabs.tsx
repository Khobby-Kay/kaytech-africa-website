"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "ai",
    label: "AI",
    title: "Automate workflows that eat your week.",
    description:
      "Chatbots, intelligent assistants, and business process automation — scoped for African operators who need results, not demos.",
    cta: "Try KayTech now",
    features: [
      {
        title: "Live in days",
        body: "Ship working automations in sprints, not quarters.",
      },
      {
        title: "WhatsApp-native",
        body: "Meet customers where they already are.",
      },
      {
        title: "LLM integrations",
        body: "Custom assistants wired to your data and tools.",
      },
      {
        title: "Human handoff",
        body: "Bots escalate cleanly when a person is needed.",
      },
    ],
  },
  {
    id: "web",
    label: "Web",
    title: "Sites that load fast on 3G and convert on mobile.",
    description:
      "Next.js, e-commerce, and SaaS builds engineered for African networks, MoMo checkout, and mobile-first users.",
    cta: "Try KayTech now",
    features: [
      {
        title: "3G-optimised",
        body: "Every page earns its weight on slow networks.",
      },
      {
        title: "MoMo & Paystack",
        body: "Payments built for how Ghana actually pays.",
      },
      {
        title: "Conversion-first",
        body: "Pretty is nice. Revenue is better.",
      },
      {
        title: "Deploy-ready",
        body: "From Figma to production on modern stacks.",
      },
    ],
  },
  {
    id: "web3",
    label: "Web3",
    title: "Blockchain with real utility, not hype.",
    description:
      "Smart contracts, tokenized systems, and dApps — security-first builds for teams exploring Web3 in African markets.",
    cta: "Try KayTech now",
    features: [
      {
        title: "Smart contracts",
        body: "Audited, documented, production-grade code.",
      },
      {
        title: "Wallet flows",
        body: "Onboarding that real users can finish.",
      },
      {
        title: "dApp builds",
        body: "Full-stack decentralised products.",
      },
      {
        title: "IoT & robotics",
        body: "Connected hardware for industry and agri.",
      },
    ],
  },
  {
    id: "growth",
    label: "Growth",
    title: "Turn attention into measurable revenue.",
    description:
      "Performance campaigns, brand strategy, and growth funnels built for African markets — SEO, paid media, and analytics.",
    cta: "Try KayTech now",
    features: [
      {
        title: "SEO & content",
        body: "Rank and convert in local search.",
      },
      {
        title: "Paid media",
        body: "Campaigns tuned for African audiences.",
      },
      {
        title: "Analytics",
        body: "Track what actually drives revenue.",
      },
      {
        title: "Brand systems",
        body: "Cohesive identity across every touchpoint.",
      },
    ],
  },
] as const;

export function ServicesTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("ai");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="services" className="bg-canvas px-5 py-16 lg:px-20 lg:py-32">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
            Everything you need
          </span>
          <h2 className="mt-6 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
            The full tech stack.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Four pillars. One studio. Every digital flow you need to run a
            modern African business.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-hairline pb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={cn(
                "-mb-px border-b-2 px-5 py-3 text-sm font-semibold transition",
                active === tab.id
                  ? "border-primary text-ink"
                  : "border-transparent text-muted hover:text-ink"
              )}
            >
              {tab.label}
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
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
            >
              {current.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {current.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-hairline bg-surface-soft p-5"
              >
                <p className="font-semibold text-ink">{f.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
