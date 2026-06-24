/**
 * Generates KayTech-branded favicon, logo, apple-touch icon, and OG image.
 *
 * Never use the V-shaped mark alone — Google and browsers confuse it with Vercel.
 * All square icons use a clear "KayTech / AFRICA" text mark.
 *
 * Run: node scripts/generate-brand-assets.mjs
 */
import { writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const BRAND = {
  navy: "#1c3f69",
  white: "#ffffff",
  accent: "#3d7ab8",
};

/** Bump when favicons change — busts Google/browser cache. Keep in sync with src/lib/brand-assets.ts */
const BRAND_ASSET_VERSION = "5";

function iconSvg(size) {
  const radius = Math.round(size * 0.14);
  const titleSize = Math.round(size * 0.17);
  const subSize = Math.round(size * 0.085);
  const tagSize = Math.round(size * 0.055);

  return Buffer.from(`<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${radius}" fill="${BRAND.navy}"/>
  <text x="${size / 2}" y="${size * 0.4}" text-anchor="middle" fill="${BRAND.white}" font-family="Arial Black, Arial, sans-serif" font-size="${titleSize}" font-weight="900">KayTech</text>
  <text x="${size / 2}" y="${size * 0.54}" text-anchor="middle" fill="${BRAND.white}" font-family="Arial, Helvetica, sans-serif" font-size="${subSize}" font-weight="700">AFRICA</text>
  <text x="${size / 2}" y="${size * 0.68}" text-anchor="middle" fill="${BRAND.white}" font-family="Arial, Helvetica, sans-serif" font-size="${tagSize}" opacity="0.85">Web Design · Accra</text>
</svg>`);
}

/** Horizontal wordmark for navbar — not the V-only mark. */
function wordmarkSvg(width, height) {
  return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" rx="12" fill="${BRAND.navy}"/>
  <text x="${width / 2}" y="${height * 0.48}" text-anchor="middle" fill="${BRAND.white}" font-family="Arial Black, Arial, sans-serif" font-size="52" font-weight="900">KayTech Africa</text>
  <text x="${width / 2}" y="${height * 0.78}" text-anchor="middle" fill="${BRAND.white}" font-family="Arial, Helvetica, sans-serif" font-size="22" opacity="0.9">Innovating to Impact · Best Web Design Accra</text>
</svg>`);
}

function wordmarkSvgFile() {
  return Buffer.from(`<svg viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="100" rx="12" fill="${BRAND.navy}"/>
  <text x="200" y="48" text-anchor="middle" fill="${BRAND.white}" font-family="Arial Black, Arial, sans-serif" font-size="36" font-weight="900">KayTech Africa</text>
  <text x="200" y="78" text-anchor="middle" fill="${BRAND.white}" font-family="Arial, Helvetica, sans-serif" font-size="14" opacity="0.9">Best Web Design in Accra, Ghana</text>
</svg>`);
}

async function writeIcon(size, outPath) {
  await sharp(iconSvg(size)).png().toFile(outPath);
  console.log(`Wrote ${outPath}`);
}

async function writeWordmark(publicDir) {
  const svg = wordmarkSvg(800, 200);
  await sharp(svg).png().toFile(join(publicDir, "logo.png"));
  await sharp(svg).jpeg({ quality: 92, mozjpeg: true }).toFile(join(publicDir, "logo.jpg"));
  await writeFile(join(publicDir, "logo.svg"), wordmarkSvgFile(), "utf8");
  console.log("Wrote public/logo.png, logo.jpg, logo.svg");
}

async function writeOgImage(outPath) {
  const width = 1200;
  const height = 630;

  const svg = Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BRAND.navy}"/>
      <stop offset="100%" stop-color="${BRAND.accent}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <text x="600" y="250" text-anchor="middle" fill="${BRAND.white}" font-family="Arial Black, Arial, sans-serif" font-size="96" font-weight="900">KayTech Africa</text>
  <text x="600" y="340" text-anchor="middle" fill="${BRAND.white}" font-family="Arial, Helvetica, sans-serif" font-size="44" opacity="0.95">Best Web Design in Accra, Ghana</text>
  <text x="600" y="410" text-anchor="middle" fill="${BRAND.white}" font-family="Arial, Helvetica, sans-serif" font-size="28" opacity="0.85">Web Development · SEO · E-Commerce · AI Automation</text>
  <text x="600" y="520" text-anchor="middle" fill="${BRAND.white}" font-family="Arial, Helvetica, sans-serif" font-size="22" opacity="0.7">www.kaytechafrica.com</text>
</svg>`);

  await sharp(svg).jpeg({ quality: 90, mozjpeg: true }).toFile(outPath);
  console.log(`Wrote ${outPath}`);
}

async function writeFavicon(outPath, size = 48) {
  const png = await sharp(iconSvg(size)).png().toBuffer();
  const pngLen = png.length;

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0);
  entry.writeUInt8(size >= 256 ? 0 : size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngLen, 8);
  entry.writeUInt32LE(22, 12);

  await writeFile(outPath, Buffer.concat([header, entry, png]));
  console.log(`Wrote ${outPath} (${size}px)`);
}

async function writeManifest(publicDir) {
  const v = BRAND_ASSET_VERSION;
  const manifest = {
    name: "KayTech Africa",
    short_name: "KayTech",
    description:
      "Best web design company in Ghana — web development, SEO, e-commerce, and AI automation in Accra.",
    start_url: "/",
    display: "standalone",
    background_color: "#1c3f69",
    theme_color: "#1c3f69",
    icons: [
      {
        src: `/icon-48.png?v=${v}`,
        sizes: "48x48",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `/icon-192.png?v=${v}`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `/icon-512.png?v=${v}`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };

  const outPath = join(publicDir, "site.webmanifest");
  await writeFile(outPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(`Wrote ${outPath}`);
}

async function main() {
  const appDir = join(root, "src", "app");
  const publicDir = join(root, "public");
  await mkdir(appDir, { recursive: true });
  await mkdir(publicDir, { recursive: true });

  await writeWordmark(publicDir);

  await writeIcon(48, join(publicDir, "icon-48.png"));
  await writeIcon(48, join(publicDir, "icon.png"));
  await writeIcon(48, join(publicDir, "favicon.png"));
  await writeIcon(192, join(publicDir, "icon-192.png"));
  await writeIcon(512, join(publicDir, "icon-512.png"));
  await writeIcon(180, join(publicDir, "apple-icon.png"));

  await writeIcon(48, join(appDir, "icon.png"));
  await writeIcon(180, join(appDir, "apple-icon.png"));
  await writeFavicon(join(appDir, "favicon.ico"), 48);
  await writeFavicon(join(publicDir, "favicon.ico"), 48);

  await writeOgImage(join(publicDir, "og.jpg"));
  await writeOgImage(join(appDir, "opengraph-image.jpg"));
  await writeOgImage(join(appDir, "twitter-image.jpg"));
  await writeManifest(publicDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
