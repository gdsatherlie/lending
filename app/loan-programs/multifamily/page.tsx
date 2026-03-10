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
        { parameter: 'Max Loan-to-Value', details: '70%' },
        { parameter: 'Max Loan-to-Cost', details: '80%' }
      ]}
      propertyTypes={['Multifamily', 'Mixed-use', 'Workforce housing', 'Value-add acquisitions']}
      useCases={['Value-add multifamily acquisitions', 'Mixed-use repositioning', 'Bridge to permanent financing']}
      borrowerRequirements={[
        'Loans must be for business or investment purposes only.',
        'Owner-occupied primary residences are not eligible.',
        'Borrowers typically invest through legal entities such as LLCs or corporations.',
        'Borrowers must certify that loan proceeds will be used solely for business or investment purposes.',
        'Borrowers must certify that the property is not intended for owner-occupied consumer use.',
        'Borrower experience with multifamily or mixed-use execution and refinance or sale planning may be preferred.',
        'A clear exit strategy is required, typically through sale, refinance, or stabilization.',
        'Adequate liquidity, reserves, and project support may be required.',
        'Additional underwriting conditions may apply based on property type, market, borrower profile, and business plan.'
      ]}
    />
  );
}
