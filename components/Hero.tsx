import Image from "next/image";
import Link from "next/link";
import { Leaf, Droplets, Heart, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative lg:min-h-[100svh] flex flex-col lg:flex-row items-start lg:items-center bg-[#f7f3ef] overflow-hidden">
      
      {/* Desktop Background */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/herodesktop.png"
          alt="Coconut Oil Desktop"
          fill
          priority
          className="object-cover object-[center_top]"
        />
      </div>

      {/* Mobile Image (Normal flow to prevent cropping) */}
      <div className="w-full pt-20 relative z-0 block lg:hidden">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f7f3ef] to-transparent z-10"></div>
        <Image
          src="/mobiehero.png"
          alt="Coconut Oil Mobile"
          width={1080}
          height={1920}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 relative z-10 lg:pt-32 lg:pb-20 hidden lg:block">
        <div className="hero-content max-w-[550px] flex flex-col">
          <span className="tag mb-4">PURE BY NATURE</span>

          <h1
            className="text-[52px] lg:text-[80px] leading-[1.05] text-[#0f2744] mt-0 mb-6 lg:mb-8 font-[500] tracking-[-0.01em]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Art of
            <br />
            First Crush
          </h1>

          <p className="text-[16px] lg:text-[17px] leading-[1.75] text-[#374151] mb-10 font-[400]">
            100% Natural. 100% Edible.
            <br />
            Made from the finest coconuts
            <br />
            for a healthy you.
          </p>

          <div className="features mb-10">
            <div className="feature">
              <div className="icon"><Leaf size={20} strokeWidth={1.5} /></div>
              <p className="feature-label">100%<br/>Natural</p>
            </div>

            <div className="feature">
              <div className="icon"><Droplets size={20} strokeWidth={1.5} /></div>
              <p className="feature-label">First Crush<br/>Purity</p>
            </div>

            <div className="feature">
              <div className="icon"><Heart size={20} strokeWidth={1.5} /></div>
              <p className="feature-label">Healthy &amp;<br/>Edible</p>
            </div>
          </div>

          <Link href="/products" className="shop-btn inline-flex w-fit items-center gap-2">
            Shop Now <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
