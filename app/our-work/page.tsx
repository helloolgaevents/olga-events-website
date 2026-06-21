import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import { PageHeader, Section, CTASection } from "../components/ui";

export const metadata: Metadata = {
  title: "Our Work | Real Luxury Weddings in Dubai – Olga Events",
  description:
    "Real moments, behind-the-scenes and design reveals from luxury weddings created by Olga Events across Dubai and the UAE.",
};

const WORK = [
  { title: "Blue Ember Elegance", src: "/images/blue-ember.jpg" },
  { title: "Lavish Floral Fantasy", src: "/images/lavish-floral.jpg" },
  { title: "The Scarlet Serenade", src: "/images/scarlet-serenade.jpg" },
  { title: "Glamorous Gold & Marble", src: "/images/gold-marble.jpg" },
  { title: "Celestial Romance", src: "/images/celestial-romance.jpg" },
  { title: "Table styling & florals", src: "/images/table-florals.jpg" },
];

const INSTAGRAM = "https://www.instagram.com/weddingplannerdubaiuae/";

export default function OurWorkPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <main>

      <PageHeader
        kicker="Our latest weddings"
        title="Our Work"
        intro="Real moments, behind-the-scenes and design reveals from the weddings we create across Dubai and the UAE."
      />

      <Section>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORK.map((item, i) => (
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
                  <p className="font-serif text-2xl font-light text-white">
                    {item.title}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Follow @weddingplannerdubaiuae
          </a>
          <p className="mt-6 font-sans text-sm font-light text-muted">
            See more on our{" "}
            <Link href="/gallery" className="text-green-deep underline underline-offset-2 hover:text-green">
              full gallery
            </Link>
            .
          </p>
        </div>
      </Section>

      <CTASection />

      </main>
      <SiteFooter />
    </div>
  );
}
