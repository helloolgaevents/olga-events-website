import type { Metadata } from "next";
import Image from "next/image";
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
import PRODUCTS from "../products.json";

type Params = { category: string };
type Product = { title: string; desc: string; img: string };

const CATALOG = PRODUCTS as Record<string, Product[]>;

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

  const products = CATALOG[cat.slug] ?? [];

  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <main>

      <PageHeader
        kicker="Furniture Rentals"
        title={`${cat.name} Rental in Dubai`}
        intro={cat.desc}
      />

      <Section>
        {products.length > 0 ? (
          <>
            <p className="mb-10 text-center font-sans text-base font-light text-muted">
              A selection of our {cat.name.toLowerCase()} available for rental
              across Dubai and the UAE. Contact us for availability and a quote.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p, i) => (
                <Reveal key={p.title + i} delay={(i % 3) * 70}>
                  <div className="svc-card group flex h-full flex-col overflow-hidden">
                    <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-line bg-ink-alt">
                      <Image
                        src={p.img}
                        alt={`${p.title} — furniture rental Dubai`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-serif text-lg font-light leading-snug text-cream">
                        {p.title}
                      </h2>
                      {p.desc ? (
                        <p className="mt-3 flex-1 font-sans text-base font-light leading-relaxed text-muted">
                          {p.desc}
                        </p>
                      ) : (
                        <div className="flex-1" />
                      )}
                      <Link href="/contact" className="btn-outline mt-6 self-start">
                        Enquire
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        ) : (
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-beige p-10 text-center">
              <span className="font-sans text-[0.72rem] uppercase tracking-[0.32em] text-gold">
                Catalog being imported
              </span>
              <h2 className="mt-5 font-serif text-3xl font-light text-cream">
                {cat.name}
              </h2>
              <p className="mt-6 font-sans text-lg font-light leading-relaxed text-muted">
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

        <div className="mt-14 text-center">
          <Link
            href="/furniture"
            className="font-sans text-sm tracking-wide text-green-deep hover:text-cream"
          >
            ← All furniture categories
          </Link>
        </div>
      </Section>

      <CTASection
        title="Furnish your event beautifully"
        text="Tell us your style and guest count, we'll recommend the perfect pieces and send a quote."
        buttonLabel="Request a quote"
      />

      </main>
      <SiteFooter />
    </div>
  );
}
