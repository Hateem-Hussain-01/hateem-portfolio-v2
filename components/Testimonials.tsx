"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/content";

const PER_SLIDE = 3;

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function Testimonials() {
  const slides = chunk(testimonials, PER_SLIDE);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      6000,
    );
    return () => clearInterval(t);
  }, [paused, slides.length]);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  const current = slides[index];

  return (
    <section id="testimonials" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Testimonials
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#8b98ad] md:text-base">
          Feedback from valued collaborators, reflecting my commitment to
          quality and reliability.
        </p>
      </div>

      <div
        className="mt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div key={index} className="carousel-fade grid gap-6 md:grid-cols-3">
          {current.map((t, i) => (
            <article
              key={t.name}
              className={
                "rounded-[20px] border border-[rgba(96,140,255,0.14)] bg-[#0a1122] p-6 " +
                (i > 0 ? "hidden md:block" : "")
              }
            >
              <span className="text-3xl leading-none font-extrabold text-[#2e7fff]/50">
                &ldquo;
              </span>
              <p className="mt-2 text-sm leading-relaxed text-[#c3cede]">
                {t.quote}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/20 text-xs font-bold text-[#7fb0ff]">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-[#8b98ad]">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* controls */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            aria-label="Previous testimonials"
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(96,140,255,0.25)] bg-[#0a1122] text-lg text-white transition hover:border-[#2563eb] hover:bg-[#2563eb]/20"
          >
            ←
          </button>
          <div className="flex items-center gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={
                  "h-2.5 rounded-full transition-all " +
                  (i === index
                    ? "w-8 bg-[#2563eb]"
                    : "w-2.5 bg-white/20 hover:bg-white/40")
                }
              />
            ))}
          </div>
          <button
            aria-label="Next testimonials"
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(96,140,255,0.25)] bg-[#0a1122] text-lg text-white transition hover:border-[#2563eb] hover:bg-[#2563eb]/20"
          >
            →
          </button>
        </div>
        <p className="mt-4 text-center text-xs text-[#8b98ad]">
          {testimonials.length} recommendations · slide {index + 1} of{" "}
          {slides.length}
        </p>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.linkedin.com/in/hateemhussain/details/recommendations/"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-[#2e7fff] hover:underline"
        >
          View all recommendations on LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
