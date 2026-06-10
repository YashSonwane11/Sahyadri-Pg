import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Wifi, Shield, UtensilsCrossed, Car, Sparkles, Droplets,
  Star, ChevronLeft, ChevronRight, Phone, MessageCircle, ArrowRight, Check, Play
} from "lucide-react";

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
    type: "Double Sharing",
    price: "₹7,500",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700&h=480&fit=crop&auto=format",
    features: ["Attached Bathroom", "AC Available", "Study Table", "Wardrobe"],
    badge: "Most Popular", badgeColor: "#7B1113",
  },
  {
    type: "Triple Sharing",
    price: "₹5,500",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&h=480&fit=crop&auto=format",
    features: ["Shared Bathroom", "Study Table", "Wardrobe", "Power Backup"],
    badge: "Best Value", badgeColor: "#C4996A",
  },
];

const testimonials = [
  { name: "Priya Sharma", college: "B.Tech CSE — MIT ADT", rating: 5, review: "Sahyadri PG is the best decision I made in college. The food is amazing, security is top-notch, and the staff feels like family. Highly recommended!", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format" },
  { name: "Rahul Deshmukh", college: "MBA — MIT ADT", rating: 5, review: "Clean rooms, great food, excellent WiFi. Everything a student needs. The location is perfect — just 5 minutes from campus.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format" },
  { name: "Sneha Patil", college: "B.Pharm — MIT ADT", rating: 5, review: "I've stayed here 2 years with zero complaints. The warden is incredibly supportive and the premises always feel safe and welcoming.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format" },
  { name: "Arjun Kulkarni", college: "M.Tech — MIT ADT", rating: 4, review: "Exceptional value for money. Best amenities at a very reasonable price. Power backup is a lifesaver during load-shedding months.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format" },
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

export function HomePage() {
  const [slide, setSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const next = () => setSlide((c) => (c + 1) % testimonials.length);
  const prev = () => setSlide((c) => (c - 1 + testimonials.length) % testimonials.length);

  // Auto-advance testimonials
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#FAF7F4]">

      {/* ═══ HERO ═══ */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background image with Ken Burns */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1920&h=1080&fit=crop&auto=format')" }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0A0B]/90 via-[#1A0A0B]/60 to-[#1A0A0B]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/60 via-transparent to-transparent" />

        {/* Extra top fade so navbar text stays readable */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#1A0A0B]/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-xl lg:max-w-2xl">
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
              Safe, comfortable & affordable PG designed for academic excellence. Boys & Girls PG with world-class amenities.
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
                Watch Tour
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
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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

        {/* Floating room preview card — 2xl only, right side */}
        <motion.div
          className="hidden 2xl:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          {/* Room card */}
          <div className="bg-white/12 backdrop-blur-lg border border-white/25 rounded-2xl p-5 w-52 shadow-xl">
            <div className="text-[#DCCFC0] text-[10px] uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
              Double Sharing
            </div>
            <div className="text-white mb-0.5" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "26px" }}>
              ₹7,500
            </div>
            <div className="text-white/55 text-xs mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
              per month · 3 rooms left
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#7B1113] rounded-full w-3/4" />
            </div>
            <div className="text-white/40 text-[10px] mt-1" style={{ fontFamily: "Inter, sans-serif" }}>75% occupied</div>
          </div>
          {/* Rating pill */}
          <div className="bg-white/12 backdrop-blur-lg border border-white/25 rounded-xl px-4 py-2.5 flex items-center gap-2.5">
            <span className="text-lg">⭐</span>
            <div>
              <div className="text-white font-bold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>4.8 / 5.0</div>
              <div className="text-white/50 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>432 reviews</div>
            </div>
          </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Link to="/rooms" className="flex items-center gap-2 text-[#7B1113] font-medium text-sm group" style={{ fontFamily: "Inter, sans-serif" }}>
                View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rooms.map((room, i) => (
              <FadeUp key={room.type} delay={i * 0.12}>
                <div className="bg-white rounded-3xl overflow-hidden border border-[#7B1113]/8 hover:shadow-2xl hover:shadow-[#7B1113]/8 transition-all duration-500 group">
                  <div className="relative h-72 overflow-hidden">
                    <img src={room.image} alt={room.type} className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/50 to-transparent" />
                    <div className="absolute top-4 left-4 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full" style={{ backgroundColor: room.badgeColor, fontFamily: "Inter, sans-serif" }}>
                      {room.badge}
                    </div>
                    {/* Price overlay */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                      <span className="text-[#7B1113]" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "22px" }}>{room.price}</span>
                      <span className="text-[#7A6A5A] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>/mo</span>
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
              </FadeUp>
            ))}
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
                  <img src={testimonials[slide].avatar} alt={testimonials[slide].name} className="w-13 h-13 rounded-full object-cover ring-2 ring-white/30" style={{ width: 52, height: 52 }} />
                  <div>
                    <div className="text-white font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>{testimonials[slide].name}</div>
                    <div className="text-[#DCCFC0]/70 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{testimonials[slide].college}</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Side panel */}
            <div className="space-y-3">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`w-full text-left rounded-2xl p-5 border transition-all duration-300 ${i === slide ? "bg-white/10 border-[#7B1113]" : "bg-white/4 border-white/8 hover:bg-white/8"}`}
                >
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=400&fit=crop&auto=format')", backgroundSize: "cover", backgroundPosition: "center" }}
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
          <div className="bg-[#1A0A0B] rounded-2xl p-8 max-w-lg w-full text-center" onClick={(e) => e.stopPropagation()}>
            <div className="text-5xl mb-4">🎬</div>
            <h3 className="text-white mb-2" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "24px" }}>
              Virtual Tour Coming Soon
            </h3>
            <p className="text-white/60 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Book a physical visit for a live tour of our premium facilities.
            </p>
            <a
              href="tel:9504059393"
              className="inline-block bg-[#7B1113] text-white px-6 py-3 rounded-full font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
              onClick={() => setShowVideo(false)}
            >
              Call to Schedule Visit
            </a>
            <button className="block mx-auto mt-3 text-white/40 text-sm" onClick={() => setShowVideo(false)} style={{ fontFamily: "Inter, sans-serif" }}>
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default HomePage;