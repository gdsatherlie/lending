import Link from 'next/link';
import type { InsightArticle } from '@/components/insights-content';

export function ArticleCard({ article }: { article: InsightArticle }) {
  return (
    <article className="group flex min-h-56 flex-col justify-between rounded-sm border border-stone bg-white p-6 shadow-soft transition hover:-translate-y-1">
      <div>
        <p className="eyebrow">{article.category}</p>
        <h3 className="mt-3 text-xl font-semibold text-navy">{article.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/75">{article.excerpt}</p>
      </div>
      <Link href={`/insights/${article.slug}`} className="mt-6 inline-flex text-sm font-medium text-ink">
        Read Article
      </Link>
    </article>
  );
}
