import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { getAllServicePages, getServicePath } from "@/lib/service-pages";
import { getAllTeamMembers, getTeamPath } from "@/lib/team-pages";

type StaticRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/** Core site pages — portfolio, blog, and service landings boosted for SEO. */
const staticRoutes: StaticRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
  { path: "/services", changeFrequency: "weekly", priority: 0.88 },
  { path: "/features", changeFrequency: "monthly", priority: 0.85 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.85 },
  { path: "/about", changeFrequency: "monthly", priority: 0.85 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
  { path: "/ai-automation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/academy", changeFrequency: "monthly", priority: 0.8 },
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

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: post.slug.includes("best-web-developer") ||
      post.slug.includes("best-web-designer")
      ? 0.8
      : 0.75,
  }));

  return [...staticEntries, ...serviceEntries, ...teamEntries, ...blogEntries];
}
