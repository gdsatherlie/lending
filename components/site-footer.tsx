import Link from 'next/link';

const navLinks = [
  { label: 'Loan Programs', href: '/#loan-programs' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'How It Works', href: '/loan-process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Loan Acquisitions', href: '/loan-acquisitions' },
  { label: 'For Brokers & Sponsors', href: '/insights/brokers-and-partners' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Insights', href: '/insights' }
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
          <ul className="grid gap-x-5 gap-y-1 sm:grid-cols-2">
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
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/75">Important Disclosure</h2>
        <p>
          Northline Capital provides business-purpose real estate loans secured by investment or commercial
          properties. Financing is intended solely for business or investment purposes and is not available for
          consumer use or owner-occupied primary residences.
        </p>
        <p>
          Borrowers must certify that loan proceeds will be used exclusively for business or investment purposes and
          that collateral properties are not intended for owner-occupied consumer use.
        </p>
        <p>
          All loan programs, rates, terms, and leverage guidelines described on this website are provided for
          informational purposes only and may change without notice. Nothing on this website constitutes a commitment
          to lend.
        </p>
        <p>
          All financing is subject to underwriting approval, property review, borrower qualification, title and
          diligence review, and satisfaction of closing conditions.
        </p>
        <p>
          Northline Capital evaluates transactions in accordance with applicable legal, regulatory, and licensing
          requirements and reserves the right to modify, decline, or restructure any proposed financing at its sole
          discretion.
        </p>
        <p>© {new Date().getFullYear()} Northline Capital. All rights reserved.</p>
      </div>
    </footer>
  );
}
