import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import { getAllIndustries, getIndustryPath } from "@/lib/industry-pages";
import { contentImages } from "@/lib/image-seo";

export const metadata: Metadata = createPageMetadata({
  title: "Industry Website Design Ghana — Churches, Schools, Hotels & More | KayTech Africa",
  description:
    "Industry-specific website design in Ghana — churches, schools, restaurants, real estate, hotels, and NGOs. KayTech Africa builds mobile-first, SEO-ready sites nationwide.",
  path: "/industry",
  keywords: [
    "industry website design Ghana",
    "church website Ghana",
    "school website Ghana",
    "restaurant website Ghana",
    ...ghanaSearchKeywords,
  ],
});

export default function IndustryHubPage() {
  const industries = getAllIndustries();

  return (
    <>
      <PageHero
        title="Website design for your industry in Ghana"
        description="Every sector has different goals — enrolment, bookings, donations, or sales. KayTech builds industry-specific websites with the features Ghana businesses actually need."
        cta={{ label: "See our work", href: "/portfolio" }}
        secondaryCta={{ label: "Website cost guide", href: "/website-cost-ghana" }}
        image={contentImages.serviceWeb}
      />

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <Link
                key={item.slug}
                href={getIndustryPath(item.slug)}
                className="group rounded-3xl border border-hairline bg-surface-soft p-6 transition hover:border-accent/30 hover:shadow-card"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                  {item.industryName}
                </p>
                <h2 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-primary">
                  {item.heroTitle}
                </h2>
                <p className="mt-2 text-sm text-muted line-clamp-2">
                  {item.heroDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View {item.industryName.toLowerCase()} solutions
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
