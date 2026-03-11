import Link from 'next/link';

type ConversionCtaProps = {
  heading?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function ConversionCta({
  heading = 'Ready to Discuss an Opportunity?',
  body =
    'Whether you are seeking financing, submitting a brokered deal, or evaluating a loan sale, Northline Capital can review the opportunity.',
  primaryLabel = 'Submit Your Deal',
  primaryHref = '/loan-process',
  secondaryLabel = 'Contact',
  secondaryHref = '/contact'
}: ConversionCtaProps) {
  return (
    <section className="section-shell pb-24">
      <article className="rounded-sm border border-stone bg-white p-8 shadow-soft md:p-10">
        <h2 className="text-3xl font-semibold text-navy sm:text-4xl">{heading}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/75">{body}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="rounded-sm border border-navy bg-navy px-7 py-3 text-sm font-semibold text-cloud transition hover:bg-ink"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="rounded-sm border border-stone bg-cloud px-7 py-3 text-sm font-semibold text-ink transition hover:border-ink"
          >
            {secondaryLabel}
          </Link>
        </div>
      </article>
    </section>
  );
}
