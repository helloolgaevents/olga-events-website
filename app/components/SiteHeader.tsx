"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "./ui";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="dark-zone fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1100px] items-center justify-between px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-serif text-xl font-medium tracking-[0.28em] text-cream"
        >
          OLGA EVENTS
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-sans text-[0.82rem] font-light tracking-wide transition-colors hover:text-cream ${
                isActive(l.href) ? "text-gold" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="btn-outline hidden sm:inline-flex">
            Consultation
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center text-cream lg:hidden"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-line/70 bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-[520px] border-t" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-3">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`border-b border-line/50 py-3 font-sans text-sm tracking-wide transition-colors ${
                isActive(l.href) ? "text-gold" : "text-cream/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-gold mt-5 mb-2"
          >
            Book a free consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
