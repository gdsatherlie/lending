import type { Metadata } from 'next';
import { ArticlePage } from '@/components/insights/article-page';
import { insightBySlug } from '@/components/insights-content';

const article = insightBySlug['how-ground-up-construction-loans-work'];

export const metadata: Metadata = {
  title: 'How Ground-Up Construction Loans Work | Northline Capital',
  description: 'Learn how ground-up construction loans work, including draw process, underwriting, and common borrower requirements.'
};

export default function Page() {
  return <ArticlePage article={article} />;
}
