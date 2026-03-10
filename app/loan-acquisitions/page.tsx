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

const reasonsToSell = [
  'Liquidity needs',
  'Balance sheet management',
  'Portfolio reallocation',
  'Workout complexity',
  'Matured or challenged loans',
  'Desire to monetize a position quickly'
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

      <section className="section-shell pb-24">
        <article className="rounded-sm border border-stone bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-navy">Why Counterparties Sell</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-ink/80 md:grid-cols-2">
            {reasonsToSell.map((item) => (
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
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Discuss a Loan Sale</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cloud/80">
              If you are evaluating the sale of a business-purpose real estate loan, note, or small portfolio, contact
              Northline Capital to discuss the opportunity.
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
