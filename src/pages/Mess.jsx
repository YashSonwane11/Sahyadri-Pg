import React from "react";
import { Leaf, Flame, Heart } from "lucide-react";

const mealPlan = [
  {
    meal: "Breakfast",
    time: "7:00 AM – 9:00 AM",
    icon: "☕",
    color: "#C4996A",
    items: ["Poha / Upma / Bread", "Boiled Eggs (alternate days)", "Tea / Coffee / Milk", "Fresh Seasonal Fruit"],
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=500&h=300&fit=crop&auto=format",
  },
  {
    meal: "Lunch",
    time: "12:30 PM – 2:30 PM",
    icon: "🍛",
    color: "#7B1113",
    items: ["2 Rotis / Rice", "Dal / Sambar", "Seasonal Sabzi (2 varieties)", "Salad & Papad"],
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=500&h=300&fit=crop&auto=format",
  },
  {
    meal: "Dinner",
    time: "7:30 PM – 9:30 PM",
    icon: "🍽️",
    color: "#1A0A0B",
    items: ["3 Rotis / Rice", "Dal Tadka / Rajma / Chole", "Paneer/Chicken (alternate)", "Sweet (Wed & Sun)"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop&auto=format",
  },
];

const weeklyMenu = [
  { day: "Monday", breakfast: "Poha + Tea", lunch: "Dal Fry, Jeera Rice, Aloo Sabzi", dinner: "Rajma Rice, Roti, Salad" },
  { day: "Tuesday", breakfast: "Upma + Coffee", lunch: "Sambar Rice, Mixed Veg Curry", dinner: "Paneer Butter Masala, Roti" },
  { day: "Wednesday", breakfast: "Bread Toast + Egg", lunch: "Chole, Puri, Kachumber Salad", dinner: "Dal Tadka, Rice, Kheer" },
  { day: "Thursday", breakfast: "Idli Sambar", lunch: "Palak Dal, Rice, Aloo Gobi", dinner: "Chicken Curry / Soya, Roti" },
  { day: "Friday", breakfast: "Poha + Tea", lunch: "Rajma, Rice, Boondi Raita", dinner: "Mixed Veg, Roti, Dal" },
  { day: "Saturday", breakfast: "Misal Pav + Coffee", lunch: "Dum Aloo, Rice, Raita", dinner: "Special Biryani, Raita, Gulab Jamun" },
  { day: "Sunday", breakfast: "Bread Omelette + Juice", lunch: "Chole Bhature / Pav Bhaji", dinner: "Paneer / Chicken Masala, Roti, Ice Cream" },
];

const nutrition = [
  { icon: Leaf, title: "Fresh & Healthy", desc: "Vegetables sourced from local farms daily. No frozen or processed ingredients." },
  { icon: Flame, title: "Home-Style Cooking", desc: "Prepared by experienced cooks using traditional Indian recipes with minimal oil." },
  { icon: Heart, title: "Balanced Nutrition", desc: "Every meal is nutritionally balanced with proteins, carbs, and essential vitamins." },
];

export default function Mess() {
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
            Healthy & Homely
          </p>
          <h1
            className="text-white"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Mess Package & Menu
          </h1>
        </div>
      </section>

      {/* Daily Meal Plan */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#7B1113] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
              Daily Schedule
            </p>
            <h2
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", color: "#1A0A0B" }}
            >
              Three Nourishing Meals a Day
            </h2>
            <p className="text-[#7A6A5A] mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
              Mess package: <strong className="text-[#7B1113]">₹2,500/month</strong> (optional add-on)
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mealPlan.map((m) => (
              <div key={m.meal} className="bg-white rounded-3xl overflow-hidden border border-[#7B1113]/8 shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <img src={m.image} alt={m.meal} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div>
                      <div className="text-3xl mb-1">{m.icon}</div>
                      <div
                        className="text-white"
                        style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "22px" }}
                      >
                        {m.meal}
                      </div>
                    </div>
                    <div
                      className="text-white/80 text-xs px-2.5 py-1 rounded-full border border-white/30"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {m.time}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-[#7A6A5A]" style={{ fontFamily: "Inter, sans-serif" }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7B1113] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Menu Table */}
      <section className="py-20 bg-[#EDE5D8]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 40px)", color: "#1A0A0B" }}
            >
              Weekly Menu
            </h2>
            <p className="text-[#7A6A5A] mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
              Rotating menu to keep every day delicious and different
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#7B1113]/8 shadow-sm">
            <div className="grid grid-cols-4 bg-[#7B1113] px-6 py-4">
              {["Day", "Breakfast", "Lunch", "Dinner"].map((h) => (
                <div key={h} className="text-white text-sm font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
                  {h}
                </div>
              ))}
            </div>
            {weeklyMenu.map((row, i) => (
              <div
                key={row.day}
                className={`grid grid-cols-4 px-6 py-4 border-b border-[#7B1113]/5 ${i % 2 === 0 ? "bg-[#FAF7F4]/50" : ""}`}
              >
                <div className="text-[#7B1113] font-semibold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{row.day}</div>
                <div className="text-[#7A6A5A] text-sm pr-3" style={{ fontFamily: "Inter, sans-serif" }}>{row.breakfast}</div>
                <div className="text-[#7A6A5A] text-sm pr-3" style={{ fontFamily: "Inter, sans-serif" }}>{row.lunch}</div>
                <div className="text-[#7A6A5A] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{row.dinner}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#7A6A5A] mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
            * Menu subject to seasonal availability. Non-veg served on Thursday, Saturday & Sunday dinners.
          </p>
        </div>
      </section>

      {/* Nutrition Section */}
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
    </div>
  );
}
