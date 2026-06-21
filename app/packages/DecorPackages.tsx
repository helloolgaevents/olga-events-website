"use client";

import { useState } from "react";
import AnimatedNumber from "../components/AnimatedNumber";
import { DECORS, clampGuests, decorPricing } from "./pricing";
import { packagesContent } from "./content";

const tiers = packagesContent.decor.tiers;

export default function DecorPackages() {
  const [guests, setGuests] = useState(100);
  const [openKey, setOpenKey] = useState<string | null>("signature");
  const g = clampGuests(guests);

  return (
    <div>
      {/* Guest slider */}
      <div className="mx-auto mb-12 max-w-xl border border-line p-6">
        <div className="flex items-center justify-between">
          <label
            htmlFor="decor-guests"
            className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-gold"
          >
            {packagesContent.decor.sliderLabel}
          </label>
          <span className="font-serif text-2xl font-light text-cream">{g}</span>
        </div>
        <input
          id="decor-guests"
          type="range"
          min={100}
          max={600}
          step={10}
          value={g}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="mt-4 h-1 w-full cursor-pointer appearance-none rounded-full bg-line accent-gold"
        />
        <div className="mt-2 flex justify-between font-sans text-[0.65rem] uppercase tracking-[0.16em] text-muted">
          <span>100</span>
          <span>600</span>
        </div>
      </div>

      {/* Tier cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((t) => {
          const d = DECORS.find((x) => x.key === t.key)!;
          const { special, standard } = decorPricing(g, d);
          const isOpen = openKey === t.key;
          return (
            <div
              key={t.key}
              className={`svc-card flex h-full flex-col p-8 ${
                t.badge ? "border-gold/60" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-gold">
                  {t.level}
                </span>
                {t.badge ? (
                  <span className="bg-gold px-2 py-0.5 font-sans text-[0.55rem] uppercase tracking-[0.18em] text-ink">
                    {t.badge}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-4 font-serif text-3xl font-light text-cream">
                {t.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-sans text-sm font-light text-muted line-through">
                  AED <AnimatedNumber value={standard} />
                </span>
                <span className="font-serif text-2xl font-light text-gold">
                  AED <AnimatedNumber value={special} />
                </span>
              </div>

              <p className="mt-3 font-sans text-xs font-light leading-relaxed text-muted">
                {t.addon}
              </p>

              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenKey(isOpen ? null : t.key)}
                className="mt-6 flex items-center justify-between border-t border-line pt-5 text-left font-sans text-sm tracking-wide text-gold"
              >
                {isOpen ? "Hide details" : "View full spec"}
                <span
                  aria-hidden
                  className={`text-xl leading-none transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-5 pt-5">
                    {t.groups.map((grp) => (
                      <div key={grp.title}>
                        <h4 className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                          {grp.title}
                        </h4>
                        <ul className="mt-2 space-y-1.5">
                          {grp.items.map((it) => (
                            <li
                              key={it}
                              className="flex gap-2.5 font-sans text-sm font-light leading-relaxed text-cream/90"
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
