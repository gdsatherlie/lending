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
  ['Loan Size', '$50,000 – $5,000,000'],
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
import { ArrowUpRight, Clock3, Landmark, ShieldCheck } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';

const programs = [
  ['Bridge Loans', 'Acquisition and recapitalization debt structured for transitional business-purpose assets.'],
  ['Fix & Flip', 'Fast draws and practical terms for renovation operators scaling repeat projects.'],
  ['Rental / DSCR', 'Stabilized and light-value-add rental financing for portfolio-minded investors.'],
  ['Ground-Up Construction', 'Construction capital designed for disciplined sponsors and clear exit plans.'],
  ['Multifamily & Mixed-Use', 'Small-balance and mid-market solutions for income-producing business assets.']
] as const;

const deals = [
  ['Scottsdale, AZ', 'Bridge', '$3.4MM', 'Hospitality conversion', '11 business days to close'],
  ['Charlotte, NC', 'Fix & Flip', '$1.1MM', 'SFR heavy rehab', '48-hour initial term sheet'],
  ['Tampa, FL', 'Rental / DSCR', '$2.8MM', 'Portfolio refinance', 'Cash-out + rate reset'],
  ['Nashville, TN', 'Construction', '$6.2MM', '12-unit infill project', 'Milestone draw schedule']
] as const;

