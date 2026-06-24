/**
 * Generates KayTech-branded favicon, apple-touch icon, and Open Graph image.
 *
 * Uses text-based SVG marks so favicons never show only the V-shaped logo
 * element (which Google/LinkedIn can mistake for the Vercel triangle).
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

async function writeIcon(size, outPath) {
  await sharp(iconSvg(size)).png().toFile(outPath);
  console.log(`Wrote ${outPath}`);
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
        src: "/icon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
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

  await writeIcon(48, join(publicDir, "icon-48.png"));
  await writeIcon(48, join(publicDir, "icon.png"));
  await writeIcon(48, join(appDir, "icon.png"));
  await writeIcon(192, join(publicDir, "icon-192.png"));
  await writeIcon(512, join(publicDir, "icon-512.png"));
  await writeIcon(180, join(appDir, "apple-icon.png"));
  await writeIcon(180, join(publicDir, "apple-icon.png"));

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
