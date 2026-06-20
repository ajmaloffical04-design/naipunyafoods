import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Naipunya Foods' premium product range – First Crush Coconut Oil (1L, 500ml, 200ml) and Deepam Oil (900ml, 450ml, 200ml). 100% natural and pure.",
};

export default function ProductsPage() {
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
            Our Products
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#0F2744] mb-4">
            Pure. Natural. Trusted.
          </h1>
          <p className="text-[#1A1A1A]/60 text-base font-light max-w-xl mx-auto px-6">
            From Kerala&apos;s finest coconuts, crafted with traditional methods for modern families.
          </p>
        </section>

        <Products />
        <Features />
      </main>
      <Footer />
    </>
  );
}
