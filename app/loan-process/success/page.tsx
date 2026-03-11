import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function SubmitDealSuccessPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell pb-24 pt-32 lg:pt-40">
        <article className="mx-auto max-w-3xl rounded-sm border border-stone bg-white p-8 text-center shadow-soft md:p-10">
          <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
          <h1 className="mt-5 text-3xl font-semibold text-navy sm:text-4xl">Deal Submitted Successfully</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink/75">
            Thank you for submitting your deal to Northline Capital. Our team will review the information provided and
            follow up if the opportunity fits our lending parameters.
          </p>
          <p className="mt-3 text-sm font-medium text-ink/80">Typical response time: Within 24 hours</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="rounded-sm border border-navy bg-navy px-6 py-3 text-sm font-semibold text-cloud transition hover:bg-ink">
              Return Home
            </Link>
            <Link href="/loan-process" className="rounded-sm border border-stone bg-cloud px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink">
              Submit Another Deal
            </Link>
          </div>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
