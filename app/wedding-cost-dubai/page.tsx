import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import {
  PageHeader,
  Section,
  SectionTitle,
  Prose,
  FAQ,
  CTASection,
} from "../components/ui";

export const metadata: Metadata = {
  title: "Wedding Cost in Dubai | Budget Guide & Packages – Olga Events",
  description:
    "How much does a wedding cost in Dubai? A detailed budget guide by guest count, venue, decoration, flowers, entertainment and photography from Olga Events.",
};

const BY_GUESTS = [
  {
    range: "50–100 guests",
    price: "80,000 – 150,000 AED",
    note: "Smaller, intimate weddings.",
  },
  {
    range: "100–200 guests",
    price: "150,000 – 400,000 AED",
    note: "Medium-sized celebrations.",
  },
  {
    range: "200+ guests",
    price: "180,000 – 1,000,000+ AED",
    note: "Large and luxury celebrations.",
  },
];

const BREAKDOWN = [
  {
    title: "Venue & Catering",
    price: "60,000 – 300,000+ AED",
    note: "Most Dubai venues operate on a minimum spend basis, which includes food, beverages, and service staff — depending on the venue, guest count, and menu.",
  },
  {
    title: "Wedding Decoration",
    price: "50,000 – 300,000+ AED",
    note: "Stage design, ceremony setup, table styling, floral arrangements, lighting, and full venue transformation. Basic: 50,000–120,000 AED. Custom: 120,000–300,000+ AED.",
  },
  {
    title: "Flowers",
    price: "15,000 – 150,000+ AED",
    note: "Fresh flowers vary by type, quantity, and complexity. Simple setups: 15,000–40,000 AED. Luxury floral design: 40,000–150,000+ AED.",
  },
  {
    title: "Entertainment",
    price: "5,000 – 100,000+ AED",
    note: "DJ, musicians, performers, and full show programs. DJ: 5,000–10,000 AED. Full entertainment: 30,000–100,000+ AED.",
  },
  {
    title: "Photography & Videography",
    price: "10,000 – 80,000+ AED",
    note: "Standard teams: 10,000–25,000 AED. Premium teams: 25,000–80,000+ AED.",
  },
  {
    title: "Wedding Planning",
    price: "7,000 – 18,000+ AED",
    note: "Planning packages range with the scale of the wedding, guest count, and level of coordination required.",
  },
];

const EXAMPLES = [
  {
    title: "100 Guests",
    price: "150,000 – 220,000 AED",
    note: "Venue, catering, medium-level decoration, basic entertainment, and photography.",
  },
  {
    title: "200 Guests",
    price: "250,000 – 450,000 AED",
    note: "Larger venue, custom decoration, upgraded flowers, entertainment program, and full production.",
  },
  {
    title: "Luxury · 300+ Guests",
    price: "500,000 – 1,000,000+ AED",
    note: "Premium venue, full custom design, large-scale floral installations, high-end entertainment, and complex production.",
  },
];

const FACTORS = [
  "Guest count — more guests increase venue, catering, furniture, and staffing costs.",
  "Venue selection — luxury hotels and beachfront venues have higher minimum spend requirements.",
  "Decoration and design — custom setups, staging, lighting, and materials significantly impact the budget.",
  "Flowers — imported flowers and large installations can increase costs.",
  "Entertainment — live performers, DJs, and show programs add to the overall budget.",
  "Logistics — setup time, transport, labor, and venue restrictions can affect pricing.",
];

const FAQS = [
  {
    q: "How much does wedding decoration cost in Dubai?",
    a: "Wedding decoration in Dubai typically ranges from 50,000 AED to 300,000+ AED, depending on the design, size of the venue, materials, flowers, and level of customization. Luxury designs with full venue transformation can exceed this range.",
  },
  {
    q: "What is the average venue and catering cost per guest in Dubai?",
    a: "On average, venue and catering costs in Dubai range from 300 AED to 1,500 AED per guest, depending on the hotel, menu selection, service level, and whether alcohol is included. Most venues also require a minimum spend, which means the total cost must meet a set amount regardless of the final guest count.",
  },
  {
    q: "How much does a wedding planner cost in Dubai?",
    a: "Wedding planner fees in Dubai vary depending on the level of service. Planning packages typically start from around 7,000 AED to 18,000 AED+ and can increase based on the complexity of the wedding, guest count, and level of coordination required.",
  },
  {
    q: "Is Dubai expensive for weddings?",
    a: "Dubai offers both mid-range and luxury wedding options. Custom weddings can become more expensive because of venue requirements, production, flowers, materials, logistics, and high-end entertainment.",
  },
  {
    q: "Can I get an exact wedding price during the first consultation?",
    a: "An exact wedding price usually cannot be provided during the first phone call or online consultation, as the final cost depends on design, guest count, venue, suppliers, logistics, and availability. However, we can provide an approximate price range and guide you on how much your wedding might cost. During the consultation, we will discuss your budget, advise you on how to allocate it, and explain what can realistically be achieved within your budget. A detailed and official quotation is developed later as part of the planning process, once all elements are clearly defined.",
  },
];

