import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ArticleCard } from '@/components/insights/article-card';
import { insightBySlug, type InsightArticle } from '@/components/insights-content';

const internalLinksBySlug: Record<string, { href: string; label: string }[]> = {
  'how-bridge-loans-work': [
    { href: '/loan-programs/bridge-loans', label: 'Bridge Loans Program' },
    { href: '/loan-process', label: 'Loan Process' }
  ],
  'bridge-loan-vs-hard-money': [
    { href: '/loan-programs/bridge-loans', label: 'Bridge Loans Program' },
    { href: '/loan-process', label: 'Loan Process' }
  ],
  'what-is-a-dscr-loan': [
    { href: '/loan-programs/rental-dscr', label: 'Rental / DSCR Program' },
    { href: '/loan-process', label: 'Loan Process' }
  ],
  'how-airbnb-financing-works': [
    { href: '/loan-programs/short-term-rental-loans', label: 'Short-Term Rental Loans Program' },
    { href: '/loan-process', label: 'Loan Process' }
  ],
  'loan-to-cost-vs-loan-to-value': [
    { href: '/loan-programs/bridge-loans', label: 'Bridge Loans Program' },
    { href: '/loan-programs/construction', label: 'Ground-Up Construction Program' }
  ],
  'how-ground-up-construction-loans-work': [
    { href: '/loan-programs/construction', label: 'Ground-Up Construction Program' },
    { href: '/loan-process', label: 'Loan Process' }
  ]
};

export function ArticlePage({ article }: { article: InsightArticle }) {
  const relatedArticles = article.related.map((slug) => insightBySlug[slug]).filter(Boolean).slice(0, 3);

  return (
    <main>
      <SiteHeader />

      <section className="section-shell pb-16 pt-32 lg:pt-40">
        <p className="eyebrow">{article.category}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-navy sm:text-5xl">{article.title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/75">{article.intro}</p>
      </section>

      <section className="bg-white py-16">
        <article className="section-shell max-w-4xl space-y-10">
          {article.sections.map((section) => (
            <div key={section.heading} className="space-y-4 border-b border-stone pb-8 last:border-b-0">
              <h2 className="text-2xl font-semibold text-navy">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-ink/80">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/80">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.table ? (
                <div className="overflow-hidden rounded-sm border border-stone">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead className="bg-cloud">
                      <tr>
                        {section.table.headers.map((header) => (
                          <th key={header} className="border-b border-stone px-4 py-3 font-semibold text-ink">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.join('-')}>
                          {row.map((cell) => (
                            <td key={cell} className="border-b border-stone px-4 py-3 align-top text-ink/80">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>
          ))}

          <div className="rounded-sm border border-stone bg-cloud p-6">
            <p className="text-sm font-semibold text-navy">Related internal resources</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/75">
              {(internalLinksBySlug[article.slug] ?? []).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-navy underline underline-offset-4">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/insights" className="text-navy underline underline-offset-4">
                  Insights Library
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="section-shell py-20">
        <div className="mb-8">
          <p className="eyebrow">Related Articles</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">Further reading for active borrowers.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.map((related) => (
            <ArticleCard key={related.slug} article={related} />
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 text-cloud">
        <div className="section-shell text-center">
          <h2 className="text-3xl font-semibold">Have a deal to discuss?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-cloud/80">Share your scenario and we will respond with clear, business-purpose financing options.</p>
          <Link href="#contact" className="mt-7 inline-flex rounded-sm border border-cloud bg-cloud px-7 py-3 text-sm font-semibold text-navy transition hover:bg-white">
            Submit Your Deal
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
