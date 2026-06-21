import Link from "next/link";
import { FOOTER_NAV, CONTACT, INSTAGRAM, InstagramIcon } from "./ui";

export default function SiteFooter() {
  return (
    <footer className="dark-zone border-t border-line bg-ink-alt">
      <div className="mx-auto w-full max-w-[1500px] px-[22px] sm:px-14 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link
              href="/"
              className="font-serif text-lg tracking-[0.28em] text-cream"
            >
              OLGA EVENTS
            </Link>
            <p className="mt-4 font-sans text-base font-light leading-relaxed text-muted">
              Luxury Wedding Planning · Dubai & all Emirates
            </p>
            <a
              href={INSTAGRAM.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Olga Events on Instagram (${INSTAGRAM.handle})`}
              className="mt-5 inline-flex items-center gap-2 font-sans text-base font-light text-muted transition-colors hover:text-gold"
            >
              <InstagramIcon className="h-5 w-5" />
              {INSTAGRAM.handle}
            </a>
          </div>

          {FOOTER_NAV.map((col) => (
            <div key={col.heading}>
              <p className="font-sans text-[0.72rem] uppercase tracking-[0.28em] text-gold">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-sans text-base font-light text-muted transition-colors hover:text-cream"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-8 text-center font-sans text-base font-light text-muted sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:text-left">
          <a
            href={CONTACT.whatsappHref}
            className="transition-colors hover:text-gold"
          >
            WhatsApp {CONTACT.whatsapp}
          </a>
          <span className="hidden text-line sm:inline">·</span>
          <a
            href={CONTACT.phoneHref}
            className="transition-colors hover:text-gold"
          >
            Call {CONTACT.phone}
          </a>
          <span className="hidden text-line sm:inline">·</span>
          <a
            href={CONTACT.emailHref}
            className="transition-colors hover:text-gold"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
