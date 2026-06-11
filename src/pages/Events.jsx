import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

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

const eventCategories = [
  { title: "Birthday Celebrations", emoji: "🎂", count: "48+ Events", desc: "Every student's birthday is celebrated with surprise cakes, decorations, and group festivities.", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=380&fit=crop&auto=format" },
  { title: "Festival Celebrations", emoji: "🪔", count: "12+ Festivals", desc: "Diwali, Holi, Navratri, Christmas — all major festivals celebrated together as one big family.", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=380&fit=crop&auto=format" },
  { title: "Farewell Events", emoji: "🎓", count: "Annual", desc: "Heartfelt farewell ceremonies for graduating students with memories, gifts, and celebrations.", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=380&fit=crop&auto=format" },
  { title: "Student Gatherings", emoji: "🤝", count: "Monthly", desc: "Movie nights, game evenings, cricket tournaments, and cultural nights to build community bonds.", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=380&fit=crop&auto=format" },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop&auto=format", alt: "Birthday" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=700&fit=crop&auto=format", alt: "Graduation" },
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=450&fit=crop&auto=format", alt: "Group gathering" },
  { src: "https://images.unsplash.com/photo-1602644525607-2868abfa3411?w=500&h=380&fit=crop&auto=format", alt: "Festival" },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=550&fit=crop&auto=format", alt: "Event night" },
  { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop&auto=format", alt: "Community" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&h=480&fit=crop&auto=format", alt: "Indoor event" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=430&fit=crop&auto=format", alt: "Night event" },
  { src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=500&h=500&fit=crop&auto=format", alt: "Fun time" },
];

const videoThumbs = [
  { title: "Diwali Celebration 2023", duration: "3:24", thumb: "https://images.unsplash.com/photo-1602644525607-2868abfa3411?w=400&h=240&fit=crop&auto=format" },
  { title: "Annual Farewell Night", duration: "5:12", thumb: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=240&fit=crop&auto=format" },
  { title: "Holi Colors at Sahyadri", duration: "2:48", thumb: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=240&fit=crop&auto=format" },
  { title: "Birthday Surprise Compilation", duration: "4:05", thumb: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=240&fit=crop&auto=format" },
  { title: "Cricket Tournament 2024", duration: "6:33", thumb: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=240&fit=crop&auto=format" },
  { title: "Cultural Night Performances", duration: "8:17", thumb: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=240&fit=crop&auto=format" },
];

export default function Events() {
  const sliderRef = useRef(null);

  const scrollSlider = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <div className="bg-[#FAF7F4] pt-20">

      {/* ─── Hero ─── */}
      <section className="relative h-80 flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&h=600&fit=crop&auto=format')" }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/92 via-[#1A0A0B]/45 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <p className="text-[#C4996A] text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Life Beyond Textbooks</p>
          <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(34px, 5vw, 66px)" }}>
            Student Life at Sahyadri
          </h1>
        </div>
      </section>

      {/* ─── Event Categories ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <p className="text-[#7B1113] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Events & Celebrations</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", color: "#1A0A0B" }}>
              A Community That Celebrates Together
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventCategories.map((e, i) => (
              <FadeUp key={e.title} delay={i * 0.08}>
                <div className="bg-white rounded-3xl overflow-hidden border border-[#7B1113]/8 hover:shadow-2xl hover:shadow-[#7B1113]/6 hover:-translate-y-2 transition-all duration-400 group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={e.image} alt={e.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/75 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-3xl">{e.emoji}</div>
                    <div className="absolute top-3 right-3 bg-[#7B1113] text-white text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                      {e.count}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#1A0A0B] mb-2" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "17px" }}>{e.title}</h3>
                    <p className="text-[#7A6A5A] text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{e.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Photo Gallery ─── */}
      <section className="py-16 bg-[#EDE5D8]/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 42px)", color: "#1A0A0B" }}>
              Moments That Matter
            </h2>
            <p className="text-[#7A6A5A] mt-2 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Captured memories from the Sahyadri family</p>
          </FadeUp>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer relative">
                  <img src={img.src} alt={img.alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#1A0A0B]/0 group-hover:bg-[#1A0A0B]/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                      View
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Video Gallery Slider ─── */}
      <section className="py-24 bg-[#1A0A0B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[#C4996A] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Video Gallery</p>
                <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 42px)" }}>
                  Relive the Best Moments
                </h2>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollSlider("left")}
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scrollSlider("right")}
                  className="w-11 h-11 rounded-full bg-[#7B1113] flex items-center justify-center text-white hover:bg-[#9b1416] transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </FadeUp>

          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videoThumbs.map((v, i) => (
              <div
                key={i}
                className="shrink-0 w-72 snap-start group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden h-44 bg-[#7A6A5A]/20 mb-3">
                  <img src={v.thumb} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#1A0A0B]/40 group-hover:bg-[#1A0A0B]/25 transition-colors" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                      <Play size={22} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded" style={{ fontFamily: "Inter, sans-serif" }}>
                    {v.duration}
                  </div>
                </div>
                <h4 className="text-white text-sm font-medium leading-snug" style={{ fontFamily: "Inter, sans-serif" }}>{v.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#7B1113]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-white mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 44px)" }}>
              Join the Sahyadri Family
            </h2>
            <p className="text-[#DCCFC0]/75 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
              More than a PG — it's a community where memories are made for life.
            </p>
            <a
              href="tel:9504059393"
              className="inline-block bg-white text-[#7B1113] px-10 py-4 rounded-full font-semibold hover:bg-[#DCCFC0] transition-colors hover:scale-105"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Book Your Spot Today
            </a>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
