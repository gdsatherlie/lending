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
    />
  );
}
