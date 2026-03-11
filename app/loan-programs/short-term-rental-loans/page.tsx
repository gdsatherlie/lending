import type { Metadata } from 'next';
import { LoanProgramPage } from '@/components/loan-program-page';

export const metadata: Metadata = {
  title: 'Short-Term Rental Loans | Airbnb & Vacation Rental Financing',
  description:
    'Northline Capital provides financing for Airbnb, VRBO, and vacation rental properties. Short-term rental loans from $250K to $3MM for investors and operators.'
};

export default function ShortTermRentalLoansPage() {
  return (
    <LoanProgramPage
      title="Short-Term Rental Loans (Airbnb / VRBO Financing)"
      overview={[
        'Northline Capital provides financing for investors acquiring or refinancing short-term rental properties operated through platforms such as Airbnb and VRBO.',
        'These loans are designed for stabilized vacation rental properties with demonstrated income performance or strong market demand.',
        'Our underwriting approach focuses on property-level cash flow, market fundamentals, and operator experience for each short-term rental loan structure.'
      ]}
      parameters={[
        { parameter: 'Loan Size', details: '$250,000 – $3,000,000' },
        { parameter: 'Term', details: '12 – 24 months' },
        { parameter: 'Interest Rate', details: '10.0% – 12.5%' },
        { parameter: 'Origination Fee', details: '2 – 3 points' },
        { parameter: 'Max Loan-to-Value', details: 'Up to ~80%' },
        { parameter: 'Minimum DSCR', details: '1.0x' }
      ]}
      propertyTypes={[
        'Single-family vacation rentals',
        'Luxury cabins',
        'Beachfront properties',
        'Townhomes and condominiums',
        'Small multifamily short-term rental properties'
      ]}
      underwritingIntro="Northline Capital evaluates short-term rental loans using a property-focused underwriting process for Airbnb financing and vacation rental financing opportunities."
      underwritingFactors={[
        'Historical rental income performance',
        'Local tourism demand and market dynamics',
        'Borrower experience operating short-term rentals',
        'Seasonal income volatility',
        'Exit strategy and refinance options'
      ]}
      useCases={[
        'Acquisition financing for vacation rental properties',
        'Refinancing existing Airbnb properties',
        'Bridge financing prior to permanent financing',
        'Portfolio financing for short-term rental operators'
      ]}
      borrowerRequirements={[
        'Loans must be for business or investment purposes only.',
        'Owner-occupied primary residences are not eligible.',
        'Borrowers typically invest through legal entities such as LLCs or corporations.',
        'Borrowers must certify that loan proceeds will be used solely for business or investment purposes.',
        'Borrowers must certify that the collateral property is not intended for owner-occupied consumer use.',
        'Property cash flow support, market depth, and operator experience are evaluated for short-term rental financing.',
        'A clear exit strategy is required, typically through sale, refinance, or stabilization.',
        'Adequate liquidity, reserves, and project support may be required.',
        'Additional underwriting conditions may apply based on property type, market, borrower profile, business plan, and sponsor experience.',
        'Financing is subject to underwriting review and is not guaranteed unless and until final loan documents are executed and all closing conditions are satisfied.'
      ]}
      ctaHeadline="Submit Your Short-Term Rental Deal"
    />
  );
}
