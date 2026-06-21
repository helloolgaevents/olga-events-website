import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import {
  PageHeader,
  Section,
  SectionTitle,
  Prose,
  CTASection,
  FeatureImage,
} from "../components/ui";

export const metadata: Metadata = {
  title: "Luxury Wedding Planner in Dubai | About Olga Events",
  description:
    "Olga Events designs and delivers fully customised luxury weddings in Dubai. Founded by Olga Pashchenko with 10+ years of experience in high-end, bespoke celebrations.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />

      <PageHeader
        kicker="About Olga Events"
        title="Luxury Wedding Planner in Dubai"
        intro="At Olga Events, we design and deliver luxury wedding planning in Dubai with a fully customized approach — where every detail is created specifically for your event, your venue, and your vision. We do not follow templates or repeat concepts. Each wedding is developed from zero and executed with precision, combining creative direction, in-house production, and full-service planning."
      />

      <FeatureImage
        src="/images/blue-ember.jpg"
        alt="Luxury wedding stage designed by Olga Events in Dubai"
      />

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle kicker="Who we are" title="What Makes Us Different" />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "Founded by Olga Pashchenko, Olga Events is a wedding planning and event design company in Dubai with over 10 years of experience in creating elegant, high-end celebrations. From intimate weddings to large-scale celebrations with hundreds of guests, every project is personally guided to ensure consistency, control, and a level of detail that defines the final result. Olga is personally involved in every project, overseeing design decisions, production details, and final execution to ensure every wedding meets the highest standards.",
                "Our approach is built on complete customization. We do not reuse designs or offer fixed templates — each wedding is developed individually to reflect the client's personality and expectations. With in-house production of decor, structures, and styling elements, we maintain full control over quality, timelines, and execution. This allows us to deliver a seamless experience where every detail is aligned and thoughtfully executed.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionTitle kicker="How we work" title="Our Process" />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "Every project begins with understanding your vision, preferences, and budget. From there, we develop a personalized concept and layout, followed by detailed planning, production, and coordination. On the wedding day, our team manages the full setup and execution, ensuring everything runs smoothly so you can focus on the experience and enjoy every moment.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Getting started"
            title="Wedding Planning in Dubai"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "Planning a wedding in Dubai involves multiple factors — including venue selection, guest count, design level, and overall budget. Each of these elements directly influences the final result. If you are at the early stage of planning, you can explore our detailed guide on wedding costs in Dubai to better understand pricing and expectations.",
                "We provide different levels of wedding planning support depending on your needs — from full-service planning to coordination and design. Explore our wedding planning packages or contact us directly to discuss your wedding. If you're planning a wedding in Dubai and want a fully customized, high-end experience, the first step is a consultation where we define your vision, budget, and overall direction.",
              ]}
            />
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-sans text-sm tracking-wide text-gold">
              <Link href="/wedding-cost-dubai" className="hover:text-cream">
                Wedding cost guide →
              </Link>
              <Link href="/packages" className="hover:text-cream">
                Wedding planning packages →
              </Link>
              <Link href="/gallery" className="hover:text-cream">
                View our gallery →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title="Start Planning Your Wedding"
        text="Book a consultation and we'll define your vision, budget, and overall direction together."
      />

      <SiteFooter />
    </div>
  );
}
