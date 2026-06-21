import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import { PageHeader, Section, CTASection } from "../components/ui";

export const metadata: Metadata = {
  title: "Wedding Reviews & Testimonials in Dubai | Olga Events",
  description:
    "Real stories from the couples who trusted Olga Events with their wedding day in Dubai and Abu Dhabi. Read kind words from our families.",
};

const REVIEWS = [
  {
    names: "Layla & Yousef",
    place: "Dubai · 2025",
    rating: 5,
    quote:
      "Honestly, what stayed with us wasn't how beautiful everything looked — it was how calm we felt. A week before the wedding our timeline fell apart in two places, and Sawsan fixed both in one afternoon. She just messaged, 'handled, don't worry,' and it was. That kind of support is rare.",
  },
  {
    names: "Nadia & Tariq",
    place: "Dubai · 2025",
    rating: 5,
    quote:
      "What surprised me most was how organised it all was. We could see the prices, message the team in the online chat whenever a question came up, and everything lived in one place. It never felt like we were chasing one busy person — there was a whole team behind us, so decisions happened quickly and the plan genuinely felt built around us.",
  },
  {
    names: "Reem & Saif",
    place: "Abu Dhabi · 2025",
    rating: 4,
    quote:
      "Genuinely lovely team and a beautiful day. The only reason it's not five stars is that early on, replies sometimes took a day during their busy season — closer to the date they were instant with everything. Honestly, I'd still recommend them without hesitation.",
  },
  {
    names: "Carla & Ahmed",
    place: "Abu Dhabi · 2025",
    rating: 5,
    quote:
      "We loved working with Olga Events, truly. My one regret is that we came to them only about three months before the date. They still created something gorgeous, but if I could go back I'd start nine months to a year out — it would have let us actually enjoy the process instead of squeezing it between work and life. If you have the time, give yourselves that gift.",
  },
  {
    names: "Elena & Dmitri",
    place: "Dubai · 2026",
    rating: 5,
    quote:
      "I run a business myself, so I notice how teams work — and this is a real operation, not a side hobby. The tools they use, the way everything is tracked, how openly they talk about every cost… you can tell Olga trains her people, because everyone works to the same standard. We were never handed off or forgotten.",
  },
  {
    names: "Priya & Rohan",
    place: "Dubai · 2026",
    rating: 5,
    quote:
      "We booked the Luxury Planning package and on the day I didn't lift a finger. Hani and John seemed to be everywhere at once, everyone knew exactly their role, and it was all quietly run by Olga Events in the background. My husband and I actually got to be with our guests — which was all we really wanted.",
  },
  {
    names: "Maria & Sergio",
    place: "Dubai · 2025",
    rating: 5,
    quote:
      "The décor made me tear up when I walked in. Hajar took the tangle of ideas in my head and turned them into something more beautiful than I could have described. Our guests still ask who designed it. She really listened, and gave us the exact atmosphere we'd dreamed of.",
  },
  {
    names: "Olivia & Daniel",
    place: "Dubai · 2026",
    rating: 4,
    quote:
      "We were really happy overall. A couple of small details on the day weren't quite how we'd pictured them, but the team fixed them so fast our guests never noticed. The planning was smooth and the value was excellent. Four stars, and we'd gladly work with them again.",
  },
  {
    names: "Aisha & Khalid",
    place: "Abu Dhabi · 2025",
    rating: 5,
    quote:
      "Over the year we planned together, a lot happened in our lives, and not all of it was about the wedding. What I'll always remember is that Olga was simply there. She understood when I was overwhelmed, picked up when I called, and sometimes we just talked — not about flowers or seating, just life. It stopped feeling like a vendor and started feeling like having someone in your corner.",
  },
  {
    names: "Sophie & James",
    place: "Dubai · 2026",
    rating: 5,
    quote:
      "We chose the Classic Planning package, and a year on I can honestly say what we paid doesn't compare to what we got back — the attention, the patience, the sheer amount of work behind the scenes. The coordination, the décor, the feeling on the day… it left us with the warmest memories. Thank you to the whole team.",
  },
  {
    names: "Fatima & Hassan",
    place: "Dubai · 2026",
    rating: 5,
    quote:
      "We're not the easiest couple — we ask a lot of questions — and not once did they make us feel like a bother. Every message got an answer, every change was tracked. By the wedding day we trusted them completely, and honestly that trust was the best part.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="font-serif text-lg tracking-[0.2em]" aria-label={`${rating} out of 5 stars`}>
      <span className="text-gold">{"★".repeat(rating)}</span>
      <span className="text-line">{"★".repeat(5 - rating)}</span>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />

      <PageHeader
        kicker="Testimonials"
        title="Kind words from our couples"
        intro="Real stories from the families who trusted us with one of the most important days of their lives."
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.names} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col border border-line p-7">
                <Stars rating={r.rating} />
                <blockquote className="mt-5 flex-1 font-serif text-lg font-light italic leading-snug text-cream">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 font-sans text-[0.78rem] uppercase tracking-[0.18em] text-muted">
                  {r.names} · {r.place}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-center font-sans text-xs font-light italic text-muted/70">
          Example testimonials, shown to illustrate the page — being replaced
          with verified client reviews.
        </p>
      </Section>

      <CTASection />

      <SiteFooter />
    </div>
  );
}
