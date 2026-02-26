

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import img1 from "../assets/bg-img1.jpg";
import img2 from "../assets/bg-img2.jpg";
import img3 from "../assets/bg-img3.jpg";
import img4 from "../assets/bg-img4.jpg";
import img5 from "../assets/bg-img5.jpg";

const packages = [
  {
    id: 1,
    image: img1,
    title: "North Sikkim 5D/4N",
    duration: "5 Days / 4 Nights",
    oldPrice: "₹30,000",
    newPrice: "₹25,000",
  },
  {
    id: 2,
    image: img2,
    title: "Tsomgo Lake Trip",
    duration: "1 Day",
    oldPrice: "₹4,000",
    newPrice: "₹3,500",
  },
  {
    id: 3,
    image: img3,
    title: "Yumthang Valley Tour",
    duration: "2 Days / 1 Night",
    oldPrice: "₹9,000",
    newPrice: "₹8,000",
  },
  {
    id: 4,
    image: img4,
    title: "Gangtok City Tour",
    duration: "1 Day",
    oldPrice: "₹4,500",
    newPrice: "₹4,000",
  },
  {
    id: 5,
    image: img5,
    title: "Zuluk Silk Route",
    duration: "3 Days / 2 Nights",
    oldPrice: "₹14,000",
    newPrice: "₹12,000",
  },
  {
    id: 6,
    image: img1,
    title: "Lachen–Lachung Trek",
    duration: "4 Days / 3 Nights",
    oldPrice: "₹20,000",
    newPrice: "₹18,000",
  },
];

export default function TourPackages() {
  const sliderRef = useRef(null);

  const scrollLeft = () =>
    sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });

  const scrollRight = () =>
    sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });

  return (
    <section className="py-20 px-5 sm:px-10 md:px-20 bg-slate-50">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Popular Tour Packages
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Hand-picked packages designed for comfort, adventure and unforgettable
          memories in Sikkim.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="
                snap-start
                min-w-[85%] sm:min-w-[48%] md:min-w-[32%]
                bg-white rounded-3xl overflow-hidden
                shadow-md hover:shadow-2xl transition
              "
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-52 object-cover"
                />

                {/* DISCOUNT BADGE */}
                <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full shadow">
                  Limited Offer
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-3">
                <h3 className="font-semibold text-lg text-gray-800">
                  {pkg.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={14} />
                  {pkg.duration}
                </div>

                {/* PRICE */}
                <div className="flex items-end gap-2">
                  <span className="text-gray-400 line-through text-sm">
                    {pkg.oldPrice}
                  </span>
                  <span className="text-primary font-bold text-xl">
                    {pkg.newPrice}
                  </span>
                </div>

                <button className="w-full mt-3 bg-primary text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ARROWS (DESKTOP) */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-6 bg-white shadow p-3 rounded-full hover:bg-primary hover:text-white transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 bg-white shadow p-3 rounded-full hover:bg-primary hover:text-white transition"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
