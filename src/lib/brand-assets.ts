/**
 * Bump when logo.jpg or generated icons change — busts Google/browser cache.
 * Keep in sync after `npm run brand-assets`.
 */
export const BRAND_ASSET_VERSION = "6";

/** Source of truth — public/logo.jpg (never overwritten by the build script). */
export const LOGO_JPG = "/logo.jpg";

/** Stable paths for favicons — generated from logo.jpg on each build. */
export const FAVICON_48 = "/icon-48.png";
export const FAVICON_96 = "/icon-96.png";
export const FAVICON_192 = "/icon-192.png";
export const FAVICON_512 = "/icon-512.png";
export const FAVICON_ICO = "/favicon.ico";
export const APPLE_ICON = "/apple-icon.png";

/** Google Organization logo — use logo.jpg directly so Search picks the same file as the site. */
export const ORGANIZATION_LOGO = LOGO_JPG;

export function withBrandVersion(path: string): string {
  return `${path}?v=${BRAND_ASSET_VERSION}`;
}
