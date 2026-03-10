import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell pb-14 pt-32 lg:pt-40">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-navy sm:text-5xl">Privacy Policy</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/75">
          Northline Capital respects your privacy and is committed to protecting information submitted through this
          website.
        </p>
      </section>

      <section className="bg-white py-14">
        <div className="section-shell max-w-4xl space-y-10 text-sm leading-relaxed text-ink/80">
          <section>
            <h2 className="text-2xl font-semibold text-navy">1. Information We Collect</h2>
            <p className="mt-3">
              Northline Capital may collect information submitted through website forms, including name, email address,
              phone number, company or borrowing entity information, property and loan request information, uploaded
              documents or supporting files, and basic website usage information collected through cookies or analytics
              tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">2. How We Use Information</h2>
            <p className="mt-3">
              We may use submitted information to review financing inquiries, respond to requests, evaluate lending
              opportunities, communicate with users, improve website functionality and user experience, maintain
              internal business records, and comply with legal, regulatory, or risk management obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">3. Information Sharing</h2>
            <p className="mt-3">
              Northline Capital does not sell personal information. Information may be shared, as applicable, with
              service providers supporting website or business operations; advisors, attorneys, title companies,
              underwriters, lenders, capital partners, or third-party diligence providers in connection with evaluating
              or facilitating a transaction; and government, regulatory, or legal authorities when required by law or
              to protect rights and interests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">4. Cookies and Analytics</h2>
            <p className="mt-3">
              This website may use cookies, analytics tools, or similar technologies to understand site usage and
              improve website performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">5. Data Security</h2>
            <p className="mt-3">
              Northline Capital takes reasonable measures to protect submitted information. However, no internet
              transmission or storage system can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">6. Third-Party Links</h2>
            <p className="mt-3">
              This website may contain links to third-party websites. Northline Capital is not responsible for the
              privacy practices of those external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">7. Business-Purpose Inquiries</h2>
            <p className="mt-3">
              Information submitted through this website is intended for business-purpose or investment real estate
              financing inquiries and not consumer mortgage applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">8. Changes to This Policy</h2>
            <p className="mt-3">
              Northline Capital may update this Privacy Policy from time to time. Any updates will be posted on this
              page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy">9. Contact</h2>
            <p className="mt-3">
              For questions regarding this Privacy Policy, please contact Northline Capital through the website contact
              form or the contact information provided on the site.
            </p>
          </section>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
