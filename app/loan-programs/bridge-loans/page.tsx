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
        { parameter: 'Max Loan-to-Value', details: '65%' },
        { parameter: 'Max Loan-to-Cost', details: '80%' }
      ]}
      propertyTypes={['Multifamily', 'Mixed-use', 'Small office', 'Retail', 'Portfolio acquisitions']}
      useCases={['Acquisition bridge', 'Lease-up stabilization', 'Cash-out recapitalization', 'Bridge to agency refinance']}
    />
  );
}
