import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ContactForm } from '@/components/forms/contact-form';

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell pb-16 pt-32 lg:pt-40">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">Contact Northline Capital</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/75">
          Share your financing question or scenario and our team will respond as soon as possible.
        </p>
      </section>

      <section className="section-shell pb-24">
        <ContactForm />
      </section>

      <SiteFooter />
    </main>
  );
}
