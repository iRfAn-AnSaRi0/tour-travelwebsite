import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Tag, ShieldCheck, Wallet, Car } from "lucide-react";

import img1 from "../assets/bg-img1.jpg";
import img2 from "../assets/bg-img2.jpg";
import img3 from "../assets/bg-img3.jpg";
import img4 from "../assets/bg-img4.jpg";
import img5 from "../assets/bg-img5.jpg";

/* ================= DATA ================= */
const packagesByDistrict = {
  North: [
    {
      id: 1,
      title: "North Sikkim 5D/4N",
      duration: "5 Days / 4 Nights",
      price: 25000,
      oldPrice: 30000,
      image: img1,
    },
    {
      id: 2,
      title: "Yumthang Valley Tour",
      duration: "2 Days / 1 Night",
      price: 8000,
      oldPrice: 10000,
      image: img3,
    },
    {
      id: 3,
      title: "Lachen-Lachung Trek",
      duration: "4 Days / 3 Nights",
      price: 18000,
      oldPrice: 22000,
      image: img1,
    },
  ],
  East: [
    {
      id: 4,
      title: "Tsomgo Lake Trip",
      duration: "1 Day",
      price: 3500,
      oldPrice: 4000,
      image: img2,
    },
    {
      id: 5,
      title: "Gangtok City Tour",
      duration: "1 Day",
      price: 4000,
      oldPrice: 4500,
      image: img4,
    },
  ],
  West: [
    {
      id: 6,
      title: "Zuluk Silk Route",
      duration: "3 Days / 2 Nights",
      price: 12000,
      oldPrice: 15000,
      image: img5,
    },
    {
      id: 7,
      title: "Rumtek & Monastery Trip",
      duration: "1 Day",
      price: 3000,
      oldPrice: 3500,
      image: img3,
    },
  ],
  South: [
    {
      id: 8,
      title: "Pelling Adventure",
      duration: "2 Days / 1 Night",
      price: 7500,
      oldPrice: 9000,
      image: img2,
    },
  ],
};
/* ======================================== */

export default function TourPackages() {
  const [active, setActive] = useState("All");

  const districts = ["All", ...Object.keys(packagesByDistrict)];

  const filteredPackages = useMemo(() => {
    let list = [];

    Object.entries(packagesByDistrict).forEach(([district, pkgs]) => {
      if (active === "All" || active === district) {
        pkgs.forEach((p) => list.push({ ...p, district }));
      }
    });

    return list;
  }, [active]);

  return (
    <section className="bg-slate-50 text-gray-800">
      {/* ================= HERO ================= */}
      <div className="py-24 text-center px-6 bg-gradient-to-r from-slate-100 to-white">
        <h1 className="text-5xl font-bold mb-4">
          Discover Amazing <span className="text-primary">Tour Packages</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Handcrafted trips across Sikkim with transport, stay & guide included.
        </p>
      </div>

      {/* ================= DISTRICT FILTER ================= */}
      <div className="flex flex-wrap justify-center gap-3 my-12 px-4">
        {districts.map((d) => (
          <button
            key={d}
            onClick={() => setActive(d)}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition
              ${
                active === d
                  ? "bg-primary text-white shadow"
                  : "bg-white border hover:bg-gray-100"
              }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* ================= PACKAGES GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg, i) => {
          const discount = Math.round(
            ((pkg.oldPrice - pkg.price) / pkg.oldPrice) * 100,
          );

          return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition group"
            >
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-52 w-full object-cover group-hover:scale-105 transition"
                />

                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-lg flex items-center gap-1">
                  <Tag size={12} /> {discount}% OFF
                </span>
              </div>

              <div className="p-5 space-y-3">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin size={14} /> {pkg.district} Sikkim
                </p>

                <h3 className="font-semibold text-lg">{pkg.title}</h3>

                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock size={14} /> {pkg.duration}
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-gray-400 line-through text-sm">
                    ₹{pkg.oldPrice.toLocaleString()}
                  </span>
                  <span className="text-primary font-bold text-xl">
                    ₹{pkg.price.toLocaleString()}
                  </span>
                </div>

                <button className="w-full mt-3 bg-primary text-white py-2 rounded-xl hover:opacity-90 transition">
                  Book Now
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 text-center">
          {[
            { title: "Safe Travel", icon: ShieldCheck },
            { title: "Best Price Guarantee", icon: Wallet },
            { title: "Comfortable Transport", icon: Car },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="p-8 rounded-2xl shadow-sm">
                <Icon size={30} className="mx-auto text-primary mb-4" />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">
                  Enjoy stress-free journeys with professional service.
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <div className="bg-slate-100 py-24">
        <div className="text-center mb-14 px-6">
          <h3 className="text-3xl font-bold mb-3">How It Works</h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Booking your Sikkim trip is simple, fast, and hassle-free.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              step: "01",
              title: "Choose Your Package",
              desc: "Browse curated tour packages across North, East, West and South Sikkim.",
            },
            {
              step: "02",
              title: "Confirm & Book",
              desc: "Select your dates, confirm availability and book securely online.",
            },
            {
              step: "03",
              title: "Enjoy the Journey",
              desc: "Sit back and relax — transport, stays and guides are taken care of.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition relative"
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-6 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-xl font-bold">
                {item.step}
              </div>

              <h4 className="text-lg font-semibold mt-6 mb-3">{item.title}</h4>

              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
