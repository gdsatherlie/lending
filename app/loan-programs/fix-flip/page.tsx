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
        { parameter: 'Max Loan-to-Cost', details: '85%' },
        { parameter: 'Max Loan-to-After-Repair Value', details: '70%' }
      ]}
      propertyTypes={['Single-family homes', 'Townhomes', '2–4 unit residential', 'Small multifamily']}
      useCases={['Property renovation', 'Short-term repositioning', 'Value-add resale']}
    />
  );
}
