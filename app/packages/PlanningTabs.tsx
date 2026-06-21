"use client";

import { useState } from "react";
import { PLANS, fmtAED } from "./pricing";
import { packagesContent } from "./content";

const tiers = packagesContent.planning.tiers;

export default function PlanningTabs() {
  const [active, setActive] = useState(1); // Classic
  const tier = tiers[active];
  const price = PLANS.find((p) => p.key === tier.key);
  const prevName = active > 0 ? tiers[active - 1].name : null;

  return (
    <div>
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Planning packages"
        className="grid grid-cols-3 gap-2 sm:gap-3"
      >
        {tiers.map((t, i) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`relative flex flex-col items-center gap-1 border px-2 py-4 text-center transition-colors sm:px-4 ${
              active === i
                ? "border-gold bg-gold/10"
                : "border-line hover:border-gold/50"
            }`}
          >
            {t.popular ? (
              <span className="absolute -top-2 right-2 bg-gold px-2 py-0.5 font-sans text-[0.55rem] uppercase tracking-[0.18em] text-ink">
                Popular
              </span>
            ) : null}
            <span className="font-serif text-base font-light leading-tight text-cream sm:text-xl">
              {t.name}
            </span>
            <span className="font-sans text-[0.62rem] uppercase tracking-[0.16em] text-muted sm:text-[0.7rem]">
              {t.subtitle}
            </span>
          </button>
        ))}
      </div>

      {/* Panel */}
      <div key={active} className="panel-fade mt-8 border border-line p-7 sm:p-10">
        <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-serif text-2xl font-light text-cream sm:text-3xl">
              {tier.name}
            </h3>
            <p className="mt-1 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-gold">
              {tier.subtitle}
            </p>
          </div>
          {price ? (
            <div className="flex items-baseline gap-3">
              <span className="font-sans text-base font-light text-muted line-through">
                {fmtAED(price.std)}
              </span>
              <span className="font-serif text-3xl font-light text-gold">
                {fmtAED(price.price)}
              </span>
            </div>
          ) : null}
        </div>

        {tier.adds && prevName ? (
          <div className="mt-6 border border-gold/40 bg-gold/5 px-5 py-4">
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">
              Adds over {prevName}
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {tier.adds.map((a) => (
                <li
                  key={a}
                  className="flex gap-2 font-sans text-sm font-light text-cream"
                >
                  <span className="text-gold">+</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {tier.groups.map((g) => (
            <div key={g.title}>
              <h4 className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-muted">
                {g.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex gap-3 font-sans text-sm font-light leading-relaxed text-cream/90"
                  >
                    <span className="mt-0.5 text-gold">—</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
