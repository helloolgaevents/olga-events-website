import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import { PageHeader, Section, CONTACT } from "../components/ui";

export const metadata: Metadata = {
  title: "Contact Olga Events | Book a Wedding Consultation in Dubai",
  description:
    "Tell us about your wedding, date, venue, guests and budget. Book a free consultation with Olga Events in Dubai. WhatsApp +971 55 670 4762.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <main>

      <PageHeader
        kicker="Contact"
        title="Let's plan your wedding"
        intro="Tell us about your day and we'll put together a proposal made for you. Free, no obligation."
      />

      <Section>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <h2 className="font-serif text-2xl font-light text-cream">
              Send us an enquiry
            </h2>
            <p className="mt-3 font-sans text-sm font-light leading-relaxed text-muted">
              Share a few details and we&apos;ll be in touch with the next steps.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-line p-8">
              <h2 className="font-serif text-2xl font-light text-cream">
                Prefer to talk now?
              </h2>
              <p className="mt-3 font-sans text-sm font-light leading-relaxed text-muted">
                Message or call us directly, we reply quickly and speak EN · RU
                · AR.
              </p>

              <div className="mt-8 space-y-4">
                <a href={CONTACT.whatsappHref} className="btn-gold w-full">
                  WhatsApp {CONTACT.whatsapp}
                </a>
                <a href={CONTACT.phoneHref} className="btn-outline w-full">
                  Call {CONTACT.phone}
                </a>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-muted">
                  Email
                </p>
                <a
                  href={CONTACT.emailHref}
                  className="mt-2 inline-block font-sans text-sm font-light text-cream transition-colors hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              </div>

              <div className="mt-6">
                <p className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-muted">
                  Service area
                </p>
                <p className="mt-2 font-sans text-sm font-light text-cream">
                  Dubai · Abu Dhabi · all Emirates
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      </main>
      <SiteFooter />
    </div>
  );
}
