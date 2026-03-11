import type { Metadata } from 'next';
import { ArticlePage } from '@/components/insights/article-page';
import { insightBySlug } from '@/components/insights-content';

const article = insightBySlug['bridge-loan-vs-hard-money'];

export const metadata: Metadata = {
  title: 'Bridge Loan vs Hard Money Loan | Northline Capital',
  description: 'Compare bridge loans and hard money loans for real estate investors, including structure, underwriting, and use cases.'
};

export default function Page() {
  return <ArticlePage article={article} />;
}
