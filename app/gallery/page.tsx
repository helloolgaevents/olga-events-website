import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import { PageHeader, Section, CTASection } from "../components/ui";

export const metadata: Metadata = {
  title: "Wedding Gallery in Dubai | Luxury Wedding Designs | Olga Events",
  description:
    "A curated gallery of elegant luxury wedding and event designs created by Olga Events across Dubai and the UAE — stages, florals and full venue transformations.",
};

const GALLERY = [
  {
    title: "Blue Ember Elegance",
    label: "Stage design · Dubai",
    src: "/images/blue-ember.jpg",
  },
  {
    title: "Lavish Floral Fantasy",
    label: "Stage design · Abu Dhabi",
    src: "/images/lavish-floral.jpg",
  },
  {
    title: "The Scarlet Serenade",
    label: "Stage design · UAE",
    src: "/images/scarlet-serenade.jpg",
  },
  {
    title: "Bollywood Bliss",
    label: "Sangeet & Henna · Dubai",
    src: "/images/bollywood-bliss.jpg",
  },
  {
    title: "Glamorous Gold & Marble",
    label: "Stage design · Dubai",
    src: "/images/gold-marble.jpg",
  },
  {
    title: "Celestial Romance",
    label: "Stage design · Dubai",
    src: "/images/celestial-romance.jpg",
  },
  {
    title: "Table styling & florals",
    label: "Centerpieces · UAE",
    src: "/images/table-florals.jpg",
  },
  {
    title: "Floral Design",
    label: "Fresh flowers · UAE",
    src: "/images/floral-design.webp",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />

      <PageHeader
        kicker="Selected work"
        title="Gallery"
        intro="A curated collection of elegant wedding and event designs created by Olga Events. Each concept is thoughtfully developed to reflect a unique vision, combining refined aesthetics with seamless execution."
      />

      <Section>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <figure className="tile aspect-[4/5]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  className="object-cover"
                />
                <figcaption className="tile-caption">
                  <div>
                    <p className="font-serif text-2xl font-light text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-gold">
                      {item.label}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Like what you see?"
        text="Tell us your vision and we'll design a wedding that's entirely your own."
      />

      <SiteFooter />
    </div>
  );
}
