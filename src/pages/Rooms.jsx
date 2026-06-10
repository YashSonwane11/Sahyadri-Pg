import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Check, X, Phone, MessageCircle, ChevronLeft, ChevronRight, Zap } from "lucide-react";

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

const roomData = {
  double: {
    label: "Double Sharing",
    price: "₹7,500",
    perPerson: "/month per person",
    availability: "3 Available",
    deposit: "₹15,000",
    notice: "30 Days",
    badge: "Most Popular",
    desc: "Thoughtfully designed with two private study zones, individual wardrobes, and premium fittings. Perfect for students who value personal space without compromise.",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=520&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=520&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=520&fit=crop&auto=format",
    ],
    features: ["Attached Private Bathroom", "Two Study Desks & Chairs", "Individual Wardrobes", "AC Available (optional)", "High-Speed WiFi", "Power Backup", "Daily Room Cleaning", "24/7 Hot Water"],
  },
  triple: {
    label: "Triple Sharing",
    price: "₹5,500",
    perPerson: "/month per person",
    availability: "7 Available",
    deposit: "₹11,000",
    notice: "30 Days",
    badge: "Best Value",
    desc: "Spacious triple rooms with three individual sleeping zones. Great for students on a budget who still want premium amenities and a vibrant community experience.",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=520&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=520&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=520&fit=crop&auto=format",
    ],
    features: ["Shared Bathroom (1:3)", "Three Study Desks & Chairs", "Individual Wardrobes", "Fans & Lighting", "High-Speed WiFi", "Power Backup", "Daily Room Cleaning", "24/7 Hot Water"],
  },
};

const comparisonFeatures = [
  { feature: "Room Size", double: "~250 sq ft", triple: "~320 sq ft" },
  { feature: "Occupancy", double: "2 Students", triple: "3 Students" },
  { feature: "Bathroom", double: "Attached Private", triple: "Shared (1:3)" },
  { feature: "Study Desk", double: true, triple: true },
  { feature: "Individual Wardrobe", double: true, triple: true },
  { feature: "Air Conditioning", double: "Optional (+₹500)", triple: false },
  { feature: "WiFi Included", double: true, triple: true },
  { feature: "Power Backup", double: true, triple: true },
  { feature: "CCTV Coverage", double: true, triple: true },
  { feature: "Monthly Rent", double: "₹7,500", triple: "₹5,500" },
  { feature: "Security Deposit", double: "₹15,000", triple: "₹11,000" },
];

