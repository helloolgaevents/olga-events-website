import Link from "next/link";
import Reveal from "../components/Reveal";
import { PLANS, fmt } from "./pricing";
import { packagesContent } from "./content";

const { cols, groups, choose } = packagesContent.planningComparison;

type Cell = boolean | string;

function Row({ value, label }: { value: Cell; label: string }) {
  if (value === false) {
    return (
      <li className="flex gap-2.5">
        <span className="mt-0.5 shrink-0 text-faint" aria-hidden>
          ○
        </span>
        <span className="font-sans text-[16px] leading-snug text-faint">
          {label}
        </span>
      </li>
    );
  }
  const detail = typeof value === "string" ? value : null;
  return (
    <li className="flex gap-2.5">
      <span className="mt-0.5 shrink-0 text-green" aria-hidden>
        ✓
      </span>
      <span className="font-sans text-[16px] leading-snug text-muted">
        {label}
        {detail ? <span className="text-faint"> · {detail}</span> : null}
      </span>
    </li>
  );
}

export default function PlanningComparison() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {cols.map((col, ci) => {
        const price = PLANS.find((p) => p.key === col.key);
        const popular = "popular" in col && col.popular;
        return (
          <Reveal key={col.key} delay={ci * 90}>
            <div
              className={`pc relative h-full p-6 sm:p-7 ${popular ? "pc-win" : ""}`}
            >
              {popular ? <span className="badge-win">✓ Most chosen</span> : null}

              <div className="pc-head border-b border-line pb-5">
                <h3 className="font-serif text-[1.9rem] text-cream">
                  {col.name}
                </h3>
                <p className="mt-1 font-sans text-[12px] uppercase tracking-[0.14em] text-gold">
                  {col.subtitle}
                </p>
                {price ? (
                  <div className="mt-4">
                    <span className="font-num text-[15px] text-faint line-through decoration-gold">
                      AED {fmt(price.std)}
                    </span>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="font-num text-sm font-medium text-green-deep">
                        AED
                      </span>
                      <span className="font-num text-[30px] font-semibold leading-none text-green-deep">
                        {fmt(price.price)}
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="mt-6 flex-1 space-y-6">
                {groups.map((g) => (
                  <div key={g.title}>
                    <h4 className="font-sans text-[11.5px] font-medium uppercase tracking-[0.08em] text-gold">
                      {g.title}
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {g.rows.map((r) => (
                        <Row key={r.label} value={r.cells[ci]} label={r.label} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`${popular ? "btn-gold" : "btn-outline"} mt-7 w-full`}
              >
                {choose} {col.name}
              </Link>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
