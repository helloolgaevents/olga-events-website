import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import {
  PageHeader,
  Section,
  SectionTitle,
  Prose,
  FAQ,
  CTASection,
} from "../components/ui";

export const metadata: Metadata = {
  title: "Wedding Packages Dubai | Luxury & Custom Packages | Olga Events",
  description:
    "Structured wedding planning and decoration packages in Dubai — clarity, control and a smooth experience, customised to your guest count, venue and design.",
};

const FAQS = [
  {
    q: "Do you offer fixed wedding packages?",
    a: "We offer structured packages, but each wedding is customised based on your guest count, design, and requirements.",
  },
  {
    q: "Can I upgrade a package?",
    a: "Yes, all packages can be adjusted to include additional services and design elements.",
  },
  {
    q: "Which package is right for me?",
    a: "It depends on how involved you want to be. Full planning suits couples who want a completely managed, stress-free process, while structured packages suit couples who want to stay hands-on with expert guidance.",
  },
  {
    q: "Do packages include decoration and flowers?",
    a: "Yes, design and decoration packages include bespoke décor, floral design, lighting, and full styling.",
  },
  {
    q: "Do you offer packages for destination weddings?",
    a: "Yes, we offer packages for international couples planning their Dubai wedding from abroad, managing every detail remotely.",
  },
];

export default function WeddingPackagesPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />

      <PageHeader
        kicker="Wedding Packages Dubai"
        title="Wedding Packages Dubai — Planning & Decoration Packages"
        intro="Looking for wedding packages in Dubai? We offer structured planning packages designed to give you clarity, control, and a smooth wedding experience."
      />

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Overview"
            title="Wedding Packages in Dubai"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "Our wedding packages are flexible and can be customised based on your guest count, venue, and design requirements.",
                "We provide different levels of support depending on your needs — from structured guidance to full wedding planning and execution.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Scope"
            title="What Is Included in Wedding Packages"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "Our packages include wedding planning, design development, supplier coordination, and full wedding day management.",
                "Our packages are designed to simplify the planning process and give you full visibility at every stage. This includes planning structure, venue guidance, design concept development, supplier coordination, and execution.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Levels"
            title="Our Wedding Package Levels"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "We offer packages across three levels of support: structured planning guidance for hands-on couples, full-service wedding planning for a completely managed experience, and design and decoration packages focused on the look and styling of your day.",
              ]}
            />
            <div className="mt-6 font-sans text-sm tracking-wide text-gold">
              <Link href="/packages" className="hover:text-cream">
                See our planning & décor packages →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Tailored"
            title="Custom Wedding Packages in Dubai"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "Every wedding is different. That's why our packages are flexible and adapted to your specific requirements.",
                "Whether you are planning an intimate wedding or a large-scale luxury event, we create a structure that fits your vision and budget.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Guidance"
            title="How to Choose the Right Wedding Package"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "The right package depends on how much support you need.",
                "If you want full control and a stress-free process, full wedding planning is the best option.",
                "If you prefer to stay involved, a structured planning package provides guidance and support.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="For everyone"
            title="Wedding Packages for Every Couple"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "We create packages for couples of every background and location — Arabic, Indian, Russian, European, and multicultural weddings, as well as destination weddings for couples planning from abroad.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle kicker="Good to know" title="FAQ" center />
          <div className="mt-10">
            <FAQ items={FAQS} />
          </div>
        </div>
      </Section>

      <CTASection title="Start Planning Your Wedding" />

      <SiteFooter />
    </div>
  );
}
