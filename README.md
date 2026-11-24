# Hateem Portfolio v2

Muhammad Hateem Hussain — second portfolio, built as an exact copy of the
Leo Carter dark navy + electric blue one-page design, with Hateem's real
content (projects, experience, tech stack, stats) in place of the template's.

- Stack: Next.js 16 + React 19 + Tailwind CSS 4, fully static — no backend,
  no admin panel. All content lives in `data/content.ts`.
- Run locally: `npm install` then `npm run dev`.
- Deploy: import this repo in Vercel (Framework: Next.js) — no env vars needed.

Note: the Testimonials section is a carousel of 18 REAL LinkedIn
recommendations (short verbatim excerpts) — auto-plays every 6s, 3 cards per
slide on desktop, 1 on mobile, with arrows + dots. Full texts are in
`~/workspace/your_files/linkedin-recommendations-hateem.md`. Of his 19 total
LinkedIn recommendations, 1 is not in the carousel: Muhammad Dawood Nawaz Ch
(his text is word-for-word identical to Faizan Saif's, so the quote appears
once). Noor Ul Ain Amir's text was read from LinkedIn on 24 Nov 2026 after
Eman reset his LinkedIn password himself — she is card #18. His real LinkedIn
profile slug is `hateemhussain01` (plain `/in/hateemhussain` 404s).
