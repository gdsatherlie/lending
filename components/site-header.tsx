'use client';

import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

type DesktopMenu = 'solutions' | 'company' | null;

const solutionLinks = [
  { label: 'Loan Programs', href: '/#loan-programs' },
  { label: 'Loan Acquisitions', href: '/loan-acquisitions' },
  { label: 'For Brokers & Partners', href: '/for-brokers-partners' }
] as const;

const companyLinks = [
  { label: 'Why Us', href: '/#why-us' },
  { label: 'How It Works', href: '/loan-process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Insights', href: '/insights' }
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpenMenu, setDesktopOpenMenu] = useState<DesktopMenu>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [scrolled]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-stone/70 bg-cloud/95 backdrop-blur' : 'bg-transparent'}`}>
      <div className="section-shell flex h-20 items-center justify-between gap-3">
        <Link href="/" className="text-lg font-semibold tracking-wide text-navy">
          NORTHLINE CAPITAL
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setDesktopOpenMenu('solutions')}
            onMouseLeave={() => setDesktopOpenMenu((menu) => (menu === 'solutions' ? null : menu))}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-ink/80 transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
              aria-label="Solutions"
              aria-haspopup="menu"
              aria-expanded={desktopOpenMenu === 'solutions'}
              onFocus={() => setDesktopOpenMenu('solutions')}
              onKeyDown={(event) => {
                if (event.key === 'Escape') setDesktopOpenMenu(null);
              }}
            >
              Solutions
              <ChevronDown className="h-4 w-4" />
            </button>
            <div
              className={`absolute left-0 top-full w-56 pt-2 ${desktopOpenMenu === 'solutions' ? 'visible opacity-100' : 'invisible opacity-0'} transition`}
              onFocusCapture={() => setDesktopOpenMenu('solutions')}
            >
              <div className="rounded-sm border border-stone bg-white p-2 shadow-soft">
                {solutionLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-sm px-3 py-2 text-sm text-ink/80 transition hover:bg-cloud hover:text-ink focus-visible:bg-cloud focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setDesktopOpenMenu('company')}
            onMouseLeave={() => setDesktopOpenMenu((menu) => (menu === 'company' ? null : menu))}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-ink/80 transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
              aria-label="Company"
              aria-haspopup="menu"
              aria-expanded={desktopOpenMenu === 'company'}
              onFocus={() => setDesktopOpenMenu('company')}
              onKeyDown={(event) => {
                if (event.key === 'Escape') setDesktopOpenMenu(null);
              }}
            >
              Company
              <ChevronDown className="h-4 w-4" />
            </button>
            <div
              className={`absolute left-0 top-full w-56 pt-2 ${desktopOpenMenu === 'company' ? 'visible opacity-100' : 'invisible opacity-0'} transition`}
              onFocusCapture={() => setDesktopOpenMenu('company')}
            >
              <div className="rounded-sm border border-stone bg-white p-2 shadow-soft">
                {companyLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-sm px-3 py-2 text-sm text-ink/80 transition hover:bg-cloud hover:text-ink focus-visible:bg-cloud focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contact" className="text-sm text-ink/80 transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-stone bg-white text-ink transition hover:border-ink lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link
            href="/loan-process"
            className="rounded-sm border border-navy bg-navy px-5 py-2.5 text-sm font-medium text-cloud transition hover:bg-ink"
          >
            Get Terms
          </Link>
        </div>
      </div>

      {mobileOpen ? (
        <div className="section-shell border-t border-stone/70 bg-cloud/95 py-4 lg:hidden">
          <div className="grid gap-5 rounded-sm border border-stone bg-white p-4 shadow-soft">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-steel">Solutions</p>
              <ul className="mt-2 space-y-1">
                {solutionLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-sm px-2 py-2 text-sm text-ink/80 transition hover:bg-cloud hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-steel">Company</p>
              <ul className="mt-2 space-y-1">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-sm px-2 py-2 text-sm text-ink/80 transition hover:bg-cloud hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-sm px-2 py-2 text-sm text-ink/80 transition hover:bg-cloud hover:text-ink"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
