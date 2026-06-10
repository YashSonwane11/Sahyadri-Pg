import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, ShieldAlert, Coffee, Sun, Soup } from 'lucide-react';
import { amenities, weeklyMenu } from '../data/pgData';

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

export default function Amenities() {
  const [activeDayIdx, setActiveDayIdx] = useState(0);

  const featuredAmenities = amenities.filter(a => a.featured);
  const additionalAmenities = amenities.filter(a => !a.featured);

  return (
    <div className="w-full bg-[#FAF7F4] pt-20">

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#1A0A0B]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=80')" }}
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
            Amenities & Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#DCCFC0]/80 text-sm sm:text-base tracking-wide"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            12+ Premium student facilities designed to ensure comfort, focus, and safety
          </motion.p>
        </div>
      </section>

      {/* ═══ FEATURED / CORE FACILITIES ═══ */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-[#7B1113] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Core Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A0A0B]" style={{ fontFamily: "Playfair Display, serif" }}>
            Included with Every Stay
          </h2>
          <p className="text-[#7A6A5A] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            We provide all essential premium utilities to ensure a hassle-free and comfortable daily student life.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAmenities.map((amenity, idx) => {
            const IconComponent = amenity.icon;
            return (
              <FadeUp 
                key={amenity.id} 
                delay={idx * 0.08}
                className="bg-white rounded-3xl p-8 border border-[#7B1113]/8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#7B1113]/8 text-[#7B1113] flex items-center justify-center mb-6 group-hover:bg-[#7B1113] group-hover:text-white transition-colors duration-300">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="text-[#1A0A0B] text-lg font-bold mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                    {amenity.name}
                  </h3>
                  <p className="text-[#7A6A5A] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {amenity.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#7B1113] font-semibold mt-6 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>
                  <Check size={14} /> Included in Package
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ═══ ADDITIONAL AMENITIES ═══ */}
      <section className="py-20 sm:py-28 bg-[#EDE5D8]/35 border-y border-[#EDE5D8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-[#7B1113] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Extra Comforts</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A0A0B]" style={{ fontFamily: "Playfair Display, serif" }}>
              Additional Services
            </h2>
            <p className="text-[#7A6A5A] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Thoughtful extras that make study breaks relaxing and managing daily chores incredibly easy.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalAmenities.map((amenity, idx) => {
              const IconComponent = amenity.icon;
              return (
                <FadeUp 
                  key={amenity.id} 
                  delay={idx * 0.08}
                  className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-[#EDE5D8] shadow-sm flex flex-col gap-4 text-left"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white text-[#7B1113] border border-[#7B1113]/15 flex items-center justify-center shrink-0">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 className="text-[#1A0A0B] text-base font-bold mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                      {amenity.name}
                    </h3>
                    <p className="text-[#7A6A5A] text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                      {amenity.description}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WEEKLY MESS MENU & NUTRITION ═══ */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <FadeUp className="lg:col-span-5 text-left flex flex-col gap-4">
            <span className="text-[#7B1113] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Homely Mess Food</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A0A0B] leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
              Hygiene & Nutrition <br />
              <span className="text-[#7B1113]">Served Daily</span>
            </h2>
            <p className="text-[#7A6A5A] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Our dedicated kitchen staff serves fresh, home-cooked vegetarian and non-vegetarian meals prepared in high clean settings. We focus on low-oil, high-nutrition food to keep students healthy and active.
            </p>
          </FadeUp>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {weeklyMenu.nutritionHighlights.map((highlight, idx) => (
              <FadeUp 
                key={idx} 
                delay={idx * 0.1}
                className="bg-white rounded-2xl p-6 border border-[#7B1113]/8 shadow-sm text-left flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7B1113]/8 text-[#7B1113] flex items-center justify-center">
                  {idx === 0 && <Check size={18} />}
                  {idx === 1 && <Coffee size={18} />}
                  {idx === 2 && <Soup size={18} />}
                </div>
                <div>
                  <h4 className="text-[#1A0A0B] text-sm font-bold mb-2" style={{ fontFamily: "Playfair Display, serif" }}>{highlight.title}</h4>
                  <p className="text-[#7A6A5A] text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{highlight.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Weekly Menu Table / Slider */}
        <FadeUp className="bg-white rounded-3xl border border-[#7B1113]/8 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="flex justify-between items-center border-b border-[#EDE5D8] pb-6 mb-8 flex-wrap gap-4 text-left">
            <div>
              <h3 className="text-[#1A0A0B] text-xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>Weekly Mess Menu</h3>
              <p className="text-[#7A6A5A] text-xs font-body">Select a day to view breakfast, lunch, and dinner plans.</p>
            </div>
            {/* Direct WhatsApp Callout */}
            <div className="flex gap-2 bg-[#7B1113]/5 border border-[#7B1113]/10 px-4 py-2 rounded-xl text-xs font-semibold text-[#7B1113]" style={{ fontFamily: "Inter, sans-serif" }}>
              <Info size={14} className="mt-0.5" /> Wednesday is Non-Veg Special
            </div>
          </div>

          {/* Days buttons row */}
          <div className="flex gap-1.5 overflow-x-auto pb-4 mb-6 scrollbar-hide select-none flex-nowrap border-b border-[#FAF7F4]">
            {weeklyMenu.days.map((day, idx) => (
              <button
                key={day.day}
                onClick={() => setActiveDayIdx(idx)}
                className={`px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeDayIdx === idx 
                    ? 'bg-[#7B1113] text-white shadow-md shadow-[#7B1113]/15' 
                    : 'bg-[#FAF7F4] text-[#7A6A5A] border border-[#EDE5D8] hover:bg-[#EDE5D8]/50'
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {day.day}
              </button>
            ))}
          </div>

          {/* Active day meals grid */}
          <div className="relative min-h-[160px] bg-[#FAF7F4] border border-[#EDE5D8] rounded-2xl p-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDayIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-wider text-[#7B1113] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>🍳 Breakfast</span>
                  <p className="text-sm font-semibold text-[#1A0A0B]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {weeklyMenu.days[activeDayIdx].breakfast}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-wider text-[#7B1113] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>☀️ Lunch</span>
                  <p className="text-sm font-semibold text-[#1A0A0B]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {weeklyMenu.days[activeDayIdx].lunch}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-wider text-[#7B1113] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>🌙 Dinner</span>
                  <p className="text-sm font-semibold text-[#1A0A0B]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {weeklyMenu.days[activeDayIdx].dinner}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeUp>

      </section>
    </div>
  );
}
