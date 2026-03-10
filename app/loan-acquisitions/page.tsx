import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const acquisitions = [
  'Performing loans',
  'Subperforming loans',
  'Non-performing loans',
  'Matured bridge loans',
  'Distressed debt positions',
  'Small loan portfolios',
  'Participations and whole loans'
] as const;

const assetTypes = [
  'Single-family investment property loans',
  'Bridge loans',
  'Rental / DSCR loans',
  'Multifamily loans',
  'Mixed-use loans',
  'Construction or transitional loans',
  'Business-purpose real estate debt'
] as const;

const whatWeLookFor = [
  {
    title: 'Performing Assets',
    items: [
      'Seasoned bridge loans',
      'Rental / DSCR loans',
      'Multifamily and mixed-use loans',
      'Loans backed by strong collateral where the seller is seeking liquidity'
    ]
  },
  {
    title: 'Transitional / Challenged Assets',
    items: [
      'Matured loans',
      'Extension scenarios',
      'Loans with business plan delays',
      'Underperforming but recoverable assets',
      'Loans requiring active workout oversight'
    ]
  },
  {
    title: 'Distressed Opportunities',
    items: [
      'Non-performing loans',
      'Discounted payoff situations',
      'Foreclosure-sensitive positions',
      'Subperforming debt',
      'Assets with collateral-based downside protection'
    ]
  }
] as const;

const preferredCharacteristics = [
  'Business-purpose real estate collateral',
  'First-lien positions preferred',
  'Investment property only',
  'Clear collateral visibility',
  'Visibility into current loan status and file quality',
  'Individual loans or small portfolios',
  'Situations requiring speed, discretion, or creativity',
  'Whole loans or participation interests considered on a case-by-case basis'
] as const;

const whatToSend = [
  'Basic loan tape or loan summary',
  'Collateral / property information',
  'Current unpaid principal balance',
  'Maturity date',
  'Payment status or performance history',
  'Borrower / sponsor background',
  'Servicing, litigation, or workout notes if applicable',
  'Asking price or pricing expectations, if available'
] as const;

const situationsWeCanHelpSolve = [
  'Lender liquidity needs',
  'Balance sheet reduction',
  'Loan no longer fits portfolio strategy',
  'Workout fatigue',
  'Upcoming maturity with limited extension appetite',
  'Desire for a faster, more certain exit',
  'Need for a discreet loan sale process'
] as const;

export default function LoanAcquisitionsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section-shell pb-12 pt-32 lg:pt-40">
        <p className="eyebrow">Credit Solutions</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">Loan Acquisitions</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/75">
          Northline Capital acquires select business-purpose real estate loans, notes, and small portfolios from
          lenders, private investors, and other note holders. We work with counterparties seeking liquidity, balance
          sheet reduction, or a solution for assets that no longer fit their investment strategy.
        </p>
      </section>

      <section className="section-shell grid gap-6 pb-10 md:grid-cols-3">
        <article className="rounded-sm border border-stone bg-white p-6 shadow-soft md:col-span-2">
          <h2 className="text-2xl font-semibold text-navy">What We Acquire</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-ink/80 sm:grid-cols-2">
            {acquisitions.map((item) => (
              <li key={item} className="rounded-sm border border-stone/80 bg-cloud px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-sm border border-stone bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-navy">Asset Types</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/80">
            {assetTypes.map((item) => (
              <li key={item} className="border-l-2 border-stone pl-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-shell pb-10">
        <article className="rounded-sm border border-stone bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-navy">What We Look For</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-ink/75">
            Northline Capital evaluates select business-purpose real estate loans, notes, and small portfolios across a
            range of performance profiles. We are generally most interested in situations where collateral, structure,
            sponsorship, or timing create an opportunity for a flexible and solutions-oriented buyer.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {whatWeLookFor.map((group) => (
              <article key={group.title} className="rounded-sm border border-stone/90 bg-cloud p-5">
                <h3 className="text-lg font-semibold text-navy">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/80">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="section-shell pb-10">
        <article className="rounded-sm border border-stone bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-navy">Preferred Characteristics</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-ink/80 md:grid-cols-2">
            {preferredCharacteristics.map((item) => (
              <li key={item} className="rounded-sm border border-stone/80 bg-cloud px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-shell pb-10">
        <article className="rounded-sm border border-stone bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-navy">What to Send Us</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-ink/75">
            If you are evaluating the sale of a loan or small portfolio, it is helpful to provide summary information
            that allows for a prompt preliminary review.
          </p>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-ink/80 md:grid-cols-2">
            {whatToSend.map((item) => (
              <li key={item} className="rounded-sm border border-stone/80 bg-cloud px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-shell pb-24">
        <article className="rounded-sm border border-stone bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-navy">Situations We Can Help Solve</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-ink/80 md:grid-cols-2">
            {situationsWeCanHelpSolve.map((item) => (
              <li key={item} className="rounded-sm border border-stone/80 bg-cloud px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="bg-navy py-20 text-cloud">
        <div className="section-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-cloud/65">Institutional Capability</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Looking to Sell a Loan or Portfolio?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cloud/80">
              Northline Capital reviews select business-purpose real estate debt opportunities, including individual
              loans, participation interests, and small portfolios.
            </p>
            <p className="mt-3 text-xs text-cloud/70">
              We are happy to review summary information on a discreet, no-obligation basis.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-sm border border-cloud bg-cloud px-7 py-3 text-sm font-semibold text-navy transition hover:bg-white"
          >
            Discuss a Loan Sale
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
