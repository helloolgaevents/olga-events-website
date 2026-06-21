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
  title: "Wedding Decoration Dubai | Luxury Decor by Olga Events",
  description:
    "Bespoke luxury wedding decoration in Dubai — floral design, custom stages, lighting and full venue transformation tailored to your venue and concept by Olga Events.",
};

const INCLUDED = [
  "Concept development",
  "Floral design",
  "Stage & backdrop creation",
  "Lighting design",
  "Table styling",
  "Full venue transformation",
];

const FAQS = [
  {
    q: "How much does wedding decoration cost in Dubai?",
    a: "Pricing depends on design complexity, guest count, and materials used. Each project is customised based on your requirements.",
  },
  {
    q: "Do you provide flowers and lighting?",
    a: "Yes, we provide full floral design, lighting concepts, and all decorative elements.",
  },
  {
    q: "Do you handle setup and installation?",
    a: "Yes, our team manages full production, installation, and styling on the wedding day.",
  },
  {
    q: "Can you design within our chosen venue?",
    a: "Yes. We design specifically for your venue's layout and style, and coordinate directly with the venue team for a seamless setup.",
  },
  {
    q: "How far in advance should we book wedding decoration?",
    a: "We recommend booking 3–6 months ahead for fully custom design, though we also accommodate shorter timelines where possible.",
  },
  {
    q: "Do you decorate for different cultural weddings?",
    a: "Yes, we design for Arabic, Indian, Russian, European, and multicultural weddings across Dubai and the UAE.",
  },
];

export default function WeddingDecorationPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />

      <PageHeader
        kicker="Wedding Decoration Dubai"
        title="Wedding Decoration Dubai — Luxury Wedding Decor & Design"
        intro="Looking for luxury wedding decoration in Dubai? We create bespoke wedding designs with floral styling, custom décor, and full event transformation tailored to your venue and concept. At Olga Events, we specialise in high-end wedding decoration in Dubai, combining design, production, and execution to deliver a refined and cohesive result."
      />

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="The experience"
            title="Luxury Wedding Decoration in Dubai"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "Wedding decoration is not just about aesthetics — it is about creating a complete experience. We design full wedding environments, combining floral arrangements, lighting, structures, and styling elements to transform your venue into a unique and elegant setting. Decoration is part of our wider luxury wedding design and planning service.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Tailored to you"
            title="Bespoke Wedding Design & Styling"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "Every wedding we create is fully customised based on your venue, guest count, and vision. From minimal and modern concepts to large-scale luxury setups, each detail is carefully planned and executed to achieve a cohesive and high-end result.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Scope"
            title="What Is Included in Wedding Decoration"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "Our wedding decoration services include concept development, floral design, stage and backdrop creation, lighting design, table styling, and full venue transformation. We manage the entire process — from design to installation — ensuring that every detail is executed with precision.",
              ]}
            />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border border-line px-5 py-4 font-sans text-sm font-light text-cream"
                >
                  <span className="text-gold">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Aesthetics"
            title="Wedding Decoration Styles We Create"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "We design across a wide range of styles — from classic and romantic to modern, minimal, and grand luxury — always tailored to the couple and the venue. Whether you envision soft floral elegance, dramatic staged structures, or refined contemporary design, we develop a cohesive concept that brings your vision to life.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Florals"
            title="Floral Design for Weddings in Dubai"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "Flowers are at the heart of every wedding we design. Our in-house floral team creates bespoke arrangements — from ceremony arches and aisle styling to centrepieces and full installations — using premium fresh flowers selected for your palette and season.",
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
                "We follow a structured approach that allows you to move from idea to execution with clarity. This includes concept development, layout planning, design approvals, production, and full on-site installation.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Every tradition"
            title="Wedding Decoration for Every Culture in Dubai"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "We design wedding decoration for couples of every background — Arabic and Emirati celebrations, Indian and South Asian weddings, Russian and European ceremonies, and multicultural weddings — respecting the customs, colours, and traditions of each.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Budget"
            title="Wedding Decoration Cost in Dubai"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "The cost of wedding decoration in Dubai depends on the level of design, number of guests, and complexity of the setup. Custom-built structures, premium flowers, and advanced lighting significantly influence the final budget.",
              ]}
            />
            <div className="mt-6 font-sans text-sm tracking-wide text-gold">
              <Link href="/wedding-cost-dubai" className="hover:text-cream">
                See our full wedding cost guide →
              </Link>
            </div>
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

      <CTASection title="Start Planning Your Wedding Decoration" />

      <SiteFooter />
    </div>
  );
}
