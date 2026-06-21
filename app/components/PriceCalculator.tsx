"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Plan = { name: string; price: number; std: number };
type Decor = { name: string; base: number; std: number; cp: number };

const PLANS: Plan[] = [
  { name: "Essential", price: 6650, std: 7000 },
  { name: "Classic", price: 9500, std: 10000 },
  { name: "Luxury Planning", price: 17100, std: 18000 },
];

const DECORS: Decor[] = [
  { name: "Bloom", base: 39050, std: 47000, cp: 350 },
  { name: "Signature", base: 46930, std: 57000, cp: 800 },
  { name: "Elegance", base: 66000, std: 80000, cp: 1500 },
];

const fmt = (n: number) => `AED ${new Intl.NumberFormat("en-US").format(n)}`;

export default function PriceCalculator() {
  const [planIdx, setPlanIdx] = useState(1); // Classic
  const [decorIdx, setDecorIdx] = useState(1); // Signature
  const [guests, setGuests] = useState(100);

  const result = useMemo(() => {
    const plan = PLANS[planIdx];
    const decor = DECORS[decorIdx];
    const g = Number.isFinite(guests) && guests >= 100 ? guests : 100;

    const extraG = Math.max(0, g - 100);
    const extraT = Math.max(0, Math.ceil(g / 10) - 10);
    const add = extraG * 50 + extraT * decor.cp;

    const decorPrice = decor.base + add;
    const decorStandard = Math.round((decorPrice * decor.std) / decor.base);
    const total = plan.price + decorPrice;
    const save = decorStandard - decorPrice + (plan.std - plan.price);

    return { planPrice: plan.price, decorPrice, total, save };
  }, [planIdx, decorIdx, guests]);

  return (
    <div className="mx-auto max-w-4xl border border-gold/40">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* ---- Inputs ---- */}
        <div className="space-y-8 p-8 sm:p-10">
          <fieldset>
            <legend className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-gold">
              Planning package
            </legend>
            <div className="mt-4 grid grid-cols-1 gap-3">
              {PLANS.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  aria-pressed={planIdx === i}
                  onClick={() => setPlanIdx(i)}
                  className={`flex items-center justify-between border px-5 py-4 text-left transition-colors ${
                    planIdx === i
                      ? "border-gold bg-gold/10"
                      : "border-line hover:border-gold/50"
                  }`}
                >
                  <span className="font-serif text-lg font-light text-cream">
                    {p.name}
                  </span>
                  <span className="font-sans text-sm text-gold">
                    {fmt(p.price)}
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-gold">
              Décor collection
            </legend>
            <div className="mt-4 grid grid-cols-1 gap-3">
              {DECORS.map((d, i) => (
                <button
                  key={d.name}
                  type="button"
                  aria-pressed={decorIdx === i}
                  onClick={() => setDecorIdx(i)}
                  className={`flex items-center justify-between border px-5 py-4 text-left transition-colors ${
                    decorIdx === i
                      ? "border-gold bg-gold/10"
                      : "border-line hover:border-gold/50"
                  }`}
                >
                  <span className="font-serif text-lg font-light text-cream">
                    {d.name}
                  </span>
                  <span className="font-sans text-sm text-gold">
                    from {fmt(d.base)}
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="guests"
              className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-gold"
            >
              Number of guests
            </label>
            <input
              id="guests"
              type="number"
              min={100}
              step={10}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              onBlur={() =>
                setGuests((g) =>
                  Number.isFinite(g) && g >= 100 ? Math.round(g) : 100,
                )
              }
              className="mt-3 w-full border border-line bg-ink px-4 py-3 font-sans text-base font-light text-cream outline-none transition-colors focus:border-gold"
            />
            <p className="mt-2 font-sans text-xs font-light text-muted">
              Minimum 100 guests.
            </p>
          </div>
        </div>

        {/* ---- Summary ---- */}
        <div className="flex flex-col justify-between bg-ink-alt p-8 sm:p-10">
          <div className="space-y-5">
            <div className="flex items-baseline justify-between border-b border-line pb-4">
              <span className="font-sans text-sm font-light text-muted">
                Planning
              </span>
              <span className="font-serif text-xl font-light text-cream">
                {fmt(result.planPrice)}
              </span>
            </div>
            <div className="flex items-baseline justify-between border-b border-line pb-4">
              <span className="font-sans text-sm font-light text-muted">
                Décor
              </span>
              <span className="font-serif text-xl font-light text-cream">
                {fmt(result.decorPrice)}
              </span>
            </div>
            <div className="flex items-baseline justify-between pt-1">
              <span className="font-sans text-sm uppercase tracking-[0.18em] text-cream">
                Total
              </span>
              <span className="font-serif text-3xl font-light text-gold">
                {fmt(result.total)}
              </span>
            </div>

            {result.save > 0 ? (
              <p className="border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 font-sans text-sm font-light text-emerald-300">
                You save by booking both packages together:{" "}
                <span className="font-normal">{fmt(result.save)}</span>
              </p>
            ) : null}
          </div>

          <div className="mt-8">
            <Link href="/contact" className="btn-gold w-full">
              Request this proposal
            </Link>
            <p className="mt-4 font-sans text-xs font-light text-muted">
              All prices include VAT, transport &amp; logistics included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
