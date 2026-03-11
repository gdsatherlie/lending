import type { Metadata } from 'next';
import { ArticlePage } from '@/components/insights/article-page';
import { insightBySlug } from '@/components/insights-content';

const article = insightBySlug['brokers-and-partners'];

export const metadata: Metadata = {
  title: 'For Brokers & Partners | Northline Capital',
  description:
    'Northline Capital works with mortgage brokers and real estate intermediaries and welcomes deal submissions.'
};

export default function Page() {
  return <ArticlePage article={article} />;
}
