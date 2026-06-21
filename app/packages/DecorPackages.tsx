"use client";

import { useState } from "react";
import AnimatedNumber from "../components/AnimatedNumber";
import { DECORS, clampGuests, decorPricing } from "./pricing";
import { packagesContent } from "./content";

const tiers = packagesContent.decor.tiers;

export default function DecorPackages() {
  const [guests, setGuests] = useState(100);
  const g = clampGuests(guests);

  return (
    <div>
      {/* Guest slider */}
      <div className="mx-auto mb-12 max-w-xl border border-line bg-ink-alt p-6">
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
          className="mt-4 h-1 w-full cursor-pointer appearance-none rounded-full bg-line accent-green"
        />
        <div className="mt-2 flex justify-between font-sans text-[0.65rem] uppercase tracking-[0.16em] text-muted">
          <span>100</span>
          <span>600</span>
        </div>
      </div>

      {/* Tier cards — full spec always open for comparison */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((t) => {
          const d = DECORS.find((x) => x.key === t.key)!;
          const { special, standard } = decorPricing(g, d);
          const popular = "badge" in t && t.badge;
          return (
            <div
              key={t.key}
              className={`svc-card flex h-full flex-col p-8 ${
                popular ? "border-green/70 ring-1 ring-green/30" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-gold">
                  {t.level}
                </span>
                {popular ? (
                  <span className="inline-flex items-center gap-1 bg-green px-2.5 py-1 font-sans text-[0.55rem] uppercase tracking-[0.18em] text-white">
                    ✓ {t.badge}
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
                <span className="font-serif text-2xl font-light text-cream">
                  AED <AnimatedNumber value={special} />
                </span>
              </div>

              <p className="mt-3 font-sans text-xs font-light leading-relaxed text-muted">
                {t.addon}
              </p>

              <div className="mt-6 flex-1 space-y-5 border-t border-line pt-6">
                {t.groups.map((grp) => (
                  <div key={grp.title}>
                    <h4 className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                      {grp.title}
                    </h4>
                    <ul className="mt-2 space-y-1.5">
                      {grp.items.map((it) => (
                        <li
                          key={it}
                          className="flex gap-2.5 font-sans text-sm font-light leading-relaxed text-cream"
                        >
                          <span className="mt-0.5 text-green">✓</span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
