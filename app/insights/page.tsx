import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ArticleCard } from '@/components/insights/article-card';
import { insightArticles } from '@/components/insights-content';

export default function InsightsPage() {
  const featured = insightArticles.slice(0, 6);

  return (
    <main>
      <SiteHeader />

      <section className="section-shell pb-16 pt-32 lg:pt-40">
        <p className="eyebrow">Northline Capital</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">Insights</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/75">
          Market perspectives, lending guides, and practical financing education for real estate investors and
          operators.
        </p>
      </section>

      <section className="section-shell pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 text-cloud">
        <div className="section-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold">Need help structuring your next deal?</h2>
            <p className="mt-4 text-sm text-cloud/80">We provide business-purpose lending only, with clear terms and disciplined execution.</p>
          </div>
          <Link href="#contact" className="rounded-sm border border-cloud bg-cloud px-7 py-3 text-sm font-semibold text-navy transition hover:bg-white">
            Submit Your Deal
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
