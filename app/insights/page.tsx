import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ConversionCta } from '@/components/conversion-cta';
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

      <ConversionCta />

      <SiteFooter />
    </main>
  );
}
