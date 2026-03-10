import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function LoanProcessPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section-shell pb-16 pt-32 lg:pt-40">
        <p className="eyebrow">Deal Intake</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">Submit Your Deal</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/75">
          If you are seeking financing for a real estate investment opportunity, submit your deal information below.
          Our team will review the opportunity and respond promptly if the transaction fits our lending parameters.
        </p>
      </section>

      <section className="section-shell pb-24">
        <form className="space-y-10 rounded-sm border border-stone bg-white p-6 shadow-soft md:p-8" action="#" method="post" encType="multipart/form-data">
          <fieldset className="space-y-5">
            <legend className="text-xl font-semibold text-navy">1. Borrower Information</legend>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-ink/80">
                <span className="font-medium text-ink">Full Name</span>
                <input required type="text" name="fullName" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
              </label>
              <label className="space-y-2 text-sm text-ink/80">
                <span className="font-medium text-ink">Email Address</span>
                <input required type="email" name="email" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
              </label>
              <label className="space-y-2 text-sm text-ink/80">
                <span className="font-medium text-ink">Phone Number</span>
                <input required type="tel" name="phone" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
              </label>
              <label className="space-y-2 text-sm text-ink/80">
                <span className="font-medium text-ink">Borrowing Entity Name (LLC / Corporation)</span>
                <input type="text" name="entity" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
              </label>
            </div>
          </fieldset>

          <fieldset className="space-y-5 border-t border-stone pt-8">
            <legend className="text-xl font-semibold text-navy">2. Property Information</legend>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-ink/80 md:col-span-2">
                <span className="font-medium text-ink">Property Address</span>
                <input required type="text" name="propertyAddress" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
              </label>
              <label className="space-y-2 text-sm text-ink/80">
                <span className="font-medium text-ink">Property Type</span>
                <select required name="propertyType" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy">
                  <option value="">Select property type</option>
                  <option>Single Family</option>
                  <option>Townhome</option>
                  <option>Condo</option>
                  <option>2–4 Unit</option>
                  <option>Multifamily (5+)</option>
                  <option>Mixed Use</option>
                  <option>Retail</option>
                  <option>Office</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset className="space-y-5 border-t border-stone pt-8">
            <legend className="text-xl font-semibold text-navy">3. Deal Overview</legend>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-ink/80">
                <span className="font-medium text-ink">Loan Program</span>
                <select required name="loanProgram" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy">
                  <option value="">Select loan program</option>
                  <option>Bridge Loan</option>
                  <option>Fix & Flip</option>
                  <option>Rental / DSCR</option>
                  <option>Short-Term Rental (Airbnb / VRBO)</option>
                  <option>Ground-Up Construction</option>
                  <option>Multifamily / Mixed Use</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-ink/80">
                <span className="font-medium text-ink">Exit Strategy</span>
                <select required name="exitStrategy" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy">
                  <option value="">Select exit strategy</option>
                  <option>Refinance</option>
                  <option>Sale</option>
                  <option>Stabilization</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-ink/80">
                <span className="font-medium text-ink">Loan Amount Requested</span>
                <input required type="number" name="loanAmount" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
              </label>
              <label className="space-y-2 text-sm text-ink/80">
                <span className="font-medium text-ink">Purchase Price or Current Value</span>
                <input required type="number" name="purchasePriceOrValue" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
              </label>
              <label className="space-y-2 text-sm text-ink/80 md:col-span-2">
                <span className="font-medium text-ink">Renovation Budget (if applicable)</span>
                <input type="number" name="renovationBudget" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
              </label>
            </div>
          </fieldset>

          <fieldset className="space-y-5 border-t border-stone pt-8">
            <legend className="text-xl font-semibold text-navy">4. Borrower Experience</legend>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-ink/80">
                <span className="font-medium text-ink">Number of Real Estate Projects Completed</span>
                <select required name="projectsCompleted" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy">
                  <option value="">Select experience level</option>
                  <option>None</option>
                  <option>1–2</option>
                  <option>3–5</option>
                  <option>6–10</option>
                  <option>10+</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset className="space-y-5 border-t border-stone pt-8">
            <legend className="text-xl font-semibold text-navy">5. Additional Information</legend>
            <div className="mt-5 grid gap-5">
              <label className="space-y-2 text-sm text-ink/80">
                <span className="font-medium text-ink">Deal Summary / Additional Information</span>
                <textarea name="dealSummary" rows={5} className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 outline-none transition focus:border-navy" />
              </label>
              <label className="space-y-2 text-sm text-ink/80">
                <span className="font-medium text-ink">Upload Supporting Files</span>
                <input type="file" name="supportingFiles" className="w-full rounded-sm border border-stone bg-cloud px-4 py-3 text-sm outline-none transition file:mr-4 file:rounded-sm file:border-0 file:bg-navy file:px-4 file:py-2 file:text-cloud focus:border-navy" />
                <span className="block text-xs text-ink/60">Optional: purchase contract, deal summary, budget, photos.</span>
              </label>
            </div>
          </fieldset>

          <fieldset className="space-y-4 border-t border-stone pt-8">
            <legend className="text-xl font-semibold text-navy">6. Certification</legend>
            <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-ink/80">
              <input required type="checkbox" name="businessPurposeCertification" className="mt-1 h-4 w-4 rounded border-stone text-navy focus:ring-navy" />
              <span>
                I confirm this request relates to a business-purpose or investment real estate transaction and not an
                owner-occupied consumer loan request.
              </span>
            </label>
            <p className="text-xs leading-relaxed text-ink/65">
              By submitting this inquiry, you acknowledge that you are seeking financing for a business-purpose or
              investment real estate transaction, not consumer or owner-occupied residential financing.
            </p>
            <p className="text-xs leading-relaxed text-ink/65">
              Submission of a deal inquiry does not constitute approval, a commitment to lend, or an agreement to
              provide financing.
            </p>
          </fieldset>

          <div className="border-t border-stone pt-8">
            <button type="submit" className="rounded-sm border border-navy bg-navy px-7 py-3 text-sm font-semibold text-cloud transition hover:bg-ink">
              Submit Your Deal
            </button>
            <p className="mt-3 text-xs text-ink/65">Northline Capital typically reviews submissions within 24 hours.</p>
          </div>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
