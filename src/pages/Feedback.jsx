import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ThumbsUp, Quote } from "lucide-react";

import balcony from "../assets/balcony.png";

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

const reviews = [
  { id: 1, name: "Priya Sharma", college: "B.Tech CSE — MIT ADT", rating: 5, date: "March 2024", review: "The best PG experience! Food is amazing — just like home-cooked meals. Security is excellent and WiFi never fails even during exam season.", initials: "PS", color: "linear-gradient(135deg, #7B1113, #a21a1d)", helpful: 14 },
  { id: 2, name: "Rahul Deshmukh", college: "MBA — MIT ADT", rating: 5, date: "February 2024", review: "Clean, well-maintained, and professionally managed. The warden addresses any issue within hours. Highly recommend for working professionals too.", initials: "RD", color: "linear-gradient(135deg, #C4996A, #dfb485)", helpful: 11 },
  { id: 3, name: "Sneha Patil", college: "B.Pharm — MIT ADT", rating: 5, date: "January 2024", review: "Been here 2 years. The community is wonderful. Festivals are celebrated together, birthdays never go unnoticed. Made lifelong friends here.", initials: "SP", color: "linear-gradient(135deg, #2A4858, #406f87)", helpful: 9 },
  { id: 4, name: "Arjun Kulkarni", college: "M.Tech — MIT ADT", rating: 4, date: "December 2023", review: "Great value for money. Triple sharing rooms are spacious. Power backup is a real lifesaver during load shedding months.", initials: "AK", color: "linear-gradient(135deg, #4A3E3D, #705f5d)", helpful: 7 },
  { id: 5, name: "Anjali Mishra", college: "BCA — MIT ADT", rating: 5, date: "November 2023", review: "As a girl from UP, I was nervous about Pune. Sahyadri PG made the transition easy. The all-girls floor has excellent security and the warden aunty is like a second mother.", initials: "AM", color: "linear-gradient(135deg, #7B1113, #a21a1d)", helpful: 18 },
  { id: 6, name: "Vikram Nair", college: "B.Tech IT — MIT ADT", rating: 4, date: "October 2023", review: "The Sunday special menu is something I look forward to every week. Internet speed is genuinely fast — attended online internship interviews without any issues.", initials: "VN", color: "linear-gradient(135deg, #2A4858, #406f87)", helpful: 5 },
];

const totalRatings = { 5: 312, 4: 87, 3: 22, 2: 8, 1: 3 };
const totalCount = Object.values(totalRatings).reduce((a, b) => a + b, 0);
const avgRating = (Object.entries(totalRatings).reduce((sum, [s, c]) => sum + Number(s) * c, 0) / totalCount).toFixed(1);

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((s) => (
        <button key={s} type="button" onClick={() => onChange(s)} onMouseEnter={() => setHovered(s)} onMouseLeave={() => setHovered(0)} className="transition-transform hover:scale-125">
          <Star size={32} className={`${s <= (hovered || value) ? "text-[#C4996A] fill-[#C4996A]" : "text-[#DCCFC0]"} transition-colors`} />
        </button>
      ))}
    </div>
  );
}

function RatingBar({ star, count, total, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex items-center gap-3">
      <span className="text-[#DCCFC0]/60 text-sm w-4 text-right" style={{ fontFamily: "Inter, sans-serif" }}>{star}</span>
      <Star size={12} className="text-[#C4996A] fill-[#C4996A] shrink-0" />
      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#7B1113] to-[#C4996A] rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${(count / total) * 100}%` } : {}}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
      <span className="text-[#DCCFC0]/50 text-xs w-8" style={{ fontFamily: "Inter, sans-serif" }}>{count}</span>
    </div>
  );
}

