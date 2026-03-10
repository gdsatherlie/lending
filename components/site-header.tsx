'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Loan Programs', href: '#loan-programs' },
  { label: 'How It Works', href: '/loan-process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-stone/70 bg-cloud/95 backdrop-blur' : 'bg-transparent'}`}>
      <div className="section-shell flex h-20 items-center justify-between">
        {/* Swap brand name or replace with SVG logo asset */}
        <Link href="/" className="text-lg font-semibold tracking-wide text-navy">NORTHLINE CAPITAL</Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm text-ink/80 transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="#contact" className="rounded-sm border border-navy bg-navy px-5 py-2.5 text-sm font-medium text-cloud transition hover:bg-ink">
          Get Terms
        </Link>
      </div>
    </header>
  );
}
