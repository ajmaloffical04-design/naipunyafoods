import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Naipunya Foods – our story, mission, and commitment to delivering pure, natural food products trusted by families across Kerala.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page Hero */}
        <section
          className="py-20 lg:py-28 text-center"
          style={{ background: "linear-gradient(135deg, #F8F5EF 0%, #EDE8DC 100%)" }}
        >
          <p className="text-[#D4A24C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#0F2744] mb-4">
            About Naipunya Foods
          </h1>
          <p className="text-[#1A1A1A]/60 text-base font-light max-w-xl mx-auto px-6">
            Rooted in Kerala tradition. Built on purity, trust, and a love for natural goodness.
          </p>
        </section>

        <About />
        <Features />
      </main>
      <Footer />
    </>
  );
}
