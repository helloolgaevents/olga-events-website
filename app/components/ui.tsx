import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

/* ---------------- Site-wide config ---------------- */

// Canonical production domain. The new site replaces the old pages at the same
// paths, so we keep olga.events as the canonical base for SEO continuity.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://olga.events";

export const NAV_LINKS = [
  { label: "About", href: "/about-us" },
  { label: "Planning", href: "/wedding-planner-dubai" },
  { label: "Decoration", href: "/wedding-decoration-dubai" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = [
  {
    heading: "Explore",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Our Work", href: "/our-work" },
      { label: "Gallery", href: "/gallery" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    heading: "Weddings",
    links: [
      { label: "Wedding Planner", href: "/wedding-planner-dubai" },
      { label: "Wedding Decoration", href: "/wedding-decoration-dubai" },
      { label: "Packages", href: "/packages" },
    ],
  },
  {
    heading: "Guides",
    links: [
      { label: "Wedding Cost in Dubai", href: "/wedding-cost-dubai" },
      { label: "Wedding Packages", href: "/wedding-packages-dubai" },
    ],
  },
  {
    heading: "More services",
    links: [
      { label: "Corporate Events", href: "/corporate-events" },
      { label: "Private Events", href: "/private-events" },
      { label: "Seasonal Events", href: "/seasonal-events" },
      { label: "AV & Production", href: "/av-production" },
      { label: "Furniture Rental", href: "/furniture" },
    ],
  },
];

export const FURNITURE_CATEGORIES = [
  {
    slug: "bridal-sofa",
    name: "Bridal Sofas",
    desc: "Statement bridal seating — velvet, linen, and metal-base designs that anchor your stage.",
  },
  {
    slug: "dining-tables",
    name: "Dining Tables",
    desc: "Elegant dining and cocktail tables to set the scene for every guest.",
  },
  {
    slug: "dining-chairs",
    name: "Dining Chairs",
    desc: "Refined seating that completes a cohesive, luxurious table.",
  },
  {
    slug: "lounge-sofa",
    name: "Lounge Sofas",
    desc: "Comfortable lounge seating for relaxed, stylish guest areas.",
  },
  {
    slug: "accent-chairs",
    name: "Accent Chairs",
    desc: "Sculptural accent chairs for photo corners and lounges.",
  },
  {
    slug: "ottomans",
    name: "Ottomans & Poufs",
    desc: "Soft ottomans and poufs to layer texture into any setting.",
  },
];

export const CONTACT = {
  whatsapp: "+971 55 670 4762",
  whatsappHref: "https://wa.me/971556704762",
  phone: "+971 58 688 1554",
  phoneHref: "tel:+971586881554",
  email: "hello@olga.events",
  emailHref: "mailto:hello@olga.events",
};

export const INSTAGRAM = {
  handle: "@weddingplannerdubaiuae",
  url: "https://www.instagram.com/weddingplannerdubaiuae/",
};

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ---------------- Presentational helpers ---------------- */

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-sans text-[0.72rem] uppercase tracking-[0.32em] text-gold">
      {children}
    </span>
  );
}

export function Divider() {
  return <span className="mx-auto my-7 block h-px w-16 bg-gold/70" />;
}

export function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker?: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 70% at 50% 30%, rgba(194,163,107,0.15), rgba(22,20,15,0) 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 pb-20 pt-36 text-center sm:pt-40">
        <Reveal>
          {kicker ? <Kicker>{kicker}</Kicker> : null}
          <h1 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro ? (
            <>
              <Divider />
              <p className="mx-auto max-w-2xl font-sans text-lg font-light leading-relaxed text-muted">
                {intro}
              </p>
            </>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

export function Section({
  id,
  alt = false,
  children,
  className = "",
}: {
  id?: string;
  alt?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={alt ? "bg-ink-alt" : "bg-ink"}>
      <div className={`mx-auto w-full max-w-[1100px] px-6 py-20 ${className}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({
  kicker,
  title,
  center = false,
}: {
  kicker?: string;
  title: React.ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h2 className="mt-5 font-serif text-3xl font-light leading-tight text-cream sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

export function Prose({
  paragraphs,
  className = "",
}: {
  paragraphs: string[];
  className?: string;
}) {
  return (
    <div className={`space-y-5 ${className}`}>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="font-sans text-base font-light leading-relaxed text-muted sm:text-lg"
        >
          {p}
        </p>
      ))}
    </div>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Reveal>
      <div className="divide-y divide-line border-y border-line">
        {items.map((it, i) => (
          <div key={i} className="py-7">
            <h3 className="font-serif text-xl font-light text-cream sm:text-2xl">
              {it.q}
            </h3>
            <p className="mt-3 font-sans text-base font-light leading-relaxed text-muted">
              {it.a}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export function FeatureImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <section className="bg-ink">
      <div className="mx-auto w-full max-w-[1100px] px-6 pt-12">
        <Reveal>
          <div className="tile relative aspect-[16/10] w-full sm:aspect-[16/8]">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 1100px) 100vw, 1100px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CTASection({
  title = "Let's plan your wedding",
  text = "Tell us your vision — we'll put together a proposal made for you. Free, no obligation.",
  buttonLabel = "Book a free consultation",
  href = "/contact",
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 40%, rgba(194,163,107,0.14), rgba(22,20,15,0) 70%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 py-28 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-serif text-4xl font-light leading-tight text-cream sm:text-5xl">
            {title}
          </h2>
          <Divider />
          <p className="font-sans text-lg font-light leading-relaxed text-muted">
            {text}
          </p>
          <div className="mt-10">
            <Link href={href} className="btn-gold">
              {buttonLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
