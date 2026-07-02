import {
  aggregateImpactMetrics,
  proofOfImpactCopy,
} from "@/lib/proof-of-impact";
import { caseStudies } from "@/lib/portfolio";

/**
 * Plain HTML snapshot for crawlers, AI fetchers, and no-JS clients.
 * Mirrors visible Proof of Impact content — not hidden or cloaked.
 */
export function CrawlerContentSnapshot() {
  return (
    <noscript>
      <section className="border-b border-hairline bg-canvas px-5 py-8">
        <h2>{proofOfImpactCopy.title}</h2>
        <p>{proofOfImpactCopy.description}</p>
        <h3>Impact metrics</h3>
        <ul>
          {aggregateImpactMetrics.map((metric) => (
            <li key={metric.label}>
              {metric.label}: {metric.value} — {metric.detail}
            </li>
          ))}
        </ul>
        <h3>Client case studies</h3>
        {caseStudies.map((study) => (
          <article key={study.slug}>
            <h4>
              {study.client} ({study.sector})
            </h4>
            <p>{study.headline}</p>
            <p>{study.highlightMetric}</p>
            <ul>
              {study.metrics.map((m) => (
                <li key={m.label}>
                  {m.label}: {m.before} → {m.after}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </noscript>
  );
}
