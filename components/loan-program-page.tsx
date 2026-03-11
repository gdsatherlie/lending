import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ConversionCta } from '@/components/conversion-cta';

type LoanParameter = {
  parameter: string;
  details: string;
};

type LoanProgramPageProps = {
  title: string;
  overview: string[];
  parameters: LoanParameter[];
  propertyTypes: string[];
  useCases: string[];
  ctaHeadline?: string;
  underwritingIntro?: string;
  underwritingFactors?: string[];
  borrowerRequirements?: string[];
};

const baseBorrowerRequirements = [
  'Loans must be for business or investment purposes only.',
  'Owner-occupied primary residences are not eligible.',
  'Borrowers typically invest through legal entities such as LLCs or corporations.',
  'Borrowers must certify that loan proceeds will be used solely for business or investment purposes.',
  'Borrowers must certify that the collateral property is not intended for owner-occupied consumer use.',
  'A clear exit strategy is required, typically through sale, refinance, or stabilization.',
  'Adequate liquidity, reserves, and project support may be required.',
  'Additional underwriting conditions may apply based on property type, market, borrower profile, business plan, and sponsor experience.',
  'Financing is subject to underwriting review and is not guaranteed unless and until final loan documents are executed and all closing conditions are satisfied.'
] as const;

export function LoanProgramPage({
  title,
  overview,
  parameters,
  propertyTypes,
  useCases,
  ctaHeadline,
  underwritingIntro,
  underwritingFactors,
  borrowerRequirements
}: LoanProgramPageProps) {
  return (
    <main>
      <SiteHeader />

      <section className="section-shell pb-16 pt-32 lg:pt-40">
        <p className="eyebrow">Loan Programs</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">{title}</h1>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink/75">
          {overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <h2 className="text-2xl font-semibold text-navy">Loan Parameters</h2>
          <div className="mt-6 overflow-hidden rounded-sm border border-stone">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-cloud">
                <tr>
                  <th className="border-b border-stone px-5 py-3 font-semibold text-ink">Parameter</th>
                  <th className="border-b border-stone px-5 py-3 font-semibold text-ink">Details</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((item) => (
                  <tr key={item.parameter}>
                    <td className="border-b border-stone px-5 py-3 text-ink/80">{item.parameter}</td>
                    <td className="border-b border-stone px-5 py-3 text-ink/80">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-16 md:grid-cols-2">
        <article className="rounded-sm border border-stone bg-white p-7">
          <h2 className="text-2xl font-semibold text-navy">Eligible Property Types</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-ink/80">
            {propertyTypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-sm border border-stone bg-white p-7">
          <h2 className="text-2xl font-semibold text-navy">Typical Use Cases</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-ink/80">
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      {underwritingIntro && underwritingFactors ? (
        <section className="bg-white py-16">
          <div className="section-shell">
            <article className="rounded-sm border border-stone bg-cloud p-7">
              <h2 className="text-2xl font-semibold text-navy">Underwriting Approach</h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/75">{underwritingIntro}</p>
              <p className="mt-5 text-sm font-medium text-ink/85">Key factors include:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/80">
                {underwritingFactors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      ) : null}

      <section className="section-shell py-16">
        <article className="rounded-sm border border-stone bg-white p-7">
          <h2 className="text-2xl font-semibold text-navy">Borrower Requirements</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/75">
            Northline Capital provides financing for experienced real estate investors and sponsors executing
            business-purpose real estate transactions.
          </p>
          <p className="mt-5 text-sm font-medium text-ink/85">Typical borrower requirements include:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/80">
            {(borrowerRequirements ?? baseBorrowerRequirements).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <ConversionCta heading={ctaHeadline ?? `Ready to discuss a ${title.toLowerCase()} scenario?`} />

      <SiteFooter />
    </main>
  );
}
