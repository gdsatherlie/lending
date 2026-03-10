import { LoanProgramPage } from '@/components/loan-program-page';

export default function ConstructionPage() {
  return (
    <LoanProgramPage
      title="Ground-Up Construction"
      overview={[
        'Northline Capital provides construction financing for experienced developers building residential and small multifamily projects.'
      ]}
      parameters={[
        { parameter: 'Loan Size', details: '$500,000 – $5,000,000' },
        { parameter: 'Term', details: '12 – 18 months' },
        { parameter: 'Interest Rate', details: '11.5% – 13.5%' },
        { parameter: 'Origination Fee', details: '2 – 3 points' },
        { parameter: 'Max Loan-to-Cost', details: '75%' },
        { parameter: 'Max Loan-to-After-Completion Value', details: '65%' }
      ]}
      propertyTypes={['Single-family development', 'Townhomes', 'Small multifamily', 'Build-to-rent projects']}
      useCases={['Ground-up residential development', 'Build-to-rent communities', 'Small multifamily construction']}
    />
  );
}
