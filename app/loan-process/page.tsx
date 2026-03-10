import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const processSteps = [
  {
    title: 'Step 1 — Submit Your Deal',
    description:
      'Borrowers submit basic deal information including property address, loan amount, purchase price, and renovation budget.'
  },
  {
    title: 'Step 2 — Initial Underwriting',
    description: 'Northline reviews property fundamentals, borrower experience, and project feasibility.'
  },
  {
    title: 'Step 3 — Term Sheet Issued',
    description:
      'Qualified transactions receive a non-binding term sheet outlining loan structure, pricing, and timeline.'
  },
  {
    title: 'Step 4 — Due Diligence',
    description: 'Appraisal, title review, insurance verification, and documentation.'
  },
  {
    title: 'Step 5 — Closing & Funding',
    description: 'Loans typically close within 10–14 business days after diligence is completed.'
  },
  {
    title: 'Step 6 — Asset Management',
    description: 'Northline monitors project progress and supports borrowers through execution and exit.'
  }
] as const;

export default function LoanProcessPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section-shell pb-16 pt-32 lg:pt-40">
        <p className="eyebrow">How It Works</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">Loan Process</h1>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink/75">
          <p>
            Northline Capital provides a streamlined path to funding with disciplined underwriting and efficient
            execution.
          </p>
          <p>Qualified loans can typically close within 10–14 business days.</p>
          <p className="text-sm">
            By submitting this inquiry, you acknowledge that you are seeking financing for a business-purpose or
            investment real estate transaction, not consumer or owner-occupied residential financing.
          </p>
          <p className="text-sm">
            Submission of a deal inquiry does not constitute approval, a commitment to lend, or an agreement to
            provide financing.
          </p>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <article key={step.title} className="rounded-sm border border-stone bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-navy">{step.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
