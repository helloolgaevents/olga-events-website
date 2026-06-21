// Single source of truth for package pricing, shared by the calculator,
// the décor cards and the planning tabs.

export type Plan = { key: string; name: string; price: number; std: number };
export type Decor = {
  key: string;
  name: string;
  base: number;
  std: number;
  cp: number; // per-extra-table component (added on top of guest scaling)
};

export const PLANS: Plan[] = [
  { key: "essential", name: "Essential", price: 6650, std: 7000 },
  { key: "classic", name: "Classic", price: 9500, std: 10000 },
  { key: "luxury", name: "Luxury Planning", price: 17100, std: 18000 },
];

export const DECORS: Decor[] = [
  { key: "bloom", name: "Bloom", base: 39050, std: 47000, cp: 350 },
  { key: "signature", name: "Signature", base: 46930, std: 57000, cp: 800 },
  { key: "elegance", name: "Elegance", base: 66000, std: 80000, cp: 1500 },
];

export function clampGuests(g: number): number {
  return Number.isFinite(g) && g >= 100 ? Math.round(g) : 100;
}

// Décor price for a given guest count.
// Each extra table of 10 guests adds (10 * 50) + cp  →  the published add-on.
export function decorPricing(guests: number, d: Decor) {
  const g = clampGuests(guests);
  const extraG = Math.max(0, g - 100);
  const extraT = Math.max(0, Math.ceil(g / 10) - 10);
  const add = extraG * 50 + extraT * d.cp;
  const special = d.base + add;
  const standard = Math.round((special * d.std) / d.base);
  return { special, standard, add };
}

export const fmt = (n: number) => new Intl.NumberFormat("en-US").format(n);
export const fmtAED = (n: number) => `AED ${fmt(n)}`;
