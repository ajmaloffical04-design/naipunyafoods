"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Droplets, Heart, Users } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "No chemicals, no additives. Just pure goodness.",
  },
  {
    icon: Droplets,
    title: "First Crush Purity",
    desc: "Cold-pressed to retain natural nutrients.",
  },
  {
    icon: Heart,
    title: "Healthy & Edible",
    desc: "Safe, nutritious, and good for your family.",
  },
  {
    icon: Users,
    title: "Trusted by Families",
    desc: "Quality you can trust, every day.",
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="why"
      className="py-20 lg:py-28 bg-[#F8F5EF] border-t border-[#E8DDC8]"
      aria-label="Why choose Naipunya Foods"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0"
        >
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="flex items-center flex-1 w-full lg:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-start gap-4 w-full ${i === 0 ? "lg:pr-8" : i === features.length - 1 ? "lg:pl-8" : "lg:px-8"}`}
              >
                <div className="w-12 h-12 rounded-full border border-[#D4A24C]/40 flex items-center justify-center bg-transparent flex-shrink-0">
                  <Icon size={20} className="text-[#1A1A1A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm text-[#0F2744] mb-1 font-semibold leading-tight" style={{ fontFamily: "var(--font-inter)" }}>
                    {title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/60 leading-relaxed font-light">
                    {desc}
                  </p>
                </div>
              </motion.div>
              {i < features.length - 1 && (
                <div className="hidden lg:block h-16 w-[1px] bg-[#E8DDC8]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
