import React, { useState } from "react";
import { Leaf, Flame, Heart, Calendar, FileText, Image as ImageIcon, ZoomIn, Clock } from "lucide-react";
import messMenuImg from "../assets/mess_menu.jpg";
import messTermsImg from "../assets/mess_terms.jpg";

const mealPlan = [
  {
    meal: "Breakfast",
    time: "8:00 AM – 9:00 AM",
    icon: "☕",
    color: "#C4996A",
    items: [
      "Limited: VadaPav, Aloo Paratha, Bread Patties, Idli Vada, Sandwich, Sabudana Wada",
      "Unlimited: Poha, Upma, Misal Pav, Sabudana Khichdi, Maggi, Udid Bhaji, Pasta",
      "Tea, Coffee & Hot Milk"
    ],
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=500&h=300&fit=crop&auto=format",
  },
  {
    meal: "Lunch",
    time: "12:00 PM – 2:00 PM",
    icon: "🍛",
    color: "#7B1113",
    items: [
      "Unlimited home-style Lunch for monthly members",
      "2 Rotis / Rice, Dal / Sambar, Veg Sabzi",
      "Special items (Chole, Masoor, Chavli, Channa, Matar) as per schedule",
      "Fresh Salad & Papad"
    ],
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=500&h=300&fit=crop&auto=format",
  },
  {
    meal: "Dinner",
    time: "7:30 PM – 9:30 PM",
    icon: "🍽️",
    color: "#1A0A0B",
    items: [
      "Unlimited Dinner for monthly members",
      "Veg Maratha / Paneer Masala / Matki / Bhendi Masala / Shev Bhaji / Flowers as per schedule",
      "Chicken & Egg Curry (on Fridays)",
      "Sunday Special: PavBhaji / Chole Bhature"
    ],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop&auto=format",
  },
];

const weeklyMenuData = [
  { day: "Monday", breakfast: "Pohe", lunch: "Aalu-matar", dinner: "Matki + Bhendi Masala" },
  { day: "Tuesday", breakfast: "Idli-Sambar", lunch: "Chole", dinner: "Mix-veg + Methi" },
  { day: "Wednesday", breakfast: "Misal-pav", lunch: "Masoor", dinner: "Shev-Bhaji + Flower" },
  { day: "Thursday", breakfast: "Shabudana", lunch: "Masala Wanga", dinner: "Paneer Masala + Batata" },
  { day: "Friday", breakfast: "Vada-pav/Pattis", lunch: "Chavli", dinner: "Chicken / Egg + Veg Maratha" },
  { day: "Saturday", breakfast: "Upma/Maggi", lunch: "Channa", dinner: "Kadi-Pakoda + Gavar" },
  { day: "Sunday", breakfast: "Paratha/Puri Bhaji", lunch: "No Lunch (Sunday Schedule)", dinner: "PavBhaji/Chole Bhature" }
];

const termsAndConditions = [
  "Only Monthly Mess members are served Unlimited Food.",
  "Limited Breakfast serves: VadaPav, Aloo Paratha, Bread Patties, Idli Vada, Sandwich, Sabudana Wada.",
  "Unlimited Breakfast serves: Poha, Upma, Misal Pav, Sabudana Khichdi, Maggi, Udid Bhaji, Pasta.",
  "Monthly mess members should pay on their monthly date.",
  "Mess will have officially 2 holidays in one month.",
  "When you go home for holidays (3-4 days, a week, or a month), no extensions or discounts are counted.",
  "Mess will serve compulsory breakfast on Sunday, and alternate Lunch or alternate Dinner on Sunday.",
  "Strict timings are followed: Breakfast (8:00 AM - 9:00 AM), Lunch (12:00 PM - 2:00 PM), Dinner (7:30 PM - 9:30 PM).",
  "Parcel charges will be applicable for room service.",
  "Limited Thali option is available for non-members of the mess.",
  "Menu will change dynamically on a week-to-week basis."
];

const nutrition = [
  { icon: Leaf, title: "Fresh & Healthy", desc: "Vegetables sourced from local markets daily. No frozen or artificial flavorings." },
  { icon: Flame, title: "Home-Style Taste", desc: "Prepared by professional cooks using traditional family recipes with balanced spice levels." },
  { icon: Heart, title: "Balanced Meals", desc: "High protein options, fresh legumes, leafy vegetables, and dairy foods in weekly rotation." },
];

