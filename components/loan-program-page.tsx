import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

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
};

export function LoanProgramPage({
  title,
  overview,
  parameters,
  propertyTypes,
  useCases,
  ctaHeadline,
  underwritingIntro,
  underwritingFactors
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

      <section className="bg-navy py-16 text-cloud">
        <div className="section-shell text-center">
          <h2 className="text-3xl font-semibold">{ctaHeadline ?? `Ready to discuss a ${title.toLowerCase()} scenario?`}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-cloud/80">Business-purpose loans only. Terms are subject to underwriting and final documentation.</p>
          <Link
            href="#contact"
            className="mt-7 inline-flex rounded-sm border border-cloud bg-cloud px-7 py-3 text-sm font-semibold text-navy transition hover:bg-white"
          >
            Submit Your Deal
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
