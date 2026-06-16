import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Wifi, Shield, UtensilsCrossed, Car, Sparkles, Droplets,
  Star, ChevronLeft, ChevronRight, Phone, MessageCircle, ArrowRight, Check, Play
} from "lucide-react";

import roomSingle from "../assets/single_room.jpeg";
import roomDouble from "../assets/2_shr_room_main.jpeg";
import roomTriple from "../assets/3shr_room.jpeg";
import roomQuad from "../assets/2_shr_room.jpeg";
import buildingNight from "../assets/building-night.jpg";
import buildingDay from "../assets/building-day.jpg";
import balcony from "../assets/balcony.png";
import pgVideo from "../assets/pg_video.mp4";
import brochureBoys from "../assets/brochure-boys.jpg";
import brochureGirls from "../assets/brochure-girls.jpg";

/* ── animated counter ── */
function AnimatedCounter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { value: 500, suffix: "+", label: "Happy Students", icon: "🎓" },
  { value: 100, suffix: "+", label: "Furnished Rooms", icon: "🛏️" },
  { value: 24, suffix: "/7", label: "Security", icon: "🔒" },
  { value: 4.8, suffix: "★", label: "Avg Rating", icon: "⭐" },
];

const features = [
  { icon: Wifi, title: "High-Speed WiFi", desc: "100 Mbps dedicated fiber — lag-free streaming and online classes." },
  { icon: Shield, title: "CCTV Security", desc: "32-camera HD surveillance with trained security around the clock." },
  { icon: UtensilsCrossed, title: "Healthy Mess Food", desc: "Nutritious home-style meals prepared daily by experienced cooks." },
  { icon: Car, title: "Free Parking", desc: "Covered two-wheeler parking and dedicated bicycle stand." },
  { icon: Sparkles, title: "Daily Cleaning", desc: "Professional housekeeping maintains premium hygiene daily." },
  { icon: Droplets, title: "24/7 Hot Water", desc: "Solar geysers with electric backup — always hot, always ready." },
];

const rooms = [
  {
    type: "Single Sharing",
    image: roomSingle,
    features: ["Attached Bathroom", "Private Balcony", "Study Table", "Wardrobe"],
    badge: "Premium Privacy", badgeColor: "#2A4858",
  },
  {
    type: "Double Sharing",
    image: roomDouble,
    features: ["Attached Bathroom", "AC Available", "Study Table", "Wardrobe"],
    badge: "Most Popular", badgeColor: "#7B1113",
  },
  {
    type: "Triple Sharing",
    image: roomTriple,
    features: ["Shared Bathroom", "Study Table", "Wardrobe", "Power Backup"],
    badge: "Best Value", badgeColor: "#C4996A",
  },
  {
    type: "Quad Sharing",
    image: roomQuad,
    features: ["Shared Bathroom", "Study Table", "Wardrobe", "Daily Cleaning"],
    badge: "Budget Friendly", badgeColor: "#4A3E3D",
  },
];

const testimonials = [
  { name: "Priya Sharma", college: "B.Tech CSE — MIT ADT", rating: 5, review: "Sahyadri PG is the best decision I made in college. The food is amazing, security is top-notch, and the staff feels like family. Highly recommended!", initials: "PS", color: "linear-gradient(135deg, #7B1113, #a21a1d)" },
  { name: "Rahul Deshmukh", college: "MBA — MIT ADT", rating: 5, review: "Clean rooms, great food, excellent WiFi. Everything a student needs. The location is perfect — just 5 minutes from campus.", initials: "RD", color: "linear-gradient(135deg, #C4996A, #dfb485)" },
  { name: "Sneha Patil", college: "B.Tech Aerospace — MIT ADT", rating: 5, review: "I've stayed here 2 years with zero complaints. The warden is incredibly supportive and the premises always feel safe and welcoming.", initials: "SP", color: "linear-gradient(135deg, #2A4858, #406f87)" },
  { name: "Arjun Kulkarni", college: "M.Tech — MIT ADT", rating: 4, review: "Exceptional value for money. Best amenities at a very reasonable price. Power backup is a lifesaver during load-shedding months.", initials: "AK", color: "linear-gradient(135deg, #4A3E3D, #705f5d)" },
];

