/** Bump when favicons/logos change — busts Google and browser cache. */
export const BRAND_ASSET_VERSION = "5";

export function brandAsset(path: string): string {
  return `${path}?v=${BRAND_ASSET_VERSION}`;
}
