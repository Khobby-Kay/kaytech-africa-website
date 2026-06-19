import { readdir, stat, writeFile, rename } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const PUBLIC_IMAGES = join(process.cwd(), "public", "images");
const exts = new Set([".jpg", ".jpeg", ".png"]);

// Heroes can be a touch larger/sharper; everything else is capped tighter.
const HERO_MAX_WIDTH = 2000;
const DEFAULT_MAX_WIDTH = 1600;
const QUALITY = 72;
// Skip files already comfortably small to avoid re-degrading them.
const SKIP_BELOW_BYTES = 180 * 1024;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (exts.has(entry.name.slice(entry.name.lastIndexOf(".")).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

function fmt(bytes) {
  return `${(bytes / 1024).toFixed(0)}KB`;
}

async function main() {
  const files = await walk(PUBLIC_IMAGES);
  let saved = 0;
  let processed = 0;

  for (const file of files) {
    const before = (await stat(file)).size;
    if (before < SKIP_BELOW_BYTES) {
      console.log(`skip  ${file.replace(process.cwd(), "")} (${fmt(before)})`);
      continue;
    }

    const isHero = file.includes(`${join("images", "hero")}`);
    const maxWidth = isHero ? HERO_MAX_WIDTH : DEFAULT_MAX_WIDTH;

    const image = sharp(file).rotate();
    const meta = await image.metadata();
    const pipeline = image;
    if (meta.width && meta.width > maxWidth) {
      pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    const buffer = await pipeline
      .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();

    const tmp = `${file}.tmp`;
    await writeFile(tmp, buffer);
    await rename(tmp, file);

    const after = buffer.length;
    saved += before - after;
    processed += 1;
    console.log(`ok    ${file.replace(process.cwd(), "")}  ${fmt(before)} -> ${fmt(after)}`);
  }

  console.log(`\nCompressed ${processed} images. Total saved: ${fmt(saved)}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
