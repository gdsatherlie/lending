import Link from 'next/link';

const navLinks = [
  { label: 'Loan Programs', href: '/#loan-programs' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'How It Works', href: '/loan-process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Loan Acquisitions', href: '/loan-acquisitions' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/#contact' }
] as const;

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
          <ul className="mt-2 grid gap-x-5 gap-y-1 sm:grid-cols-2">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="underline-offset-4 hover:text-navy hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-ink/75">
          <p className="font-semibold text-ink">Legal</p>
          <p className="mt-2 flex flex-col gap-1">
            <Link href="/privacy-policy" className="underline-offset-4 hover:text-navy hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="underline-offset-4 hover:text-navy hover:underline">
              Terms
            </Link>
          </p>
        </div>
      </div>
      <div className="section-shell mt-8 space-y-3 border-t border-stone pt-5 text-xs leading-relaxed text-ink/60">
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
        <p>
          Northline Capital reserves the right to modify, decline, or restructure any proposed financing at its sole
          discretion.
        </p>
        <p>Northline Capital does not provide consumer mortgage loans.</p>
        <p>Northline Capital provides financing for business-purpose real estate transactions. Loan programs are offered to experienced real estate investors and are subject to underwriting and applicable regulatory requirements.</p>
        <p>© {new Date().getFullYear()} Northline Capital. All rights reserved.</p>
      </div>
    </footer>
  );
}
