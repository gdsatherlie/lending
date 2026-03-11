import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const programs = [
  {
    title: 'Bridge Loans',
    description: 'Acquisition and recapitalization debt structured for transitional business-purpose assets.',
    href: '/loan-programs/bridge-loans'
  },
  {
    title: 'Fix & Flip',
    description: 'Fast draws and practical terms for renovation operators scaling repeat projects.',
    href: '/loan-programs/fix-flip'
  },
  {
    title: 'Rental / DSCR',
    description: 'Stabilized and light-value-add rental financing for portfolio-minded investors.',
    href: '/loan-programs/rental-dscr'
  },
  {
    title: 'Ground-Up Construction',
    description: 'Construction capital designed for disciplined sponsors and clear exit plans.',
    href: '/loan-programs/construction'
  },
  {
    title: 'Multifamily & Mixed-Use',
    description: 'Small-balance and mid-market solutions for income-producing business assets.',
    href: '/loan-programs/multifamily'
  },
  {
    title: 'Short-Term Rental Loans',
    description: 'Flexible Airbnb and vacation rental financing for stabilized STR assets and experienced operators.',
    href: '/loan-programs/short-term-rental-loans'
  }
] as const;

const audienceRoutes = [
  {
    title: 'Borrowers',
    description:
      'Seeking financing for an investment property or transitional business-purpose real estate opportunity.',
    cta: 'Submit Your Deal',
    href: '/loan-process'
  },
  {
    title: 'Brokers & Partners',
    description: 'Seeking a lending partner for your client transaction or ongoing deal flow.',
    cta: 'For Brokers & Partners',
    href: '/for-brokers-partners'
  },
  {
    title: 'Loan Sellers',
    description: 'Evaluating the sale of a loan, note, participation interest, or small portfolio position.',
    cta: 'Loan Acquisitions',
    href: '/loan-acquisitions'
  }
] as const;

const lendingParameters = [
  ['Loan Size', '$250,000 – $7,500,000'],
  ['Loan Term', '6 – 24 Months'],
  ['Maximum LTV', 'Up to ~80%'],
  ['Maximum LTC', 'Up to ~90%'],
  ['Property Types', 'Residential investment, multifamily, mixed-use, transitional real estate'],
  ['Borrowers', 'Experienced real estate investors and sponsors']
] as const;

const exampleTransactions = [
  ['Value-Add Multifamily Bridge Loan', '$4.2MM', 'Texas', 'Lease-up and operational improvements', 'Bridge loan to stabilization'],
  ['Fix & Flip Loan', '$520K', 'Arizona', 'Acquisition and full renovation', 'Short-term renovation and resale execution'],
  ['Rental / DSCR Loan', '$1.35MM', 'Florida', 'Refinance of stabilized rental asset', 'Income-based rental loan structure']
] as const;

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div className="section-shell grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl space-y-8">
            <p className="eyebrow">Business-purpose real estate lending</p>
            <h1 className="text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Institutional execution speed for experienced real estate operators.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink/75">
              Northline Capital provides business-purpose real estate loans for investment properties and
              transitional assets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/loan-process"
                className="rounded-sm bg-navy px-7 py-3 text-sm font-medium text-cloud transition hover:bg-ink"
              >
                Submit Your Deal
              </Link>
              <Link
                href="/contact"
                className="rounded-sm border border-stone bg-white px-7 py-3 text-sm font-medium text-ink transition hover:border-ink"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="relative isolate rounded-sm border border-stone/80 bg-white p-3 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
              alt="Commercial real estate skyline at dusk"
              width={900}
              height={1100}
              className="h-[540px] w-full rounded-sm object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="why-us" className="section-shell py-28">
        <div className="mb-10 max-w-3xl space-y-3">
          <p className="eyebrow">Work With Northline</p>
          <h2 className="text-3xl font-semibold text-navy sm:text-4xl">How Can We Help?</h2>
          <p className="text-sm leading-relaxed text-ink/75">
            Northline Capital works with borrowers, brokers, and counterparties across business-purpose real estate
            credit opportunities.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {audienceRoutes.map(({ title, description, cta, href }) => (
            <article key={title} className="rounded-sm border border-stone bg-white p-6 shadow-soft">
              <h3 className="text-2xl font-semibold text-navy">{title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-relaxed text-ink/75">{description}</p>
              <Link
                href={href}
                className="mt-6 inline-flex rounded-sm border border-navy bg-navy px-6 py-3 text-sm font-semibold text-cloud transition hover:bg-ink"
              >
                {cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="loan-programs" className="section-shell py-28">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Loan Programs</p>
            <h2 className="text-3xl font-semibold text-navy sm:text-4xl">
              Purpose-built debt solutions for business borrowers.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink/70">
            Structured terms, clear expectations, and program flexibility informed by real project economics.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ title, description, href }) => (
            <article
              key={title}
              className="group flex min-h-48 flex-col justify-between rounded-sm border border-stone bg-white p-6 shadow-soft transition hover:-translate-y-1"
            >
              <div>
                <h3 className="text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{description}</p>
              </div>
              <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                Program Details <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section-shell pb-28">
        <article className="rounded-sm border border-stone bg-white p-8 shadow-soft">
          <p className="eyebrow">Credit Overview</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Typical Lending Parameters</h2>
          <div className="mt-6 divide-y divide-stone rounded-sm border border-stone/80 bg-cloud">
            {lendingParameters.map(([label, value]) => (
              <div key={label} className="grid gap-2 px-4 py-3 sm:grid-cols-[0.42fr_1fr] sm:items-center">
                <p className="text-sm font-semibold text-navy">{label}</p>
                <p className="text-sm leading-relaxed text-ink/80">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink/65">
            Lending parameters may vary based on asset type, borrower experience, and transaction characteristics.
          </p>
        </article>
      </section>

      <section className="bg-white py-28">
        <div className="section-shell">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Example Transactions</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Illustrative transaction examples.</h2>
            </div>
            <p className="hidden text-sm text-ink/65 md:block">Representative scenarios. See full examples page for additional context.</p>
          </div>
          <Link href="/example-transactions" className="mb-6 inline-flex text-sm font-medium text-navy underline underline-offset-4">View All Example Transactions</Link>
          <div className="grid gap-5 lg:grid-cols-3">
            {exampleTransactions.map(([title, amount, location, situation, solution]) => (
              <article key={title} className="rounded-sm border border-stone p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold text-navy">{title}</h3>
                  <p className="text-sm text-ink/60">{amount}</p>
                </div>
                <div className="mt-4 grid gap-2 text-sm text-ink/75">
                  <p><span className="font-medium text-ink">Location:</span> {location}</p>
                  <p><span className="font-medium text-ink">Situation:</span> {situation}</p>
                  <p><span className="font-medium text-ink">Northline Solution:</span> {solution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="final-cta" className="bg-navy py-20 text-cloud">
        <div className="section-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">Have a Deal to Discuss?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cloud/80">
              Northline Capital reviews business-purpose real estate financing opportunities across a range of asset
              types and situations.
            </p>
            <p className="mt-4 text-sm text-cloud/75">(000) 000-0000 • originations@northlinecapital.com</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/loan-process"
              className="rounded-sm border border-cloud bg-cloud px-7 py-3 text-sm font-semibold text-navy transition hover:bg-white"
            >
              Submit Your Deal
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-cloud px-7 py-3 text-sm font-semibold text-cloud transition hover:bg-cloud/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
