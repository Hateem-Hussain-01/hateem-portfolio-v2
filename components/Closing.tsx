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
    {
      href: profile.linkedin,
      label: "LinkedIn",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
        </svg>
      ),
    },
    {
      href: profile.github,
      label: "GitHub",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      href: profile.leetcode,
      label: "LeetCode",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
    },
    {
      href: profile.medium,
      label: "Medium",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z" />
        </svg>
      ),
    },
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#c3cede] transition hover:border-[#2563eb] hover:text-white"
            >
              {s.svg}
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