/* ── fade-up wrapper ── */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── room card component ── */
function RoomCard({ room }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#7B1113]/8 hover:shadow-2xl hover:shadow-[#7B1113]/8 transition-all duration-500 group">
      <div className="relative h-72 overflow-hidden">
        <img src={room.image} alt={room.type} className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/50 to-transparent" />
        <div className="absolute top-4 left-4 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full" style={{ backgroundColor: room.badgeColor, fontFamily: "Inter, sans-serif" }}>
          {room.badge}
        </div>
      </div>
      <div className="p-7">
        <h3 className="text-[#1A0A0B] mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "22px" }}>{room.type}</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {room.features.map((f) => (
            <span key={f} className="flex items-center gap-1.5 bg-[#FAF7F4] text-[#7A6A5A] text-xs px-3.5 py-1.5 rounded-full border border-[#DCCFC0]" style={{ fontFamily: "Inter, sans-serif" }}>
              <Check size={10} className="text-[#7B1113]" /> {f}
            </span>
          ))}
        </div>
        <Link to="/rooms" className="block w-full text-center bg-[#1A0A0B] hover:bg-[#7B1113] text-white py-3.5 rounded-2xl font-medium text-sm transition-colors duration-300" style={{ fontFamily: "Inter, sans-serif" }}>
          View Details & Book Visit
        </Link>
      </div>
    </div>
  );
}

