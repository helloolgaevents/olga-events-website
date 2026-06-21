import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import {
  PageHeader,
  Section,
  SectionTitle,
  CTASection,
  FeatureImage,
} from "../components/ui";
import PriceCalculator from "../components/PriceCalculator";

export const metadata: Metadata = {
  title: "Wedding Planning & Décor Packages in Dubai | Olga Events",
  description:
    "Transparent wedding planning packages (Essential, Classic, Luxe) and décor collections (Bloom, Signature, Elegance) for weddings in Dubai and the UAE.",
};

const PLANNING = [
  {
    name: "Essential Planning",
    price: "AED 7,000",
    tag: "Structured guidance",
    desc: "For hands-on couples who want expert structure and support. Planning framework, timeline, supplier guidance, and a clear path from idea to wedding day.",
    features: [
      "Planning structure & timeline",
      "Venue & supplier guidance",
      "Budget framework",
      "Ongoing expert support",
    ],
  },
  {
    name: "Classic Planning",
    price: "AED 10,000",
    tag: "Most popular",
    desc: "A balanced level of support combining coordination and design. We manage the moving parts while you stay involved in the decisions that matter most.",
    features: [
      "Everything in Essential",
      "Supplier coordination",
      "Design concept development",
      "Day-of coordination",
    ],
    featured: true,
  },
  {
    name: "Luxe Full Planning",
    price: "AED 18,000",
    tag: "Fully managed",
    desc: "A completely managed, stress-free experience. From concept and design to full production and execution, our team runs everything in the background.",
    features: [
      "Everything in Classic",
      "Full design & production",
      "Complete supplier management",
      "Full on-the-day execution",
    ],
  },
];

const DECOR = [
  {
    name: "Bloom",
    tag: "Refined florals",
    desc: "Soft, romantic décor led by fresh flowers — elegant centrepieces, aisle styling, and a cohesive palette for intimate, graceful celebrations.",
  },
  {
    name: "Signature",
    tag: "Statement design",
    desc: "Our signature look — custom stages and backdrops, layered lighting, and full table styling that transforms your venue into a refined, cohesive setting.",
  },
  {
    name: "Elegance",
    tag: "Grand luxury",
    desc: "Large-scale, bespoke production — dramatic structures, premium floral installations, and complete venue transformation for grand luxury weddings.",
  },
];

function PlanCard({
  name,
  price,
  tag,
  desc,
  features,
  featured,
}: {
  name: string;
  price: string;
  tag: string;
  desc: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`svc-card flex h-full flex-col p-8 ${
        featured ? "border-gold/60" : ""
      }`}
    >
      <span className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-gold">
        {tag}
      </span>
      <h3 className="mt-4 font-serif text-3xl font-light text-cream">{name}</h3>
      <p className="mt-2 font-serif text-xl text-gold">{price}</p>
      <p className="mt-5 font-sans text-sm font-light leading-relaxed text-muted">
        {desc}
      </p>
      <ul className="mt-6 space-y-2.5">
        {features.map((f) => (
          <li
            key={f}
            className="flex gap-3 font-sans text-sm font-light text-cream/90"
          >
            <span className="text-gold">—</span>
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-2">
        <Link href="/contact" className="btn-outline">
          Enquire
        </Link>
      </div>
    </div>
  );
}

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />

      <PageHeader
        kicker="Our packages"
        title="Planning & Décor, Made Clear"
        intro="Transparent packages designed to give you clarity, control, and a smooth wedding experience — from structured guidance to a fully managed celebration. Every package is flexible and customised to your guest count, venue, and design."
      />

      <FeatureImage
        src="/images/table-florals.jpg"
        alt="Wedding table styling and florals by Olga Events"
      />

      <Section>
        <SectionTitle
          kicker="Planning"
          title="Wedding Planning Packages"
          center
        />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANNING.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <PlanCard {...p} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center font-sans text-sm font-light text-muted">
          All packages can be upgraded with additional services and design
          elements.
        </p>
      </Section>

      <Section alt>
        <SectionTitle
          kicker="Décor & design"
          title="Décor Collections"
          center
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {DECOR.map((d, i) => (
            <Reveal key={d.name} delay={i * 90}>
              <div className="svc-card flex h-full flex-col p-8">
                <span className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-gold">
                  {d.tag}
                </span>
                <h3 className="mt-4 font-serif text-3xl font-light text-cream">
                  {d.name}
                </h3>
                <p className="mt-2 font-serif text-lg text-gold">Custom quote</p>
                <p className="mt-5 font-sans text-sm font-light leading-relaxed text-muted">
                  {d.desc}
                </p>
                <div className="mt-8 pt-2">
                  <Link href="/contact" className="btn-outline">
                    Enquire
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- Live price calculator ---- */}
      <Section>
        <SectionTitle
          kicker="Estimate"
          title="Live Price Calculator"
          center
        />
        <p className="mx-auto mt-5 max-w-2xl text-center font-sans text-base font-light leading-relaxed text-muted">
          Build your package and see a transparent estimate instantly. Final
          quotations are confirmed during planning.
        </p>
        <div className="mt-12">
          <PriceCalculator />
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-base font-light leading-relaxed text-muted">
            Want to understand pricing first? Read our{" "}
            <Link href="/wedding-cost-dubai" className="text-gold hover:text-cream">
              wedding cost guide
            </Link>{" "}
            or explore our{" "}
            <Link
              href="/wedding-packages-dubai"
              className="text-gold hover:text-cream"
            >
              wedding packages overview
            </Link>
            .
          </p>
        </div>
      </Section>

      <CTASection />

      <SiteFooter />
    </div>
  );
}