export default function Rooms() {
  const [activeTab, setActiveTab] = useState("double");
  const [imgIdx, setImgIdx] = useState(0);
  const room = roomData[activeTab];

  const switchTab = (tab) => {
    setActiveTab(tab);
    setImgIdx(0);
  };

  return (
    <div className="bg-[#FAF7F4] pt-20">

      {/* ─── Hero ─── */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1600&h=500&fit=crop&auto=format')" }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/92 via-[#1A0A0B]/45 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
          <p className="text-[#DCCFC0]/60 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Accommodation</p>
          <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(34px, 5vw, 66px)" }}>
            Rooms & Pricing
          </h1>
        </div>
      </section>

      {/* ─── Tab + Details ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tabs */}
          <FadeUp className="mb-12">
            <div className="flex gap-2 bg-white border border-[#7B1113]/10 p-1.5 rounded-2xl w-fit shadow-sm">
              {["double", "triple"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => switchTab(tab)}
                  className={`px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === tab ? "bg-[#7B1113] text-white shadow-md" : "text-[#7A6A5A] hover:text-[#1A0A0B]"}`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {roomData[tab].label}
                  {tab === "double" && <span className="ml-2 text-xs bg-[#DCCFC0]/60 text-[#7B1113] px-2 py-0.5 rounded-full">Popular</span>}
                </button>
              ))}
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Image gallery */}
            <FadeUp>
              <div>
                <div className="relative rounded-3xl overflow-hidden h-[380px] mb-3 bg-[#EDE5D8] group">
                  <motion.img
                    key={`${activeTab}-${imgIdx}`}
                    src={room.images[imgIdx]}
                    alt={room.label}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/25 to-transparent" />
                  {/* Nav arrows */}
                  <button
                    onClick={() => setImgIdx((i) => (i - 1 + room.images.length) % room.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={18} className="text-[#1A0A0B]" />
                  </button>
                  <button
                    onClick={() => setImgIdx((i) => (i + 1) % room.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={18} className="text-[#1A0A0B]" />
                  </button>
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-[#7B1113] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full" style={{ fontFamily: "Inter, sans-serif" }}>
                    {room.badge}
                  </div>
                </div>
                {/* Thumbnails */}
                <div className="flex gap-3">
                  {room.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`flex-1 h-20 rounded-xl overflow-hidden border-2 transition-all ${imgIdx === i ? "border-[#7B1113] ring-2 ring-[#7B1113]/20" : "border-transparent"}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Details panel */}
            <FadeUp delay={0.1}>
              <div className="sticky top-24">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-[#1A0A0B]" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "34px" }}>
                    {room.label}
                  </h2>
                  <div className="text-right">
                    <div className="text-[#7B1113]" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "38px", lineHeight: 1 }}>{room.price}</div>
                    <div className="text-[#7A6A5A] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{room.perPerson}</div>
                  </div>
                </div>

                <p className="text-[#7A6A5A] mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>{room.desc}</p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-7">
                  {[
                    { label: "Availability", value: room.availability },
                    { label: "Security Deposit", value: room.deposit },
                    { label: "Notice Period", value: room.notice },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#FAF7F4] border border-[#DCCFC0] rounded-2xl p-4 text-center">
                      <div className="text-[#7B1113] font-semibold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{s.value}</div>
                      <div className="text-[#7A6A5A] text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
                  {room.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-[#1A0A0B]" style={{ fontFamily: "Inter, sans-serif" }}>
                      <div className="w-5 h-5 bg-[#7B1113]/10 rounded-full flex items-center justify-center shrink-0">
                        <Check size={11} className="text-[#7B1113]" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 bg-[#7B1113] text-white text-center py-4 rounded-2xl font-semibold hover:bg-[#9b1416] transition-colors text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Book a Visit
                  </Link>
                  <a
                    href="https://wa.me/919504059393"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-green-600 text-white text-center py-4 rounded-2xl font-semibold hover:bg-green-500 transition-colors text-sm flex items-center justify-center gap-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <MessageCircle size={16} />
                    WhatsApp Enquiry
                  </a>
                </div>

                {/* Urgency nudge */}
                <div className="mt-4 flex items-center gap-2 text-xs text-[#7A6A5A] bg-[#EDE5D8]/50 border border-[#DCCFC0] rounded-xl px-4 py-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  <Zap size={13} className="text-[#C4996A] shrink-0" />
                  High demand — only {activeTab === "double" ? "3" : "7"} rooms left for this semester
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── Comparison Table ─── */}
      <section className="py-24 bg-[#1A0A0B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 42px)" }}>
              Room Comparison
            </h2>
            <p className="text-[#DCCFC0]/50 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>Compare and choose what's right for you</p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-white/8">
              <div className="grid grid-cols-3 bg-[#7B1113] px-6 py-5">
                <div className="text-[#DCCFC0]/70 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>Feature</div>
                <div className="text-white text-sm font-semibold text-center" style={{ fontFamily: "Inter, sans-serif" }}>Double Sharing</div>
                <div className="text-white text-sm font-semibold text-center" style={{ fontFamily: "Inter, sans-serif" }}>Triple Sharing</div>
              </div>
              {comparisonFeatures.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 px-6 py-4 border-b border-white/5 ${i % 2 === 0 ? "bg-white/3" : "bg-transparent"}`}>
                  <div className="text-[#DCCFC0]/60 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{row.feature}</div>
                  <div className="text-center">
                    {typeof row.double === "boolean" ? (
                      row.double
                        ? <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mx-auto"><Check size={12} className="text-green-400" /></div>
                        : <div className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center mx-auto"><X size={12} className="text-red-400" /></div>
                    ) : <span className="text-white text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{row.double}</span>}
                  </div>
                  <div className="text-center">
                    {typeof row.triple === "boolean" ? (
                      row.triple
                        ? <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mx-auto"><Check size={12} className="text-green-400" /></div>
                        : <div className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center mx-auto"><X size={12} className="text-red-400" /></div>
                    ) : <span className="text-white text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{row.triple}</span>}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.15} className="mt-10 text-center">
            <a
              href="tel:9504059393"
              className="inline-flex items-center gap-3 bg-white text-[#7B1113] px-8 py-4 rounded-full font-semibold hover:bg-[#DCCFC0] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Phone size={16} />
              Call for Booking: 9504059393
            </a>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
