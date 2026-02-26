
// import React, { useState, useMemo, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   MapPin,
//   Mountain,
//   Camera,
//   TreePalm,
//   Search,
//   Car,
//   Wallet,
//   ShieldCheck,
// } from "lucide-react";
// import northImg from "../assets/NorthSikkim.jpg";
// import southImg from "../assets/SouthSikkim.jpg";
// import eastImg from "../assets/EastSikkim.jpg";
// import westImg from "../assets/WestSikkim.jpg";

// /*
// FIXES DONE
// ✅ Benefits icons added (Car, Wallet, Shield)
// ✅ Benefits section moved BELOW destination cards
// ✅ CTA background removed (now light section, not same as footer)
// ✅ Cleaner spacing + hierarchy
// */
// /* ------------------------------------------------ */

// const districts = [
//   {
//     id: 1,
//     name: "North Sikkim",
//     image: northImg,
//     icon: Mountain,
//     highlights: ["Gurudongmar Lake", "Yumthang Valley", "Lachen & Lachung"],
//     description:
//       "Snow peaks and high-altitude lakes perfect for adventure lovers.",
//   },
//   {
//     id: 2,
//     name: "South Sikkim",
//     image: southImg,
//     icon: TreePalm,
//     highlights: ["Namchi", "Temi Tea Garden", "Char Dham"],
//     description: "Tea estates, monasteries and peaceful cultural retreats.",
//   },
//   {
//     id: 3,
//     name: "East Sikkim",
//     image: eastImg,
//     icon: MapPin,
//     highlights: ["Gangtok", "Tsomgo Lake", "MG Marg"],
//     description: "City life mixed with breathtaking mountain scenery.",
//   },
//   {
//     id: 4,
//     name: "West Sikkim",
//     image: westImg,
//     icon: Camera,
//     highlights: ["Pelling", "Kanchenjunga Views", "Waterfalls"],
//     description: "Historic ruins and the best photography spots in Sikkim.",
//   },
// ];

// export default function Destination() {
//   const [search, setSearch] = useState("");

//   const filtered = useMemo(() => {
//     return districts.filter((d) =>
//       (d.name + d.description + d.highlights.join(" "))
//         .toLowerCase()
//         .includes(search.toLowerCase()),
//     );
//   }, [search]);

//   return (
//     <section className="bg-slate-50 text-gray-800">
//       {/* ================= HERO ================= */}
//       <div className="py-28 px-6 text-center max-w-5xl mx-auto">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-5xl md:text-6xl font-bold mb-6"
//         >
//           Explore the Beauty of <span className="text-primary">Sikkim</span>
//         </motion.h1>

//         <p className="text-gray-600 text-lg mb-10">
//           Mountains, lakes, monasteries and unforgettable journeys — all in one
//           place.
//         </p>

//         {/* SEARCH */}
//         <div className="relative max-w-xl mx-auto">
//           <Search
//             className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//             size={18}
//           />
//           <input
//   aria-label="Search destinations in Sikkim"
//   value={search}
//   onChange={(e) => setSearch(e.target.value)}
//   placeholder="Search destinations..."
//   className="w-full pl-11 pr-4 py-3 rounded-2xl border shadow-sm focus:ring-2 focus:ring-primary outline-none"
// />
//         </div>
//       </div>



//       {/* ================= DESTINATIONS ================= */}
//       <div className="max-w-7xl mx-auto px-6 pb-24">
//   {filtered.length === 0 ? (
//     <div className="text-center text-gray-500 py-20">
//       <p className="text-lg font-semibold">No destinations found 😕</p>
//       <p className="text-sm mt-2">
//         Try searching for{" "}
//         <span className="font-medium text-gray-700">Gangtok</span>,{" "}
//         <span className="font-medium text-gray-700">North</span> or{" "}
//         <span className="font-medium text-gray-700">Lake</span>
//       </p>
//     </div>
//   ) : (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//       {filtered.map((d, index) => {
//         const Icon = d.icon;
//         return (
//           <motion.div
//             key={d.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.08 }}
//             viewport={{ once: true }}
//             className="group"
//           >
//             <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
//               <div className="relative overflow-hidden">
//                 <img
//                   src={d.image}
//                   alt={d.name}
//                   className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
//                 />
//                 <div className="absolute top-3 left-3 bg-white p-2 rounded-xl shadow">
//                   <Icon size={18} className="text-primary" />
//                 </div>
//               </div>

//               <div className="p-5 space-y-3">
//                 <h3 className="font-semibold text-lg">{d.name}</h3>
//                 <p className="text-sm text-gray-600">{d.description}</p>

//                 <ul className="text-xs text-gray-500 space-y-1">
//                   {d.highlights.map((place, i) => (
//                     <li key={i}>• {place}</li>
//                   ))}
//                 </ul>

//                 <button className="w-full mt-3 bg-primary text-white py-2 rounded-xl hover:opacity-90 transition">
//                   Explore Now
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   )}
// </div>


