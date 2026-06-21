import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import { PageHeader, Section, CTASection } from "../components/ui";

export const metadata: Metadata = {
  title: "Wedding Gallery in Dubai | Luxury Wedding Designs | Olga Events",
  description:
    "A curated gallery of elegant luxury wedding and event designs created by Olga Events across Dubai and the UAE, stages, florals and full venue transformations.",
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
  { title: "Givenchy Design", label: "Bespoke décor · Dubai", src: "/images/gallery/givenchy-design.jpg" },
  { title: "Arabian Ranches Wedding", label: "Private villa · Dubai", src: "/images/gallery/arabian-ranches.jpg" },
  { title: "Laimarine", label: "Stage design · UAE", src: "/images/gallery/laimarine.jpg" },
  { title: "Sangeet & Henna", label: "Indian wedding · Dubai", src: "/images/gallery/sangeet-henna.jpg" },
  { title: "Stage Design", label: "Ballroom · Dubai", src: "/images/gallery/stage-dubai.jpg" },
  { title: "Grand Stage", label: "Luxury wedding · Dubai", src: "/images/gallery/stage-planner.jpg" },
  { title: "Event Setup", label: "Full production · Dubai", src: "/images/gallery/event-setup.jpg" },
  { title: "Day-of Coordination", label: "Wedding · UAE", src: "/images/gallery/coordination.webp" },
  { title: "Chandelier Setup", label: "Luxury décor · Dubai", src: "/images/gallery/chandelier-setup.jpg" },
  { title: "Luxury Weddings", label: "Signature design · UAE", src: "/images/gallery/luxury-weddings.jpg" },
  { title: "Full Planning", label: "Wedding · Dubai", src: "/images/gallery/planning-services.jpg" },
  { title: "Wedding Design", label: "Décor · Dubai", src: "/images/gallery/wedding-organizer.jpg" },
  { title: "Golden Hour Reception", label: "Reception · Dubai", src: "/images/gallery/wedding-01.jpg" },
  { title: "Crystal Ballroom", label: "Stage design · Dubai", src: "/images/gallery/wedding-02.jpg" },
  { title: "Blush & Ivory", label: "Florals · UAE", src: "/images/gallery/wedding-03.jpg" },
  { title: "Grand Entrance", label: "Ceremony · Dubai", src: "/images/gallery/wedding-04.jpg" },
  { title: "Candlelit Tablescape", label: "Table styling · UAE", src: "/images/gallery/wedding-05.jpg" },
  { title: "Mirror & Marble", label: "Décor · Dubai", src: "/images/gallery/wedding-06.jpg" },
  { title: "Floral Archway", label: "Ceremony · Abu Dhabi", src: "/images/gallery/wedding-07.jpg" },
  { title: "Royal Stage", label: "Stage design · Dubai", src: "/images/gallery/wedding-08.jpg" },
  { title: "Romantic Aisle", label: "Ceremony · UAE", src: "/images/gallery/wedding-09.jpg" },
  { title: "Opulent Hall", label: "Reception · Dubai", src: "/images/gallery/wedding-10.jpg" },
  { title: "Garden of Light", label: "Décor · Dubai", src: "/images/gallery/wedding-11.jpg" },
  { title: "Velvet & Gold", label: "Stage design · UAE", src: "/images/gallery/wedding-12.jpg" },
  { title: "Timeless Elegance", label: "Reception · Dubai", src: "/images/gallery/wedding-13.jpg" },
  { title: "Whispering Petals", label: "Florals · UAE", src: "/images/gallery/wedding-14.jpg" },
  { title: "Midnight Glamour", label: "Stage design · Dubai", src: "/images/gallery/wedding-15.jpg" },
  { title: "Eternal Romance", label: "Wedding · Dubai", src: "/images/gallery/wedding-16.jpg" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <main>

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

      </main>
      <SiteFooter />
    </div>
  );
}
