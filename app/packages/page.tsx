import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";
import PriceCalculator from "../components/PriceCalculator";
import {
  PageHeader,
  Section,
  SectionTitle,
  Prose,
  Divider,
  CTASection,
  FeatureImage,
} from "../components/ui";
import PlanningComparison from "./PlanningComparison";
import DecorPackages from "./DecorPackages";
import { packagesContent as c } from "./content";

export const metadata: Metadata = {
  title: "Wedding Planning & Décor Packages in Dubai | Olga Events",
  description:
    "Transparent wedding planning packages (Essential, Classic, Luxury) and décor collections (Bloom, Signature, Elegance) with a live price calculator — Olga Events, Dubai.",
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((it) => (
        <li
          key={it}
          className="flex gap-3 font-sans text-base font-light leading-relaxed text-muted"
        >
          <span className="mt-0.5 text-gold">—</span>
          {it}
        </li>
      ))}
    </ul>
  );
}

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <main>
        {/* ---------- HERO ---------- */}
        <PageHeader kicker={c.hero.kicker} title={c.hero.title} intro={c.hero.sub} />

        <FeatureImage
          src="/images/table-florals.jpg"
          alt="Wedding table styling and florals by Olga Events in Dubai"
        />

        {/* ---------- WHO WE ARE ---------- */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <SectionTitle kicker="Who we are" title={c.who.heading} />
            <div className="mt-8">
              <Prose paragraphs={c.who.paras} />
            </div>
          </div>
        </Section>

        {/* ---------- HOW IT WORKS ---------- */}
        <Section alt>
          <SectionTitle kicker="Process" title={c.how.heading} center />
          <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {c.how.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="svc-card h-full p-7">
                  <span className="font-serif text-3xl font-light text-gold">
                    {s.n}
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-light text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm font-light leading-relaxed text-muted">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ---------- HOW TO BOOK ---------- */}
        <Section>
          <SectionTitle kicker="Getting started" title={c.book.heading} center />
          <Reveal className="mx-auto mt-8 max-w-3xl text-center">
            <p className="font-sans text-base font-light leading-relaxed text-muted">
              {c.book.lead}
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Recommended */}
            <Reveal>
              <div className="relative h-full overflow-hidden border border-gold/60 p-8 sm:p-10">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 50% at 50% 0%, rgba(194,163,107,0.14), rgba(22,20,15,0) 70%)",
                  }}
                />
                <div className="relative z-10">
                  <span className="inline-block bg-green px-3 py-1 font-sans text-[0.6rem] uppercase tracking-[0.2em] text-white">
                    {c.book.recommended.tag}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-light text-cream sm:text-3xl">
                    {c.book.recommended.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm font-light leading-relaxed text-muted">
                    {c.book.recommended.intro}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {c.book.recommended.points.map((p) => (
                      <li key={p.h} className="flex gap-3 font-sans text-sm font-light">
                        <span className="mt-0.5 text-gold">✦</span>
                        <span className="text-cream/90">
                          <span className="text-cream">{p.h}</span> {p.t}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-l-2 border-gold/50 pl-4 font-sans text-sm font-light italic text-muted">
                    {c.book.recommended.note}
                  </p>
                  <p className="mt-4 font-sans text-sm font-light text-cream/90">
                    {c.book.recommended.forText}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Flexible */}
            <Reveal delay={120}>
              <div className="h-full border border-line p-8 sm:p-10">
                <span className="inline-block border border-gold/50 px-3 py-1 font-sans text-[0.6rem] uppercase tracking-[0.2em] text-gold">
                  {c.book.flexible.tag}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-light text-cream sm:text-3xl">
                  {c.book.flexible.title}
                </h3>
                <p className="mt-4 font-sans text-sm font-light leading-relaxed text-muted">
                  {c.book.flexible.intro}
                </p>
                <ul className="mt-6 space-y-3">
                  {c.book.flexible.points.map((p) => (
                    <li key={p.h} className="flex gap-3 font-sans text-sm font-light">
                      <span className="mt-0.5 text-gold">✦</span>
                      <span className="text-cream/90">
                        <span className="text-cream">{p.h}</span> {p.t}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-sans text-sm font-light text-gold">
                  {c.book.flexible.pricingLine}
                </p>
                <p className="mt-4 border-l-2 border-line pl-4 font-sans text-sm font-light italic text-muted">
                  {c.book.flexible.note}
                </p>
                <p className="mt-6 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-muted">
                  {c.book.flexible.suitableTitle}
                </p>
                <ul className="mt-3 space-y-2">
                  {c.book.flexible.suitable.map((s) => (
                    <li
                      key={s}
                      className="flex gap-3 font-sans text-sm font-light leading-relaxed text-cream/90"
                    >
                      <span className="text-gold">·</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal className="mx-auto mt-10 max-w-3xl text-center">
            <p className="font-sans text-base font-light leading-relaxed text-muted">
              {c.book.closing}
            </p>
          </Reveal>
        </Section>

        {/* ---------- PLANNING PACKAGES ---------- */}
        <Section alt>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle kicker="Planning" title={c.planning.heading} center />
            <p className="mt-6 font-sans text-base font-light leading-relaxed text-muted">
              {c.planning.lead}
            </p>
          </div>

          <Reveal className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-gold">
                {c.planning.understandTitle}
              </p>
              <BulletList items={c.planning.understand} />
            </div>
            <div>
              <p className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-gold">
                {c.planning.letsTitle}
              </p>
              <BulletList items={c.planning.lets} />
            </div>
          </Reveal>

          <Reveal className="mx-auto mt-10 max-w-3xl text-center">
            <p className="font-sans text-base font-light leading-relaxed text-muted">
              {c.planning.everyCouple}
            </p>
          </Reveal>

          <div className="mt-14">
            <PlanningComparison />
          </div>
        </Section>

        {/* ---------- DÉCOR PACKAGES ---------- */}
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle kicker="Décor" title={c.decor.heading} center />
            <p className="mt-6 font-sans text-base font-light leading-relaxed text-muted">
              {c.decor.lead}
            </p>
          </div>

          <Reveal className="mt-14">
            <DecorPackages />
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-3xl">
            <Prose paragraphs={[c.decor.compareParagraph]} />
          </Reveal>

          {/* Callout */}
          <Reveal className="mx-auto mt-10 max-w-3xl border border-gold/40 p-8">
            <p className="font-sans text-base font-light leading-relaxed text-cream/90">
              {c.decor.callout.lead}
            </p>
            <div className="mt-6">
              <Accordion
                items={[
                  {
                    title: c.decor.callout.optionalTitle,
                    list: c.decor.callout.optional,
                  },
                ]}
              />
            </div>
            <p className="mt-6 font-sans text-sm font-light leading-relaxed text-muted">
              {c.decor.callout.afterText}
            </p>
          </Reveal>

          {/* Individual décor — how it works */}
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <p className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-gold">
              {c.decor.individual.title}
            </p>
            <div className="mt-4">
              <Accordion
                items={c.decor.individual.items.map((it) => ({
                  title: it.h,
                  body: it.t,
                }))}
              />
            </div>
          </Reveal>

          {/* Notes */}
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <p className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-gold">
              Good to know
            </p>
            <div className="mt-4">
              <Accordion
                items={c.decor.notes.map((n) => ({ title: n.title, body: n.body }))}
              />
            </div>
          </Reveal>
        </Section>

        {/* ---------- BUILD YOUR ESTIMATE ---------- */}
        <Section alt>
          <SectionTitle kicker="Estimate" title={c.estimate.heading} center />
          <p className="mx-auto mt-6 max-w-2xl text-center font-sans text-base font-light leading-relaxed text-muted">
            {c.estimate.lead}
          </p>
          <div className="mt-12">
            <PriceCalculator />
          </div>
        </Section>

        {/* ---------- ADDITIONAL DÉCOR & SERVICES ---------- */}
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle kicker="Add-ons" title={c.additional.heading} center />
            <p className="mt-6 font-sans text-base font-light leading-relaxed text-muted">
              {c.additional.lead}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {c.additional.columns.map((col, i) => (
              <Reveal key={col.title} delay={i * 90}>
                <div className="svc-card h-full p-8">
                  <h3 className="font-serif text-xl font-light text-cream">
                    {col.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {col.items.map((it) => (
                      <li
                        key={it}
                        className="flex gap-3 font-sans text-sm font-light text-cream/90"
                      >
                        <span className="text-gold">—</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-10 max-w-3xl text-center">
            <p className="font-sans text-sm font-light italic text-muted">
              {c.additional.note}
            </p>
          </Reveal>
        </Section>

        {/* ---------- TRANSPARENT ---------- */}
        <Section alt>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle kicker="Pricing" title={c.transparent.heading} center />
            <p className="mt-8 font-serif text-xl font-light leading-relaxed text-cream sm:text-2xl">
              {c.transparent.formula}
            </p>
            <div className="flex justify-center">
              <Divider />
            </div>
            <p className="font-sans text-base font-light leading-relaxed text-muted">
              {c.transparent.para}
            </p>
          </div>
        </Section>

        {/* ---------- HOW WE WORK & WHY BOOK EARLY ---------- */}
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle
              kicker="Transparency"
              title={c.howWeWork.heading}
              center
            />
            <p className="mt-6 font-sans text-base font-light leading-relaxed text-muted">
              {c.howWeWork.lead}
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {c.howWeWork.blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div className="h-full border border-line p-7">
                  <h3 className="font-serif text-xl font-light text-cream">
                    {b.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm font-light leading-relaxed text-muted">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-8 max-w-3xl">
            <Accordion
              items={[
                {
                  title: c.howWeWork.whyTimeTitle,
                  list: c.howWeWork.whyTime,
                  note: c.howWeWork.whyTimeNote,
                },
                {
                  title: c.howWeWork.inventoryTitle,
                  list: c.howWeWork.inventory,
                  note: c.howWeWork.inventoryNote,
                },
                {
                  title: c.howWeWork.idealTitle,
                  list: c.howWeWork.ideal,
                },
              ]}
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {c.howWeWork.timeline.map((t, i) => (
              <Reveal key={t.label} delay={i * 80}>
                <div className="border border-line p-6 text-center">
                  <p className="font-serif text-xl font-light text-gold">
                    {t.range}
                  </p>
                  <p className="mt-2 font-sans text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                    {t.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-10 max-w-3xl text-center">
            <p className="font-sans text-base font-light leading-relaxed text-muted">
              {c.howWeWork.closing}
            </p>
          </Reveal>
        </Section>

        {/* ---------- FULLY CUSTOM ---------- */}
        <Section alt>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle kicker="Bespoke" title={c.custom.heading} center />
            <div className="mt-8">
              <Prose paragraphs={[c.custom.para]} className="text-center" />
            </div>
          </div>
        </Section>

        {/* ---------- FINAL CTA ---------- */}
        <CTASection
          title={c.cta.heading}
          text={c.cta.para}
          buttonLabel={c.cta.button}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
