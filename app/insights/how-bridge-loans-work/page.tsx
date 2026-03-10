import type { Metadata } from 'next';
import { ArticlePage } from '@/components/insights/article-page';
import { insightBySlug } from '@/components/insights-content';

const article = insightBySlug['how-bridge-loans-work'];

export const metadata: Metadata = {
  title: 'How Bridge Loans Work | Northline Capital',
  description: 'Learn how bridge loans work for acquisitions, lease-up, repositioning, and transitional real estate assets.'
};

export default function Page() {
  return <ArticlePage article={article} />;
}
