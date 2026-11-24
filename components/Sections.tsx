import Image from "next/image";
import {
  processSteps,
  profile,
  projects,
  services,
  stats,
  testimonials,
  trustedBy,
} from "@/data/content";

function SectionHeading({
  sub,
  title,
}: {
  sub: string;
  title: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-[#8b98ad] md:text-base">
        {sub}
      </p>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="border-y border-white/5 py-10">
      <p className="text-center text-xs font-semibold tracking-[0.25em] text-[#8b98ad] uppercase">
        Trusted By
      </p>
      <div className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6">
        {trustedBy.map((name) => (
          <span
            key={name}
            className="text-lg font-bold tracking-wide text-[#aeb9cc] transition hover:text-white md:text-xl"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
      <SectionHeading
        sub="A curated mix of projects — scalable, fast, and driven by real-world needs. Design, code, and creativity."
        title="Recent Projects"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-[20px] border border-[rgba(96,140,255,0.14)] bg-[#0a1122] transition hover:border-[rgba(96,140,255,0.35)]"
          >
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.4),rgba(4,6,12,0.9)_70%)] px-8">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
              <Image
                src={p.svg}
                alt={p.title}
                width={420}
                height={160}
                className="relative max-h-40 w-auto max-w-full object-contain transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a1122] to-transparent" />
            </div>
            <div className="p-6">
              <span className="inline-block rounded-full border border-[rgba(96,140,255,0.25)] bg-[#2563eb]/15 px-3 py-1 text-xs font-semibold text-[#7fb0ff]">
                {p.tag}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8b98ad]">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-[#c3cede]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-5 text-sm font-semibold">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#2e7fff] hover:underline"
                  >
                    Live ↗
                  </a>
                )}
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#c3cede] hover:text-white hover:underline"
                >
                  Code ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  const icons: Record<string, React.ReactNode> = {
    cap: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2e7fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 9L12 4 2 9l10 5 10-5z" />
        <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
        <path d="M22 9v5" />
      </svg>
    ),
    chip: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2e7fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <rect x="10" y="10" width="4" height="4" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </svg>
    ),
    code: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2e7fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6L3 12l5 6M16 6l5 6-5 6" />
      </svg>
    ),
  };

  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
      <SectionHeading
        sub="From interfaces to full-stack, I build modern products that are scalable and user-friendly."
        title="Services"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="rounded-[20px] border border-[rgba(96,140,255,0.14)] bg-[#0a1122] p-7 transition hover:border-[rgba(96,140,255,0.35)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(96,140,255,0.2)] bg-[#2563eb]/15">
              {icons[s.icon]}
            </div>
            <h3 className="mt-6 text-lg font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#8b98ad]">
              {s.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const top = testimonials.slice(0, 3);
  const bottom = testimonials.slice(3);

  const card = (t: (typeof testimonials)[number]) => (
    <article
      key={t.name}
      className={
        t.featured
          ? "rounded-[20px] border border-[#3b82f6] bg-gradient-to-b from-[#2563eb] to-[#1d4ed8] p-6 shadow-[0_0_40px_rgba(37,99,235,0.35)]"
          : "rounded-[20px] border border-[rgba(96,140,255,0.14)] bg-[#0a1122] p-6"
      }
    >
      <span
        className={
          t.featured
            ? "text-3xl leading-none font-extrabold text-white/60"
            : "text-3xl leading-none font-extrabold text-[#2e7fff]/50"
        }
      >
        &ldquo;
      </span>
      <p
        className={
          t.featured
            ? "mt-2 text-sm leading-relaxed text-white"
            : "mt-2 text-sm leading-relaxed text-[#c3cede]"
        }
      >
        {t.quote}
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span
          className={
            t.featured
              ? "flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white"
              : "flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb]/20 text-xs font-bold text-[#7fb0ff]"
          }
        >
          {t.initials}
        </span>
        <div>
          <p className="text-sm font-bold text-white">{t.name}</p>
          <p
            className={
              t.featured ? "text-xs text-blue-100" : "text-xs text-[#8b98ad]"
            }
          >
            {t.role}
          </p>
        </div>
      </div>
    </article>
  );

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
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {top.map(card)}
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bottom.map(card)}
      </div>
    </section>
  );
}

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-4">
      <div className="grid grid-cols-2 gap-6 rounded-[20px] border border-[rgba(96,140,255,0.14)] bg-[#0a1122] px-6 py-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold text-white md:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-[#8b98ad] md:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        sub="A clear workflow drives each project — from strategy and design to development and post-launch support."
        title="Process"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {processSteps.map((step) => (
          <article
            key={step.number}
            className="relative overflow-hidden rounded-[20px] border border-[rgba(96,140,255,0.14)] bg-[#0a1122] p-7 pt-10"
          >
            <div className="pointer-events-none absolute -top-6 -left-3 bg-gradient-to-b from-[#2e7fff] to-[#1d4ed8] bg-clip-text text-[120px] leading-none font-extrabold text-transparent opacity-90 select-none">
              {step.number}
            </div>
            <div className="relative mt-24">
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8b98ad]">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-5 rounded-[20px] border border-[rgba(96,140,255,0.14)] bg-[#0a1122] px-8 py-6 sm:flex-row">
        <p className="text-center text-base font-semibold text-white sm:text-left">
          Build reliable, user-focused products with expert code.
        </p>
        <a
          href={`mailto:${profile.email}?subject=Book a call — Hateem Portfolio`}
          className="shrink-0 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(37,99,235,0.5)] transition hover:bg-[#1d4fd7]"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
