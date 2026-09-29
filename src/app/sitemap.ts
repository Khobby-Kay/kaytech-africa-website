import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllCityPages, getCityPath } from "@/lib/city-pages";
import { getAllAreas, getAreaPath } from "@/lib/area-pages";
import { getAllIndustries, getIndustryPath } from "@/lib/industry-pages";
import { getAllPosts } from "@/lib/blog";
import { getIndustryBySlug } from "@/lib/industry-pages";
import { getAllServicePages, getServicePath } from "@/lib/service-pages";
import { getAllTeamMembers, getTeamPath } from "@/lib/team-pages";
import { getAllCaseStudies, getCaseStudyPath } from "@/lib/portfolio";
import { cityCostPages, getCityCostPath } from "@/lib/website-cost-city-content";

type StaticRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/** Core site pages. portfolio, blog, and service landings boosted for SEO. */
const staticRoutes: StaticRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
  { path: "/services", changeFrequency: "weekly", priority: 0.88 },
  { path: "/features", changeFrequency: "monthly", priority: 0.85 },
  { path: "/website-cost-ghana", changeFrequency: "monthly", priority: 0.9 },
  { path: "/website-hosting-maintenance-ghana", changeFrequency: "monthly", priority: 0.85 },
  { path: "/whatsapp-ordering-website-ghana", changeFrequency: "monthly", priority: 0.87 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.85 },
  { path: "/industry", changeFrequency: "monthly", priority: 0.88 },
  { path: "/digital-growth-bundle", changeFrequency: "monthly", priority: 0.87 },
  { path: "/seo-packages-ghana", changeFrequency: "monthly", priority: 0.87 },
  { path: "/momo-paystack-integration-ghana", changeFrequency: "monthly", priority: 0.86 },
  { path: "/about", changeFrequency: "monthly", priority: 0.85 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
  { path: "/ai-automation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/academy", changeFrequency: "monthly", priority: 0.88 },
  { path: "/academy/web-development-course", changeFrequency: "monthly", priority: 0.9 },
  { path: "/academy/digital-marketing-course", changeFrequency: "monthly", priority: 0.87 },
  { path: "/academy/advanced-web-development-marketing-course", changeFrequency: "monthly", priority: 0.84 },
  { path: "/academy/saas-development-course", changeFrequency: "monthly", priority: 0.84 },
  { path: "/academy/online-courses", changeFrequency: "monthly", priority: 0.85 },
  { path: "/academy/graduate-outcomes", changeFrequency: "monthly", priority: 0.84 },
  { path: "/academy/scholarships-payment-plans", changeFrequency: "monthly", priority: 0.83 },
  { path: "/site-map", changeFrequency: "monthly", priority: 0.55 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.75 },
  { path: "/support", changeFrequency: "monthly", priority: 0.7 },
  { path: "/security", changeFrequency: "yearly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, changeFrequency, priority }) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    }),
  );

  const serviceEntries: MetadataRoute.Sitemap = getAllServicePages().map((page) => ({
    url: `${siteConfig.url}${getServicePath(page.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const teamEntries: MetadataRoute.Sitemap = getAllTeamMembers().map((member) => ({
    url: `${siteConfig.url}${getTeamPath(member.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts()
    .filter((post) => !getIndustryBySlug(post.slug))
    .map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority:
      post.slug.includes("how-to-choose-best-web-developer") ? 0.8 : 0.75,
  }));

  const cityEntries: MetadataRoute.Sitemap = getAllCityPages().map((page) => ({
    url: `${siteConfig.url}${getCityPath(page.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.88,
  }));

  const areaEntries: MetadataRoute.Sitemap = getAllAreas().map((page) => ({
    url: `${siteConfig.url}${getAreaPath(page.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.86,
  }));

  const industryEntries: MetadataRoute.Sitemap = getAllIndustries().map((page) => ({
    url: `${siteConfig.url}${getIndustryPath(page.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.87,
  }));

  const cityCostEntries: MetadataRoute.Sitemap = cityCostPages.map((p) => ({
    url: `${siteConfig.url}${getCityCostPath(p.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.84,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = getAllCaseStudies().map(
    (study) => ({
      url: `${siteConfig.url}${getCaseStudyPath(study.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.88,
    }),
  );

  return [
    ...staticEntries,
    ...serviceEntries,
    ...cityEntries,
    ...areaEntries,
    ...industryEntries,
    ...teamEntries,
    ...blogEntries,
    ...caseStudyEntries,
    ...cityCostEntries,
  ];
}
