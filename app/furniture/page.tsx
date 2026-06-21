import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import {
  PageHeader,
  Section,
  CTASection,
  FURNITURE_CATEGORIES,
} from "../components/ui";

export const metadata: Metadata = {
  title: "Event & Wedding Furniture Rental in Dubai | Olga Events",
  description:
    "Stylish event furniture rental in Dubai — bridal sofas, dining tables and chairs, lounge sofas, accent chairs, and ottomans to complement any celebration.",
};

export default function FurniturePage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />

      <PageHeader
        kicker="Furniture Rentals"
        title="Event & Wedding Furniture Rental in Dubai"
        intro="We offer a wide range of stylish furniture rentals to complement any event — from elegant dining tables, chairs, and cocktail tables to comfortable sofas, lounge seating, bar counters, and display stands."
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FURNITURE_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.slug} delay={(i % 3) * 90}>
              <Link
                href={`/furniture/${cat.slug}`}
                className="svc-card flex h-full flex-col p-8"
              >
                <h2 className="font-serif text-2xl font-light text-cream">
                  {cat.name}
                </h2>
                <p className="mt-3 flex-1 font-sans text-sm font-light leading-relaxed text-muted">
                  {cat.desc}
                </p>
                <span className="mt-6 font-sans text-sm tracking-wide text-gold">
                  View collection →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Need furniture for your event?"
        text="Tell us your style and guest count — we'll recommend the perfect pieces and send a quote."
        buttonLabel="Request a quote"
      />

      <SiteFooter />
    </div>
  );
}
