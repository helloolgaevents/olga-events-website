"use client";

import { useState } from "react";

export type AccordionItem = {
  title: string;
  body?: string;
  list?: string[];
  note?: string;
};

export default function Accordion({
  items,
  single = false,
  defaultOpen,
}: {
  items: AccordionItem[];
  single?: boolean;
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number[]>(
    defaultOpen != null ? [defaultOpen] : [],
  );

  const toggle = (i: number) =>
    setOpen((prev) =>
      prev.includes(i)
        ? prev.filter((x) => x !== i)
        : single
          ? [i]
          : [...prev, i],
    );

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
            >
              <span
                className={`font-serif text-lg font-light transition-colors ${
                  isOpen ? "text-gold" : "text-cream group-hover:text-gold"
                }`}
              >
                {it.title}
              </span>
              <span
                aria-hidden
                className={`shrink-0 text-2xl font-light leading-none text-gold transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-6">
                  {it.body ? (
                    <p className="font-sans text-base font-light leading-relaxed text-muted">
                      {it.body}
                    </p>
                  ) : null}
                  {it.list ? (
                    <ul className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {it.list.map((li) => (
                        <li
                          key={li}
                          className="flex gap-3 font-sans text-sm font-light text-cream/90"
                        >
                          <span className="text-gold">, </span>
                          {li}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {it.note ? (
                    <p className="mt-4 font-sans text-sm font-light italic text-muted/80">
                      {it.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
