/**
 * Bump when logo.jpg or generated icons change — busts browser cache for UI assets.
 * Keep in sync after `npm run brand-assets`.
 *
 * Google Search favicon + Organization logo URLs stay stable (no ?v= query strings).
 */
export const BRAND_ASSET_VERSION = "7";

/** Source of truth — public/logo.jpg (never overwritten by the build script). */
export const LOGO_JPG = "/logo.jpg";

/** Stable paths for favicons — generated from logo.jpg on each build. */
export const FAVICON_48 = "/icon-48.png";
export const FAVICON_96 = "/icon-96.png";
export const FAVICON_192 = "/icon-192.png";
export const FAVICON_512 = "/icon-512.png";
export const FAVICON_ICO = "/favicon.ico";
export const APPLE_ICON = "/apple-icon.png";

/** Primary SERP favicon — square PNG, 96×96 (Google recommends 48px+). */
export const FAVICON_PRIMARY = FAVICON_96;

/** Organization / Knowledge Panel logo — square PNG, 512×512 (Google min 112px). */
export const ORGANIZATION_LOGO = FAVICON_512;
export const ORGANIZATION_LOGO_SIZE = 512;

/** Cache-bust query for in-app UI only (navbar logo, etc.) — not for schema or favicon. */
export function withBrandVersion(path: string): string {
  return `${path}?v=${BRAND_ASSET_VERSION}`;
}

/** Stable ImageObject for JSON-LD — no query strings, crawlable PNG. */
export function getOrganizationLogoSchema(siteUrl: string) {
  const url = `${siteUrl}${ORGANIZATION_LOGO}`;
  return {
    "@type": "ImageObject" as const,
    "@id": `${url}#logo`,
    url,
    contentUrl: url,
    width: ORGANIZATION_LOGO_SIZE,
    height: ORGANIZATION_LOGO_SIZE,
  };
}
