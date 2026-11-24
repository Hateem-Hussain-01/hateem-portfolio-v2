import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  Process,
  Projects,
  Services,
  StatsStrip,
  Testimonials,
  TrustedBy,
} from "@/components/Sections";
import About from "@/components/About";
import { CtaBanner, Faq, Footer } from "@/components/Closing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#04060c] text-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Projects />
      <Services />
      <StatsStrip />
      <Process />
      <About />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Footer />
    </main>
  );
}
