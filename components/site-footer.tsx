import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-stone bg-cloud py-12">
      <div className="section-shell grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-navy">NORTHLINE CAPITAL</p>
          <p className="mt-2 text-sm text-ink/70">Business-purpose real estate lending platform.</p>
        </div>
        <div className="text-sm text-ink/75">
          <p className="font-semibold text-ink">Navigation</p>
          <p className="mt-2">
            Loan Programs • How It Works •{' '}
            <Link href="/insights" className="text-navy underline underline-offset-4">
              Insights
            </Link>{' '}
            • FAQ • Contact
          </p>
        </div>
        <div className="text-sm text-ink/75">
          <p className="font-semibold text-ink">Legal</p>
          <p className="mt-2">Privacy Policy (placeholder) • Terms (placeholder)</p>
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-stone pt-5 text-xs leading-relaxed text-ink/60 space-y-3">
        <p>
          Northline Capital provides business-purpose loans secured by real estate. Loans are intended for investment
          or commercial purposes only and are not available for consumer purposes or owner-occupied primary
          residences.
        </p>
        <p>
          Borrowers will be required to certify that loan proceeds are used solely for business or investment purposes
          and that the collateral property is not intended for owner-occupied consumer use.
        </p>
        <p>
          Loan programs, rates, terms, leverage levels, and guidelines described on this website are provided for
          informational purposes only, may change without notice, and do not constitute a commitment to lend.
        </p>
        <p>
          All loans are subject to underwriting approval, property review, borrower qualification, title and diligence
          review, and satisfaction of applicable closing conditions.
        </p>
        <p>
          Northline Capital originates loans in select U.S. markets and evaluates each transaction based on applicable
          legal, regulatory, licensing, and underwriting considerations.
        </p>
        <p>Northline Capital reserves the right to modify, decline, or restructure any proposed financing at its sole discretion.</p>
        <p>Northline Capital does not provide consumer mortgage loans.</p>
      </div>
    </footer>
  );
}
