import type { Metadata } from "next";
import Image from "next/image";
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
import PRODUCTS from "./products.json";

const CATALOG = PRODUCTS as Record<
  string,
  { title: string; desc: string; img: string }[]
>;

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
          {FURNITURE_CATEGORIES.map((cat, i) => {
            const cover = CATALOG[cat.slug]?.[0]?.img;
            return (
              <Reveal key={cat.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/furniture/${cat.slug}`}
                  className="svc-card group flex h-full flex-col overflow-hidden"
                >
                  {cover ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line bg-ink-alt">
                      <Image
                        src={cover}
                        alt={`${cat.name} rental in Dubai`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-8">
                    <h2 className="font-serif text-2xl font-light text-cream">
                      {cat.name}
                    </h2>
                    <p className="mt-3 flex-1 font-sans text-sm font-light leading-relaxed text-muted">
                      {cat.desc}
                    </p>
                    <span className="mt-6 font-sans text-sm tracking-wide text-gold">
                      View collection →
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
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
