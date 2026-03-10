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
          <p className="mt-2">Loan Programs • How It Works • <Link href="/insights" className="text-navy underline underline-offset-4">Insights</Link> • FAQ • Contact</p>
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
  );
}
