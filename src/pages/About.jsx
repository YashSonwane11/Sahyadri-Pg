import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Target, Eye, Heart, Users, Home, Trophy, ArrowRight } from "lucide-react";

import roomDouble from "../assets/2_shr_room_main.jpeg";
import roomTriple from "../assets/3shr_room.jpeg";
import buildingNight from "../assets/building-night.jpg";
import buildingDay from "../assets/building-day.jpg";
import balcony from "../assets/balcony.png";
import bathroom from "../assets/bathroom.jpeg";

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

const journey = [
  { year: "Day 1", icon: Home, title: "Move In", desc: "Step into your furnished room with all amenities ready from day one. Our team helps you settle in." },
  { year: "Week 1", icon: Users, title: "Build Community", desc: "Connect with fellow students from MIT ADT and across India. Make friends for life." },
  { year: "Month 1", icon: Heart, title: "Feel at Home", desc: "Our staff ensures you feel welcomed, safe, and genuinely cared for every single day." },
  { year: "Always", icon: Trophy, title: "Academic Success", desc: "Thrive academically with a quiet, supportive environment built for student excellence." },
];

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="bg-[#FAF7F4] pt-20">

      {/* Hero */}
      <section ref={heroRef} className="relative h-80 flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${buildingDay})`,
            y: parallaxY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/92 via-[#1A0A0B]/45 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <p className="text-[#DCCFC0]/60 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Est. 2023</p>
          <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 68px)" }}>
            About Sahyadri PG
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden h-64">
                    <img src={roomDouble} alt="Room" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-40">
                    <img src={balcony} alt="Kitchen" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="rounded-3xl overflow-hidden h-40">
                    <img src={roomTriple} alt="Study" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-64">
                    <img src={buildingNight} alt="Common area" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="text-[#7B1113] text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Our Story</p>
              <h2 className="text-[#1A0A0B] mb-6" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(28px, 3vw, 42px)", lineHeight: 1.2 }}>
                A Home Away From Home for 500+ Students
              </h2>
              <p className="text-[#7A6A5A] mb-5 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
                Sahyadri PG was founded with a single vision: provide students near MIT ADT University with accommodation that doesn't compromise on safety, comfort, or nutrition. What started as a 20-room facility in 2023 has grown into one of Loni Kalbhor's most trusted student residences.
              </p>
              <p className="text-[#7A6A5A] mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
                We believe a student's living environment directly impacts academic performance. That's why we've invested in high-speed internet, nutritious meals, and a safe, supportive community where every student can focus on what matters most — their education.
              </p>
              <div className="flex items-center gap-4">
                <Link to="/contact" className="flex items-center gap-2 bg-[#7B1113] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#9b1416] transition-colors group" style={{ fontFamily: "Inter, sans-serif" }}>
                  Schedule a Visit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:9504059393" className="text-[#7B1113] font-medium text-sm hover:underline" style={{ fontFamily: "Inter, sans-serif" }}>Call: 9504059393</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#1A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)" }}>What Drives Us</h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn delay={0.08}>
              <div className="bg-[#7B1113] rounded-3xl p-10 h-full">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-white mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "26px" }}>Our Mission</h3>
                <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
                  To create a premium, secure, and nurturing living environment where students from across India can focus entirely on their academic and personal growth — without worrying about daily necessities.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-[#DCCFC0]/8 border border-[#DCCFC0]/15 rounded-3xl p-10 h-full">
                <div className="w-14 h-14 bg-[#7B1113]/30 rounded-2xl flex items-center justify-center mb-6">
                  <Eye size={28} className="text-[#DCCFC0]" />
                </div>
                <h3 className="text-white mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "26px" }}>Our Vision</h3>
                <p className="text-[#DCCFC0]/80 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
                  To become the most loved student housing brand in Maharashtra — recognized not just for amenities, but for the community, culture, and confidence we build in every student who calls Sahyadri home.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-[#FAF7F4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[#7B1113] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Your Journey</p>
            <h2 className="text-[#1A0A0B]" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)" }}>
              Why Students Love Living Here
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-[30px] lg:left-1/2 top-6 bottom-6 w-px bg-[#7B1113]/15" />
            <div className="space-y-10">
              {journey.map((step, i) => (
                <FadeIn key={step.title} delay={i * 0.08}>
                  <div className={`relative flex items-start gap-6 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className="flex-1 hidden lg:block" />
                    <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 w-12 h-12 bg-[#7B1113] rounded-2xl flex items-center justify-center z-10 shadow-lg shadow-[#7B1113]/30 shrink-0">
                      <step.icon size={20} className="text-white" />
                    </div>
                    <div className={`flex-1 pl-16 lg:pl-0 ${i % 2 === 0 ? "lg:pl-8" : "lg:pr-8"}`}>
                      <div className="bg-white rounded-2xl p-6 border border-[#7B1113]/8 shadow-sm">
                        <span className="text-[#7B1113] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>{step.year}</span>
                        <h3 className="text-[#1A0A0B] mt-1 mb-2" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "20px" }}>{step.title}</h3>
                        <p className="text-[#7A6A5A] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#EDE5D8]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-[#1A0A0B]" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 42px)" }}>Glimpses of Sahyadri</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              roomDouble,
              roomTriple,
              balcony,
              buildingDay,
              buildingNight,
              bathroom,
            ].map((src, i) => (
              <FadeIn key={i} delay={i * 0.05} className="overflow-hidden rounded-3xl aspect-[4/3] shadow-lg border border-[#7B1113]/5">
                <div className="w-full h-full group cursor-pointer overflow-hidden relative">
                  <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
