import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Reveal from "../../components/Reveal";
import {
  PageHeader,
  Section,
  CTASection,
  FURNITURE_CATEGORIES,
} from "../../components/ui";

type Params = { category: string };

// Sample catalog carried from the live store. The full per-category product
// catalog will be imported later (see CLAUDE.md). For now bridal-sofa shows a
// representative preview; other categories show a structural placeholder.
const SAMPLE_PRODUCTS: Record<string, { name: string; price: string }[]> = {
  "bridal-sofa": [
    { name: "Borghese Bridal Sofa — Beige Metal Base", price: "AED 8,500" },
    { name: "Paris Bridal Sofa — Beige Velvet, Wooden Legs", price: "AED 4,000" },
    { name: "Pinsofa Bridal Sofa — Colored Fabric", price: "AED 4,200" },
    { name: "Italian Bridal Sofa — Dark Blue Velvet", price: "AED 3,800" },
    { name: "Orsetto Bridal Sofa — Ivory Fabric", price: "AED 3,800" },
    { name: "Lena Bridal Sofa — Beige Linen, Wooden Legs", price: "AED 3,500" },
    { name: "New Moon Bridal Sofa — Light Beige Velvet", price: "AED 2,500" },
    { name: "Mirage Single Bridal Sofa — Dark Beige", price: "AED 1,500" },
  ],
};

export function generateStaticParams(): Params[] {
  return FURNITURE_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = FURNITURE_CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} Rental in Dubai | Olga Events`,
    description: `${cat.desc} Event and wedding furniture rental in Dubai and the UAE by Olga Events.`,
  };
}

export default async function FurnitureCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const cat = FURNITURE_CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  const products = SAMPLE_PRODUCTS[cat.slug] ?? [];

  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />

      <PageHeader
        kicker="Furniture Rentals"
        title={`${cat.name} Rental in Dubai`}
        intro={cat.desc}
      />

      <Section>
        {products.length > 0 ? (
          <>
            <p className="mb-10 text-center font-sans text-sm font-light text-muted">
              A selection of our {cat.name.toLowerCase()}. Daily rental rates;
              the full catalog is available on request.
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p, i) => (
                <Reveal key={p.name} delay={(i % 3) * 70}>
                  <div className="svc-card flex h-full flex-col justify-between p-7">
                    <h2 className="font-serif text-xl font-light text-cream">
                      {p.name}
                    </h2>
                    <p className="mt-4 font-serif text-lg text-gold">
                      {p.price}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        ) : (
          <Reveal>
            <div className="mx-auto max-w-2xl border border-gold/40 p-10 text-center">
              <span className="font-sans text-[0.72rem] uppercase tracking-[0.32em] text-gold">
                Catalog being imported
              </span>
              <h2 className="mt-5 font-serif text-3xl font-light text-cream">
                {cat.name}
              </h2>
              <p className="mt-6 font-sans text-base font-light leading-relaxed text-muted">
                Our full {cat.name.toLowerCase()} collection is being added.
                Tell us your style, colours, and guest count and we&apos;ll send
                you available pieces and a quote right away.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-gold">
                  Request available pieces
                </Link>
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/furniture"
            className="font-sans text-sm tracking-wide text-gold hover:text-cream"
          >
            ← All furniture categories
          </Link>
        </div>
      </Section>

      <CTASection
        title="Furnish your event beautifully"
        text="Tell us your style and guest count — we'll recommend the perfect pieces and send a quote."
        buttonLabel="Request a quote"
      />

      <SiteFooter />
    </div>
  );
}
