"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const products = [
  { href: "/products#coconut-oil", label: "First Crush Coconut Oil" },
  { href: "/products#deepam-oil", label: "Deepam Oil" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="glass text-[#1A1A1A] mt-auto" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <div className="relative w-40 h-11">
              <Image
                src="/logonaipuniya.png"
                alt="Naipunya Foods"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm leading-relaxed font-light text-[#1A1A1A]/70 max-w-xs">
              Pure by Nature. Premium quality coconut oil and deepam oil, crafted with Kerala&apos;s
              finest coconuts.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl border border-[#D4A24C]/40 flex items-center justify-center text-[#1A1A1A]/70 hover:text-[#0F2744] hover:border-[#0F2744] hover:bg-[#F8F5EF]/50 transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#0F2744] font-semibold text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#1A1A1A]/70 hover:text-[#D4A24C] transition-colors duration-200 hover:pl-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#0F2744] font-semibold text-sm tracking-wide uppercase">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              {products.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#1A1A1A]/70 hover:text-[#D4A24C] transition-colors duration-200 hover:pl-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#0F2744] font-semibold text-sm tracking-wide uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-[#1A1A1A]/70">
                <Mail size={14} className="mt-1 text-[#D4A24C] flex-shrink-0" />
                <span className="flex flex-col gap-0.5">
                  <span>care@naipunyafoods.com</span>
                  <span>info@naipunyafoods.com</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#1A1A1A]/70">
                <Phone size={14} className="mt-0.5 text-[#D4A24C] flex-shrink-0" />
                <span>+91 90741 42300</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#1A1A1A]/70">
                <MapPin size={14} className="mt-1 text-[#D4A24C] flex-shrink-0" />
                <span className="leading-relaxed">
                  NAIPUNYA FOODS<br />
                  Door No : 18/518 (2)<br />
                  Puthur Road, Koppam<br />
                  Palakkad 678001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#D4A24C]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#1A1A1A]/50">
            &copy; {new Date().getFullYear()} Naipunya Foods. All rights reserved.
          </p>
          <p className="text-xs text-[#1A1A1A]/50">
            Pure by Nature • Made with 🤍 in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
}
