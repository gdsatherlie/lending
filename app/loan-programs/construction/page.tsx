import { LoanProgramPage } from '@/components/loan-program-page';

export default function ConstructionPage() {
  return (
    <LoanProgramPage
      title="Ground-Up Construction"
      overview={[
        'Northline Capital provides construction financing for experienced developers building residential and small multifamily projects.'
      ]}
      parameters={[
        { parameter: 'Loan Size', details: '$50,000 – $5,000,000' },
        { parameter: 'Term', details: '12 – 18 months' },
        { parameter: 'Interest Rate', details: '11.5% – 13.5%' },
        { parameter: 'Origination Fee', details: '2 – 3 points' },
        { parameter: 'Max Loan-to-Cost', details: 'Up to ~90%' },
        { parameter: 'Max Loan-to-After-Completion Value', details: 'Up to ~80%' }
      ]}
      propertyTypes={['Single-family development', 'Townhomes', 'Small multifamily', 'Build-to-rent projects']}
      useCases={['Ground-up residential development', 'Build-to-rent communities', 'Small multifamily construction']}
      borrowerRequirements={[
        'Loans must be for business or investment purposes only.',
        'Owner-occupied primary residences are not eligible.',
        'Borrowers typically invest through legal entities such as LLCs or corporations.',
        'Borrowers must certify that loan proceeds will be used solely for business or investment purposes.',
        'Borrowers must certify that the collateral property is not intended for owner-occupied consumer use.',
        'Sponsor and development experience, budget integrity, timeline realism, and draw compliance are central to construction underwriting.',
        'A clear exit strategy is required, typically through sale, refinance, or stabilization.',
        'Adequate liquidity, reserves, and project support may be required.',
        'Additional underwriting conditions may apply based on property type, market, borrower profile, business plan, and sponsor experience.',
        'Financing is subject to underwriting review and is not guaranteed unless and until final loan documents are executed and all closing conditions are satisfied.'
      ]}
    />
  );
}
