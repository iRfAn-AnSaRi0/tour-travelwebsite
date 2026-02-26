


import React, { useRef } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

const reviews = [
  {
    id: 1,
    name: "Ananya Sharma",
    avatar: avatar1,
    rating: 5,
    review:
      "Amazing experience! The guides were professional and the views were breathtaking.",
  },
  {
    id: 2,
    name: "Rohit Verma",
    avatar: avatar2,
    rating: 4,
    review:
      "Loved the tour packages. Everything was well organized and comfortable.",
  },
  {
    id: 3,
    name: "Priya Das",
    avatar: avatar3,
    rating: 5,
    review:
      "A trip of a lifetime! Sikkim is magical and the team made it seamless.",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  const scrollLeft = () =>
    sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });

  const scrollRight = () =>
    sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });

  return (
    <section className="py-20 px-5 sm:px-10 md:px-20 bg-gradient-to-b from-white to-slate-50">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          What Our Travelers Say
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Real stories from people who explored Sikkim with us.
        </p>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="
                snap-start
                min-w-[85%] sm:min-w-[48%] md:min-w-[32%]
                bg-white rounded-3xl p-7
                shadow-md hover:shadow-2xl
                transition
                relative
              "
            >
              {/* Quote Icon */}
              <Quote
                size={26}
                className="absolute top-5 right-5 text-primary opacity-20"
              />

              {/* USER */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />

                <div>
                  <h4 className="font-semibold text-gray-800">
                    {rev.name}
                  </h4>

                  {/* Stars */}
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < rev.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* REVIEW TEXT */}
              <p className="text-sm text-gray-600 leading-relaxed">
                “{rev.review}”
              </p>
            </div>
          ))}
        </div>

        {/* ================= ARROWS ================= */}
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
