import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";
import CountUp from "./components/CountUp";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import {
  Kicker,
  Divider,
  SplitSection,
  INSTAGRAM,
  InstagramIcon,
} from "./components/ui";

const SERVICES = [
  { title: "Planning", text: "First idea to final dance." },
  { title: "Design", text: "Concept, palette, the look." },
  { title: "Décor & Florals", text: "Stages, backdrops, live flowers." },
  { title: "Coordination", text: "A flawless day-of." },
];

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
    title: "Table styling & florals",
    label: "Centerpieces · UAE",
    src: "/images/table-florals.jpg",
  },
  {
    title: "Celestial Romance",
    label: "Stage design · Dubai",
    src: "/images/celestial-romance.jpg",
  },
  {
    title: "Floral Design",
    label: "Fresh flowers · UAE",
    src: "/images/floral-design.webp",
  },
];

const VENUES = [
  "Atlantis The Palm",
  "Park Hyatt Dubai",
  "Ritz-Carlton Abu Dhabi",
  "Four Seasons Jumeirah",
  "Palazzo Versace",
  "One&Only Royal Mirage",
  "Raffles The Palm",
  "St. Regis The Palm",
];

const REVIEWS = [
  {
    quote: "Everything was perfect, we just enjoyed our day.",
    meta: "Couple · Emirati · Atlantis The Palm",
  },
  {
    quote: "The décor took our breath away.",
    meta: "Couple · Russian · Park Hyatt Dubai",
  },
  {
    quote: "They understood our culture from the first call.",
    meta: "Couple · Arab · Ritz-Carlton Abu Dhabi",
  },
];

const TEAM = [
  { name: "Olga", role: "Founder" },
  { name: "Joan", role: "Operations" },
  { name: "Hajar", role: "Setup & Décor" },
  { name: "Tatiana", role: "Planner & Designer" },
];

