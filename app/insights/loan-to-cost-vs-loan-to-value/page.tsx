import type { Metadata } from 'next';
import { ArticlePage } from '@/components/insights/article-page';
import { insightBySlug } from '@/components/insights-content';

const article = insightBySlug['loan-to-cost-vs-loan-to-value'];

export const metadata: Metadata = {
  title: 'Loan-to-Cost vs Loan-to-Value | Northline Capital',
  description: 'Understand the difference between LTC and LTV and how lenders use both metrics in real estate underwriting.'
};

export default function Page() {
  return <ArticlePage article={article} />;
}
