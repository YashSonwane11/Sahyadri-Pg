import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Wifi, Shield, UtensilsCrossed, Refrigerator, WashingMachine, Droplets, Car, Flame, Sparkles, Zap, Bath, Lock } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }) {
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

const amenities = [
  { icon: Wifi, title: "High-Speed WiFi", desc: "Dedicated 100 Mbps fiber with separate router per floor for lag-free streaming and online classes.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&auto=format" },
  { icon: Shield, title: "CCTV Surveillance", desc: "32-camera HD system covering all common areas and corridors monitored 24/7 by trained staff.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop&auto=format" },
  { icon: UtensilsCrossed, title: "Nutritious Mess Food", desc: "3 balanced meals daily with a variety of North & South Indian dishes. Sunday special every week.", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=300&h=200&fit=crop&auto=format" },
  { icon: Refrigerator, title: "Refrigerator Access", desc: "Shared refrigerators on each floor for storing personal food items, medicines, and beverages.", image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=300&h=200&fit=crop&auto=format" },
  { icon: WashingMachine, title: "Washing Machine", desc: "Fully automatic machines on every floor with scheduled usage timings for convenience.", image: "https://www.magnific.com/free-photos-vectors/automatic-washing-machine" },
  { icon: Droplets, title: "Mineral Water", desc: "RO-purified drinking water dispensers on every floor, tested monthly for quality and purity.", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300&h=200&fit=crop&auto=format" },
  { icon: Car, title: "Free Parking", desc: "Covered parking for two-wheelers and dedicated bicycle stand within premises at no cost.", image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=300&h=200&fit=crop&auto=format" },
  { icon: Flame, title: "24/7 Hot Water", desc: "Solar-powered geysers with instant electric backup ensure hot water round the clock.", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=200&fit=crop&auto=format" },
  { icon: Sparkles, title: "Daily Room Cleaning", desc: "Professional housekeeping staff clean rooms and common areas daily maintaining premium standards.", image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=200&fit=crop&auto=format" },
  { icon: Zap, title: "Power Backup", desc: "24/7 inverter and generator backup ensures uninterrupted power supply during load-shedding.", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop&auto=format" },
  { icon: Bath, title: "Attached Bathroom", desc: "Premium rooms with modern attached bathrooms, western fittings, and regular deep cleaning.", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=200&fit=crop&auto=format" },
  { icon: Lock, title: "Security Guard", desc: "Trained security personnel at entry gate 24/7 with visitor log and biometric access.", image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=300&h=200&fit=crop&auto=format" },
];

export default function Amenities() {
  return (
    <div className="bg-[#FAF7F4] pt-20">

      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=500&fit=crop&auto=format')" }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/92 via-[#1A0A0B]/45 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
          <p className="text-[#DCCFC0]/60 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>World-Class Facilities</p>
          <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(34px, 5vw, 66px)" }}>
            Amenities That Elevate Living
          </h1>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[#7B1113] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>12 Premium Amenities</p>
            <h2 className="text-[#1A0A0B]" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(26px, 3vw, 42px)" }}>
              Everything Included, Nothing Extra
            </h2>
            <p className="text-[#7A6A5A] mt-3 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              All amenities included in your monthly rent. No hidden charges, no surprise bills.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {amenities.map((a, i) => (
              <FadeIn key={a.title} delay={(i % 4) * 0.07}>
                <div className="bg-white rounded-2xl overflow-hidden border border-[#7B1113]/8 hover:shadow-2xl hover:shadow-[#7B1113]/6 hover:-translate-y-2 transition-all duration-400 group">
                  <div className="h-36 overflow-hidden relative">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/65 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-[#7B1113] rounded-xl flex items-center justify-center shadow-lg">
                      <a.icon size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#1A0A0B] mb-1.5" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "16px" }}>{a.title}</h3>
                    <p className="text-[#7A6A5A] text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{a.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#7B1113]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-white mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 44px)" }}>
              Experience These Amenities in Person
            </h2>
            <p className="text-[#DCCFC0]/75 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
              Book a free visit and see why 500+ students call Sahyadri their home.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#7B1113] px-10 py-4 rounded-full font-semibold hover:bg-[#DCCFC0] transition-all hover:scale-105"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Schedule a Free Visit
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
