import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { PageHero } from "@/components/ui/PageHero";
import { getAllPosts } from "@/lib/blog";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Blog — Web Design, SEO & E-Commerce Tips Ghana | KayTech Africa",
  description:
    "Insights on web design, web development, SEO, and e-commerce in Ghana from KayTech Africa — the Accra studio brands trust. Practical guides for 2026 and beyond.",
  path: "/blog",
  keywords: [
    ...ghanaSearchKeywords,
    "web design blog Ghana",
    "web development tips Accra",
    "SEO blog Ghana",
  ],
});

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="KayTech Blog"
        title="Web design, SEO & growth insights for Ghana"
        description="Practical guides on building, ranking, and growing a business website in Accra, Kumasi, Tema, and across Ghana — written by the KayTech Africa studio team."
        cta={{ label: "Get a free consultation", href: "/contact" }}
        image={pageImages.features}
      />

      <section className="bg-canvas px-5 py-12 lg:px-20 lg:py-16">
        <Container>
          {featured ? (
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-6 overflow-hidden rounded-3xl border border-hairline bg-surface-soft lg:grid-cols-2"
            >
              <Media
                src={featured.image.src}
                alt={featured.image.alt}
                ratio="16/10"
                rounded="none"
                framed={false}
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                  {featured.category} · {featured.dateDisplay}
                </p>
                <h2 className="mt-3 font-display text-2xl tracking-tight text-ink sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {featured.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Continue reading
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ) : null}

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-hairline bg-surface-soft transition duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
                  <Media
                    src={post.image.src}
                    alt={post.image.alt}
                    ratio="16/10"
                    rounded="none"
                    framed={false}
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                      {post.category} · {post.dateDisplay}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Continue reading
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-surface-soft px-5 py-14 lg:px-20">
        <Container>
          <div className="flex flex-col items-start gap-4 rounded-3xl border border-hairline bg-canvas p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl tracking-tight text-ink">
                Ready to build a website that ranks and sells?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Talk to KayTech Africa — Ghana&apos;s trusted web design and
                development studio. Call {siteConfig.contact.phoneDisplay} or
                start a project online.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
            >
              Start your project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
