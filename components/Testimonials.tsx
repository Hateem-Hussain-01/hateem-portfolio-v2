"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/content";

type Testimonial = (typeof testimonials)[number];

const LINKEDIN_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
  </svg>
);

function Card({ t, onOpen }: { t: Testimonial; onOpen: () => void }) {
  return (
    <article
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Read the full review by ${t.name}`}
      className="group flex w-[320px] shrink-0 cursor-pointer flex-col rounded-[20px] border border-[rgba(96,140,255,0.14)] bg-[#0a1122] p-6 transition hover:border-[#2563eb]/60 md:w-[360px]"
    >
      <span className="text-3xl leading-none font-extrabold text-[#2e7fff]/50">
        &ldquo;
      </span>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#c3cede]">
        {t.quote}
      </p>
      <p className="mt-3 text-xs font-semibold text-[#2e7fff] opacity-0 transition group-hover:opacity-100">
        Click to read the full review →
      </p>
      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/20 text-xs font-bold text-[#7fb0ff]">
          {t.initials}
        </span>
        <div>
          <p className="text-sm font-bold text-white">{t.name}</p>
          <p className="text-xs text-[#8b98ad]">{t.role}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [selected, setSelected] = useState<Testimonial | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  // Duplicated list so the right-to-left loop is seamless.
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Testimonials
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#8b98ad] md:text-base">
          Feedback from valued collaborators, reflecting my commitment to
          quality and reliability.
        </p>
      </div>

      <div className="marquee-hover relative mt-12 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#04060c] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#04060c] to-transparent" />
        <div
          className="animate-marquee flex w-max gap-6 py-1"
          style={{ animationPlayState: selected ? "paused" : undefined }}
        >
          {doubled.map((t, i) => (
            <Card
              key={`${t.name}-${i}`}
              t={t}
              onOpen={() => setSelected(t)}
            />
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-[#8b98ad]">
        {testimonials.length} recommendations · click any card to read the
        full review
      </p>

      <div className="mt-8 text-center">
        <a
          href="https://www.linkedin.com/in/hateemhussain01/details/recommendations/"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-[#2e7fff] hover:underline"
        >
          View all recommendations on LinkedIn ↗
        </a>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Full review by ${selected.name}`}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[24px] border border-[rgba(96,140,255,0.25)] bg-[#0a1122] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.6)] md:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/20 text-base font-bold text-[#7fb0ff]">
                  {selected.initials}
                </span>
                <div>
                  <p className="text-lg font-bold text-white">
                    {selected.name}
                  </p>
                  <p className="text-sm text-[#8b98ad]">{selected.role}</p>
                  <p className="mt-0.5 text-xs text-[#8b98ad]">
                    Recommended on {selected.date}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:border-[#2563eb] hover:bg-[#2563eb]/20"
              >
                ×
              </button>
            </div>

            <span className="mt-6 block text-4xl leading-none font-extrabold text-[#2e7fff]/50">
              &ldquo;
            </span>
            {selected.fullQuote.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="mt-3 text-base leading-relaxed text-[#c3cede]"
              >
                {para}
              </p>
            ))}

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={selected.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(37,99,235,0.5)] transition hover:bg-[#1d4fd7]"
              >
                {LINKEDIN_ICON} View {selected.name.split(" ")[0]} on
                LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/in/hateemhussain01/details/recommendations/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[#2e7fff] hover:underline"
              >
                All recommendations ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
