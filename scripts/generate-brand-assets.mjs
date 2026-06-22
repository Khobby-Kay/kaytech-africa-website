/**
 * Generates KayTech-branded favicon, apple-touch icon, and Open Graph image.
 * Run: node scripts/generate-brand-assets.mjs
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = join(root, "public", "logo.svg");

const BRAND = {
  navy: "#1c3f69",
  white: "#ffffff",
  accent: "#3d7ab8",
};

async function logoPng(size) {
  const svg = await readFile(logoPath);
  return sharp(svg).resize(size, size).png().toBuffer();
}

async function writeIcon(size, outPath) {
  await sharp(await logoPng(size)).png().toFile(outPath);
  console.log(`Wrote ${outPath}`);
}

async function writeOgImage(outPath) {
  const width = 1200;
  const height = 630;
  const logo = await logoPng(160);

  const textSvg = Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BRAND.navy}"/>
      <stop offset="100%" stop-color="${BRAND.accent}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <text x="600" y="280" text-anchor="middle" fill="${BRAND.white}" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="700">KayTech Africa</text>
  <text x="600" y="360" text-anchor="middle" fill="${BRAND.white}" font-family="Arial, Helvetica, sans-serif" font-size="36" opacity="0.92">Best Web Design in Accra, Ghana</text>
  <text x="600" y="420" text-anchor="middle" fill="${BRAND.white}" font-family="Arial, Helvetica, sans-serif" font-size="24" opacity="0.8">Web Development · SEO · E-Commerce · AI Automation</text>
</svg>`);

  await sharp(textSvg)
    .composite([{ input: logo, top: 120, left: Math.round((width - 160) / 2) }])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(outPath);

  console.log(`Wrote ${outPath}`);
}

/** Minimal valid ICO wrapping a 32x32 PNG (works in browsers & LinkedIn). */
async function writeFavicon(outPath) {
  const png = await sharp(await logoPng(32)).png().toBuffer();
  const pngLen = png.length;

  // ICO header (6) + entry (16) + PNG data
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0); // width
  entry.writeUInt8(32, 1); // height
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(pngLen, 8); // size
  entry.writeUInt32LE(22, 12); // offset (6 + 16)

  await writeFile(outPath, Buffer.concat([header, entry, png]));
  console.log(`Wrote ${outPath}`);
}

async function main() {
  const appDir = join(root, "src", "app");
  const publicDir = join(root, "public");
  await mkdir(appDir, { recursive: true });
  await mkdir(publicDir, { recursive: true });

  await writeIcon(32, join(appDir, "icon.png"));
  await writeIcon(180, join(appDir, "apple-icon.png"));
  await writeFavicon(join(appDir, "favicon.ico"));
  await writeFavicon(join(publicDir, "favicon.ico"));
  await writeOgImage(join(publicDir, "og.jpg"));
  await writeOgImage(join(appDir, "opengraph-image.jpg"));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