export default function Feedback() {
  const [form, setForm] = useState({ name: "", rating: 0, comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [likedIds, setLikedIds] = useState(new Set());

  const handleLike = (id) => {
    setLikedIds((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  return (
    <div className="bg-[#FAF7F4] pt-20">

      {/* ─── Hero ─── */}
      <section className="relative h-64 flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${balcony})` }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/92 via-[#1A0A0B]/45 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
          <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "clamp(34px, 5vw, 66px)" }}>
            Student Feedback
          </h1>
        </div>
      </section>

      {/* ─── Rating Summary ─── */}
      <section className="py-20 bg-[#1A0A0B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeUp className="text-center">
              <div className="text-[#DCCFC0]/50 text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                Overall Rating
              </div>
              <div className="text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "100px", lineHeight: 1 }}>
                {avgRating}
              </div>
              <div className="flex justify-center gap-1.5 my-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={26} className="text-[#C4996A] fill-[#C4996A]" />)}
              </div>
              <p className="text-[#DCCFC0]/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                Based on <strong className="text-[#DCCFC0]">{totalCount}</strong> student reviews
              </p>
            </FadeUp>

            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((star, i) => (
                <FadeUp key={star} delay={i * 0.08}>
                  <RatingBar star={star} count={totalRatings[star]} total={totalCount} delay={i * 0.1} />
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Review Cards ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-12">
            <h2 className="text-[#1A0A0B]" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 38px)" }}>
              What Students Are Saying
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <FadeUp key={r.id} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-7 border border-[#7B1113]/8 hover:shadow-xl hover:shadow-[#7B1113]/5 transition-all duration-300 h-full flex flex-col">
                  <Quote size={22} className="text-[#7B1113]/20 mb-4" />
                  <p className="text-[#7A6A5A] text-sm leading-relaxed mb-5 flex-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    "{r.review}"
                  </p>
                  <div>
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={13} className={j < r.rating ? "text-[#C4996A] fill-[#C4996A]" : "text-[#DCCFC0]"} />
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-xs ring-1 ring-[#7B1113]/10 shrink-0 select-none"
                          style={{ background: r.color, fontFamily: "Inter, sans-serif" }}
                        >
                          {r.initials}
                        </div>
                        <div>
                          <div className="text-[#1A0A0B] text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>{r.name}</div>
                          <div className="text-[#7A6A5A] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{r.college}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleLike(r.id)}
                        className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all ${likedIds.has(r.id) ? "bg-[#7B1113]/10 text-[#7B1113]" : "text-[#7A6A5A] hover:text-[#7B1113]"}`}
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <ThumbsUp size={12} className={likedIds.has(r.id) ? "fill-[#7B1113]" : ""} />
                        {r.helpful + (likedIds.has(r.id) ? 1 : 0)}
                      </button>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Feedback Form ─── */}
      <section className="py-20 bg-[#EDE5D8]/35">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-10">
            <h2 className="text-[#1A0A0B]" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 40px)" }}>
              Share Your Experience
            </h2>
            <p className="text-[#7A6A5A] mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
              Your feedback helps us improve and helps future students choose wisely.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="bg-white rounded-3xl p-8 border border-[#7B1113]/8 shadow-sm">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="text-6xl mb-5">🙏</div>
                  <h3 className="text-[#7B1113] mb-2" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "24px" }}>Thank You!</h3>
                  <p className="text-[#7A6A5A]" style={{ fontFamily: "Inter, sans-serif" }}>
                    Your review has been submitted and will appear after moderation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (form.rating > 0) setSubmitted(true); }} className="space-y-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#7A6A5A] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#FAF7F4] border border-[#DCCFC0] rounded-xl px-4 py-3 text-sm text-[#1A0A0B] focus:outline-none focus:border-[#7B1113] focus:ring-2 focus:ring-[#7B1113]/10 transition-all placeholder:text-[#7A6A5A]/40"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#7A6A5A] mb-3 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>Your Rating *</label>
                    <StarPicker value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
                    {form.rating === 0 && <p className="text-xs text-[#7A6A5A] mt-2" style={{ fontFamily: "Inter, sans-serif" }}>Tap a star to rate</p>}
                    {form.rating > 0 && (
                      <p className="text-xs text-[#7B1113] mt-2 font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                        {["", "Poor", "Fair", "Good", "Very Good", "Excellent!"][form.rating]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#7A6A5A] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>Your Review *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Share your experience at Sahyadri PG..."
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      className="w-full bg-[#FAF7F4] border border-[#DCCFC0] rounded-xl px-4 py-3 text-sm text-[#1A0A0B] focus:outline-none focus:border-[#7B1113] focus:ring-2 focus:ring-[#7B1113]/10 transition-all placeholder:text-[#7A6A5A]/40 resize-none"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-[#7B1113] text-white py-4 rounded-2xl font-semibold hover:bg-[#9b1416] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Submit Review
                  </motion.button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
