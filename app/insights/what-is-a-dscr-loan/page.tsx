import type { Metadata } from 'next';
import { ArticlePage } from '@/components/insights/article-page';
import { insightBySlug } from '@/components/insights-content';

const article = insightBySlug['what-is-a-dscr-loan'];

export const metadata: Metadata = {
  title: 'What Is a DSCR Loan? | Northline Capital',
  description: 'Learn how DSCR loans work for rental property investors and how lenders evaluate property-level cash flow.'
};

export default function Page() {
  return <ArticlePage article={article} />;
}
