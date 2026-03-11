import type { Metadata } from 'next';
import { ArticlePage } from '@/components/insights/article-page';
import { insightBySlug } from '@/components/insights-content';

const article = insightBySlug['how-airbnb-financing-works'];

export const metadata: Metadata = {
  title: 'Airbnb Financing & Short-Term Rental Loans | Northline Capital',
  description: 'Learn how financing works for Airbnb, VRBO, and other short-term rental properties.'
};

export default function Page() {
  return <ArticlePage article={article} />;
}
