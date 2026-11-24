import Image from "next/image";
import {
  aboutParagraphs,
  experience,
  profile,
  techStack,
} from "@/data/content";

const socials = [
  {
    href: profile.github,
    label: "GitHub",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    ),
  },
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

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">About Me</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#8b98ad] md:text-base">
          I build intuitive digital products — scalable, high-performing, and
          made through collaboration.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* photo card */}
        <div className="overflow-hidden rounded-[20px] border border-[rgba(96,140,255,0.14)] bg-[#0a1122]">
          <div className="relative h-72 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.45),rgba(4,6,12,0.9)_75%)]">
            <Image
              src="/img/hateem-portrait.jpg"
              alt="Muhammad Hateem Hussain"
              fill
              className="object-cover object-[50%_25%]"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#8b98ad]">
              SOFTWARE ENGINEER
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-wide text-white">
              MUHAMMAD HATEEM HUSSAIN
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8b98ad]">
              Co-Founder &amp; COO, CodeBettle · B.Sc. Software Engineering,
              UAF · CGPA 3.21
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
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
            <a
              href={`mailto:${profile.email}?subject=Let's connect — Hateem Portfolio`}
              className="mt-6 inline-block rounded-full bg-[#2563eb] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(37,99,235,0.5)] transition hover:bg-[#1d4fd7]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col gap-6">
          <div className="rounded-[20px] border border-[rgba(96,140,255,0.14)] bg-[#0a1122] p-7">
            <h3 className="text-lg font-bold text-white">
              Hi, I&apos;m Muhammad Hateem Hussain.
            </h3>
            {aboutParagraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-3 text-sm leading-relaxed text-[#8b98ad]"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="rounded-[20px] border border-[rgba(96,140,255,0.14)] bg-[#0a1122] p-7">
            <h3 className="text-lg font-bold text-white">My Tech Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[rgba(96,140,255,0.2)] bg-[#2563eb]/10 px-4 py-2 text-sm font-medium text-[#c3cede]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] border border-[rgba(96,140,255,0.14)] bg-[#0a1122] p-7">
            <h3 className="text-lg font-bold text-white">Experience</h3>
            <ul className="mt-4 divide-y divide-white/5">
              {experience.map((e) => (
                <li
                  key={e.org}
                  className="flex flex-col gap-1 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <span className="text-sm font-semibold text-white">
                      {e.role}
                    </span>
                    <span className="text-sm text-[#8b98ad]"> — {e.org}</span>
                  </div>
                  <span className="text-xs whitespace-nowrap text-[#8b98ad]">
                    {e.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
