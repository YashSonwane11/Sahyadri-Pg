import React, { useState, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Check, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

import roomDoubleMain from "../assets/2_shr_room_main.jpeg";
import roomDoubleSec from "../assets/2_shr_room.jpeg";
import roomDoubleThird from "../assets/2_shr_room_2.jpeg";
import roomTripleMain from "../assets/3shr_room.jpeg";
import roomSingle from "../assets/single_room.jpeg";
import buildingNight from "../assets/building-night.jpg";
import buildingDay from "../assets/building-day.jpg";
import balcony from "../assets/balcony.png";
import bathroom from "../assets/bathroom.jpeg";

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
  single: {
    label: "1 Sharing Room",
    availability: "2 Available",
    notice: "30 Days",
    badge: "Premium Privacy",
    desc: "Designed for students who prioritize personal focus and maximum privacy. Features a single comfortable bed, dedicated study setup, individual storage space, and an attached balcony.",
    images: [
      { src: roomSingle, alt: "Premium 1 Sharing Room Setup" },
      { src: balcony, alt: "Private Attached Balcony" },
      { src: bathroom, alt: "Clean Modern Attached Washroom" },
    ],
    features: ["Attached Washroom", "Dedicated Study Desk & Chair", "Individual Wardrobe", "Ventilated Balcony", "AC Available (optional)", "High-Speed WiFi", "Daily Room Cleaning", "24/7 Hot Water"],
  },
  double: {
    label: "2 Sharing Room",
    availability: "3 Available",
    notice: "30 Days",
    badge: "Most Popular",
    desc: "Thoughtfully designed with two private study zones, individual wardrobes, and premium fittings. Perfect for students who value personal space without compromise.",
    images: [
      { src: roomDoubleMain, alt: "Premium Double Sharing Bed Setup" },
      { src: roomDoubleSec, alt: "Individual Study Desks and Wardrobes" },
      { src: roomDoubleThird, alt: "Comfortable Double Bedroom Layout" },
      { src: balcony, alt: "Private Attached Balcony" },
      { src: bathroom, alt: "Clean Modern Attached Bathroom" },
    ],
    features: ["Attached Private Bathroom", "Two Study Desks & Chairs", "Individual Wardrobes", "AC Available (optional)", "High-Speed WiFi", "Power Backup", "Daily Room Cleaning", "24/7 Hot Water"],
  },
  triple: {
    label: "3 Sharing Room",
    availability: "7 Available",
    notice: "30 Days",
    badge: "Best Value",
    desc: "Spacious triple rooms with three individual sleeping zones. Great for students on a budget who still want premium amenities and a vibrant community experience.",
    images: [
      { src: roomTripleMain, alt: "Spacious Triple Sharing Bed Setup" },
      { src: roomSingle, alt: "Comfortable Single Bed Setup in Room" },
      { src: balcony, alt: "Attached Balcony with Ventilation" },
      { src: bathroom, alt: "Clean Attached Washroom" },
    ],
    features: ["Shared Bathroom (1:3)", "Three Study Desks & Chairs", "Individual Wardrobes", "Fans & Lighting", "High-Speed WiFi", "Power Backup", "Daily Room Cleaning", "24/7 Hot Water"],
  },
  quad: {
    label: "4 Sharing Room",
    availability: "4 Available",
    notice: "30 Days",
    badge: "Budget Friendly",
    desc: "Cozy and pocket-friendly sharing rooms with dedicated wardrobes and study spaces. Ideal for students who love companionship and collaborative learning.",
    images: [
      { src: roomDoubleSec, alt: "Budget Quad Sharing Room Layout" },
      { src: balcony, alt: "Attached Balcony with Ventilation" },
      { src: bathroom, alt: "Clean Shared Washroom" },
    ],
    features: ["Shared Bathroom (1:4)", "Four Study Desks & Chairs", "Individual Wardrobes", "Fans & Lighting", "High-Speed WiFi", "Power Backup", "Daily Room Cleaning", "24/7 Hot Water"],
  },
};



export default function Rooms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawTab = searchParams.get("tab") || "double";
  const activeTab = roomData[rawTab] ? rawTab : "double";
  const [imgIdx, setImgIdx] = useState(0);
  const room = roomData[activeTab];

  const switchTab = (tab) => {
    setSearchParams({ tab }, { replace: true });
    setImgIdx(0);
  };

  return (
    <div className="bg-[#FAF7F4] pt-20">

      {/* ─── Hero ─── */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${balcony})` }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/92 via-[#1A0A0B]/45 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
          <p className="text-[#DCCFC0]/60 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Accommodation</p>
          <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(34px, 5vw, 66px)" }}>
            Rooms & Accommodations
          </h1>
        </div>
      </section>

      {/* ─── Tab + Details ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tabs */}
          <FadeUp className="mb-12">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 bg-white border border-[#7B1113]/10 p-1.5 rounded-2xl w-full sm:w-fit shadow-sm">
              {["single", "double", "triple", "quad"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => switchTab(tab)}
                  className={`w-full sm:w-auto px-3 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 text-center flex items-center justify-center gap-1 ${
                    activeTab === tab ? "bg-[#7B1113] text-white shadow-md" : "text-[#7A6A5A] hover:text-[#1A0A0B]"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span>{roomData[tab].label}</span>
                  {tab === "double" && (
                    <span className="ml-1 text-[9px] sm:text-xs bg-[#DCCFC0]/60 text-[#7B1113] px-1.5 py-0.5 rounded-full shrink-0">
                      Popular
                    </span>
                  )}
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
                    src={room.images[imgIdx].src}
                    alt={room.images[imgIdx].alt}
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
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Details panel */}
            <FadeUp delay={0.1}>
              <div className="sticky top-24">
                <div className="mb-2">
                  <h2 className="text-[#1A0A0B]" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "34px" }}>
                    {room.label}
                  </h2>
                </div>

                <p className="text-[#7A6A5A] mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>{room.desc}</p>

                {/* Stats row */}
                <div className="mb-7">
                  <div className="bg-[#FAF7F4] border border-[#DCCFC0] rounded-2xl p-4 text-center w-full max-w-[200px]">
                    <div className="text-[#7B1113] font-semibold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{room.notice}</div>
                    <div className="text-[#7A6A5A] text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>Notice Period</div>
                  </div>
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


              </div>
            </FadeUp>
          </div>
        </div>
      </section>


    </div>
  );
}
