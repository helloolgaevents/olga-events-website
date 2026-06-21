"use client";

import { useState } from "react";
import { CONTACT } from "./ui";

const BUDGETS = [
  "Under 100,000 AED",
  "100,000 – 200,000 AED",
  "200,000 – 400,000 AED",
  "400,000 – 700,000 AED",
  "700,000+ AED",
  "Not sure yet",
];

const inputClass =
  "w-full border border-line bg-ink px-4 py-3 font-sans text-sm font-light text-cream placeholder:text-muted/60 outline-none transition-colors focus:border-gold";
const labelClass =
  "mb-2 block font-sans text-[0.72rem] uppercase tracking-[0.22em] text-muted";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string)?.trim() || ", ";

    const subject = `Wedding enquiry, ${get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Wedding date: ${get("date")}`,
      `Location / venue: ${get("location")}`,
      `Guest count: ${get("guests")}`,
      `Budget: ${get("budget")}`,
      "",
      "Message:",
      get("message"),
    ].join("\n");

    const mailto = `${CONTACT.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Full name"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className={labelClass}>
            Wedding date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className={`${inputClass} [color-scheme:dark]`}
          />
        </div>
        <div>
          <label htmlFor="guests" className={labelClass}>
            Guest count
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min="1"
            inputMode="numeric"
            placeholder="e.g. 150"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className={labelClass}>
          Location / venue
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Dubai, Abu Dhabi, or a specific venue"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>
          Budget
        </label>
        <select
          id="budget"
          name="budget"
          defaultValue=""
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>
            Select a range
          </option>
          {BUDGETS.map((b) => (
            <option key={b} value={b} className="bg-ink text-cream">
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your day
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Your vision, style, anything you'd like us to know…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button type="submit" className="btn-gold w-full sm:w-auto">
        Send enquiry
      </button>

      {sent ? (
        <p className="font-sans text-sm font-light text-gold" role="status">
          Your email app should now open with your enquiry ready to send. If it
          didn&apos;t, email us directly at{" "}
          <a href={CONTACT.emailHref} className="underline">
            {CONTACT.email}
          </a>
          .
        </p>
      ) : (
        <p className="font-sans text-xs font-light text-muted">
          Submitting opens your email app with the details pre-filled, addressed
          to {CONTACT.email}.
        </p>
      )}
    </form>
  );
}