export function HomePage() {
  const [slide, setSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const next = () => setSlide((c) => (c + 1) % testimonials.length);
  const prev = () => setSlide((c) => (c - 1 + testimonials.length) % testimonials.length);

  // Auto-advance testimonials
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  // Auto-advance features on mobile
  useEffect(() => {
    const t = setInterval(() => {
      setActiveFeatureIndex((c) => (c + 1) % features.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#FAF7F4]">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen lg:h-screen flex flex-col overflow-hidden">
        {/* Background image with Ken Burns */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${buildingNight})` }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0A0B]/90 via-[#1A0A0B]/60 to-[#1A0A0B]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/60 via-transparent to-transparent" />

        {/* Extra top fade so navbar text stays readable */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#1A0A0B]/50 to-transparent" />

        {/* Spacer to push content below the fixed navbar */}
        <div className="h-20 lg:h-24 shrink-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 pb-16 lg:pt-10 lg:pb-12 z-10 flex-grow flex items-start">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center w-full">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 xl:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#7B1113]/30 border border-[#7B1113]/50 text-[#DCCFC0] px-3.5 py-1.5 rounded-full text-[11px] mb-6 uppercase tracking-wider backdrop-blur-sm max-w-full overflow-hidden"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shrink-0" />
                <span className="truncate">Near MIT ADT University · Loni Kalbhor, Pune</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-white mb-5"
                style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(36px, 5.5vw, 80px)", lineHeight: 1.08 }}
              >
                Premium Student
                <br />
                <span style={{ color: "#DCCFC0" }}>Living</span> Redefined
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-white/75 mb-8 max-w-md"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.7 }}
              >
                Safe, comfortable & affordable PG with premium amenities at affordable prices. Designed for academic excellence and high-quality student living.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Link
                  to="/rooms"
                  className="bg-[#7B1113] hover:bg-[#9b1416] text-white px-9 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#7B1113]/40"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Explore Rooms
                </Link>
                <button
                  onClick={() => setShowVideo(true)}
                  className="flex items-center gap-3 bg-white/12 hover:bg-white/22 text-white border border-white/30 px-7 py-4 rounded-full font-medium transition-all backdrop-blur-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                    <Play size={14} className="text-[#7B1113] ml-0.5" fill="#7B1113" />
                  </span>
                  Watch PG Tour
                </button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-2"
              >
                {[
                  { label: "CCTV Security", icon: "🔒" },
                  { label: "Free WiFi", icon: "📶" },
                  { label: "Healthy Food", icon: "🥗" },
                  { label: "Power Backup", icon: "⚡" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white/85 px-3 py-1.5 rounded-full text-xs"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <span className="text-[11px]">{badge.icon}</span>
                    {badge.label}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Room Preview Cards */}
            <div className="lg:col-span-5 xl:col-span-4 w-full flex justify-center lg:justify-end lg:pr-12 xl:pr-20">
              <motion.div
                className="flex flex-col sm:flex-row lg:flex-col gap-4 items-stretch sm:items-center lg:items-end justify-center w-full max-w-md lg:max-w-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
              >
                {/* Room card */}
                <div className="bg-white/12 backdrop-blur-lg border border-white/25 rounded-2xl p-5 w-full sm:w-56 lg:w-52 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="text-[#DCCFC0] text-[10px] uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
                      Double Sharing
                    </div>
                    <div className="text-white mb-2.5" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "24px" }}>
                      Fully Furnished
                    </div>
                  </div>
                  <div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#7B1113] rounded-full w-3/4" />
                    </div>
                    <div className="text-white/40 text-[10px] mt-1" style={{ fontFamily: "Inter, sans-serif" }}>75% occupied</div>
                  </div>
                </div>

                {/* Rating pill */}
                <div className="bg-white/12 backdrop-blur-lg border border-white/25 rounded-xl px-4 py-2.5 flex items-center gap-2.5 w-full sm:w-auto self-stretch sm:self-auto justify-center sm:justify-start">
                  <span className="text-lg">⭐</span>
                  <div>
                    <div className="text-white font-bold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>4.8 / 5.0</div>
                    <div className="text-white/50 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>432 reviews</div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-px h-14 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <span className="text-white/40 text-[10px] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Scroll</span>
        </motion.div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="bg-[#7B1113] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #DCCFC0 0%, transparent 60%), radial-gradient(circle at 80% 50%, #C4996A 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <div
                    className="text-white mb-1"
                    style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)" }}
                  >
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[#DCCFC0]/75 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{s.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-28 bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-18">
            <p className="text-[#7B1113] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Why Students Choose Us</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 52px)", color: "#1A0A0B", lineHeight: 1.15 }}>
              Everything You Need to<br /><span className="text-[#7B1113]">Thrive in College</span>
            </h2>
          </FadeUp>

          {/* Desktop/Tablet Grid View */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.07}>
                <div className="bg-white rounded-3xl p-8 border border-[#7B1113]/8 hover:shadow-2xl hover:shadow-[#7B1113]/6 hover:-translate-y-2 transition-all duration-400 group h-full">
                  <div className="w-14 h-14 bg-[#7B1113]/8 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#7B1113] transition-colors duration-300">
                    <f.icon size={24} className="text-[#7B1113] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-[#1A0A0B] mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "19px" }}>{f.title}</h3>
                  <p className="text-[#7A6A5A] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Mobile Swipe Slider View */}
          <div className="block sm:hidden relative w-full overflow-hidden min-h-[290px] px-1 pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeatureIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  const swipeThreshold = 50;
                  if (info.offset.x < -swipeThreshold) {
                    setActiveFeatureIndex((prev) => (prev + 1) % features.length);
                  } else if (info.offset.x > swipeThreshold) {
                    setActiveFeatureIndex((prev) => (prev - 1 + features.length) % features.length);
                  }
                }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 border border-[#7B1113]/8 shadow-md flex flex-col justify-between h-[230px] cursor-grab active:cursor-grabbing select-none"
              >
                <div>
                  <div className="w-14 h-14 bg-[#7B1113]/8 rounded-2xl flex items-center justify-center mb-5">
                    {(() => {
                      const IconComponent = features[activeFeatureIndex].icon;
                      return <IconComponent size={24} className="text-[#7B1113]" />;
                    })()}
                  </div>
                  <h3 className="text-[#1A0A0B] mb-2" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "20px" }}>
                    {features[activeFeatureIndex].title}
                  </h3>
                  <p className="text-[#7A6A5A] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {features[activeFeatureIndex].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide indicator dots */}
            <div className="flex justify-center gap-2 mt-5">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeatureIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeFeatureIndex === idx ? 'bg-[#7B1113] w-6' : 'bg-[#7B1113]/20 w-2.5'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DEDICATED VIDEO TOUR SECTION ═══ */}
      <section className="py-24 bg-[#FAF7F4] border-t border-[#7B1113]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Content */}
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="text-[#7B1113] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Virtual Tour</p>
                <h2 className="mb-6" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 48px)", color: "#1A0A0B", lineHeight: 1.15 }}>
                  Take a Virtual Tour of <span className="text-[#7B1113]">Sahyadri PG</span>
                </h2>
                <p className="text-[#7A6A5A] text-base leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
                  Get a real feel of premium student living. Explore our modern rooms, high-quality dining hall, premium amenities, and vibrant common areas.
                </p>
                <button
                  onClick={() => setShowVideo(true)}
                  className="inline-flex items-center gap-3 bg-[#7B1113] hover:bg-[#9b1416] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#7B1113]/30"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Play size={16} fill="white" /> Open Fullscreen Tour
                </button>
              </FadeUp>
            </div>

            {/* Right: Embedded Video Player */}
            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#7B1113]/8 bg-black aspect-video group">
                  <video
                    src={pgVideo}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ FEATURED ROOMS ═══ */}
      <section className="py-28 bg-[#EDE5D8]/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
              <div>
                <p className="text-[#7B1113] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Featured Rooms</p>
                <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 50px)", color: "#1A0A0B", lineHeight: 1.15 }}>
                  Choose Your Perfect Room
                </h2>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <a
                  href={brochureBoys}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none text-center bg-[#7B1113] hover:bg-[#9b1416] text-white text-xs font-semibold px-5 py-3.5 rounded-xl transition-all shadow-sm active:scale-95"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Boys PG Brochure
                </a>
                <a
                  href={brochureGirls}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none text-center bg-white border-2 border-[#7B1113] text-[#7B1113] hover:bg-[#7B1113]/5 text-xs font-semibold px-5 py-3.5 rounded-xl transition-all shadow-sm active:scale-95"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Girls PG Brochure
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Swapping Buttons for Mobile View */}
          <div className="flex lg:hidden bg-white/60 backdrop-blur-md p-1 rounded-full border border-[#7B1113]/10 max-w-[340px] mx-auto mb-8 shadow-sm justify-between">
            {["Single", "Double", "Triple", "Quad"].map((label, idx) => (
              <button
                key={label}
                onClick={() => setActiveRoomIndex(idx)}
                className={`flex-1 py-2 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeRoomIndex === idx
                    ? 'bg-[#7B1113] text-white shadow-md shadow-[#7B1113]/20'
                    : 'text-[#7A6A5A] hover:bg-white/40'
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop view Grid */}
          <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-6">
            {rooms.map((room, i) => (
              <FadeUp key={room.type} delay={i * 0.12}>
                <RoomCard room={room} />
              </FadeUp>
            ))}
          </div>

          {/* Mobile view horizontal slider with custom slide direction animation */}
          <div className="block lg:hidden relative w-full overflow-hidden min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoomIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
              >
                <RoomCard room={rooms[activeRoomIndex]} />
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation swapping buttons */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={() => setActiveRoomIndex(c => (c - 1 + rooms.length) % rooms.length)}
                className="w-11 h-11 rounded-full bg-white border border-[#7B1113]/10 flex items-center justify-center text-[#7B1113] hover:bg-[#7B1113] hover:text-white transition-all shadow-sm cursor-pointer"
                aria-label="Previous room"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Slider indicator dots */}
              <div className="flex gap-2">
                {rooms.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveRoomIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeRoomIndex === idx ? 'bg-[#7B1113] w-6' : 'bg-[#7B1113]/20 w-2.5'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveRoomIndex(c => (c + 1) % rooms.length)}
                className="w-11 h-11 rounded-full bg-white border border-[#7B1113]/10 flex items-center justify-center text-[#7B1113] hover:bg-[#7B1113] hover:text-white transition-all shadow-sm cursor-pointer"
                aria-label="Next room"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-28 bg-[#1A0A0B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <p className="text-[#DCCFC0]/50 text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Student Reviews</p>
            <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 50px)" }}>
              What Our Students Say
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main review */}
            <div className="lg:col-span-2">
              <motion.div
                key={slide}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45 }}
                className="bg-[#7B1113] rounded-3xl p-10 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonials[slide].rating }).map((_, i) => (
                      <Star key={i} size={18} className="text-[#DCCFC0] fill-[#DCCFC0]" />
                    ))}
                  </div>
                  <p className="text-white/90 leading-relaxed mb-8" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(18px, 2vw, 22px)", fontStyle: "italic", lineHeight: 1.7 }}>
                    "{testimonials[slide].review}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-13 h-13 rounded-full flex items-center justify-center text-white font-bold text-base ring-2 ring-white/30 shrink-0"
                    style={{ background: testimonials[slide].color, width: 52, height: 52, fontFamily: "Inter, sans-serif" }}
                  >
                    {testimonials[slide].initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>{testimonials[slide].name}</div>
                    <div className="text-[#DCCFC0]/70 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{testimonials[slide].college}</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Side panel */}
            <div className="space-y-3">
              <div className="hidden lg:block space-y-3">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`w-full text-left rounded-2xl p-5 border transition-all duration-300 ${i === slide ? "bg-white/10 border-[#7B1113]" : "bg-white/4 border-white/8 hover:bg-white/8"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-xs ring-1 ring-white/10 shrink-0"
                        style={{ background: t.color, fontFamily: "Inter, sans-serif" }}
                      >
                        {t.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="text-white text-sm font-medium truncate" style={{ fontFamily: "Inter, sans-serif" }}>{t.name}</div>
                        <div className="text-white/40 text-xs truncate" style={{ fontFamily: "Inter, sans-serif" }}>{t.college}</div>
                      </div>
                      <div className="flex gap-0.5 ml-auto shrink-0">
                        {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={10} className="text-[#C4996A] fill-[#C4996A]" />)}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <button onClick={prev} className="flex-1 py-3 rounded-xl border border-white/15 text-white hover:bg-white/10 transition-colors flex items-center justify-center">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={next} className="flex-1 py-3 rounded-xl border border-white/15 text-white hover:bg-white/10 transition-colors flex items-center justify-center">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ENQUIRY CTA ═══ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#DCCFC0]" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${buildingDay})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-[#1A0A0B] mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.15 }}>
              Ready to Make Sahyadri<br />Your Home?
            </h2>
            <p className="text-[#7A6A5A] mb-10 max-w-lg mx-auto" style={{ fontFamily: "Inter, sans-serif", fontSize: "17px", lineHeight: 1.7 }}>
              Schedule a free visit today. Our team will give you a personal tour and answer every question.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:9504059393"
                className="flex items-center gap-3 bg-[#7B1113] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#9b1416] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#7B1113]/30"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Phone size={18} /> Call Now: 9504059393
              </a>
              <a
                href="https://wa.me/919504059393"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-500 transition-all hover:scale-105"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-3 bg-white text-[#7B1113] border-2 border-[#7B1113] px-8 py-4 rounded-full font-semibold hover:bg-[#7B1113] hover:text-white transition-all"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Book a Visit
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Video modal */}
      {showVideo && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowVideo(false)}
        >
          <div className="bg-[#1A0A0B] rounded-3xl overflow-hidden max-w-4xl w-full text-center relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white hover:text-[#DCCFC0] z-10 bg-[#7B1113]/80 p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-2" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="aspect-video bg-black flex items-center justify-center">
              <video
                src={pgVideo}
                controls
                muted
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default HomePage;