function PriceCard({
  title,
  price,
  note,
}: {
  title: string;
  price: string;
  note: string;
}) {
  return (
    <div className="svc-card flex h-full flex-col p-7">
      <h3 className="font-serif text-2xl font-light text-cream">{title}</h3>
      <p className="mt-3 font-serif text-xl text-gold">{price}</p>
      <p className="mt-4 font-sans text-sm font-light leading-relaxed text-muted">
        {note}
      </p>
    </div>
  );
}

export default function WeddingCostPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />

      <PageHeader
        kicker="Wedding Cost in Dubai"
        title="Wedding Cost in Dubai — Budget Guide & Packages"
        intro="The cost of a wedding in Dubai depends on your guest count, venue, decoration, flowers, entertainment, photography, and overall level of customization. Dubai offers everything from simple weddings to large luxury celebrations, and budgets can vary significantly depending on your vision."
      />

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="The short answer"
            title="How much does a wedding cost in Dubai?"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "For smaller weddings with 50 to 100 guests, budgets typically range from 80,000 to 150,000 AED. Medium weddings with 100 to 200 guests usually range from 150,000 to 400,000 AED. Large weddings with 200+ guests can range from 180,000 AED and exceed 1,000,000 AED for luxury celebrations. Custom weddings with premium design, high-end flowers, and full entertainment programs can go significantly higher.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle
          kicker="By guest count"
          title="Average Wedding Cost in Dubai"
          center
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {BY_GUESTS.map((c, i) => (
            <Reveal key={c.range} delay={i * 90}>
              <PriceCard title={c.range} price={c.price} note={c.note} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionTitle
          kicker="Where the budget goes"
          title="Wedding Cost Breakdown in Dubai"
          center
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BREAKDOWN.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 90}>
              <PriceCard title={c.title} price={c.price} note={c.note} />
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center font-sans text-sm font-light text-muted">
          On average, weddings in Dubai range from 1,000 AED to 3,000 AED per
          guest.
        </p>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="The variables"
            title="What Affects Wedding Cost in Dubai?"
          />
          <ul className="mt-8 space-y-3">
            {FACTORS.map((f) => (
              <li
                key={f}
                className="flex gap-3 font-sans text-base font-light leading-relaxed text-muted"
              >
                <span className="mt-1 text-gold">—</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section alt>
        <SectionTitle
          kicker="In practice"
          title="Real Wedding Budget Examples in Dubai"
          center
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {EXAMPLES.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <PriceCard title={c.title} price={c.price} note={c.note} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            kicker="Two approaches"
            title="Hotel Wedding vs Custom Wedding in Dubai"
          />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "A hotel wedding means choosing a venue package where most elements are predefined. Hotels focus mainly on food and catering, so their packages usually include standard setups with limited flexibility. While they may provide basic AV systems and a simple stage, these setups are often designed for corporate events rather than fully customized wedding experiences.",
                "A custom wedding, on the other hand, is a fully tailored event where every detail is designed around your vision — from layout and décor to lighting and guest experience. This approach offers complete creative freedom but requires a more flexible budget and a detailed planning process.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <SectionTitle kicker="Good to know" title="Frequently Asked Questions" center />
          <div className="mt-10">
            <FAQ items={FAQS} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionTitle kicker="Please note" title="Important Pricing Information" />
          <div className="mt-8 border border-gold/40 p-8">
            <Prose
              paragraphs={[
                "Please note that during a phone call or initial online consultation, we are not able to provide an exact price for wedding decoration, venue, or entertainment. Each wedding is a unique project, and the final cost is developed through a detailed planning process that depends on many factors — including design concept, guest count, location, materials, logistics, and vendor availability.",
                "Creating an accurate quotation typically takes around 30–40 days, as our team works collaboratively — including designers, coordinators, and production specialists — to build a complete concept and cost structure. We always ask clients to share an approximate budget at the beginning. Based on this, we can guide you on what can realistically be achieved within your budget and help adjust the concept accordingly.",
                "It's important to understand that the cost of a wedding is not determined by the wedding planner alone — it is influenced by market prices, materials, flowers, vendors, and logistics. This is why proper budget planning and coordination require time and a structured approach. For this reason, we begin by booking one of our wedding planning packages. Once the service is confirmed and payment is completed, our team will start working on your project and develop a tailored concept with a detailed quotation.",
              ]}
            />
            <div className="mt-6 font-sans text-sm tracking-wide text-gold">
              <Link href="/packages" className="hover:text-cream">
                Explore our planning packages →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle kicker="In summary" title="Final Advice" center />
          <div className="mt-8">
            <Prose
              paragraphs={[
                "A wedding budget in Dubai is not fixed — it depends entirely on your choices, expectations, and level of customization. The key is to plan in the right order, understand the realistic cost structure, and work with professionals who can guide your budget properly.",
              ]}
            />
          </div>
        </div>
      </Section>

      <CTASection
        title="Plan Your Wedding in Dubai & UAE"
        text="Share your budget and vision — we'll guide you on what's realistic and build a tailored plan."
      />

      <SiteFooter />
    </div>
  );
}
