import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, MessageCircle, Clock, Send, ArrowRight, Loader2 } from "lucide-react";

import buildingDay from "../assets/building-day.jpg";

// Google Sheets integration configuration:
// 1. Create a Google Sheet and open Extensions -> Apps Script.
// 2. Paste the Google Apps Script code (available in implementation_plan.md).
// 3. Deploy it as a Web App: Execute as "Me", Access: "Anyone".
// 4. Paste the generated Web App URL here.
const GOOGLE_SHEET_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz7CaBR3cJ5R6cYZANJ0o_KvzX330w4MYY8uYShFALfLn-iKRkf5NvfNKzbKTxABWK0EQ/exec"; 

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [{ label: "Primary", value: "9504059393", href: "tel:9504059393" }, { label: "Alternate", value: "9119015353", href: "tel:9119015353" }],
    bg: "#7B1113",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: [{ label: "Chat instantly", value: "9504059393", href: "https://wa.me/919504059393" }],
    bg: "#25D366",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [{ label: "Address", value: "Chintamani Park, Near MIT ADT University, Loni Kalbhor, Pune — 412201", href: "#map" }],
    bg: "#C4996A",
  },
  {
    icon: Clock,
    title: "Visiting Hours",
    lines: [{ label: "Mon – Sat", value: "9:00 AM – 7:00 PM", href: null }, { label: "Sunday", value: "10:00 AM – 5:00 PM", href: null }],
    bg: "#1A0A0B",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", gender: "", roomPreference: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!GOOGLE_SHEET_SCRIPT_URL) {
      // Mock successful submission when Google Sheet is not configured
      console.warn("GOOGLE_SHEET_SCRIPT_URL is empty. Simulating database submission.");
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1000);
      return;
    }

    // Submit form data using a CORS-safe no-cors request
    fetch(GOOGLE_SHEET_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(form),
    })
      .then(() => {
        // Under no-cors, the response is opaque, but the request is successfully dispatched and recorded.
        setSubmitted(true);
      })
      .catch((err) => {
        console.error("Google Sheets Submission Error:", err);
        setError("We encountered an issue submitting your form. Please try again or reach out directly via Phone/WhatsApp.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#FAF7F4] pt-20">

      {/* ─── Hero ─── */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${buildingDay})` }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/92 via-[#1A0A0B]/45 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
          <p className="text-[#DCCFC0]/60 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>We're Here for You</p>
          <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(34px, 5vw, 66px)" }}>
            Get in Touch
          </h1>
        </div>
      </section>

      {/* ─── Contact cards ─── */}
      <section className="py-16 bg-[#1A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.08}>
                <div className="rounded-2xl p-6 h-full" style={{ backgroundColor: `${c.bg}22`, border: `1px solid ${c.bg}44` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: c.bg }}>
                    <c.icon size={18} className="text-white" />
                  </div>
                  <div className="text-white font-semibold mb-3" style={{ fontFamily: "Inter, sans-serif" }}>{c.title}</div>
                  {c.lines.map((line) => (
                    <div key={line.label} className="mb-1.5">
                      <div className="text-white/40 text-xs mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{line.label}</div>
                      {line.href ? (
                        <a href={line.href} className="text-[#DCCFC0] text-sm hover:text-white transition-colors leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                          {line.value}
                        </a>
                      ) : (
                        <div className="text-[#DCCFC0] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{line.value}</div>
                      )}
                    </div>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Map (containerized) ─── */}
      <section id="map" className="py-16 bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="relative rounded-3xl p-1 bg-gradient-to-r from-[#7B1113] to-[#C4996A] h-[350px] sm:h-[480px]">
            {/* Map Inner Container */}
            <div className="relative rounded-[20px] overflow-hidden h-full w-full isolate bg-white">
              <iframe
                title="Sahyadri PG Location — MIT ADT University, Loni Kalbhor"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.999!2d73.9383!3d18.4777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaed9a1c0001%3A0x0!2sMIT%20ADT%20University%2C%20Loni%20Kalbhor!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-full"
                style={{ border: 0, filter: "grayscale(10%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
              />
              {/* Overlay card */}
              <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl sm:max-w-xs border border-[#7B1113]/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7B1113]"></span>
                  </span>
                  <span className="text-[#7B1113] text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>Sahyadri PG</span>
                </div>
                <p className="text-[#1A0A0B] text-sm font-medium leading-relaxed mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  Chintamani Park, Near MIT ADT University, Loni Kalbhor
                </p>
                <a
                  href="https://maps.google.com/?q=MIT+ADT+University+Loni+Kalbhor"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#7B1113] text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-[#9b1416] transition-all"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Get Directions <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── Form + Info ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Left panel */}
            <div className="lg:col-span-2">
              <FadeUp>
                <p className="text-[#7B1113] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Enquiry</p>
                <h2 className="text-[#1A0A0B] mb-5" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.2 }}>
                  We'll Call You Back
                </h2>
                <p className="text-[#7A6A5A] mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  Fill in the form and our team will personally reach out to discuss availability, pricing, and arrange a free visit at your convenience.
                </p>

                {/* Quick actions */}
                <div className="space-y-3">
                  <a href="tel:9504059393" className="flex items-center gap-4 bg-[#7B1113] text-white rounded-2xl px-5 py-4 hover:bg-[#9b1416] transition-colors group">
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Call Now</div>
                      <div className="text-white/70 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>9504059393</div>
                    </div>
                    <ArrowRight size={16} className="opacity-60 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://wa.me/919504059393"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 bg-green-600 text-white rounded-2xl px-5 py-4 hover:bg-green-500 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>WhatsApp</div>
                      <div className="text-white/70 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>Chat instantly</div>
                    </div>
                    <ArrowRight size={16} className="opacity-60 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeUp delay={0.1}>
                <div className="bg-white border border-[#7B1113]/8 rounded-3xl p-8 shadow-sm">
                  <h3 className="text-[#1A0A0B] mb-6" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "24px" }}>
                    Send an Enquiry
                  </h3>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                      {error}
                    </div>
                  )}

                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                      <div className="text-6xl mb-5">✅</div>
                      <h4 className="text-[#7B1113] mb-2" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "24px" }}>
                        Enquiry Received!
                      </h4>
                      <p className="text-[#7A6A5A]" style={{ fontFamily: "Inter, sans-serif" }}>
                        Our team will call you back shortly. Thank you for choosing Sahyadri PG!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { key: "name", label: "Full Name", placeholder: "Your full name", type: "text", required: true },
                          { key: "phone", label: "Phone Number", placeholder: "10-digit mobile number", type: "tel", required: true },
                        ].map(({ key, label, placeholder, type, required }) => (
                          <div key={key}>
                            <label className="block text-xs font-semibold text-[#7A6A5A] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>{label} {required && "*"}</label>
                            <input
                              required={required}
                              disabled={loading}
                              type={type}
                              placeholder={placeholder}
                              value={form[key]}
                              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                              className="w-full bg-[#FAF7F4] border border-[#DCCFC0] rounded-xl px-4 py-3 text-sm text-[#1A0A0B] focus:outline-none focus:border-[#7B1113] focus:ring-2 focus:ring-[#7B1113]/10 transition-all placeholder:text-[#7A6A5A]/40 disabled:opacity-60"
                              style={{ fontFamily: "Inter, sans-serif" }}
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#7A6A5A] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>Email Address</label>
                        <input
                          disabled={loading}
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-[#FAF7F4] border border-[#DCCFC0] rounded-xl px-4 py-3 text-sm text-[#1A0A0B] focus:outline-none focus:border-[#7B1113] focus:ring-2 focus:ring-[#7B1113]/10 transition-all placeholder:text-[#7A6A5A]/40 disabled:opacity-60"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { key: "gender", label: "Gender *", options: [{ v: "", l: "Select Gender" }, { v: "male", l: "Male" }, { v: "female", l: "Female" }] },
                          { key: "roomPreference", label: "Room Type *", options: [{ v: "", l: "Select Room" }, { v: "single", l: "Single Sharing" }, { v: "double", l: "Double Sharing" }, { v: "triple", l: "Triple Sharing" }, { v: "four", l: "Four Sharing" }] },
                        ].map(({ key, label, options }) => (
                          <div key={key}>
                            <label className="block text-xs font-semibold text-[#7A6A5A] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>{label}</label>
                            <select
                              required
                              disabled={loading}
                              value={form[key]}
                              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                              className="w-full bg-[#FAF7F4] border border-[#DCCFC0] rounded-xl px-4 py-3 text-sm text-[#1A0A0B] focus:outline-none focus:border-[#7B1113] focus:ring-2 focus:ring-[#7B1113]/10 transition-all disabled:opacity-60"
                              style={{ fontFamily: "Inter, sans-serif" }}
                            >
                              {options.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
                            </select>
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#7A6A5A] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>Message</label>
                        <textarea
                          disabled={loading}
                          rows={4}
                          placeholder="Any specific requirements or questions..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full bg-[#FAF7F4] border border-[#DCCFC0] rounded-xl px-4 py-3 text-sm text-[#1A0A0B] focus:outline-none focus:border-[#7B1113] focus:ring-2 focus:ring-[#7B1113]/10 transition-all placeholder:text-[#7A6A5A]/40 resize-none disabled:opacity-60"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        />
                      </div>

                      <motion.button
                        disabled={loading}
                        type="submit"
                        whileHover={{ scale: loading ? 1 : 1.01 }}
                        whileTap={{ scale: loading ? 1 : 0.99 }}
                        className="w-full bg-[#7B1113] text-white py-4 rounded-2xl font-semibold hover:bg-[#9b1416] transition-colors flex items-center justify-center gap-2 disabled:opacity-80"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {loading ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending Enquiry...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Submit Enquiry
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-xs text-[#7A6A5A]" style={{ fontFamily: "Inter, sans-serif" }}>
                        We'll call you back shortly · No spam, ever
                      </p>
                    </form>
                  )}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