const HERO_IMG = "/images/hero-stage.webp";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <main>

      {/* ---------- Hero ---------- */}
      <section
        id="top"
        className="dark-zone relative flex min-h-[92vh] items-center justify-center overflow-hidden"
      >
        <Image
          src={HERO_IMG}
          alt="Luxury wedding stage with golden lighting in Dubai"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />
        <div className="hero-glow" />

        <div className="relative z-10 mx-auto max-w-[860px] px-6 pt-24 text-center">
          <Reveal>
            <Kicker>Luxury Wedding Planning · Dubai</Kicker>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 font-serif text-[2.6rem] font-light leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Your most important day,
              <br className="hidden sm:block" /> beautifully handled
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <span className="mx-auto my-8 block h-px w-20 bg-gold" />
          </Reveal>
          <Reveal delay={300}>
            <p className="mx-auto max-w-xl font-sans text-base font-light leading-relaxed text-cream/80 sm:text-lg">
              The flowers, the light, the timing, your guests, all on us. You
              are simply there, living every moment.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10">
              <Link href="/contact" className="btn-gold">
                Book a free consultation
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <span className="font-sans text-[0.68rem] uppercase tracking-[0.3em] text-muted">
            Scroll to explore
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-gold/40" />
      </section>

      {/* ---------- Trust bar ---------- */}
      <section className="border-y border-line bg-ink">
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-2 gap-y-10 px-6 py-12 text-center md:grid-cols-4">
          <Reveal className="px-2">
            <div className="font-num text-4xl font-bold text-gold">
              <CountUp target={300} suffix="+" />
            </div>
            <p className="mt-2 font-sans text-[0.78rem] uppercase tracking-[0.18em] text-muted">
              Weddings delivered
            </p>
          </Reveal>
          <Reveal className="px-2" delay={100}>
            <div className="font-serif text-2xl tracking-[0.18em] text-gold">
              ★★★★★
            </div>
            <p className="mt-3 font-sans text-[0.78rem] uppercase tracking-[0.18em] text-muted">
              Loved by our couples
            </p>
          </Reveal>
          <Reveal className="px-2" delay={200}>
            <div className="font-serif text-2xl font-light text-cream">
              All UAE
            </div>
            <p className="mt-2 font-sans text-[0.78rem] uppercase tracking-[0.18em] text-muted">
              Dubai · Abu Dhabi
            </p>
          </Reveal>
          <Reveal className="px-2" delay={300}>
            <div className="font-serif text-2xl font-light text-cream">
              EN · RU · AR
            </div>
            <p className="mt-2 font-sans text-[0.78rem] uppercase tracking-[0.18em] text-muted">
              Your language
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- About (split) ---------- */}
      <div id="about">
        <SplitSection
          alt
          imageSide="left"
          imageSrc="/images/gallery/arabian-ranches.jpg"
          imageAlt="Luxury wedding designed by Olga Events in Dubai"
          kicker="Who we are"
          title="A team in love with the details"
          lead="A wedding is born from the small things, thoughtful décor, fresh flowers, the right rhythm of the evening. We lead and coordinate the whole day so it feels warm and effortless."
          points={[
            "Full-service planning, design and coordination",
            "In-house décor and fresh florals",
            "Across Dubai, Abu Dhabi and all Emirates",
          ]}
          cta={{ label: "About us", href: "/about-us" }}
        />
      </div>

      {/* ---------- Services ---------- */}
      <section id="services" className="bg-ink">
        <div className="mx-auto w-full max-w-[1500px] px-[22px] sm:px-14 py-28">
          <Reveal className="text-center">
            <Kicker>What we do</Kicker>
            <h2 className="mt-6 font-serif text-4xl font-light text-cream sm:text-5xl">
              Everything, beautifully handled
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 90}>
                <div className="svc-card h-full p-8">
                  <span className="font-num text-sm font-semibold tracking-wider text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-[26px] leading-tight text-cream sm:text-[28px]">
                    {svc.title}
                  </h3>
                  <p className="mt-3 font-sans text-[15px] font-normal leading-relaxed text-faint">
                    {svc.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Gallery (full-bleed arch strip) ---------- */}
      <section id="gallery" className="bg-ink-alt py-24">
        <div className="mx-auto mb-14 w-full max-w-[1500px] px-[22px] text-center sm:px-14">
          <Reveal>
            <Kicker>Selected work</Kicker>
            <h2 className="mt-3 font-serif text-[2.5rem] leading-[1.1] text-cream sm:text-[3rem]">
              Moments we have created
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-4 px-3 sm:grid-cols-3 sm:px-4">
          {GALLERY.slice(0, 3).map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <figure>
                <div className="arch-strip relative h-[380px] sm:h-[520px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-center">
                  <p className="font-serif text-2xl text-cream">{item.title}</p>
                  <p className="kicker mt-1 inline-block">{item.label}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/gallery" className="btn-outline">
            View full gallery
          </Link>
        </div>
      </section>

      {/* ---------- Venues marquee ---------- */}
      <section
        id="venues"
        className="border-y border-line bg-beige py-9 sm:py-16"
      >
        <Reveal className="mb-8 text-center sm:mb-10">
          <Kicker>Venues we love</Kicker>
        </Reveal>
        <div className="marquee-mask relative overflow-hidden">
          <div className="marquee-track">
            {[...VENUES, ...VENUES].map((venue, i) => (
              <span
                key={`${venue}-${i}`}
                className="flex shrink-0 items-center font-serif text-2xl text-cream sm:text-3xl"
              >
                {venue}
                <span className="mx-8 text-gold">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Packages (split) ---------- */}
      <div id="packages">
        <SplitSection
          imageSide="right"
          imageSrc="/images/gallery/chandelier-setup.jpg"
          imageAlt="Luxury wedding décor and chandelier setup in Dubai"
          kicker="Our packages"
          title="Planning & décor, made clear"
          lead="Transparent packages with a live price calculator, you always know what's included."
          points={[
            "Planning: Essential, Classic, Luxury",
            "Décor collections: Bloom, Signature, Elegance",
            "Best price when you book planning and décor together",
          ]}
          cta={{ label: "See packages", href: "/packages" }}
        />
      </div>

      {/* ---------- Reviews ---------- */}
      <section id="reviews" className="bg-ink">
        <div className="mx-auto w-full max-w-[1500px] px-[22px] sm:px-14 py-28">
          <Reveal className="text-center">
            <Kicker>Kind words</Kicker>
            <h2 className="mt-6 font-serif text-4xl font-light text-cream sm:text-5xl">
              Loved by our couples
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <Reveal key={review.quote} delay={i * 100}>
                <figure className="h-full border border-line p-8 text-center">
                  <div className="font-serif text-xl tracking-[0.18em] text-gold">
                    ★★★★★
                  </div>
                  <blockquote className="mt-6 font-serif text-2xl font-light italic leading-snug text-cream">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className="mt-6 font-sans text-[0.78rem] uppercase tracking-[0.18em] text-muted">
                    {review.meta}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="bg-ink-alt">
        <div className="mx-auto w-full max-w-[1500px] px-[22px] sm:px-14 py-28">
          <Reveal className="text-center">
            <Kicker>The people</Kicker>
            <h2 className="mt-6 font-serif text-4xl font-light text-cream sm:text-5xl">
              The team behind your day
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 90}>
                <div className="text-center">
                  <div className="mx-auto flex aspect-square w-full items-center justify-center border border-line bg-ink">
                    <span className="font-serif text-5xl font-light text-gold/60">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-light text-cream">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-sans text-[0.76rem] uppercase tracking-[0.2em] text-muted">
                    {member.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section id="contact" className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 40%, rgba(194,163,107,0.14), rgba(22,20,15,0) 70%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-[22px] sm:px-14 py-32 text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-serif text-5xl font-light leading-tight text-cream sm:text-6xl">
              Let&apos;s plan your wedding
            </h2>
            <div className="flex justify-center">
              <Divider />
            </div>
            <p className="font-sans text-lg font-light leading-relaxed text-muted">
              Tell us your vision, we&apos;ll put together a proposal made for
              you. Free, no obligation.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-gold">
                Book a free consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Instagram ---------- */}
      <section className="bg-ink-alt">
        <div className="mx-auto w-full max-w-[1500px] px-[22px] sm:px-14 py-24">
          <Reveal className="text-center">
            <Kicker>Follow us on Instagram</Kicker>
            <h2 className="mt-5 font-serif text-4xl font-light text-cream sm:text-5xl">
              {INSTAGRAM.handle}
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-lg font-light leading-relaxed text-muted">
              Real moments, behind-the-scenes and design reveals from the
              weddings we create across Dubai and the UAE.
            </p>
            <div className="mt-8">
              <a
                href={INSTAGRAM.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <InstagramIcon className="mr-2 h-4 w-4" />
                Follow on Instagram
              </a>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {GALLERY.map((g, i) => (
              <Reveal key={g.title} delay={(i % 6) * 70}>
                <a
                  href={INSTAGRAM.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Olga Events on Instagram, ${g.title}`}
                  className="tile group relative block aspect-square"
                >
                  <Image
                    src={g.src}
                    alt={`Olga Events wedding — ${g.title}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 180px"
                    className="object-cover"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <InstagramIcon className="h-7 w-7 text-cream" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
