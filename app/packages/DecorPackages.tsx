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
      <div className="mx-auto mb-12 max-w-xl rounded-2xl border border-line bg-ink-alt p-6">
        <div className="flex items-center justify-between">
          <label
            htmlFor="decor-guests"
            className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold"
          >
            {packagesContent.decor.sliderLabel}
          </label>
          <span className="font-num text-3xl font-semibold text-cream">{g}</span>
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
        <div className="mt-2 flex justify-between font-num text-[11px] text-faint">
          <span>100</span>
          <span>600</span>
        </div>
      </div>

      {/* Tier cards, full spec open, side by side */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((t) => {
          const d = DECORS.find((x) => x.key === t.key)!;
          const { special, standard } = decorPricing(g, d);
          const popular = "badge" in t && t.badge;
          return (
            <div
              key={t.key}
              className={`pc relative h-full p-6 sm:p-7 ${popular ? "pc-win" : ""}`}
            >
              {popular ? (
                <span className="badge-win">✓ {t.badge}</span>
              ) : null}

              <div className="border-b border-line pb-5">
                <p className="font-sans text-[12px] uppercase tracking-[0.14em] text-gold">
                  {t.level}
                </p>
                <h3 className="mt-1 font-serif text-[1.9rem] text-cream">
                  {t.name}
                </h3>
                <div className="mt-3">
                  <span className="font-num text-[15px] text-faint line-through decoration-gold">
                    AED <AnimatedNumber value={standard} />
                  </span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="font-num text-sm font-medium text-green-deep">
                      AED
                    </span>
                    <span className="font-num text-[30px] font-semibold leading-none text-green-deep">
                      <AnimatedNumber value={special} />
                    </span>
                  </div>
                </div>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                  {t.addon}
                </p>
              </div>

              <div className="mt-6 flex-1 space-y-5">
                {t.groups.map((grp) => (
                  <div key={grp.title}>
                    <h4 className="font-sans text-[11.5px] font-medium uppercase tracking-[0.08em] text-gold">
                      {grp.title}
                    </h4>
                    <ul className="mt-2 space-y-1.5">
                      {grp.items.map((it) => (
                        <li
                          key={it}
                          className="flex gap-2.5 font-sans text-[16px] leading-snug text-muted"
                        >
                          <span className="mt-0.5 shrink-0 text-green" aria-hidden>
                            ✓
                          </span>
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
