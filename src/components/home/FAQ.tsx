"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { allFaqs } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type FAQProps = {
  showHeading?: boolean;
  limit?: number;
  showFooter?: boolean;
};

export function FAQ({
  showHeading = true,
  limit,
  showFooter = true,
}: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);
  const items = limit ? allFaqs.slice(0, limit) : allFaqs;

  return (
    <section id="faq" className="bg-canvas px-5 py-16 lg:px-20 lg:py-32">
      <Container>
        {showHeading ? (
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
              FAQ
            </span>
            <h2 className="mt-6 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Questions, answered.
            </h2>
          </div>
        ) : null}

        <div
          className={cn(
            "mx-auto max-w-3xl divide-y divide-hairline border-y border-hairline",
            showHeading ? "mt-12" : "mt-0"
          )}
        >
          {items.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-ink">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted transition",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all",
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {limit && limit < allFaqs.length ? (
          <p className="mx-auto mt-8 max-w-3xl text-center">
            <Link
              href="/faq"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all {allFaqs.length} questions
            </Link>
          </p>
        ) : null}

        {showFooter ? (
          <div className="mx-auto mt-16 max-w-xl text-center">
            <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Still have questions?
            </h3>
            <p className="mt-3 text-muted">
              Our team is one message away. WhatsApp us or email — we reply fast.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex h-11 items-center rounded-pill border border-hairline px-6 text-sm font-semibold text-ink transition hover:bg-surface-soft"
              >
                Email support
              </a>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
              >
                Contact us
              </Link>
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
