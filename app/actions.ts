'use server';

import { redirect } from 'next/navigation';

type FormState = { error?: string };

export async function submitDealAction(_: FormState, formData: FormData): Promise<FormState> {
  const requiredFields = [
    'fullName',
    'email',
    'phone',
    'propertyAddress',
    'propertyType',
    'loanProgram',
    'loanAmount',
    'purchasePriceOrValue',
    'exitStrategy',
    'projectsCompleted'
  ];

  for (const field of requiredFields) {
    const value = formData.get(field);
    if (!value || String(value).trim() === '') {
      return { error: 'Please complete all required fields before submitting.' };
    }
  }

  if (!formData.get('businessPurposeCertification')) {
    return {
      error: 'You must confirm the business-purpose certification before submitting.'
    };
  }

  redirect('/loan-process/success');
}

export async function contactAction(_: FormState, formData: FormData): Promise<FormState> {
  const requiredFields = ['fullName', 'email', 'message'];

  for (const field of requiredFields) {
    const value = formData.get(field);
    if (!value || String(value).trim() === '') {
      return { error: 'Please complete all required fields before submitting.' };
    }
  }

  redirect('/contact/success');
}
