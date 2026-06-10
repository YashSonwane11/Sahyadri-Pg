import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Sparkles, MapPin } from 'lucide-react';

/* ── fade-up animation wrapper ── */
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80", caption: "Premium Double Sharing Room Layout" },
  { url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80", caption: "Sleek Individual Study Desks" },
  { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80", caption: "Clean Shared Kitchenette Area" },
  { url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80", caption: "Well-Ventilated Boys Wing Room" },
  { url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80", caption: "Cozy Girls Wing Shared Dorm" },
  { url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80", caption: "RO Mineral Water Stations" }
];

export default function About() {
  return (
    <div className="w-full bg-[#FAF7F4] pt-20">
      
      {/* ═══ SUB-PAGE HERO ═══ */}
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#1A0A0B]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B] via-[#1A0A0B]/60 to-transparent" />
        
        <div className="relative text-center px-4 max-w-3xl z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            About Sahyadri PG
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#DCCFC0]/80 text-sm sm:text-base tracking-wide"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Providing Premium, Safe & Homely Accommodations near MIT ADT University
          </motion.p>
        </div>
      </section>

      {/* ═══ OUR STORY ═══ */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <FadeUp className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="text-[#7B1113] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A0A0B] leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
              A Home Away From Home <br />
              <span className="text-[#7B1113]">Since 2018</span>
            </h2>
            <p className="text-[#7A6A5A] text-sm sm:text-base leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Sahyadri PG was established with a singular vision: to address the lack of structured, high-quality, and secure student accommodations near MIT ADT University, Loni Kalbhor. Over the years, we have housed more than 500 students, building a reputation of trust and reliability.
            </p>
            <p className="text-[#7A6A5A] text-sm sm:text-base leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              We understand that transition to college life is both exciting and challenging. By providing a clean study environment, healthy homely food, and rigorous 24/7 security, we make sure students can focus completely on their academic achievements while feeling perfectly at home.
            </p>
            <div className="flex items-center gap-3 bg-[#7B1113]/5 border border-[#7B1113]/10 p-4 rounded-2xl w-fit">
              <MapPin size={18} className="text-[#7B1113] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#1A0A0B]" style={{ fontFamily: "Inter, sans-serif" }}>
                Chintamani Park, Loni Kalbhor (5 min from MIT ADT campus)
              </span>
            </div>
          </FadeUp>

          <FadeUp className="lg:col-span-6 grid grid-cols-2 gap-4" delay={0.15}>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=500&q=80" 
                alt="Cozy room interiors" 
                className="w-full h-64 object-cover rounded-3xl border border-[#7B1113]/8 shadow-md"
              />
              <div className="bg-[#7B1113] text-white p-6 rounded-3xl text-center shadow-lg">
                <span className="block text-4xl font-extrabold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>500+</span>
                <span className="text-xs uppercase tracking-wider text-[#DCCFC0]" style={{ fontFamily: "Inter, sans-serif" }}>Students Housed</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-white p-6 rounded-3xl text-center border border-[#7B1113]/8 shadow-sm">
                <span className="block text-4xl font-extrabold text-[#7B1113] mb-1" style={{ fontFamily: "Playfair Display, serif" }}>24/7</span>
                <span className="text-xs uppercase tracking-wider text-[#7A6A5A]" style={{ fontFamily: "Inter, sans-serif" }}>Strict Security</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=500&q=80" 
                alt="Study environment" 
                className="w-full h-64 object-cover rounded-3xl border border-[#7B1113]/8 shadow-md"
              />
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ═══ MISSION & VISION ═══ */}
      <section className="py-20 sm:py-28 bg-[#EDE5D8]/35 border-y border-[#EDE5D8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Mission */}
            <FadeUp className="bg-white rounded-3xl p-8 border border-[#7B1113]/8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#7B1113]/8 flex items-center justify-center text-[#7B1113]">
                <Target size={22} />
              </div>
              <h3 className="text-[#1A0A0B] text-xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>Our Mission</h3>
              <p className="text-[#7A6A5A] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                To design and maintain premium living spaces that offer safety, comfort, and nutrition to support students' academic success and personal growth.
              </p>
            </FadeUp>

            {/* Card 2: Vision */}
            <FadeUp className="bg-white rounded-3xl p-8 border border-[#7B1113]/8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-5" delay={0.1}>
              <div className="w-12 h-12 rounded-2xl bg-[#7B1113]/8 flex items-center justify-center text-[#7B1113]">
                <Eye size={22} />
              </div>
              <h3 className="text-[#1A0A0B] text-xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>Our Vision</h3>
              <p className="text-[#7A6A5A] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                To become the most preferred student housing provider near MIT ADT, recognized for building a supportive community, top-tier service standards, and trust.
              </p>
            </FadeUp>

            {/* Card 3: Values */}
            <FadeUp className="bg-white rounded-3xl p-8 border border-[#7B1113]/8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-5" delay={0.2}>
              <div className="w-12 h-12 rounded-2xl bg-[#7B1113]/8 flex items-center justify-center text-[#7B1113]">
                <Shield size={22} />
              </div>
              <h3 className="text-[#1A0A0B] text-xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>Our Values</h3>
              <p className="text-[#7A6A5A] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Strict hygiene, student comfort first, absolute safety protocol, transparency in communication, and continuous improvement based on feedback.
              </p>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ═══ PROPERTY MASONRY GALLERY ═══ */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp className="max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-[#7B1113] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Gallery</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A0A0B]" style={{ fontFamily: "Playfair Display, serif" }}>
            Take a Look Inside
          </h2>
          <p className="text-[#7A6A5A] text-sm font-body leading-relaxed">
            High-quality snapshots of double-sharing bedrooms, study wardrobes, clean kitchenettes, and modern washrooms.
          </p>
        </FadeUp>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <FadeUp 
              key={idx} 
              delay={idx * 0.08}
              className="relative rounded-2xl overflow-hidden group shadow-md aspect-[4/3] bg-premium-gray"
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-107"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 text-left" style={{ fontFamily: "Inter, sans-serif" }}>
                {img.caption}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