//       {/* ================= BENEFITS (MOVED BELOW CARDS + ICONS) ================= */}
//       <div className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
//         {[
//           { title: "Easy Travel", icon: Car },
//           { title: "Affordable Packages", icon: Wallet },
//           { title: "Trusted Guides", icon: ShieldCheck },
//         ].map((item, i) => {
//           const Icon = item.icon;
//           return (
//             <div
//               key={i}
//               className="bg-white p-8 rounded-2xl shadow-sm text-center"
//             >
//               <Icon size={28} className="mx-auto text-primary mb-3" />
//               <p className="font-semibold">{item.title}</p>
//               <p className="text-sm text-gray-500 mt-2">
//                 Comfortable experiences designed for every type of traveler.
//               </p>
//             </div>
//           );
//         })}
//       </div>

//       {/* ================= CTA (LIGHT, NO PRIMARY BG) ================= */}
//       <div className="bg-slate-100 text-gray-800 text-center py-20 px-6">
//         <h3 className="text-2xl font-semibold mb-4">
//           Ready for your next adventure?
//         </h3>
//         <button className="bg-primary text-white px-8 py-3 rounded-2xl font-semibold shadow">
//           Plan Your Journey
//         </button>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import { MapPin, Mountain, Camera, TreePalm, Car, Wallet, ShieldCheck, Search } from "lucide-react";
import northImg from "../assets/NorthSikkim.jpg";
import southImg from "../assets/SouthSikkim.jpg";
import eastImg from "../assets/EastSikkim.jpg";
import westImg from "../assets/WestSikkim.jpg";

/* -------------------- DATA -------------------- */
const districts = [
  {
    id: 1,
    name: "North Sikkim",
    image: northImg,
    icon: Mountain,
    highlights: ["Gurudongmar Lake", "Yumthang Valley", "Lachen & Lachung"],
    description: "Snow peaks and high-altitude lakes perfect for adventure lovers.",
  },
  {
    id: 2,
    name: "South Sikkim",
    image: southImg,
    icon: TreePalm,
    highlights: ["Namchi", "Temi Tea Garden", "Char Dham"],
    description: "Tea estates, monasteries and peaceful cultural retreats.",
  },
  {
    id: 3,
    name: "East Sikkim",
    image: eastImg,
    icon: MapPin,
    highlights: ["Gangtok", "Tsomgo Lake", "MG Marg"],
    description: "City life mixed with breathtaking mountain scenery.",
  },
  {
    id: 4,
    name: "West Sikkim",
    image: westImg,
    icon: Camera,
    highlights: ["Pelling", "Kanchenjunga Views", "Waterfalls"],
    description: "Historic ruins and the best photography spots in Sikkim.",
  },
];

/* -------------------- COMPONENT -------------------- */
export default function Destination() {
  const [search, setSearch] = useState("");

  // Filter districts by search
  const filtered = districts.filter((d) =>
    (d.name + d.description + d.highlights.join(" ")).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-slate-50 text-gray-800">
      {/* HERO */}
      <div className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Explore the Beauty of <span className="text-primary">Sikkim</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Mountains, lakes, monasteries and unforgettable journeys — all in one place.
        </p>

        {/* SEARCH */}
        {/* <div className="relative max-w-xl mx-auto">
          <Search
             className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            aria-label="Search destinations in Sikkim"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search destinations..."
            className="w-full pl-4 pr-4 py-3 rounded-2xl border shadow-sm focus:ring-2 focus:ring-primary outline-none"
          />
        </div> */}
        <div className="relative max-w-xl mx-auto">
  <Search
    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
    size={18}
  />

  <input
    aria-label="Search destinations in Sikkim"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search destinations..."
    className="
      w-full
      pl-11 pr-4 py-3
      rounded-2xl
      border border-gray-200
      shadow-sm
      focus:ring-2 focus:ring-primary
      focus:border-primary
      outline-none
    "
  />
</div>

      </div>

      {/* DESTINATIONS GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            <p className="text-lg font-semibold">No destinations found 😕</p>
            <p className="text-sm mt-2">
              Try searching for <span className="font-medium text-gray-700">Gangtok</span>,{" "}
              <span className="font-medium text-gray-700">North</span> or{" "}
              <span className="font-medium text-gray-700">Lake</span>
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((d, index) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition transform hover:scale-105 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white p-2 rounded-xl shadow">
                      <Icon size={18} className="text-primary" />
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-semibold text-lg">{d.name}</h3>
                    <p className="text-sm text-gray-600">{d.description}</p>

                    <ul className="text-xs text-gray-500 space-y-1">
                      {d.highlights.map((place, i) => (
                        <li key={i}>• {place}</li>
                      ))}
                    </ul>

                    <button className="w-full mt-3 bg-primary text-white py-2 rounded-xl hover:opacity-90 transition">
                      Explore Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* BENEFITS */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-8">
        {[{ title: "Easy Travel", icon: Car }, { title: "Affordable Packages", icon: Wallet }, { title: "Trusted Guides", icon: ShieldCheck }].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm text-center animate-fadeIn"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Icon size={28} className="mx-auto text-primary mb-3" />
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500 mt-2">
                Comfortable experiences designed for every type of traveler.
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="bg-slate-100 text-gray-800 text-center py-16 px-6">
        <h3 className="text-2xl font-semibold mb-4">Ready for your next adventure?</h3>
        <button className="bg-primary text-white px-6 py-2 rounded-2xl font-semibold shadow hover:bg-secondary transition">
          Plan Your Journey
        </button>
      </div>

      {/* ------------------ CSS for fade-in ------------------ */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
