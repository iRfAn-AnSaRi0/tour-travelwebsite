// src/pages/SouthSikkim.jsx
import React from "react";
import { motion } from "framer-motion";

const attractions = [
  {
    name: "Namchi",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQVB_uGME0mVupmW37rh3x-gbXjVuGlRfiw2gOi0Q4Dvk5c7igRQD3DkwAN_lbyOE9WwkChBURCTvQsT-qhv85jO-8&s=19?auto=format&fit=crop&w=800&q=80",
    description:
      "The cultural capital of South Sikkim, famous for Samdruptse Statue and scenic views.",
    link: "https://your-namchi-page-link.com",
  },
  {
    name: "Ravangla",
    image:
      "https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?auto=format&fit=crop&w=800&q=80",
    description:
      "A peaceful town surrounded by mountains, perfect for trekking and nature walks.",
    link: "https://your-ravangla-page-link.com",
  },
  {
    name: "Temi Tea Garden",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSzmyl8EsmDzPvX-L6dPDUcl2oYPVQW6PoFBiy5mBJjVmiEj3NfBdhhzmPUxU2JxBg4oxay81p_CpHPIlCuBhBpZwg&s=19?auto=format&fit=crop&w=800&q=80",
    description:
      "Sikkim’s only tea estate, offering lush green plantations and tea tasting tours.",
    link: "https://your-temi-tea-page-link.com",
  },
  {
    name: "Tendong Hill",
    image:
      "https://www.trawell.in/admin/images/upload/288555765Namchi_Tendong_Hill_Main.jpg?auto=format&fit=crop&w=800&q=80",
    description:
      "Popular trekking destination with panoramic views and sunrise spots.",
    link: "https://your-tendong-hill-page-link.com",
  },
  {
    name: "Sirwani Waterfall",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/dc/e1/2e/banjhakri-water-falls.jpg?auto=format&fit=crop&w=800&q=80",
    description: "A beautiful waterfall near Namchi, perfect for a day picnic.",
    link: "https://your-sirwani-waterfall-page-link.com",
  },
  {
    name: "Maenam Wildlife Sanctuary",
    image:
      "http://www.sikkimstdc.com/Images/POIIDImages/252/Gallery/1.jpeg?auto=format&fit=crop&w=800&q=80",
    description:
      "A sanctuary rich in flora and fauna, ideal for nature lovers and bird watchers.",
    link: "https://your-maenam-sanctuary-page-link.com",
  },
];

const scenicViews = [
  "https://media.holidify.com/images/cmsuploads/compressed/snow-peak-facing-rooms-1_20240923160106.jpg?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1589802287940-b826a851b10f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1724600460105-c9103ed8e05e?auto=format&fit=crop&w=1200&q=80",
];

const travelTips = [
  {
    title: "Best Time to Visit",
    description:
      "March to June and September to November for pleasant weather and beautiful landscapes.",
  },
  {
    title: "Things to Do",
    description:
      "Trekking, sightseeing, visiting tea gardens, exploring waterfalls, and experiencing local culture.",
  },
  {
    title: "Local Cuisine",
    description:
      "Try local Sikkimese dishes like thukpa, momo, gundruk, and freshly brewed tea at Temi Tea Garden.",
  },
];

const SouthSikkim = () => {
  return (
    <div className="font-[var(--font-poppins)] bg-[var(--color-light)] text-[var(--color-dark)]">
      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1634109282980-8d866598bc8a?auto=format&fit=crop&w=1600&q=80"
            alt="South Sikkim"
            className="w-full h-full object-cover object-center slow-zoom"
          />
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl sm:text-6xl font-[var(--font-merriweather)] text-[var(--color-light)] mb-6">
            Discover South Sikkim
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[var(--color-light)]/90">
            Serene hills, tea gardens, waterfalls, and rich cultural heritage.
          </p>
        </motion.div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-6">
            About South Sikkim
          </h2>
          <p className="text-lg leading-relaxed">
            South Sikkim is a treasure of natural beauty, cultural heritage, and
            tranquil destinations. From scenic tea gardens to cascading
            waterfalls and peaceful hills, it offers a perfect blend of
            relaxation and adventure.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweq4ju6NkXSNmMlg17yCKVVthTHiaZZLawp4b-WsMe10DYwbQlEsXcIEsN7vXBBqyDORVaq_fP-j__wH3_sTvIcb233k-KvbTEvavoEVK7uN1g-Gb0MK2n1jBsMwVR-FUWIU1UUxIw=w540-h312-n-k-no?auto=format&fit=crop&w=900&q=80"
          alt="South Sikkim Overview"
          className="rounded-3xl shadow-xl object-cover w-full h-[450px]"
        />
      </section>

      {/* ATTRACTIONS SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-14 text-center">
          Top Attractions
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden group hover:shadow-xl transition duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-3">
                  {place.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {place.description}
                </p>
                <a href={place.link} target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-2 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition duration-300">
                    Explore
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SCENIC VIEWS SECTION */}
      <section className="py-28 px-6 bg-[var(--color-light)]">
        <h2 className="text-3xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-14 text-center">
          Scenic Views
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
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Cherry_Resort_inside_Temi_Tea_Garden%2C_Namchi%2C_Sikkim.jpg?auto=format&fit=crop&w=900&q=80"
            alt="Temi Tea Garden"
            className="rounded-3xl shadow-xl object-cover w-full h-[420px]"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-6">
              Experience the Serenity
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Walk through the lush tea plantations of Temi, witness
              breathtaking sunrise views from Tendong Hill, and explore peaceful
              mountain towns surrounded by Himalayan beauty.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="border-l-4 border-[var(--color-secondary)] pl-4">
                Tea tasting at Temi Estate
              </li>
              <li className="border-l-4 border-[var(--color-secondary)] pl-4">
                Sunrise trekking at Tendong Hill
              </li>
              <li className="border-l-4 border-[var(--color-secondary)] pl-4">
                Photography & nature walks
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="py-28 px-6 bg-[var(--color-light)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-10">
            Culture & Spirituality
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-16">
            South Sikkim reflects a harmonious blend of Buddhist and local
            traditions. Grand statues, peaceful monasteries, and colorful
            festivals make this region spiritually uplifting and culturally
            rich.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Samdruptse Statue",
              "Buddha Park Ravangla",
              "Local Monasteries",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-md"
              >
                <h3 className="text-xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-3">
                  {item}
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore peaceful spiritual landmarks that define the identity
                  of South Sikkim.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS SECTION */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-14 text-center">
            Travel Tips
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {travelTips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-[var(--color-light)] border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-white font-bold mr-4">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-[var(--font-merriweather)] text-[var(--color-primary)]">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SouthSikkim;
