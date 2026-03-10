'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { contactAction } from '@/app/actions';

function ContactSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-sm border border-navy bg-navy px-7 py-3 text-sm font-semibold text-cloud transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? 'Submitting...' : 'Send Message'}
    </button>
  );
}

const initialState: { error?: string } = {};

export function ContactForm() {
  const [state, formAction] = useFormState(contactAction, initialState);

  return (
    <form action={formAction} className="space-y-6 rounded-sm border border-stone bg-white p-6 shadow-soft md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm text-ink/80">
          <span className="font-medium text-ink">Full Name</span>
          <input required type="text" name="fullName" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
        </label>
        <label className="space-y-2 text-sm text-ink/80">
          <span className="font-medium text-ink">Email Address</span>
          <input required type="email" name="email" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
        </label>
      </div>
      <label className="space-y-2 text-sm text-ink/80">
        <span className="font-medium text-ink">Phone Number (optional)</span>
        <input type="tel" name="phone" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
      </label>
      <label className="space-y-2 text-sm text-ink/80">
        <span className="font-medium text-ink">Message</span>
        <textarea required name="message" rows={6} className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
      </label>

      <p className="text-xs leading-relaxed text-ink/65">
        By submitting this inquiry, you acknowledge that you are seeking financing for a business-purpose or investment
        real estate transaction, not consumer or owner-occupied residential financing.
      </p>
      <p className="text-xs leading-relaxed text-ink/65">
        Submission of a message does not constitute approval, a commitment to lend, or an agreement to provide
        financing.
      </p>

      <div>
        <ContactSubmitButton />
        {state.error ? <p className="mt-3 text-xs text-red-700">{state.error}</p> : null}
      </div>
    </form>
  );
}
