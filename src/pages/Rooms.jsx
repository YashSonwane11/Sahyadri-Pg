import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, MessageCircle, Info, Shield, HelpCircle } from 'lucide-react';
import { rooms, contactInfo } from '../data/pgData';

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

/* ── Custom Room Photo Carousel Slider (Airbnb style) ── */
const RoomPhotoSlider = ({ images, type }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-72 sm:h-80 rounded-3xl overflow-hidden group shadow-md bg-premium-gray">
      {/* Photo */}
      <img
        src={images[activeIdx]}
        alt={`${type} interior layout view ${activeIdx + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Nav Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-premium-black flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-premium-black flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight size={16} />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setActiveIdx(idx); }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeIdx === idx ? 'bg-white w-5' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Rooms() {
  return (
    <div className="w-full bg-[#FAF7F4] pt-20">

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#1A0A0B]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1920&q=80')" }}
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
            Rooms & Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#DCCFC0]/80 text-sm sm:text-base tracking-wide"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Sleek sharing options to fit your preference. Clean, ventilated, and study-focused.
          </motion.p>
        </div>
      </section>

      {/* ═══ WINGS INFO BANNER ═══ */}
      <section className="py-12 bg-[#7B1113] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#DCCFC0] shrink-0">
              <Shield size={22} />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
                100% Separate Boys & Girls Wings
              </h3>
              <p className="text-[#DCCFC0]/80 text-xs sm:text-sm max-w-xl" style={{ fontFamily: "Inter, sans-serif" }}>
                To prioritize security and privacy, our accommodations are housed in entirely separate buildings. Each wing features dedicated entry gates, separate CCTV monitoring, and full-time wardens.
              </p>
            </div>
          </div>
          <span className="shrink-0 bg-white/12 border border-white/20 text-[#DCCFC0] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>
            Security Verified ✅
          </span>
        </div>
      </section>

      {/* ═══ ROOM COMPARISON CARDS ═══ */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {rooms.map((room, idx) => (
            <FadeUp 
              key={room.id} 
              delay={idx * 0.12}
              className="bg-white rounded-[32px] overflow-hidden border border-[#7B1113]/8 shadow-lg hover:shadow-2xl transition-all duration-300 text-left flex flex-col h-full"
            >
              {/* Image Slider */}
              <RoomPhotoSlider images={imgUrlsForFallback(room.images, room.id)} type={room.type} />

              {/* Room details */}
              <div className="p-8 flex flex-col justify-between flex-grow gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#1A0A0B]" style={{ fontFamily: "Playfair Display, serif" }}>
                        {room.type}
                      </h3>
                      <p className="text-xs text-[#7A6A5A] italic font-semibold mt-1">"{room.tagline}"</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-bold text-[#7A6A5A] uppercase tracking-wider">Starting from</span>
                      <span className="text-2xl font-extrabold text-[#7B1113]" style={{ fontFamily: "Playfair Display, serif" }}>
                        ₹{room.basePrice.toLocaleString('en-IN')}<span className="text-xs font-normal text-[#7A6A5A]"> /month</span>
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-[#EDE5D8] my-2" />

                  {/* Bullet features */}
                  <h4 className="text-xs font-bold text-[#1A0A0B] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
                    Room Inclusions & Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {room.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#7A6A5A]" style={{ fontFamily: "Inter, sans-serif" }}>
                        <Check className="text-[#7B1113] shrink-0 mt-0.5" size={14} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking CTA row */}
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(`Hi, I want to book a ${room.type}. Please share booking details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#7B1113] hover:bg-[#9b1416] text-white text-sm font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <MessageCircle size={16} />
                    <span>Inquire / Book Room</span>
                  </a>
                  <a
                    href="tel:+919504059393"
                    className="border border-[#EDE5D8] hover:bg-[#FAF7F4] text-[#1A0A0B] text-sm font-semibold py-3.5 px-6 rounded-2xl transition-colors text-center"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Call Manager
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ═══ RENTAL FAQs & GENERAL GUIDELINES ═══ */}
      <section className="py-20 sm:py-28 bg-[#EDE5D8]/35 border-t border-[#EDE5D8]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16 flex flex-col gap-3">
            <span className="text-[#7B1113] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Booking Guide</span>
            <h2 className="text-3xl font-extrabold text-[#1A0A0B]" style={{ fontFamily: "Playfair Display, serif" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-[#7A6A5A] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Crucial information regarding deposits, notice periods, and room booking guidelines.
            </p>
          </FadeUp>

          <div className="space-y-6">
            {[
              {
                q: "What is the security deposit amount?",
                a: "A refundable security deposit equivalent to one month's rent is required at the time of booking to secure your bed. This is fully returned upon checkout after deducting any damages."
              },
              {
                q: "What is the notice period requirement?",
                a: "Students are required to give a minimum 30-day notice period before vacating their room. Rent is calculated on a full-month cycle."
              },
              {
                q: "Are mess packages mandatory?",
                a: "No, but we highly recommend them! Healthy home-style breakfast, lunch, and dinner cooked on-premises are bundled at highly economical monthly rates."
              },
              {
                q: "Are visitors allowed in the rooms?",
                a: "To ensure absolute security and comfort for all roommates, parents and local guardians are allowed inside visitor areas during designated hours, but overnight guest stays are strictly prohibited."
              }
            ].map((faq, fIdx) => (
              <FadeUp 
                key={fIdx} 
                delay={fIdx * 0.08}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#7B1113]/8 shadow-sm text-left flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7B1113]/8 text-[#7B1113] flex items-center justify-center shrink-0">
                  <HelpCircle size={18} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1A0A0B] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>{faq.q}</h4>
                  <p className="text-[#7A6A5A] text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{faq.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

// Fallback high-res Airbnb style dorm images in case default pgData links fails
function imgUrlsForFallback(images, roomId) {
  if (images && images.length > 0) return images;
  if (roomId === 'double-sharing') {
    return [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop&auto=format'
    ];
  }
  return [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop&auto=format'
  ];
}
