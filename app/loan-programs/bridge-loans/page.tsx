import { LoanProgramPage } from '@/components/loan-program-page';

export default function BridgeLoansPage() {
  return (
    <LoanProgramPage
      title="Bridge Loans"
      overview={[
        'Northline Capital provides short-term bridge financing for transitional real estate assets requiring speed and flexible underwriting.',
        'These loans support acquisitions, recapitalizations, lease-up strategies, and repositioning opportunities prior to refinancing into permanent financing.'
      ]}
      parameters={[
        { parameter: 'Loan Size', details: '$250,000 – $5,000,000' },
        { parameter: 'Term', details: '6 – 12 months' },
        { parameter: 'Interest Rate', details: '10.0% – 13.0%' },
        { parameter: 'Origination Fee', details: '2 – 3 points' },
        { parameter: 'Max Loan-to-Value', details: 'Up to ~80%' },
        { parameter: 'Max Loan-to-Cost', details: 'Up to ~90%' }
      ]}
      propertyTypes={['Multifamily', 'Mixed-use', 'Small office', 'Retail', 'Portfolio acquisitions']}
      useCases={['Acquisition bridge', 'Lease-up stabilization', 'Cash-out recapitalization', 'Bridge to agency refinance']}
      borrowerRequirements={[
        'Loans must be for business or investment purposes only.',
        'Owner-occupied primary residences are not eligible.',
        'Borrowers typically invest through legal entities such as LLCs or corporations.',
        'Borrowers must certify that loan proceeds will be used solely for business or investment purposes.',
        'Borrowers must certify that the collateral property is not intended for owner-occupied consumer use.',
        'Prior transitional asset and repositioning experience may be preferred based on business plan complexity.',
        'A clear exit strategy is required, typically through sale, refinance, or stabilization.',
        'Adequate liquidity, reserves, and project support may be required.',
        'Additional underwriting conditions may apply based on property type, market, borrower profile, business plan, and sponsor experience.',
        'Financing is subject to underwriting review and is not guaranteed unless and until final loan documents are executed and all closing conditions are satisfied.'
      ]}
    />
  );
}
