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
  title: "Wedding Planner Dubai | Luxury Weddings by Olga Events",
  description:
    "Luxury wedding planner in Dubai with 10+ years' experience. Full-service planning, bespoke design and seamless execution for couples in the UAE and abroad.",
};

const FAQS = [
  {
    q: "Do you offer full wedding planning in Dubai?",
    a: "Yes, we provide full-service wedding planning, including concept, design, coordination, and execution.",
  },
  {
    q: "Can you help with wedding decoration only?",
    a: "Yes, we offer bespoke decoration, floral design, lighting, and full setup services.",
  },
  {
    q: "Do you work with luxury venues in Dubai?",
    a: "Yes, we work with leading hotels, resorts, beach venues, and private locations across Dubai and the UAE.",
  },
  {
    q: "How much does a wedding planner cost in Dubai?",
    a: "The cost depends on your guest count, venue, and the scope of planning. We prepare a tailored proposal for each couple — see our wedding cost guide for typical budget ranges.",
  },
  {
    q: "How far in advance should I book a wedding planner?",
    a: "We recommend booking 6–12 months ahead for full planning, though we also accommodate shorter timelines for intimate weddings.",
  },
  {
    q: "Do you plan weddings for international couples?",
    a: "Yes. We plan destination weddings for couples based abroad and manage every detail remotely, from venue to the wedding day.",
  },
  {
    q: "Which cultures and nationalities do you work with?",
    a: "We plan Arabic, Indian, Russian, European, and multicultural weddings across Dubai and the UAE.",
  },
];

function TextSection({
  alt,
  kicker,
  title,
  paragraphs,
  link,
}: {
  alt?: boolean;
  kicker: string;
  title: string;
  paragraphs: string[];
  link?: { href: string; label: string };
}) {
  return (
    <Section alt={alt}>
      <div className="mx-auto max-w-3xl">
        <SectionTitle kicker={kicker} title={title} />
        <div className="mt-8">
          <Prose paragraphs={paragraphs} />
          {link ? (
            <div className="mt-6 font-sans text-sm tracking-wide text-gold">
              <Link href={link.href} className="hover:text-cream">
                {link.label} →
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

export default function WeddingPlannerPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />

      <PageHeader
        kicker="Wedding Planner Dubai"
        title="Wedding Planner Dubai — Luxury Wedding Planning Services"
        intro="Luxury wedding planner in Dubai with over 10 years of experience in high-end weddings. We design, plan, and execute fully customised weddings with complete control over budget, design, and guest experience."
      />

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Who we are"
            title="Luxury Wedding Planner in Dubai"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "Olga Events is a luxury wedding planner in Dubai specialising in bespoke weddings, full-service planning, and high-end event design. We create elegant, fully customised weddings tailored to each couple, combining creative vision with structured planning and seamless execution. Looking for a professional wedding planner in Dubai? We help you plan your wedding step by step with clarity, control, and a refined final result.",
              ]}
            />
          </div>
        </div>
      </Section>

      <TextSection
        kicker="What we do"
        title="Luxury Wedding Planning in Dubai"
        paragraphs={[
          "Planning a wedding in Dubai requires experience, strong supplier coordination, and a clear structure. We manage every stage of the process — from concept and design to full execution — ensuring your wedding is smooth, organised, and stress-free. Our services include venue sourcing, wedding concept development, supplier management, floral design, lighting production, and full coordination.",
        ]}
      />

      <TextSection
        alt
        kicker="Design"
        title="Bespoke Wedding Design & Decoration"
        paragraphs={[
          "Every wedding we create is unique and designed specifically for the venue, guest count, and overall experience. We develop custom concepts, produce bespoke décor, design floral arrangements, and transform spaces into refined, cohesive environments.",
        ]}
        link={{
          href: "/wedding-decoration-dubai",
          label: "See our approach to bespoke wedding decoration in Dubai",
        }}
      />

      <TextSection
        kicker="Why us"
        title="Why Choose Olga Events"
        paragraphs={[
          "As an experienced wedding planner in Dubai, we combine design expertise with strong operational control. We don't just organise weddings — we create structured systems that allow you to plan your wedding without stress, confusion, or unexpected costs. Our approach is structured, transparent, and detail-focused, ensuring every part of your wedding is planned and executed at a high level. We focus not only on aesthetics, but also on timing, logistics, and guest experience.",
        ]}
        link={{ href: "/gallery", label: "Explore our luxury weddings in Dubai" }}
      />

      <TextSection
        alt
        kicker="Budget"
        title="Wedding Planner Cost in Dubai"
        paragraphs={[
          "The cost of a wedding planner in Dubai depends on the scale of the wedding, guest count, venue, and level of involvement required. At Olga Events, we create tailored proposals based on your priorities, design expectations, and budget.",
        ]}
        link={{
          href: "/wedding-cost-dubai",
          label: "See our detailed wedding cost in Dubai guide",
        }}
      />

      <TextSection
        kicker="Process"
        title="Our Wedding Planning Process"
        paragraphs={[
          "We follow a structured process that allows you to move from idea to execution without confusion. It starts with understanding your vision, followed by budget planning, venue selection, design development, supplier coordination, and full wedding day execution. This system ensures clarity, control, and a consistent result.",
        ]}
      />

      <TextSection
        alt
        kicker="Services"
        title="Wedding Planning Services in Dubai"
        paragraphs={[
          "Our services cover all aspects of wedding planning, including concept creation, venue coordination, supplier management, design and decoration, production, and full event execution. We work with both intimate weddings and large-scale luxury celebrations across Dubai and the UAE.",
        ]}
      />

      <TextSection
        kicker="Venues"
        title="Wedding Venues We Work With in Dubai"
        paragraphs={[
          "From five-star ballrooms and beachfront resorts to private villas and desert venues, we plan weddings across Dubai's most prestigious locations. We coordinate directly with each venue to match your guest count, style, and budget, then design within the space to create one cohesive, elevated atmosphere.",
        ]}
        link={{ href: "/gallery", label: "Browse our wedding gallery in Dubai" }}
      />

      <TextSection
        alt
        kicker="Every tradition"
        title="Weddings for Every Culture in Dubai"
        paragraphs={[
          "Dubai brings together couples from around the world, and we plan across cultures and traditions — Arabic and Emirati celebrations, Indian and South Asian weddings, Russian and European ceremonies, and multicultural destination weddings. We understand the customs, timing, and design expectations of each, and tailor every detail of your wedding accordingly.",
        ]}
      />

      <TextSection
        kicker="From anywhere"
        title="Planning Your Wedding from Abroad"
        paragraphs={[
          "Planning your Dubai wedding from overseas? We manage everything remotely on your behalf — venue, design, suppliers, and the full wedding day — so you can plan with confidence from anywhere.",
        ]}
      />

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle kicker="Good to know" title="FAQ" center />
          <div className="mt-10">
            <FAQ items={FAQS} />
          </div>
        </div>
      </Section>

      <CTASection
        title="Start Planning Your Wedding in Dubai"
        text="With over 10 years of experience, we help couples plan elegant, structured, and stress-free weddings in Dubai. Let's plan your wedding step by step with full clarity and control."
      />

      <SiteFooter />
    </div>
  );
}
