import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import ganeshFestival from "../assets/ganesh_festival.png";
import navratriCelebration from "../assets/navratri_celebration.png";
import diwaliCelebration from "../assets/diwali_celebration.png";
import shivajiMaharaj from "../assets/shivaji_maharaj_jayanti_img.jpeg";
import dahiHandiCelebration from "../assets/dahi_handi_celebration.jpg";
import birthdayCelebration from "../assets/birthday_celebration.jpg";

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
  },
  {
    title: "Dahi Handi Celebration",
    emoji: "🏺",
    count: "Festive Spirit",
    desc: "Students celebrate the festive spirit of Dahi Handi with enthusiasm, teamwork, and cultural activities.",
    image: dahiHandiCelebration,
    highlights: ["Dahi Handi Breaking", "Human Pyramid Teamwork", "Festive Music & Dance", "Water Splashing"]
  },
  {
    title: "Birthday Celebrations",
    emoji: "🎂",
    count: "Resident Life",
    desc: "Special birthday celebrations organized for residents to create memorable moments and a family-like atmosphere.",
    image: birthdayCelebration,
    highlights: ["Cake Cutting Ceremony", "Midnight Surprises", "Resident Gatherings", "Memorable Photo Sessions"]
  }
];

export default function Events() {
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
