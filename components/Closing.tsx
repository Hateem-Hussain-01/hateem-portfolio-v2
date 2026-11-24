"use client";

import { useState } from "react";
import { faqs, profile } from "@/data/content";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#8b98ad] md:text-base">
          Answers to common questions about my work and process.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.question}
              className="overflow-hidden rounded-2xl border border-[rgba(96,140,255,0.14)] bg-[#0a1122]"
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-white md:text-base">
                  {f.question}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="px-6 pb-6 text-sm leading-relaxed text-[#8b98ad]">
                  {f.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-6 pb-20">
      <div className="relative overflow-hidden rounded-[24px] border border-[rgba(96,140,255,0.2)] bg-[#0a1122] px-8 py-14 md:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(37,99,235,0.35)_55%,rgba(37,99,235,0.12)_80%,transparent)]" />
        <div className="pointer-events-none absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-[#2563eb]/30 blur-[90px]" />
        <div className="relative max-w-xl">
          <h2 className="text-3xl leading-tight font-bold text-white md:text-4xl">
            Your vision, my expertise. Let&apos;s create something{" "}
            <span className="text-[#2e7fff]">exceptional.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#8b98ad] md:text-base">
            Ready to start? Schedule a consultation and let&apos;s shape your
            next big project.
          </p>
          <a
            href={`mailto:${profile.email}?subject=Book a call — Hateem Portfolio`}
            className="mt-7 inline-block rounded-full bg-[#2563eb] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.55)] transition hover:bg-[#1d4fd7]"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const nav = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Work" },
    { href: "#faq", label: "FAQs" },
    { href: "#contact", label: "Contact" },
  ];
  const socials = [
    { href: profile.linkedin, label: "LinkedIn" },
    { href: profile.github, label: "GitHub" },
    { href: profile.leetcode, label: "LeetCode" },
    { href: profile.medium, label: "Medium" },
  ];

  return (
    <footer className="border-t border-white/5 pb-10">
      <div className="mx-auto max-w-6xl px-6 pt-14 text-center">
        <p className="bg-gradient-to-b from-white via-[#c3cede] to-[#3d4a63] bg-clip-text text-[13vw] leading-none font-extrabold tracking-tight text-transparent select-none md:text-[104px]">
          HATEEM HUSSAIN
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#c3cede]">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-[#c3cede] transition hover:border-[#2563eb] hover:text-white"
            >
              {s.label.slice(0, 2)}
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-[#8b98ad] sm:flex-row">
          <p>© 2026 Muhammad Hateem Hussain. All Rights Reserved.</p>
          <p>Privacy Policy&nbsp;&nbsp;·&nbsp;&nbsp;Terms of Service&nbsp;&nbsp;·&nbsp;&nbsp;Cookies&nbsp;&nbsp;·&nbsp;&nbsp;Sitemap</p>
        </div>
      </div>
    </footer>
  );
}
