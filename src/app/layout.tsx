import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/analytics/Analytics";
import { AiAssistant } from "@/components/assistant/AiAssistant";
import { siteConfig } from "@/lib/site";
import {
  APPLE_ICON,
  FAVICON_192,
  FAVICON_512,
  FAVICON_ICO,
  FAVICON_PRIMARY,
  withBrandVersion,
} from "@/lib/brand-assets";
import {
  defaultDescription,
  defaultTitle,
  ogImage,
  seoKeywords,
  siteName,
} from "@/lib/seo";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a4971",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s · ${siteConfig.shortName}`,
  },
  description: defaultDescription,
  keywords: [...seoKeywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
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
  alternates: {
    canonical: "/",
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteConfig.url,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage.url],
    creator: "@kaytech_africa",
    site: "@kaytech_africa",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: FAVICON_PRIMARY, sizes: "96x96", type: "image/png" },
      { url: FAVICON_ICO, sizes: "48x48", type: "image/x-icon" },
      { url: FAVICON_192, sizes: "192x192", type: "image/png" },
      { url: FAVICON_512, sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: FAVICON_ICO }],
    apple: [
      {
        url: withBrandVersion(APPLE_ICON),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  other: {
    "geo.region": "GH-AA",
    "geo.placename": "Accra",
    "geo.position": `${siteConfig.location.coordinates.lat};${siteConfig.location.coordinates.lng}`,
    ICBM: `${siteConfig.location.coordinates.lat}, ${siteConfig.location.coordinates.lng}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GH">
      <head>
        <JsonLd />
        {/* Single primary favicon for Google Search — stable URL, square PNG */}
        <link
          rel="icon"
          href={FAVICON_PRIMARY}
          type="image/png"
          sizes="96x96"
        />
      </head>
      <body className="min-h-screen bg-canvas pb-[calc(46px+env(safe-area-inset-bottom))] font-sans text-ink antialiased lg:pb-0">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
        <AiAssistant />
        <Analytics />
      </body>
    </html>
  );
}
