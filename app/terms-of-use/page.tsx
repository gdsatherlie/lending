import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function TermsOfUsePage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell pb-14 pt-32 lg:pt-40">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-navy sm:text-5xl">Terms of Use</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/75">
          By accessing or using the Northline Capital website, you agree to these Terms of Use.
        </p>
      </section>

      <section className="bg-white py-14">
        <div className="section-shell max-w-4xl space-y-10 text-sm leading-relaxed text-ink/80">
          <section>
            <h2 className="text-2xl font-semibold text-navy">1. Website Purpose</h2>
            <p className="mt-3">
              This website is provided for general informational purposes regarding Northline Capital’s business-purpose
              real estate lending programs and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">2. No Commitment to Lend</h2>
            <p className="mt-3">
              Content on this website is for informational purposes only and does not constitute a commitment to lend,
              an offer to provide financing, or legal, tax, financial, or investment advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">3. Business-Purpose Lending Only</h2>
            <p className="mt-3">
              Northline Capital provides financing for business or investment purposes only and does not provide
              consumer mortgage loans or financing for owner-occupied primary residences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">4. Underwriting and Approval</h2>
            <p className="mt-3">
              All financing inquiries, loan programs, and proposed transactions are subject to underwriting review,
              property evaluation, borrower qualification, legal review, and satisfaction of closing conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">5. Accuracy of Information</h2>
            <p className="mt-3">
              Northline Capital seeks to keep website information current, but does not guarantee completeness,
              accuracy, or timeliness. Loan programs, rates, terms, and guidelines may change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">6. Permitted Use</h2>
            <p className="mt-3">
              Users may use this website only for lawful purposes and may not misuse the site, attempt unauthorized
              access, interfere with functionality, or submit false or misleading information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">7. Intellectual Property</h2>
            <p className="mt-3">
              Website content, branding, design, text, and graphics are the property of Northline Capital or its
              licensors and may not be copied or reused without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">8. Third-Party Links</h2>
            <p className="mt-3">
              This website may contain links to third-party websites. Northline Capital is not responsible for
              third-party content, services, or websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">9. Limitation of Liability</h2>
            <p className="mt-3">
              Northline Capital shall not be liable for any direct, indirect, incidental, consequential, or other
              damages arising from access to or use of this website, subject to applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">10. Changes to Terms</h2>
            <p className="mt-3">
              Northline Capital may revise these Terms of Use at any time by updating this page. Continued use of the
              website constitutes acceptance of any revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">11. Contact</h2>
            <p className="mt-3">
              Questions regarding these Terms of Use may be directed through the website contact form or the contact
              information provided on the site.
            </p>
          </section>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
