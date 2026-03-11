import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ConversionCta } from '@/components/conversion-cta';

const examples = [
  {
    title: 'Value-Add Multifamily Bridge Loan',
    loanAmount: '$4,200,000',
    propertyType: 'Multifamily',
    location: 'Texas',
    situation:
      'Sponsor acquired a partially vacant apartment property requiring lease-up and operational improvements.',
    solution:
      'Bridge loan structured at approximately 70% loan-to-cost with a 12-month term to allow stabilization prior to refinance.'
  },
  {
    title: 'Fix & Flip Loan',
    loanAmount: '$520,000',
    propertyType: 'Single-Family Investment Property',
    location: 'Arizona',
    situation: 'Investor acquired a distressed residential property requiring full renovation.',
    solution:
      'Short-term fix-and-flip financing covering acquisition and renovation budget with a planned resale upon completion.'
  },
  {
    title: 'Rental / DSCR Loan',
    loanAmount: '$1,350,000',
    propertyType: 'Short-Term Rental Property',
    location: 'Florida',
    situation: 'Investor refinancing a stabilized rental property with consistent rental income.',
    solution: 'Rental loan structured based on property income performance and borrower experience.'
  },
  {
    title: 'Mixed-Use Bridge Loan',
    loanAmount: '$2,800,000',
    propertyType: 'Mixed-Use Building',
    location: 'Tennessee',
    situation: 'Property required lease-up of ground-floor retail and stabilization of residential units.',
    solution:
      'Bridge financing allowing the sponsor to stabilize occupancy prior to permanent financing.'
  }
] as const;

export default function ExampleTransactionsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section-shell pb-16 pt-32 lg:pt-40">
        <p className="eyebrow">Illustrative Scenarios</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">Example Transactions</h1>
        <p className="mt-6 max-w-4xl text-base leading-relaxed text-ink/75">
          The following examples illustrate the types of business-purpose real estate transactions Northline Capital
          evaluates and finances. These examples are representative scenarios designed to demonstrate our approach to
          transitional and investment real estate lending.
        </p>
      </section>

      <section className="section-shell pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {examples.map((example) => (
            <article key={example.title} className="rounded-sm border border-stone bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-semibold text-navy">{example.title}</h2>
              <div className="mt-4 grid gap-2 text-sm text-ink/80">
                <p>
                  <span className="font-semibold text-ink">Loan Amount:</span> {example.loanAmount}
                </p>
                <p>
                  <span className="font-semibold text-ink">Property Type:</span> {example.propertyType}
                </p>
                <p>
                  <span className="font-semibold text-ink">Location:</span> {example.location}
                </p>
              </div>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink/75">
                <p>
                  <span className="font-semibold text-navy">Situation:</span> {example.situation}
                </p>
                <p>
                  <span className="font-semibold text-navy">Northline Solution:</span> {example.solution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ConversionCta />

      <SiteFooter />
    </main>
  );
}
