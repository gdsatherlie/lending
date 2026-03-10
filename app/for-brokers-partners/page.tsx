import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { QuickDealSnapshotForm } from '@/components/forms/quick-deal-snapshot-form';

const brokerBenefits = [
  {
    title: 'Responsive Deal Review',
    description: 'Initial feedback typically within 24 hours.'
  },
  {
    title: 'Clear Lending Parameters',
    description: 'Direct access to decision-makers and transparent underwriting.'
  },
  {
    title: 'Flexible Structures',
    description: 'Bridge, DSCR, construction, and transitional financing solutions.'
  },
  {
    title: 'Reliable Execution',
    description: 'A focus on closing transactions efficiently and professionally.'
  }
] as const;

const dealsReviewed = [
  'Bridge loans',
  'Fix & flip loans',
  'Rental / DSCR loans',
  'Multifamily loans',
  'Mixed-use loans',
  'Construction financing',
  'Transitional real estate opportunities'
] as const;

const submissionSteps = [
  'Submit deal details through the Submit Your Deal form',
  'Our team reviews the opportunity',
  'If the transaction fits our lending parameters, we provide feedback and discuss next steps'
] as const;

export default function BrokersPartnersPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section-shell pb-12 pt-32 lg:pt-40">
        <p className="eyebrow">Intermediary Relationships</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">For Brokers &amp; Partners</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/75">
          Northline Capital works with mortgage brokers, lenders, and industry professionals seeking reliable financing
          solutions for their clients. We value strong intermediary relationships and aim to provide clear
          communication, disciplined underwriting, and dependable execution.
        </p>
      </section>

      <section className="section-shell pb-10">
        <article className="rounded-sm border border-stone bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-navy">Why Brokers Work with Northline</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {brokerBenefits.map((item) => (
              <article key={item.title} className="rounded-sm border border-stone/90 bg-cloud p-5">
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{item.description}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="section-shell pb-10">
        <article className="rounded-sm border border-stone bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-navy">Broker &amp; Referral Compensation</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-ink/75">
            Northline Capital works with brokers and intermediaries and may offer referral or broker compensation where
            permitted by applicable law and licensing requirements.
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-ink/75">
            Compensation terms are evaluated based on the specific transaction and are agreed upon prior to closing.
          </p>
        </article>
      </section>

      <section className="section-shell pb-10">
        <article className="rounded-sm border border-stone bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-navy">Types of Deals We Review</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-ink/80 md:grid-cols-2">
            {dealsReviewed.map((item) => (
              <li key={item} className="rounded-sm border border-stone/80 bg-cloud px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>


      <section className="section-shell pb-10">
        <div className="rounded-sm border border-stone bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-navy">Quick Deal Snapshot</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-ink/75">
            Brokers are welcome to submit a quick deal summary for initial feedback. If the opportunity fits our
            lending parameters, our team will follow up to request additional information.
          </p>
          <div className="mt-6">
            <QuickDealSnapshotForm />
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <article className="rounded-sm border border-stone bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-navy">Submitting a Deal</h2>
          <ol className="mt-5 space-y-3 text-sm leading-relaxed text-ink/80">
            {submissionSteps.map((step, index) => (
              <li key={step} className="rounded-sm border border-stone/80 bg-cloud px-4 py-3">
                <span className="font-semibold text-navy">{index + 1}.</span> {step}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-ink/75">
            Northline Capital respects broker relationships and works directly with originating partners throughout the
            transaction process.
          </p>
          <Link
            href="/loan-process"
            className="mt-6 inline-flex rounded-sm border border-navy bg-navy px-7 py-3 text-sm font-semibold text-cloud transition hover:bg-ink"
          >
            Submit a Deal
          </Link>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
