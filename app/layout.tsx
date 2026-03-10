import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Northline Capital | Business-Purpose Real Estate Lending',
  description:
    'Execution-first business-purpose lending for investors, operators, and developers. Bridge, construction, rental, and multifamily financing.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
