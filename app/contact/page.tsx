"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@naipunyafoods.com" },
  { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
  { 
    icon: MapPin, 
    label: "Location", 
    value: (
      <span className="leading-relaxed block mt-1 text-sm font-medium text-[#1A1A1A]">
        NAIPUNYA FOODS<br />
        Door No : 18/518 (2)<br />
        Puthur Road, Koppam<br />
        Palakkad 678001
      </span>
    ) 
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Get In Touch
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#0F2744] mb-4">
            Contact Us
          </h1>
          <p className="text-[#1A1A1A]/60 text-base font-light max-w-xl mx-auto px-6">
            We&apos;d love to hear from you. Reach out with questions, feedback, or orders.
          </p>
        </section>

        <section className="py-24 lg:py-32 bg-[#F8F5EF]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-3xl text-[#0F2744] mb-3">Let&apos;s Talk</h2>
                  <p className="text-[#1A1A1A]/55 text-sm leading-relaxed font-light">
                    Whether you have a question about our products, want to place a bulk order, or
                    just want to say hello — we&apos;re here for you.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <motion.div
                      key={label}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-[#E8DDC8] bg-white/60 hover:border-[#D4A24C]/40 transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#0F2744]/5 border border-[#D4A24C]/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[#D4A24C]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#1A1A1A]/40 uppercase tracking-wider">{label}</p>
                        <div className="text-sm font-medium text-[#1A1A1A]">{value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(15,39,68,0.08)] border border-[#E8DDC8]">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-4 h-full min-h-64 text-center"
                  >
                    <CheckCircle size={48} className="text-[#D4A24C]" />
                    <h3 className="text-2xl text-[#0F2744]">Thank you!</h3>
                    <p className="text-[#1A1A1A]/55 text-sm">
                      We&apos;ve received your message and will get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h3 className="text-xl text-[#0F2744] mb-1">Send us a message</h3>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-[#1A1A1A]/50 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8DDC8] bg-[#F8F5EF] text-[#1A1A1A] text-sm placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#D4A24C] focus:ring-2 focus:ring-[#D4A24C]/20 transition-all duration-200"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-[#1A1A1A]/50 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8DDC8] bg-[#F8F5EF] text-[#1A1A1A] text-sm placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#D4A24C] focus:ring-2 focus:ring-[#D4A24C]/20 transition-all duration-200"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-message" className="text-xs font-semibold text-[#1A1A1A]/50 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us how we can help..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E8DDC8] bg-[#F8F5EF] text-[#1A1A1A] text-sm placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#D4A24C] focus:ring-2 focus:ring-[#D4A24C]/20 transition-all duration-200 resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03, boxShadow: "0 6px 25px rgba(212,162,76,0.35)" }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2 w-full bg-[#0F2744] hover:bg-[#D4A24C] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 text-sm"
                    >
                      <Send size={15} />
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
