"use client";

import { useState } from "react";
import { profile } from "@/data/content";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[rgba(96,140,255,0.18)] bg-[#070d1a]/85 py-2 pl-6 pr-2 shadow-[0_10px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <a href="#top" className="text-sm font-extrabold tracking-[0.18em]">
          HATEEM <span className="text-[#2e7fff]">HUSSAIN</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-[#c3cede] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}?subject=Let's talk — Hateem Portfolio`}
            className="hidden rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(37,99,235,0.55)] transition hover:bg-[#1d4fd7] sm:inline-block"
          >
            Let&apos;s Talk
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(96,140,255,0.2)] text-white md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-[rgba(96,140,255,0.18)] bg-[#070d1a]/95 p-4 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-[#c3cede] hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}?subject=Let's talk — Hateem Portfolio`}
            className="mt-2 block rounded-full bg-[#2563eb] px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  );
}
