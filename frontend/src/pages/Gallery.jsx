import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

import img1 from "../assets/bg-img1.jpg";
import img2 from "../assets/bg-img2.jpg";
import img3 from "../assets/bg-img3.jpg";
import img4 from "../assets/bg-img4.jpg";
import img5 from "../assets/bg-img5.jpg";

/* ================= IMAGES ================= */
const allImages = [
  { id: 1, district: "North", image: img1 },
  { id: 2, district: "North", image: img2 },
  { id: 3, district: "North", image: img3 },
  { id: 4, district: "East", image: img4 },
  { id: 5, district: "East", image: img5 },
  { id: 6, district: "West", image: img1 },
  { id: 7, district: "West", image: img2 },
  { id: 8, district: "South", image: img3 },
  { id: 9, district: "South", image: img4 },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null);

  const districts = ["All", "North", "East", "West", "South"];

  const filtered =
    filter === "All"
      ? allImages
      : allImages.filter((img) => img.district === filter);

  const open = (index) => setCurrentIndex(index);
  const close = () => setCurrentIndex(null);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % filtered.length);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <section className="bg-slate-50 text-gray-800">

      {/* ================= HERO ================= */}
      <div className="text-center py-20 sm:py-24 md:py-28 px-4 bg-gradient-to-br from-primary/10 to-slate-100">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Photo Gallery
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Discover the breathtaking beauty of Sikkim through unforgettable moments.
        </p>
      </div>

      {/* ================= FILTER BUTTONS ================= */}
      <div className="flex flex-wrap justify-center gap-3 py-8 px-4">
        {districts.map((dist) => (
          <motion.button
            whileTap={{ scale: 0.9 }}
            key={dist}
            onClick={() => setFilter(dist)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition
              ${
                filter === dist
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white border hover:bg-primary hover:text-white"
              }`}
          >
            {dist}
          </motion.button>
        ))}
      </div>

      {/* ================= RESPONSIVE GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4 sm:gap-6
          "
        >
          {filtered.map((img, index) => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              onClick={() => open(index)}
            >
              <img
                src={img.image}
                alt={img.district}
                className="w-full h-52 sm:h-56 md:h-60 lg:h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-3">
                <span className="bg-primary text-white text-xs px-2 py-1 rounded-full w-fit">
                  {img.district}
                </span>

                <div className="flex justify-end text-white">
                  <ImageIcon size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-5 text-white"
            >
              <X size={30} />
            </button>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-3 sm:left-6 text-white"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <motion.img
              key={filtered[currentIndex].id}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-h-[80vh] max-w-[95vw] rounded-xl shadow-2xl"
              src={filtered[currentIndex].image}
              alt=""
            />

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-3 sm:right-6 text-white"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