export default function Mess() {
  const [activeTab, setActiveTab] = useState("menu");
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="bg-[#FAF7F4] pt-20">
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567337710282-00832b415979?w=1600&h=500&fit=crop&auto=format')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0B]/90 via-[#1A0A0B]/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
          <p className="text-[#C4996A] text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
            Aaradhya Kitchen
          </p>
          <h1
            className="text-white"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Mess Package & Menu
          </h1>
        </div>
      </section>

      {/* Daily Meal Schedule */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#7B1113] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
              Daily Schedule
            </p>
            <h2
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", color: "#1A0A0B" }}
            >
              Meal Schedule & Timings
            </h2>
            <p className="text-[#7A6A5A] mt-2 max-w-xl mx-auto text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              Our in-house dining service, Aaradhya Kitchen, prepares nutritious, balanced, and hygienic home-style meals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mealPlan.map((m) => (
              <div key={m.meal} className="bg-white rounded-3xl overflow-hidden border border-[#7B1113]/8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img src={m.image} alt={m.meal} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div>
                      <div className="text-2xl mb-1">{m.icon}</div>
                      <div
                        className="text-white"
                        style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "20px" }}
                      >
                        {m.meal}
                      </div>
                    </div>
                    <div
                      className="text-white/90 text-xs px-2.5 py-1 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm flex items-center gap-1.5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <Clock size={12} className="text-[#C4996A]" />
                      {m.time}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#7A6A5A] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7B1113] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Menu & Terms Section */}
      <section className="py-20 bg-[#EDE5D8]/35 border-t border-[#7B1113]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 justify-center mb-12 bg-white/60 p-1.5 rounded-2xl border border-[#7B1113]/10 w-fit mx-auto shadow-sm">
            <button
              onClick={() => setActiveTab("menu")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "menu" ? "bg-[#7B1113] text-white shadow-md" : "text-[#7A6A5A] hover:text-[#7B1113]"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Calendar size={16} /> Weekly Menu
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "terms" ? "bg-[#7B1113] text-white shadow-md" : "text-[#7A6A5A] hover:text-[#7B1113]"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <FileText size={16} /> Terms & Conditions
            </button>
            <button
              onClick={() => setActiveTab("images")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "images" ? "bg-[#7B1113] text-white shadow-md" : "text-[#7A6A5A] hover:text-[#7B1113]"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <ImageIcon size={16} /> Official Menu Cards
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            {activeTab === "menu" && (
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#7B1113]/8 shadow-lg overflow-hidden">
                <h3 className="text-[#1A0A0B] mb-6 text-center" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "24px" }}>
                  Aaradhya Kitchen Weekly Menu
                </h3>
                
                {/* Desktop/Tablet Table view */}
                <div className="hidden md:block overflow-hidden rounded-2xl border border-[#7B1113]/10">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#7B1113] text-white text-sm">
                        <th className="p-4 font-semibold">Day</th>
                        <th className="p-4 font-semibold">Breakfast</th>
                        <th className="p-4 font-semibold">Lunch</th>
                        <th className="p-4 font-semibold">Dinner</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {weeklyMenuData.map((row, i) => (
                        <tr key={row.day} className={`border-b border-[#7B1113]/5 ${i % 2 === 0 ? "bg-[#FAF7F4]/40" : "bg-white"}`}>
                          <td className="p-4 font-bold text-[#7B1113]">{row.day}</td>
                          <td className="p-4 text-[#7A6A5A] font-medium">{row.breakfast}</td>
                          <td className={`p-4 font-medium ${row.lunch.includes("No Lunch") ? "text-[#7B1113]/50 italic" : "text-[#7A6A5A]"}`}>{row.lunch}</td>
                          <td className="p-4 text-[#7A6A5A] font-medium">{row.dinner}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile list view */}
                <div className="block md:hidden space-y-4">
                  {weeklyMenuData.map((row) => (
                    <div key={row.day} className="bg-[#FAF7F4] rounded-2xl p-5 border border-[#7B1113]/8 shadow-sm">
                      <div className="text-[#7B1113] font-bold text-lg border-b border-[#7B1113]/10 pb-2 mb-3">
                        {row.day}
                      </div>
                      <div className="space-y-2.5 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#1A0A0B]/40 font-medium">Breakfast:</span>
                          <span className="text-[#7A6A5A] font-semibold text-right">{row.breakfast}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#1A0A0B]/40 font-medium">Lunch:</span>
                          <span className={`font-semibold text-right ${row.lunch.includes("No Lunch") ? "text-[#7B1113]/50 italic" : "text-[#7A6A5A]"}`}>{row.lunch}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#1A0A0B]/40 font-medium">Dinner:</span>
                          <span className="text-[#7A6A5A] font-semibold text-right">{row.dinner}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "terms" && (
              <div className="bg-white rounded-3xl p-6 md:p-10 border border-[#7B1113]/8 shadow-lg">
                <h3 className="text-[#1A0A0B] mb-8 text-center" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "24px" }}>
                  Dining Policies & Terms
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {termsAndConditions.map((term, index) => (
                    <div key={index} className="flex gap-4 p-3.5 rounded-2xl hover:bg-[#FAF7F4] transition-colors border border-transparent hover:border-[#7B1113]/5">
                      <div className="w-7 h-7 bg-[#7B1113]/10 text-[#7B1113] rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm text-[#7A6A5A] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                        {term}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "images" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Menu Card */}
                <div className="bg-white rounded-3xl p-5 border border-[#7B1113]/8 shadow-md flex flex-col justify-between">
                  <div>
                    <h4 className="text-[#1A0A0B] text-center mb-3 font-semibold" style={{ fontFamily: "Playfair Display, serif" }}>
                      Weekly Menu Card
                    </h4>
                    <p className="text-[#7A6A5A] text-xs text-center mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                      Official printed menu sheet for Aaradhya Kitchen
                    </p>
                  </div>
                  <div
                    className="relative rounded-2xl overflow-hidden border border-[#DCCFC0] cursor-pointer group aspect-[3/4]"
                    onClick={() => setLightboxImage(messMenuImg)}
                  >
                    <img src={messMenuImg} alt="Weekly Menu Card" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#1A0A0B]/0 group-hover:bg-[#1A0A0B]/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-[#7B1113] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                        <ZoomIn size={20} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms Card */}
                <div className="bg-white rounded-3xl p-5 border border-[#7B1113]/8 shadow-md flex flex-col justify-between">
                  <div>
                    <h4 className="text-[#1A0A0B] text-center mb-3 font-semibold" style={{ fontFamily: "Playfair Display, serif" }}>
                      Terms & Conditions Card
                    </h4>
                    <p className="text-[#7A6A5A] text-xs text-center mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                      Official printed policy guidelines sheet
                    </p>
                  </div>
                  <div
                    className="relative rounded-2xl overflow-hidden border border-[#DCCFC0] cursor-pointer group aspect-[3/4]"
                    onClick={() => setLightboxImage(messTermsImg)}
                  >
                    <img src={messTermsImg} alt="Terms & Conditions Card" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#1A0A0B]/0 group-hover:bg-[#1A0A0B]/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-[#7B1113] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                        <ZoomIn size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Our Mess Stands Out */}
      <section className="py-20 bg-[#7B1113]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-white"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 40px)" }}
            >
              Why Our Mess Stands Out
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nutrition.map((n) => (
              <div key={n.title} className="bg-white/10 border border-white/20 rounded-2xl p-7 text-center">
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <n.icon size={24} className="text-[#DCCFC0]" />
                </div>
                <h3
                  className="text-white mb-3"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "20px" }}
                >
                  {n.title}
                </h3>
                <p className="text-[#DCCFC0]/80 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {n.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-2xl w-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#DCCFC0] z-10 bg-[#7B1113]/80 p-2.5 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-2" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="relative rounded-2xl overflow-hidden bg-[#1A0A0B] p-2 border border-[#7B1113]/10 w-full flex justify-center">
              <img src={lightboxImage} alt="Fullscreen Menu Card" className="max-w-full max-h-[80vh] object-contain rounded-xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
