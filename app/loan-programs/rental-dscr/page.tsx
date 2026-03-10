import { LoanProgramPage } from '@/components/loan-program-page';

export default function RentalDscrPage() {
  return (
    <LoanProgramPage
      title="Rental / DSCR Loans"
      overview={[
        'Northline Capital provides financing for stabilized rental properties using debt-service coverage ratio underwriting rather than personal income.'
      ]}
      parameters={[
        { parameter: 'Loan Size', details: '$200,000 – $3,000,000' },
        { parameter: 'Term', details: '12 – 24 months' },
        { parameter: 'Interest Rate', details: '9.5% – 12%' },
        { parameter: 'Origination Fee', details: '1.5 – 2.5 points' },
        { parameter: 'Max Loan-to-Value', details: '70%' },
        { parameter: 'Minimum DSCR', details: '1.0x' }
      ]}
      propertyTypes={['Single-family rentals', 'Townhomes', 'Small multifamily', 'Rental portfolios']}
      useCases={['Rental acquisition', 'Bridge to long-term financing', 'Portfolio refinancing']}
    />
  );
}
