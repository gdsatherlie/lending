'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

export function QuickDealSnapshotForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="space-y-5">
        <h3 className="text-2xl font-semibold text-navy">Deal Snapshot Received</h3>
        <p className="max-w-3xl text-sm leading-relaxed text-ink/75">
          Thank you for sharing the opportunity. If the transaction fits our lending parameters, our team will follow
          up to request additional information.
        </p>

        <div className="border-t border-stone pt-5">
          <p className="text-sm text-ink/75">Looking to submit full deal details?</p>
          <Link
            href="/loan-process"
            className="mt-3 inline-flex rounded-sm border border-navy bg-navy px-6 py-3 text-sm font-semibold text-cloud transition hover:bg-ink"
          >
            Submit Full Deal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm text-ink/80">
          <span className="font-medium text-ink">Loan Amount</span>
          <input
            required
            type="number"
            name="loanAmount"
            className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy"
          />
        </label>

        <label className="space-y-2 text-sm text-ink/80">
          <span className="font-medium text-ink">Property Type</span>
          <select
            required
            name="propertyType"
            className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy"
          >
            <option value="">Select property type</option>
            <option>Single Family</option>
            <option>Multifamily</option>
            <option>Mixed Use</option>
            <option>Construction</option>
            <option>Other</option>
          </select>
        </label>

        <label className="space-y-2 text-sm text-ink/80">
          <span className="font-medium text-ink">Location (City / State)</span>
          <input
            required
            type="text"
            name="location"
            className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy"
          />
        </label>

        <label className="space-y-2 text-sm text-ink/80">
          <span className="font-medium text-ink">Deal Type</span>
          <select
            required
            name="dealType"
            className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy"
          >
            <option value="">Select deal type</option>
            <option>Bridge Loan</option>
            <option>Fix & Flip</option>
            <option>Rental / DSCR</option>
            <option>Construction</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm text-ink/80">
        <span className="font-medium text-ink">Broker Email</span>
        <input
          required
          type="email"
          name="brokerEmail"
          className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy"
        />
      </label>

      <div>
        <button
          type="submit"
          className="rounded-sm border border-navy bg-navy px-7 py-3 text-sm font-semibold text-cloud transition hover:bg-ink"
        >
          Send Deal Snapshot
        </button>
      </div>

      <div className="border-t border-stone pt-5">
        <p className="text-sm text-ink/75">Looking to submit full deal details?</p>
        <Link
          href="/loan-process"
          className="mt-3 inline-flex rounded-sm border border-stone bg-cloud px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
        >
          Submit Full Deal
        </Link>
      </div>
    </form>
  );
}
