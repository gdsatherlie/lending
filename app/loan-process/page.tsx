import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SubmitDealForm } from '@/components/forms/submit-deal-form';
import { ConversionCta } from '@/components/conversion-cta';

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


      <section className="section-shell pb-10">
        <article className="rounded-sm border border-stone bg-white p-6 shadow-soft md:p-8">
          <h2 className="text-2xl font-semibold text-navy">Before Submitting a Deal</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            To help us review opportunities efficiently, please be prepared to provide the following information when
            submitting a transaction:
          </p>
          <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-ink/80 md:grid-cols-2">
            {[
              'Property address',
              'Purchase price or current value',
              'Requested loan amount',
              'Business plan or project summary',
              'Borrower or sponsor experience',
              'Renovation budget (if applicable)'
            ].map((item) => (
              <li key={item} className="rounded-sm border border-stone/80 bg-cloud px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Providing this information helps our team evaluate opportunities and respond more quickly.
          </p>
        </article>
      </section>

      <section className="section-shell pb-24">
        <SubmitDealForm />
      </section>

      <ConversionCta />

      <SiteFooter />
    </main>
  );
}
