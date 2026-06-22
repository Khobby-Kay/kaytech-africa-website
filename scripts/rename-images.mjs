/**
 * Renames public/images files to SEO filenames and updates image-blur.ts keys.
 * Run after pulling: node scripts/rename-images.mjs
 */
import { readFile, rename, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicImages = join(root, "public", "images");
const blurFile = join(root, "src", "lib", "image-blur.ts");

/** @type {Record<string, string>} */
const legacyImageRenameMap = {
  "/images/hero/hero-1.jpg":
    "/images/hero/kaytech-africa-the-best-web-design-in-accra-hero-1.jpg",
  "/images/hero/hero-2.jpg":
    "/images/hero/kaytech-africa-the-best-web-design-in-accra-hero-2.jpg",
  "/images/hero/hero-3.jpg":
    "/images/hero/kaytech-africa-the-best-web-design-in-accra-hero-3.jpg",
  "/images/pages/security.jpg":
    "/images/pages/kaytech-africa-the-best-web-design-in-accra-hero-4.jpg",
  "/images/pages/support.jpg":
    "/images/pages/kaytech-africa-the-best-web-design-in-accra-hero-5.jpg",
  "/images/pages/contact.jpg":
    "/images/pages/kaytech-africa-the-best-web-design-in-accra-hero-6.jpg",
  "/images/sections/faq-help.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-hero-7.jpg",
  "/images/sections/privacy-trust.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-hero-8.jpg",
  "/images/sections/terms-agreement.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-hero-9.jpg",
  "/images/sections/service-web.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-1.jpg",
  "/images/sections/why-payments.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-2.jpg",
  "/images/sections/service-growth.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-3.jpg",
  "/images/sections/service-ai.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-4.jpg",
  "/images/sections/academy-learning.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-5.jpg",
  "/images/sections/course-design.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-6.jpg",
  "/images/sections/course-dev.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-7.jpg",
  "/images/sections/course-marketing.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-8.jpg",
  "/images/sections/course-ai.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-9.jpg",
  "/images/sections/course-ux.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-10.jpg",
  "/images/sections/course-business.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-11.jpg",
  "/images/sections/why-studio.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-12.jpg",
  "/images/sections/why-mobile.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-13.jpg",
  "/images/sections/principle-speed.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-14.jpg",
  "/images/sections/principle-momo.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-15.jpg",
  "/images/sections/principle-convert.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-16.jpg",
  "/images/sections/principle-local.jpg":
    "/images/sections/kaytech-africa-the-best-web-design-in-accra-17.jpg",
  "/images/team/aikins-armstrong.jpg":
    "/images/team/kaytech-africa-the-best-web-design-in-accra-18.jpg",
  "/images/team/amara-okonkwo.jpg":
    "/images/team/kaytech-africa-the-best-web-design-in-accra-19.jpg",
  "/images/team/kwame-asante.jpg":
    "/images/team/kaytech-africa-the-best-web-design-in-accra-20.jpg",
};

function toDiskPath(webPath) {
  return join(publicImages, webPath.replace("/images/", "").replace(/\//g, "\\"));
}

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function renameFiles() {
  let renamed = 0;
  let skipped = 0;

  for (const [oldWeb, newWeb] of Object.entries(legacyImageRenameMap)) {
    const oldPath = join(publicImages, ...oldWeb.replace("/images/", "").split("/"));
    const newPath = join(publicImages, ...newWeb.replace("/images/", "").split("/"));

    if (!(await fileExists(oldPath))) {
      if (await fileExists(newPath)) {
        skipped++;
        continue;
      }
      console.warn(`Missing: ${oldWeb}`);
      skipped++;
      continue;
    }

    if (oldPath === newPath) continue;
    await rename(oldPath, newPath);
    console.log(`Renamed: ${oldWeb} → ${newWeb}`);
    renamed++;
  }

  return { renamed, skipped };
}

async function updateBlurKeys() {
  let content = await readFile(blurFile, "utf8");

  for (const [oldWeb, newWeb] of Object.entries(legacyImageRenameMap)) {
    content = content.replaceAll(`"${oldWeb}"`, `"${newWeb}"`);
  }

  await import("node:fs/promises").then(({ writeFile }) =>
    writeFile(blurFile, content, "utf8"),
  );
  console.log("Updated image-blur.ts keys.");
}

async function main() {
  const { renamed, skipped } = await renameFiles();
  await updateBlurKeys();
  console.log(`Done. Renamed ${renamed} files, skipped ${skipped}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
