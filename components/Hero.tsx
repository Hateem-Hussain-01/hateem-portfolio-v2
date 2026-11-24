import Image from "next/image";
import { heroChips, profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      {/* blue ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-[#1d4ed8]/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 left-[-15%] h-[380px] w-[380px] rounded-full bg-[#2563eb]/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-lg text-[#c3cede] md:text-xl">
            Hi, I&apos;m {profile.shortName}, building
          </p>
          <h1 className="mt-1 text-5xl leading-[1.05] font-extrabold italic md:text-6xl">
            Digital Experiences.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#8b98ad] md:text-lg">
            Software Engineer and Co-Founder &amp; COO of CodeBettle. I build
            full-stack products and machine-learning systems — and teach Python
            to 2,500+ learners.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#2563eb] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.55)] transition hover:bg-[#1d4fd7]"
            >
              View Projects
            </a>
            <a
              href={`mailto:${profile.email}?subject=Book a call — Hateem Portfolio`}
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* photo in blue glow circle + floating stat chips */}
        <div className="relative mx-auto aspect-square w-full max-w-[420px]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(37,99,235,0.55),rgba(37,99,235,0.12)_55%,transparent_75%)]" />
          <div className="absolute inset-[7%] overflow-hidden rounded-full border border-[rgba(96,140,255,0.25)] shadow-[0_0_80px_rgba(37,99,235,0.35)]">
            <Image
              src="/img/hateem-portrait.jpg"
              alt="Muhammad Hateem Hussain"
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {heroChips.map((chip, i) => (
            <div
              key={chip.label}
              className={[
                "absolute rounded-2xl border border-white/10 bg-[#0a1122]/85 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md",
                i === 0 && "top-[2%] left-[-2%]",
                i === 1 && "top-[10%] right-[-4%]",
                i === 2 && "bottom-[14%] left-[-6%]",
                i === 3 && "right-[-2%] bottom-[2%]",
              ].join(" ")}
            >
              <div className="text-xl font-extrabold text-white">{chip.value}</div>
              <div className="text-[11px] text-[#8b98ad]">{chip.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
