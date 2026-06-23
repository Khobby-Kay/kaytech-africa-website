/**
 * One-off: converts the generated PNGs into optimised SEO-named JPGs and places
 * them in public/images/blog and public/images/portfolio.
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assets =
  "C:\\Users\\LENOVO\\.cursor\\projects\\c-Users-LENOVO-Desktop-kaytech-africa\\assets";
const blogDir = join(root, "public", "images", "blog");
const portfolioDir = join(root, "public", "images", "portfolio");

const SLUG = "kaytech-africa-the-best-web-design-in-accra";

const jobs = [
  { src: "kt-blog-hero.png", dest: join(blogDir, `${SLUG}-blog-hero.jpg`) },
  { src: "kt-portfolio-hero.png", dest: join(portfolioDir, `${SLUG}-portfolio-hero.jpg`) },
  { src: "kt-blog-1.png", dest: join(blogDir, `${SLUG}-blog-1.jpg`) },
  { src: "kt-blog-2.png", dest: join(blogDir, `${SLUG}-blog-2.jpg`) },
  { src: "kt-blog-3.png", dest: join(blogDir, `${SLUG}-blog-3.jpg`) },
  { src: "kt-blog-4.png", dest: join(blogDir, `${SLUG}-blog-4.jpg`) },
  { src: "kt-blog-5.png", dest: join(blogDir, `${SLUG}-blog-5.jpg`) },
  { src: "kt-blog-6.png", dest: join(blogDir, `${SLUG}-blog-6.jpg`) },
  { src: "kt-blog-7.png", dest: join(blogDir, `${SLUG}-blog-7.jpg`) },
];

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(blogDir, { recursive: true });
  await mkdir(portfolioDir, { recursive: true });

  for (const job of jobs) {
    const srcPath = join(assets, job.src);
    if (!(await exists(srcPath))) {
      console.warn(`Missing source: ${srcPath}`);
      continue;
    }
    const buf = await sharp(srcPath)
      .resize({ width: 1280, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();
    await writeFile(job.dest, buf);
    console.log(`Wrote ${job.dest} (${Math.round(buf.length / 1024)} KB)`);
  }
  console.log("Done importing images.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
