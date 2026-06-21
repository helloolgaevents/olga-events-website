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

const CDN = "https://olga.events/cdn/shop/files";

const GALLERY = [
  {
    title: "Blue Ember Elegance",
    label: "Stage design · Dubai",
    src: `${CDN}/olga-events-luxury-wedding-stage-dubai-planner-address_sky_vew.jpg?width=1000`,
  },
  {
    title: "Lavish Floral Fantasy",
    label: "Stage design · Abu Dhabi",
    src: `${CDN}/olga-events-luxury-wedding-stage-dubai-planner-AbuDhabi_png.jpg?width=1000`,
  },
  {
    title: "The Scarlet Serenade",
    label: "Stage design · UAE",
    src: `${CDN}/olga-events-luxury-wedding-stage-dubai-planner-TheScarletSerenade.png?width=1000`,
  },
  {
    title: "Bollywood Bliss",
    label: "Sangeet & Henna · Dubai",
    src: `${CDN}/WhatsApp_Image_2025-01-27_at_17.12.14.jpg?width=1000`,
  },
  {
    title: "Glamorous Gold & Marble",
    label: "Stage design · Dubai",
    src: `${CDN}/olga-events-luxury-wedding-stage-dubai-planner2.jpg?width=1000`,
  },
  {
    title: "Celestial Romance",
    label: "Stage design · Dubai",
    src: `${CDN}/olga-events-luxury-wedding-stage-dubai.png?width=1000`,
  },
  {
    title: "Indian Wedding Décor",
    label: "Sangeet & Henna · Dubai",
    src: `${CDN}/olga-events-luxury-wedding-stage-dubai-planner-TheScarletSerenade-sangeet-henna-indianwedding_png.jpg?width=1000`,
  },
  {
    title: "Table styling & florals",
    label: "Centerpieces · UAE",
    src: `${CDN}/elegant-wedding-table-centerpiece-fresh_flowers-uae__png.jpg?width=1000`,
  },
  {
    title: "Floral Design",
    label: "Fresh flowers · UAE",
    src: `${CDN}/olga_events_floral_arrangment_fresh_flowers_bouquet_weddings_events_florist_decorator_wedding_planner.webp?width=1000`,
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
