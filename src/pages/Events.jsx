import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import ganeshFestival from "../assets/ganesh_festival.png";
import navratriCelebration from "../assets/navratri_celebration.png";
import diwaliCelebration from "../assets/diwali_celebration.png";
import shivajiMaharaj from "../assets/shivaji_maharaj_jayanti_img.jpeg";

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
  {
    title: "Ganesh Festival",
    emoji: "🌺",
    count: "10-Day Festival",
    desc: "Welcoming Bappa to Sahyadri with traditional decor, daily aarti, modak prasad, and dhol-tasha performances. It is a time of immense devotion and community bonding.",
    image: ganeshFestival,
    highlights: ["Eco-friendly Ganesha Idol", "Daily Aarti & Prasad", "Traditional Dhol-Tasha Pathak", "Visarjan Procession"]
  },
  {
    title: "Navratri Celebration",
    emoji: "💃",
    count: "9-Night Celebration",
    desc: "Dancing Dandiya and Garba under glowing string lights. Students dress in traditional attire, enjoy festive music, and celebrate these nine nights with joyful devotion.",
    image: navratriCelebration,
    highlights: ["Dandiya & Garba Evenings", "Traditional Wear Contest", "Festive Aarti & Sweets", "DJ Music & Dance Floors"]
  },
  {
    title: "Diwali Celebration",
    emoji: "🪔",
    count: "Festival of Lights",
    desc: "Illuminating the Sahyadri building with lanterns, golden string lights, and diyas. Students prepare rangolis, share sweets, and enjoy a special community dinner.",
    image: diwaliCelebration,
    highlights: ["Building Golden Illumination", "Rangoli Designing Contest", "Traditional Sweets Sharing", "Special Festival Dinner"]
  },
  {
    title: "Shiv Jayanti",
    emoji: "🚩",
    count: "Annual Celebration",
    desc: "Celebrating Chhatrapati Shivaji Maharaj Jayanti with pride. Students gather for traditional pooja, pay tribute, share his history, and participate in cultural events.",
    image: shivajiMaharaj,
    highlights: ["Traditional Pooja & Aarti", "Tribute to Maharaj", "Inspirational Speeches", "Cultural Programs"]
  }
];

const galleryImages = [
  { src: ganeshFestival, alt: "Devotional Ganesh Festival setup and decor at Sahyadri PG" },
  { src: navratriCelebration, alt: "Students enjoying traditional Garba and Dandiya dance for Navratri" },
  { src: diwaliCelebration, alt: "Sahyadri PG building illuminated with bright golden lights for Diwali" },
  { src: shivajiMaharaj, alt: "Shivaji Maharaj Jayanti celebration and tribute at Sahyadri PG" },
];

export default function Events() {
  const [lightboxImage, setLightboxImage] = useState(null);

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
                <div className="bg-white rounded-3xl overflow-hidden border border-[#7B1113]/8 hover:shadow-2xl hover:shadow-[#7B1113]/6 hover:-translate-y-2 transition-all duration-400 group h-full flex flex-col justify-between">
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img src={e.image} alt={e.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/75 to-transparent" />
                      <div className="absolute bottom-3 left-4 text-3xl">{e.emoji}</div>
                      <div className="absolute top-3 right-3 bg-[#7B1113] text-white text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                        {e.count}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-[#1A0A0B] mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "20px" }}>{e.title}</h3>
                      <p className="text-[#7A6A5A] text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>{e.desc}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0 border-t border-[#7B1113]/5 mt-auto">
                    <div className="flex flex-wrap gap-1.5 pt-4">
                      {e.highlights.map((h) => (
                        <span key={h} className="bg-[#FAF7F4] text-[#7A6A5A] border border-[#DCCFC0] text-[10px] px-2 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif" }}>
                          {h}
                        </span>
                      ))}
                    </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <FadeUp key={i} delay={i * 0.05} className="overflow-hidden rounded-3xl aspect-[4/3] shadow-lg border border-[#7B1113]/5">
                <div
                  className="w-full h-full group cursor-pointer overflow-hidden relative"
                  onClick={() => setLightboxImage(img)}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#1A0A0B]/0 group-hover:bg-[#1A0A0B]/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                      View Full Image
                    </span>
                  </div>
                </div>
              </FadeUp>
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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#DCCFC0] z-10 bg-[#7B1113]/80 p-2.5 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-2" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="relative rounded-2xl overflow-hidden bg-[#1A0A0B] p-2 border border-[#7B1113]/10">
              <img src={lightboxImage.src} alt={lightboxImage.alt} className="max-w-full max-h-[75vh] object-contain rounded-xl" />
              <div className="text-center text-white/80 text-xs mt-3 px-4 py-1" style={{ fontFamily: "Inter, sans-serif" }}>
                {lightboxImage.alt}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
