import Link from "next/link";
import Reveal from "../components/Reveal";
import { PLANS, fmtAED } from "./pricing";
import { packagesContent } from "./content";

const { cols, groups, choose } = packagesContent.planningComparison;

type Cell = boolean | string;

function Row({ value, label }: { value: Cell; label: string }) {
  if (value === false) {
    return (
      <li className="flex gap-2.5">
        <span className="mt-0.5 shrink-0 text-muted/40">—</span>
        <span className="font-sans text-sm font-light text-muted/50">
          {label}
        </span>
      </li>
    );
  }
  const detail = typeof value === "string" ? value : null;
  return (
    <li className="flex gap-2.5">
      <span className="mt-0.5 shrink-0 text-green">✓</span>
      <span className="font-sans text-sm font-light text-cream">
        {label}
        {detail ? <span className="text-muted"> · {detail}</span> : null}
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
              className={`svc-card flex h-full flex-col p-8 ${
                popular ? "border-green/70 ring-1 ring-green/30" : ""
              }`}
            >
              {popular ? (
                <span className="mb-4 inline-flex w-fit items-center gap-1.5 bg-green px-3 py-1 font-sans text-[0.6rem] uppercase tracking-[0.2em] text-white">
                  ✓ Most chosen
                </span>
              ) : null}

              <h3 className="font-serif text-2xl font-light text-cream">
                {col.name}
              </h3>
              <p className="mt-1 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-gold">
                {col.subtitle}
              </p>

              {price ? (
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-sans text-sm font-light text-muted line-through">
                    {fmtAED(price.std)}
                  </span>
                  <span className="font-serif text-3xl font-light text-cream">
                    {fmtAED(price.price)}
                  </span>
                </div>
              ) : null}

              <div className="mt-7 flex-1 space-y-6">
                {groups.map((g) => (
                  <div key={g.title}>
                    <h4 className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-muted">
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
                className={`${popular ? "btn-gold" : "btn-outline"} mt-8 w-full`}
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
