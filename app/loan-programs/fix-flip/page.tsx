import { LoanProgramPage } from '@/components/loan-program-page';

export default function FixFlipPage() {
  return (
    <LoanProgramPage
      title="Fix & Flip Loans"
      overview={[
        'Northline Capital provides financing for experienced investors acquiring and renovating residential properties for resale.',
        'Loans include acquisition funding and renovation capital distributed through structured draw reimbursements.'
      ]}
      parameters={[
        { parameter: 'Loan Size', details: '$150,000 – $1,500,000' },
        { parameter: 'Term', details: '6 – 12 months' },
        { parameter: 'Interest Rate', details: '11.0% – 13.5%' },
        { parameter: 'Origination Fee', details: '2 – 3 points' },
        { parameter: 'Max Loan-to-Cost', details: 'Up to ~90%' },
        { parameter: 'Max Loan-to-After-Repair Value', details: 'Up to ~80%' }
      ]}
      propertyTypes={['Single-family homes', 'Townhomes', '2–4 unit residential', 'Small multifamily']}
      useCases={['Property renovation', 'Short-term repositioning', 'Value-add resale']}
      borrowerRequirements={[
        'Loans must be for business or investment purposes only.',
        'Owner-occupied primary residences are not eligible.',
        'Borrowers typically invest through legal entities such as LLCs or corporations.',
        'Borrowers must certify that loan proceeds will be used solely for business or investment purposes.',
        'Borrowers must certify that the collateral property is not intended for owner-occupied consumer use.',
        'Prior renovation execution experience and a realistic scope, timeline, and budget are preferred.',
        'A clear exit strategy is required, typically through sale, refinance, or stabilization.',
        'Adequate liquidity, reserves, and project support may be required.',
        'Additional underwriting conditions may apply based on property type, market, borrower profile, business plan, and sponsor experience.',
        'Financing is subject to underwriting review and is not guaranteed unless and until final loan documents are executed and all closing conditions are satisfied.'
      ]}
    />
  );
}
