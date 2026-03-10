import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SubmitDealForm } from '@/components/forms/submit-deal-form';

export default function LoanProcessPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section-shell pb-16 pt-32 lg:pt-40">
        <p className="eyebrow">Deal Intake</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">Submit Your Deal</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/75">
          If you are seeking financing for a real estate investment opportunity, submit your deal information below.
          Our team will review the opportunity and respond promptly if the transaction fits our lending parameters.
        </p>
      </section>

      <section className="section-shell pb-24">
        <SubmitDealForm />
      </section>

      <SiteFooter />
    </main>
  );
}
