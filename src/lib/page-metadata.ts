import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ogImage } from "@/lib/seo";

type PageMetaInput = {
  title: string;
  description: string;
  /** Page path used for Open Graph URL (the page being viewed). */
  path: string;
  /** Override when this URL should consolidate to another page (duplicate content). */
  canonicalPath?: string;
  keywords?: string[];
};

function toAbsoluteCanonical(path: string): string {
  if (path === "/" || path === "") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  canonicalPath,
  keywords = [],
}: PageMetaInput): Metadata {
  const canonical = toAbsoluteCanonical(canonicalPath ?? path);
  const ogPath = path === "/" ? "/" : path;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: ogPath,
      type: "website",
      locale: "en_GH",
      siteName: siteConfig.name,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}
