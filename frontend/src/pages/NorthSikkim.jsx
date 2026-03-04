// src/pages/NorthSikkim.jsx
import React from "react";
import { motion } from "framer-motion";

const attractions = [
  {
    name: "Lachung",
    image:
      "https://images.unsplash.com/photo-1540576538770-facacabfbf2b?auto=format&fit=crop&w=900&q=80",
    description: "A scenic Himalayan village and gateway to Yumthang Valley.",
  },
  {
    name: "Yumthang Valley",
    image:
      "https://images.unsplash.com/photo-1704991754173-46b72b237e8e?auto=format&fit=crop&w=900&q=80",
    description: "Famous Valley of Flowers surrounded by snow peaks.",
  },
  {
    name: "Gurudongmar Lake",
    image:
      "https://images.unsplash.com/photo-1585914285280-72bae40d4b3a?auto=format&fit=crop&w=900&q=80",
    description: "Sacred high-altitude lake with crystal-clear waters.",
  },
  {
    name: "Zero Point",
    image:
      "https://images.unsplash.com/photo-1739812366836-312149280c01?auto=format&fit=crop&w=900&q=80",
    description: "Snow-covered destination at extreme altitude.",
  },
  {
    name: "Lachen",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQQATGSgGRfPiV_WROko3lnFfznFby_U_Q0VABs9YFP2M09wCw1IlfVhpnbYJtI2y3kAo5GVvgJKrH96ZELwU7Usn8&s=19?auto=format&fit=crop&w=900&q=80",
    description: "Traditional mountain village near Gurudongmar Lake.",
  },
  {
    name: "Thangu Valley",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQzzSR9aHchjUjADUUqmnHghnIkxPMtBDNwld8iWTuVmqyxBsCAtPSaTRtn7s8Iwf1bqL4ue7HUqUwZDOsNLzqziwI&s=19?auto=format&fit=crop&w=900&q=80",
    description: "High-altitude valley with breathtaking alpine landscapes.",
  },
];

const scenicViews = [
  "https://images.unsplash.com/photo-1573398644096-097e1e2db6ff?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1706512781707-ed27943453ed?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1697999907135-d77a17f0c04f?auto=format&fit=crop&w=900&q=80",
];

const travelTips = [
  {
    title: "Best Time to Visit",
    description:
      "March–June for flowers, October–November for clear skies, December–February for snowfall.",
  },
  {
    title: "Permits Required",
    description:
      "Protected Area Permit required from Gangtok before visiting high-altitude regions.",
  },
  {
    title: "Things to Do",
    description:
      "Trekking, snow adventures, exploring alpine valleys, visiting monasteries, and photography.",
  },
];

const NorthSikkim = () => {
  return (
    <div className="font-[var(--font-poppins)] bg-[var(--color-light)] text-[var(--color-dark)]">
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background image with slow zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1697999145250-3cb1eca225c3?auto=format&fit=crop&w=1600&q=80"
            alt="North Sikkim"
            className="w-full h-full object-cover object-center slow-zoom"
          />
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl sm:text-6xl font-[var(--font-merriweather)] text-white mb-6">
            Explore North Sikkim
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            Snow peaks, alpine valleys & sacred Himalayan lakes.
          </p>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.img
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src="https://plus.unsplash.com/premium_photo-1697363574478-83fdbdf4b57a?auto=format&fit=crop&w=900&q=80"
          alt="North Sikkim"
          className="rounded-3xl shadow-xl object-cover w-full h-[450px]"
        />

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-6">
            Untouched Himalayan Beauty
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            North Sikkim offers dramatic mountain roads, peaceful monasteries,
            high-altitude lakes, and alpine valleys untouched by heavy tourism.
            It is one of the most scenic regions in the Eastern Himalayas.
          </p>
        </motion.div>
      </section>

      {/* ATTRACTIONS */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl text-center font-[var(--font-merriweather)] text-[var(--color-primary)] mb-16">
          Must Visit Places
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {attractions.map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden group hover:shadow-xl transition duration-500"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="p-6">
                <h3 className="text-xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-3">
                  {place.name}
                </h3>
                <p className="text-gray-600 text-sm">{place.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE / HIGHLIGHTS */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 text-center">
          {["High Altitude Lakes", "Snow Adventures", "Mountain Villages"].map(
            (item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-3xl shadow-md border-t-4 border-[var(--color-secondary)] bg-[var(--color-light)]"
              >
                <h3 className="text-xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-4">
                  {item}
                </h3>
                <p className="text-gray-600 text-sm">
                  Experience breathtaking landscapes and authentic Himalayan
                  culture.
                </p>
              </motion.div>
            ),
          )}
        </div>
      </section>

      {/* TRAVEL GUIDE */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl text-center font-[var(--font-merriweather)] text-[var(--color-primary)] mb-16">
          Travel Guide
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-[var(--font-merriweather)] mb-4 text-[var(--color-secondary)]">
              Best Time to Visit
            </h3>
            <p className="text-gray-600 mb-6">
              March–June for flowers, October–November for clear skies,
              December–February for snowfall.
            </p>

            <h3 className="text-xl font-[var(--font-merriweather)] mb-4 text-[var(--color-secondary)]">
              Permits Required
            </h3>
            <p className="text-gray-600">
              Protected Area Permit required from Gangtok before visiting
              high-altitude regions.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=900&q=80"
            alt="Travel Guide"
            className="rounded-3xl shadow-xl object-cover w-full h-[350px]"
          />
        </div>
      </section>

      {/* CULTURE */}
      <section className="py-28 px-6 bg-[var(--color-light)]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src="https://travelnthrill.com/wp-content/uploads/2020/08/Sikkim-Culture-Tradition.jpg?auto=format&fit=crop&w=900&q=80"
            alt="Monastery"
            className="rounded-3xl shadow-xl object-cover w-full h-[420px]"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-6">
              Culture & Monasteries
            </h2>

            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              North Sikkim is deeply influenced by Tibetan Buddhist culture.
              Colorful prayer flags, peaceful monasteries, and traditional
              mountain villages create a spiritual and serene atmosphere.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="border-l-4 border-[var(--color-secondary)] pl-4">
                Peaceful mountain monasteries
              </li>
              <li className="border-l-4 border-[var(--color-secondary)] pl-4">
                Traditional wooden houses
              </li>
              <li className="border-l-4 border-[var(--color-secondary)] pl-4">
                Authentic Himalayan lifestyle
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SCENIC GALLERY */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center font-[var(--font-merriweather)] text-[var(--color-primary)] mb-16">
            Scenic Views of North Sikkim
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {scenicViews.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="overflow-hidden rounded-3xl shadow-md group"
              >
                <img
                  src={img}
                  alt={`Scenic view ${i + 1}`}
                  className="h-72 w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-[var(--color-light)] border-t border-gray-200">
        <h2 className="text-3xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-6">
          Plan Your Himalayan Journey
        </h2>
        <button className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-full hover:bg-[var(--color-secondary)] transition duration-300 shadow-md">
          Book Your Trip
        </button>
      </section>
    </div>
  );
};

export default NorthSikkim;
