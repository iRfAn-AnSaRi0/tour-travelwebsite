import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapPin } from "lucide-react";

import img1 from "../assets/bg-img1.jpg";
import img2 from "../assets/bg-img2.jpg";
import img3 from "../assets/bg-img3.jpg";
import img4 from "../assets/bg-img4.jpg";
import img5 from "../assets/bg-img5.jpg";

const destinations = [
  { id: 1, image: img1, place: "Lachung Valley", location: "North Sikkim" },
  { id: 2, image: img2, place: "Tsomgo Lake", location: "East Sikkim" },
  { id: 3, image: img3, place: "Yumthang Valley", location: "North Sikkim" },
  { id: 4, image: img4, place: "Gangtok City View", location: "Gangtok" },
  { id: 5, image: img5, place: "Zuluk Silk Route", location: "East Sikkim" },
  { id: 6, image: img4, place: "Namchi Hills", location: "South Sikkim" },
];

export default function PopularDestinations() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 px-5 sm:px-10 md:px-20 bg-gradient-to-b from-white to-slate-50">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Popular Destinations
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover the most breathtaking places in Sikkim
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <div
            key={dest.id}
            data-aos="fade-up"
            data-aos-delay={index * 100} // stagger animation
            className="relative h-72 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={dest.image}
              alt={dest.place}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* TEXT */}
            <div className="absolute bottom-6 left-6 text-white space-y-2 translate-y-3 group-hover:translate-y-0 transition duration-500">
              {/* Location badge */}
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-fit text-xs">
                <MapPin size={14} />
                {dest.location}
              </div>

              {/* Place name */}
              <h3 className="text-xl text-white font-semibold">{dest.place}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
