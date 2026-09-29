import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getAllPosts } from "@/lib/blog";
import { getAllCityPages, getCityPath } from "@/lib/city-pages";
import { getAllAreas, getAreaPath } from "@/lib/area-pages";
import {
  agencyGrowthPaths,
  brandSitelinks,
} from "@/lib/discoverability";
import { getAllIndustries, getIndustryPath } from "@/lib/industry-pages";
import { footerNav } from "@/lib/navigation";
import { createPageMetadata } from "@/lib/page-metadata";
import { getAllCaseStudies, getCaseStudyPath } from "@/lib/portfolio";
import { coreServices } from "@/lib/core-services";
import { getAllServicePages, getServicePath } from "@/lib/service-pages";
import {
  cityCostPages,
  getCityCostPath,
} from "@/lib/website-cost-city-content";

export const metadata: Metadata = createPageMetadata({
  title: "Site Map | KayTech Africa",
  description:
    "Browse every main page on KayTech Africa: services, academy, portfolio, blog, city guides, and industry landing pages in Ghana.",
  path: "/site-map",
});

function LinkSection({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <section className="rounded-3xl border border-hairline bg-canvas p-6">
      <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
      <ul className="mt-4 columns-1 gap-x-8 text-sm sm:columns-2">
        {links.map((link) => (
          <li key={link.href} className="mb-2 break-inside-avoid">
            <Link
              href={link.href}
              className="font-medium text-primary hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function SiteMapPage() {
  const posts = getAllPosts();
  const services = getAllServicePages();
  const cities = getAllCityPages();
  const areas = getAllAreas();
  const industries = getAllIndustries();
  const caseStudies = getAllCaseStudies();

  return (
    <Container className="px-5 py-12 lg:px-20 lg:py-16">
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Site map
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Every major section of kaytechafrica.com in one place. Helps visitors
          and search engines find services, academy courses, city pages, and
          guides.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <LinkSection
          title="Main"
          links={brandSitelinks.map((l) => ({
            href: l.path,
            label: l.name,
          }))}
        />
        <LinkSection
          title="Growth & payments"
          links={agencyGrowthPaths.map((l) => ({
            href: l.path,
            label: l.name,
          }))}
        />
        <LinkSection
          title="Services"
          links={[
            ...coreServices.map((s) => ({ href: s.href, label: s.title })),
            ...services
              .filter(
                (p) =>
                  !coreServices.some((c) => c.serviceSlug === p.slug),
              )
              .map((p) => ({
                href: getServicePath(p.slug),
                label: p.heroTitle,
              })),
          ]}
        />
        <LinkSection
          title="Academy"
          links={[
            { href: "/academy", label: "Academy hub" },
            {
              href: "/academy/web-development-course",
              label: "Web Development course",
            },
            {
              href: "/academy/digital-marketing-course",
              label: "Digital Marketing course",
            },
            {
              href: "/academy/advanced-web-development-marketing-course",
              label: "Advanced Web & Marketing course",
            },
            {
              href: "/academy/saas-development-course",
              label: "SaaS Product Development course",
            },
            { href: "/academy/online-courses", label: "Online courses" },
            {
              href: "/academy/graduate-outcomes",
              label: "Graduate outcomes",
            },
            {
              href: "/academy/scholarships-payment-plans",
              label: "Scholarships & payment plans",
            },
          ]}
        />
        <LinkSection
          title="Website cost by city"
          links={[
            { href: "/website-cost-ghana", label: "Ghana overview" },
            ...cityCostPages.map((c) => ({
              href: getCityCostPath(c.slug),
              label: c.cityName,
            })),
          ]}
        />
        <LinkSection
          title="Web design by city"
          links={cities.map((c) => ({
            href: getCityPath(c.slug),
            label: c.cityName,
          }))}
        />
        <LinkSection
          title="Areas in Greater Accra"
          links={areas.map((a) => ({
            href: getAreaPath(a.slug),
            label: a.cityName,
          }))}
        />
        <LinkSection
          title="Industries"
          links={[
            { href: "/industry", label: "Industry hub" },
            ...industries.map((i) => ({
              href: getIndustryPath(i.slug),
              label: i.industryName,
            })),
          ]}
        />
        <LinkSection
          title="Case studies"
          links={[
            { href: "/portfolio", label: "Portfolio hub" },
            ...caseStudies.map((s) => ({
              href: getCaseStudyPath(s.slug),
              label: s.client,
            })),
          ]}
        />
        <LinkSection
          title="Blog"
          links={[
            { href: "/blog", label: "All posts" },
            ...posts.map((p) => ({
              href: `/blog/${p.slug}`,
              label: p.title,
            })),
          ]}
        />
        <LinkSection title="Company" links={footerNav.company} />
        <LinkSection title="Legal" links={footerNav.legal} />
      </div>
    </Container>
  );
}
