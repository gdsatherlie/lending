import { LoanProgramPage } from '@/components/loan-program-page';

export default function MultifamilyPage() {
  return (
    <LoanProgramPage
      title="Multifamily & Mixed-Use"
      overview={[
        'Northline Capital provides financing for small-balance multifamily and mixed-use properties requiring flexible underwriting or transitional capital.'
      ]}
      parameters={[
        { parameter: 'Loan Size', details: '$500,000 – $7,500,000' },
        { parameter: 'Term', details: '12 – 24 months' },
        { parameter: 'Interest Rate', details: '9.75% – 12%' },
        { parameter: 'Origination Fee', details: '2 – 3 points' },
        { parameter: 'Max Loan-to-Value', details: 'Up to ~80%' },
        { parameter: 'Max Loan-to-Cost', details: 'Up to ~90%' }
      ]}
      propertyTypes={['Multifamily', 'Mixed-use', 'Workforce housing', 'Value-add acquisitions']}
      useCases={['Value-add multifamily acquisitions', 'Mixed-use repositioning', 'Bridge to permanent financing']}
      borrowerRequirements={[
        'Loans must be for business or investment purposes only.',
        'Owner-occupied primary residences are not eligible.',
        'Borrowers typically invest through legal entities such as LLCs or corporations.',
        'Borrowers must certify that loan proceeds will be used solely for business or investment purposes.',
        'Borrowers must certify that the collateral property is not intended for owner-occupied consumer use.',
        'Borrower experience with multifamily or mixed-use execution and refinance or sale planning may be preferred.',
        'A clear exit strategy is required, typically through sale, refinance, or stabilization.',
        'Adequate liquidity, reserves, and project support may be required.',
        'Additional underwriting conditions may apply based on property type, market, borrower profile, business plan, and sponsor experience.',
        'Financing is subject to underwriting review and is not guaranteed unless and until final loan documents are executed and all closing conditions are satisfied.'
      ]}
    />
  );
}
