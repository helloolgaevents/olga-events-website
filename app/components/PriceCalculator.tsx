"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import AnimatedNumber from "./AnimatedNumber";
import {
  PLANS,
  DECORS,
  clampGuests,
  decorPricing,
  fmtAED,
} from "../packages/pricing";

export default function PriceCalculator() {
  const [planIdx, setPlanIdx] = useState(1); // Classic
  const [decorIdx, setDecorIdx] = useState(1); // Signature
  const [guests, setGuests] = useState(100);

  const result = useMemo(() => {
    const plan = PLANS[planIdx];
    const decor = DECORS[decorIdx];
    const { special, standard } = decorPricing(guests, decor);
    const total = plan.price + special;
    const save = standard - special + (plan.std - plan.price);
    return { planPrice: plan.price, decorPrice: special, total, save };
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
                  key={p.key}
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
                    {fmtAED(p.price)}
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
                  key={d.key}
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
                    from {fmtAED(d.base)}
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="calc-guests"
              className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-gold"
            >
              Number of guests
            </label>
            <div className="mt-4 flex items-center gap-4">
              <input
                id="calc-guests"
                type="range"
                min={100}
                max={600}
                step={10}
                value={clampGuests(guests)}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="h-1 w-full cursor-pointer appearance-none rounded-full bg-line accent-gold"
              />
              <span className="min-w-[3.5rem] text-right font-serif text-xl font-light text-cream">
                {clampGuests(guests)}
              </span>
            </div>
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
                AED <AnimatedNumber value={result.planPrice} />
              </span>
            </div>
            <div className="flex items-baseline justify-between border-b border-line pb-4">
              <span className="font-sans text-sm font-light text-muted">
                Décor
              </span>
              <span className="font-serif text-xl font-light text-cream">
                AED <AnimatedNumber value={result.decorPrice} />
              </span>
            </div>
            <div className="flex items-baseline justify-between pt-1">
              <span className="font-sans text-sm uppercase tracking-[0.18em] text-cream">
                Total
              </span>
              <span className="font-serif text-3xl font-light text-gold">
                AED <AnimatedNumber value={result.total} />
              </span>
            </div>

            {result.save > 0 ? (
              <p className="border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 font-sans text-sm font-light text-emerald-300">
                You save by booking both packages together:{" "}
                <span className="font-normal">
                  AED <AnimatedNumber value={result.save} />
                </span>
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
