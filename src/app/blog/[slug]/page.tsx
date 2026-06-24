import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { ORGANIZATION_LOGO } from "@/lib/brand-assets";
import { createPageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return createPageMetadata({
      title: "Article not found | KayTech Africa",
      description: "The article you are looking for could not be found.",
      path: "/blog",
    });
  }

  return createPageMetadata({
    title: `${post.title} | KayTech Africa`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
  });
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.image.src}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${ORGANIZATION_LOGO}`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="bg-canvas">
        <header className="border-b border-hairline bg-surface-soft px-5 pt-24 pb-10 sm:pt-28 lg:px-20 lg:pt-32">
          <Container>
            <div className="max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to blog
              </Link>
              <p className="mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                {post.category}
              </p>
              <h1 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span>{post.dateDisplay}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </Container>
        </header>

        <Container className="px-5 py-12 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <Media
              src={post.image.src}
              alt={post.image.alt}
              ratio="16/9"
              sizes="(max-width: 1024px) 100vw, 768px"
              priority
            />

            <p className="mt-8 text-lg leading-relaxed text-ink">{post.intro}</p>

            <div className="mt-8 space-y-8">
              {post.sections.map((section, i) => (
                <section key={section.heading ?? i}>
                  {section.heading ? (
                    <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                      {section.heading}
                    </h2>
                  ) : null}
                  {section.paragraphs.map((para, p) => (
                    <p
                      key={p}
                      className="mt-3 text-base leading-relaxed text-muted"
                    >
                      {para}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-base text-muted"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-hairline bg-surface-soft p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                Conclusion
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {post.conclusion}
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
              >
                Talk to KayTech Africa
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>

        <section className="border-t border-hairline bg-surface-soft px-5 py-14 lg:px-20">
          <Container>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              More from the blog
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((rel) => (
                <article
                  key={rel.slug}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-hairline bg-canvas transition duration-300 hover:-translate-y-1 hover:shadow-float"
                >
                  <Link href={`/blog/${rel.slug}`} className="flex flex-1 flex-col">
                    <Media
                      src={rel.image.src}
                      alt={rel.image.alt}
                      ratio="16/10"
                      rounded="none"
                      framed={false}
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                        {rel.dateDisplay}
                      </p>
                      <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink">
                        {rel.title}
                      </h3>
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
      </article>
    </>
  );
}