const faqs = [
  ['Do you lend on owner-occupied properties?', 'No. We provide business-purpose lending only and do not finance owner-occupied consumer residences.'],
  ['What property types do you finance?', 'We focus on investment real estate including 1-4 unit non-owner occupied, multifamily, mixed-use, and select commercial collateral.'],
  ['How quickly can you close?', 'Timelines depend on deal readiness, but well-packaged files can close in as little as 10 to 15 business days.'],
  ['Do I need an LLC or business entity?', 'Most loans close to an entity. If you are still structuring your borrowing entity, we can outline options during initial review.'],
  ['What documents are typically required?', 'Common requirements include a purchase contract or payoff statement, rent roll or project budget, borrower organizational docs, and sponsor experience details.'],
  ['Are prepayment penalties possible?', 'Some structures include prepayment provisions depending on product and pricing. We outline those terms up front before closing.']
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
              src="/images/chicago-skyline-hero.jpg"
              alt="Commercial real estate skyline at dusk"
              width={900}
              height={1100}
              className="h-[540px] w-full rounded-sm object-cover object-[center_32%]"
              priority
            />
            <h1 className="text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">Institutional execution speed for experienced real estate operators.</h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink/75">Northline Capital delivers structured bridge, construction, and rental financing with practical underwriting, direct decision-makers, and dependable closings.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="#final-cta" className="rounded-sm bg-navy px-7 py-3 text-sm font-medium text-cloud transition hover:bg-ink">Apply Now</Link>
              <Link href="#loan-programs" className="rounded-sm border border-stone bg-white px-7 py-3 text-sm font-medium text-ink transition hover:border-ink">View Programs</Link>
            </div>
            <div className="grid gap-4 border-t border-stone pt-6 sm:grid-cols-3">
              {['$2B+ Sponsor Pipeline Reviewed', '10–15 Day Typical Closings', 'Repeat Operator Focus'].map((item) => (
                <p key={item} className="text-sm font-medium text-ink/70">{item}</p>
              ))}
            </div>
          </div>
          <div className="relative isolate rounded-sm border border-stone/80 bg-white p-3 shadow-soft">
            <Image src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80" alt="Commercial real estate skyline at dusk" width={900} height={1100} className="h-[540px] w-full rounded-sm object-cover" priority />
            <div className="absolute -bottom-4 -left-4 hidden border border-stone bg-cloud/95 p-4 shadow-soft md:block">
              <p className="text-xs uppercase tracking-widest text-steel">Capital Snapshot</p>
              <p className="mt-2 text-sm text-ink/80">Senior + mezz structures for acquisition, refinance, and value-add execution.</p>
            </div>
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
      <section className="border-y border-stone bg-white py-8">
        <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {['Business-purpose only', 'Direct communication', 'Transparent process', 'Execution-focused underwriting', 'Built for repeat borrowers'].map((item) => (
            <p key={item} className="rounded-sm border border-stone/80 px-4 py-3 text-center text-sm font-medium text-ink/75">{item}</p>
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
      <section id="loan-programs" className="section-shell py-24">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Loan Programs</p>
            <h2 className="text-3xl font-semibold text-navy sm:text-4xl">Purpose-built debt solutions for business borrowers.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink/70">Structured terms, clear expectations, and program flexibility informed by real project economics.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map(([title, description]) => (
            <article key={title} className="group flex min-h-48 flex-col justify-between rounded-sm border border-stone bg-white p-6 shadow-soft transition hover:-translate-y-1">
              <div>
                <h3 className="text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{description}</p>
              </div>
              <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                Program Details <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">Program Details <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></p>
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
      <section id="why-us" className="bg-navy py-24 text-cloud">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="eyebrow text-cloud/70">Why Borrowers Choose Us</p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">We move quickly, but never loosely.</h2>
            <p className="max-w-xl text-base leading-relaxed text-cloud/80">Our process is designed for sponsors who value certainty. We underwrite the business plan, not just a checklist, then communicate expectations clearly from term sheet to closing table.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[['Structured speed', Clock3], ['Risk-aware credit', ShieldCheck], ['Real estate fluency', Landmark], ['Direct access to decision makers', ArrowUpRight]].map(([label, Icon]) => (
              <div key={String(label)} className="rounded-sm border border-cloud/20 p-5">
                <Icon className="h-5 w-5" />
                <p className="mt-4 text-sm text-cloud/90">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-shell py-24">
        <p className="eyebrow">How It Works</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-navy sm:text-4xl">A clear process built for decisive closings.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {['Submit your deal', 'Review structure', 'Deliver diligence', 'Close with certainty', 'Execute and scale'].map((step, i) => (
            <div key={step} className="rounded-sm border border-stone bg-white p-5">
              <p className="text-xs uppercase tracking-widest text-steel">0{i + 1}</p>
              <p className="mt-3 text-sm font-medium text-ink/85">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Featured Deals</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Recent funding scenarios.</h2>
            </div>
            {/* Swap this with dynamic CMS data later */}
            <p className="hidden text-sm text-ink/65 md:block">Illustrative examples — replace with funded deal data.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {deals.map(([market, type, amount, useCase, timeline]) => (
              <article key={market + type} className="rounded-sm border border-stone p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold text-navy">{market}</h3>
                  <p className="text-sm text-ink/60">{amount}</p>
                </div>
                <div className="mt-4 grid gap-2 text-sm text-ink/75 sm:grid-cols-2">
                  <p><span className="font-medium text-ink">Loan Type:</span> {type}</p>
                  <p><span className="font-medium text-ink">Use Case:</span> {useCase}</p>
                  <p className="sm:col-span-2"><span className="font-medium text-ink">Timeline:</span> {timeline}</p>
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
      <section className="section-shell grid gap-10 py-24 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          <p className="eyebrow">Underwriting Philosophy</p>
          <h2 className="text-3xl font-semibold leading-tight text-navy sm:text-4xl">We underwrite the sponsor, the collateral, and the execution plan together.</h2>
          <p className="max-w-xl leading-relaxed text-ink/75">Strong outcomes come from disciplined structure. Our team evaluates basis, liquidity, timeline sensitivity, and business intent before quoting terms so operators know where they stand.</p>
        </div>
        <div className="rounded-sm border border-stone bg-white p-8 shadow-soft">
          <ul className="space-y-5 text-sm leading-relaxed text-ink/80">
            <li><span className="font-semibold text-navy">Predictable process:</span> no moving goalposts after diligence begins.</li>
            <li><span className="font-semibold text-navy">Practical risk framing:</span> structure designed around real renovation and lease-up timelines.</li>
            <li><span className="font-semibold text-navy">Long-term borrower lens:</span> built for repeat operators, not one-off transactions.</li>
            <li><span className="font-semibold text-navy">Business-purpose mandate:</span> no consumer loans, no owner-occupied collateral.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell">
          <p className="eyebrow">Operator Feedback</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              '“The term sheet matched the closing statement. Fast, clear, and no surprises in diligence.”',
              '“They understood construction risk and structured around real draw timing, not generic assumptions.”',
              '“Communication was direct from underwriting through docs. Exactly what repeat borrowers need.”'
            ].map((quote) => (
              <blockquote key={quote} className="rounded-sm border border-stone p-6 text-sm leading-relaxed text-ink/80">{quote}</blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-shell py-24">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Questions from business-purpose borrowers.</h2>
        <div className="mt-10 divide-y divide-stone rounded-sm border border-stone bg-white">
          {faqs.map(([q, a]) => (
            <details key={q} className="group p-6">
              <summary className="cursor-pointer list-none text-sm font-semibold text-navy">{q}</summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/75">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="final-cta" className="bg-navy py-20 text-cloud">
        <div className="section-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-cloud/65">Ready to Structure a Deal?</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Submit your scenario and receive clear, business-purpose terms.</h2>
            {/* Swap contact placeholders with real channels */}
            <p className="mt-4 text-sm text-cloud/75">(000) 000-0000 • originations@northlinecapital.com</p>
          </div>
          <Link href="#" className="rounded-sm border border-cloud bg-cloud px-7 py-3 text-sm font-semibold text-navy transition hover:bg-white">Get Terms</Link>
        </div>
      </section>

      <footer id="contact" className="border-t border-stone bg-cloud py-12">
        <div className="section-shell grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-navy">NORTHLINE CAPITAL</p>
            <p className="mt-2 text-sm text-ink/70">Business-purpose real estate lending platform.</p>
          </div>
          <div className="text-sm text-ink/75">
            <p className="font-semibold text-ink">Navigation</p>
            <p className="mt-2">Loan Programs • How It Works • FAQ • Contact</p>
          </div>
          <div className="text-sm text-ink/75">
            <p className="font-semibold text-ink">Legal</p>
            <p className="mt-2">Privacy Policy (placeholder) • Terms (placeholder)</p>
          </div>
        </div>
        <div className="section-shell mt-8 border-t border-stone pt-5 text-xs leading-relaxed text-ink/60">
          Northline Capital provides business-purpose loans only. No consumer purpose loans. No owner-occupied properties. All terms are subject to underwriting review, collateral validation, and final documentation. This website is for informational purposes only and is not a commitment to lend.
        </div>
      </footer>
    </main>
  );
}
