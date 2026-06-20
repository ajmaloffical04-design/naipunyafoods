"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="about"
      className="py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F8F5EF 0%, #EDE8DC 100%)" }}
      aria-label="About Naipunya Foods"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Side */}
          <div className="flex flex-col gap-6">
            <motion.p
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[#D4A24C] text-xs font-semibold tracking-[0.3em] uppercase"
            >
              About Naipunya Foods
            </motion.p>

            <motion.h2
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-4xl sm:text-5xl lg:text-5xl text-[#0F2744] leading-[1.15]"
            >
              Pure by Nature.
              <br />
              Trusted by Families.
            </motion.h2>

            {/* Gold accent line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 56, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[2px] bg-[#D4A24C]"
            />

            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col gap-4 text-[#1A1A1A]/65 text-sm leading-relaxed font-light"
            >
              <p>
                Naipunya Foods is dedicated to producing and marketing high-quality food products
                with a focus on purity, trust, and customer satisfaction. We believe in delivering
                products that bring quality, freshness, and value to every home.
              </p>
              <p>
                Currently, our product range includes premium Coconut Oil and Deepam Oil, carefully
                prepared to meet the everyday needs of our customers.
              </p>
              <p>
                At Naipunya Foods, we are committed to expanding our range with more quality
                products that will be launched soon. Our goal is to become a trusted household name
                by combining tradition, quality, and innovation.
              </p>
            </motion.div>

            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 6px 25px rgba(15,39,68,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-[#0F2744] text-white text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-300"
                >
                  Learn More
                  <ArrowRight size={15} />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-[#D4A24C]/20 pointer-events-none" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/coconut-oil.png"
                alt="Natural coconut and coconut oil – pure Kerala goodness"
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/30 via-transparent to-transparent" />
              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl px-5 py-4">
                  <p className="text-[#0F2744] text-xs font-semibold tracking-wide uppercase mb-0.5">
                    Since Tradition
                  </p>
                  <p className="text-[#1A1A1A] text-sm font-medium">
                    Safe, nutritious, and good for your family.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
