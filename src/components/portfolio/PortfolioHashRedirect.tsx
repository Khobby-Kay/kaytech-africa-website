"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCaseStudyBySlug } from "@/lib/portfolio";

/** Legacy /portfolio#slug links → /portfolio/slug (TRUST-02). */
export function PortfolioHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const study = getCaseStudyBySlug(hash);
    if (study) {
      router.replace(`/portfolio/${hash}`);
    }
  }, [router]);

  return null;
}
