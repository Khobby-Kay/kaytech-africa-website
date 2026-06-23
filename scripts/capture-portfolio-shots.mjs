/**
 * Captures homepage screenshots of the portfolio sites and saves them as
 * optimised local JPGs in public/images/portfolio/.
 *
 * Uses WordPress mShots (free, no key). mShots returns a small placeholder
 * image until the real screenshot is rendered, so we poll until the payload is
 * large enough to be a genuine capture.
 *
 * Run: node scripts/capture-portfolio-shots.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images", "portfolio");

const SLUG = "kaytech-africa-the-best-web-design-in-accra";

const sites = [
  { url: "https://tmmc.ca/en/", file: `${SLUG}-portfolio-1.jpg` },
  { url: "https://lacitylaw.com/", file: `${SLUG}-portfolio-2.jpg` },
  { url: "https://www.arguson.ca/", file: `${SLUG}-portfolio-3.jpg` },
  { url: "https://www.hollard.com.gh/", file: `${SLUG}-portfolio-4.jpg` },
  { url: "https://www.sic-gh.com/", file: `${SLUG}-portfolio-5.jpg` },
  { url: "https://davieshowe.com/", file: `${SLUG}-portfolio-6.jpg` },
  { url: "https://www.oxfordproperties.com/", file: `${SLUG}-portfolio-7.jpg` },
  { url: "https://www.amobilepayment.com/", file: `${SLUG}-portfolio-8.jpg` },
  {
    url: "https://fanmilk.danone.com/our-footprint/ghana.html",
    file: `${SLUG}-portfolio-9.jpg`,
  },
];

const W = 1280;
const H = 960;
const MIN_BYTES = 25000; // below this it's almost certainly the placeholder
const MAX_TRIES = 30;
const DELAY_MS = 6000;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function shotUrl(target) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    target,
  )}?w=${W}&h=${H}`;
}

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function capture(site) {
  const url = shotUrl(site.url);
  let last = null;
  for (let attempt = 1; attempt <= MAX_TRIES; attempt++) {
    try {
      const buf = await fetchBuffer(url);
      last = buf;
      if (buf.length >= MIN_BYTES) {
        return buf;
      }
      process.stdout.write(
        `  ${site.url} not ready (${buf.length} bytes), retry ${attempt}/${MAX_TRIES}\n`,
      );
    } catch (err) {
      process.stdout.write(`  ${site.url} error: ${err.message}\n`);
    }
    await sleep(DELAY_MS);
  }
  return last;
}

async function main() {
  await mkdir(outDir, { recursive: true });

  for (const site of sites) {
    console.log(`Capturing ${site.url} ...`);
    const buf = await capture(site);
    if (!buf) {
      console.warn(`  FAILED: ${site.url}`);
      continue;
    }
    const jpg = await sharp(buf)
      .resize(W, H, { fit: "cover", position: "top" })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();
    await writeFile(join(outDir, site.file), jpg);
    console.log(`  Saved ${site.file} (${Math.round(jpg.length / 1024)} KB)`);
  }

  console.log("Done capturing portfolio screenshots.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
