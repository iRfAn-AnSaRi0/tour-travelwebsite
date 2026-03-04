// src/pages/WestSikkim.jsx
import React from "react";
import { motion } from "framer-motion";

const attractions = [
  {
    name: "Pelling",
    image:
      "https://images.unsplash.com/photo-1724600453681-403504e5d3f6?auto=format&fit=crop&w=800&q=80",
    description:
      "A scenic town with views of Kanchenjunga, monasteries, and adventure activities.",
    link: "https://your-pelling-page-link.com",
  },
  {
    name: "Rabdentse Ruins",
    image:
      "https://travelgangtok.com/uploads/2021/09/rabdentse-ruin-pelling-at-west-sikkim-travelgangtok-holidays.jpg?auto=format&fit=crop&w=800&q=80",
    description:
      "Historical ruins of the ancient capital of Sikkim, offering culture and history.",
    link: "https://your-rabdentse-page-link.com",
  },
  {
    name: "Khecheopalri Lake",
    image:
      "https://memorableindia.com/wp-content/uploads/2019/09/KHECHEOPALRI-LAKE-Pranav-Bhasin.jpg?auto=format&fit=crop&w=800&q=80",
    description:
      "A sacred lake known for its tranquility and lush surrounding forest.",
    link: "https://your-khecheopalri-page-link.com",
  },
  {
    name: "Rimbi Waterfall",
    image:
      "https://www.elginhotels.com/wp-content/uploads/2020/09/rimbi-waterfall-01.jpeg?auto=format&fit=crop&w=800&q=80",
    description:
      "Beautiful waterfall surrounded by forested hills, perfect for nature lovers.",
    link: "https://your-rimbi-waterfall-page-link.com",
  },
  {
    name: "Singshore Bridge",
    image:
      "https://lh3.googleusercontent.com/proxy/OFE5w7ejmDb4ygSysUExTpkShGAjZcV2cSLf-InAC0h1OLphzx9ghXRcfOAsGvId0kLN8OB3aSTK3BC3sG8awTri3HY1zYOHQ5QKFxFHLVNDyg?auto=format&fit=crop&w=800&q=80",
    description:
      "The second highest bridge in Sikkim, offering breathtaking views of the valley.",
    link: "https://your-singshore-bridge-page-link.com",
  },
  {
    name: "Hee Bermiok",
    image:
      "https://animeshmitra.in/theme/wp-content/uploads/2020/12/Hee-Bermiok-West-Sikkim1.jpg?auto=format&fit=crop&w=800&q=80",
    description:
      "A small village known for peaceful trekking routes and traditional culture.",
    link: "https://your-hee-bermiok-page-link.com",
  },
];

const scenicViews = [
  "https://lh6.googleusercontent.com/proxy/7Txq3Fhaf7--gRQXv0YVjiWUmcfuv2-3RhNco_LP6Sv9buWplXeQ5lHVRjLmtGnsKThtpNe967oIbSDpddiqiRLIArJVVMkaoAYQg63baBz0MA?auto=format&fit=crop&w=1200&q=80",
  "https://s7ap1.scene7.com/is/image/incredibleindia/spiritual-spots-in-pelling-popular?qlt=82&ts=1726655959297",
  "https://northbengaltourism.com/images/offbeat/chaayataal_1.webp?auto=format&fit=crop&w=1200&q=80",
];

const travelTips = [
  {
    title: "Best Time to Visit",
    description:
      "March to June and September to November for clear skies, pleasant temperatures, and adventure activities.",
  },
  {
    title: "Things to Do",
    description:
      "Trekking, monastery visits, waterfall excursions, local village tours, and photography.",
  },
  {
    title: "Local Cuisine",
    description:
      "Try local Sikkimese dishes like gundruk, thukpa, momo, and fresh local tea.",
  },
];

const WestSikkim = () => {
  return (
    <div className="font-[var(--font-poppins)] bg-[var(--color-light)] text-[var(--color-dark)]">

      {/* HERO SECTION */}
       <section
        className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1721884487052-8fb79415772c?auto=format&fit=crop&w=1600&q=80"
            alt="West Sikkim"
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
            Explore West Sikkim
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[var(--color-light)]/90">
            Stunning mountains, waterfalls, sacred lakes, and rich cultural heritage.
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
            About West Sikkim
          </h2>
          <p className="text-lg leading-relaxed">
            West Sikkim offers breathtaking mountain landscapes, serene villages,
            historical sites, and sacred lakes. Perfect for trekking, photography,
            and exploring local culture.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src="https://www.dreamzyatra.com/sikkim-tour-packages/images/sikkim-tour-packages-2.jpg?auto=format&fit=crop&w=900&q=80"
          alt="West Sikkim Overview"
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

      {/* HIGHLIGHTS / EXPERIENCE SECTION */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src="https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/05/Khecheopalri-Lake.webp?auto=format&fit=crop&w=900&q=80"
            alt="Khecheopalri Lake"
            className="rounded-3xl shadow-xl object-cover w-full h-[420px]"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-6">
              Experience West Sikkim
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Explore sacred lakes, breathtaking waterfalls, and historic ruins.
              Enjoy peaceful villages, trekking routes, and local culture.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="border-l-4 border-[var(--color-secondary)] pl-4">
                Visit Khecheopalri Lake (permit may be required)
              </li>
              <li className="border-l-4 border-[var(--color-secondary)] pl-4">
                Trek to Rimbi Waterfall
              </li>
              <li className="border-l-4 border-[var(--color-secondary)] pl-4">
                Explore historic Rabdentse Ruins
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
            West Sikkim offers rich Buddhist heritage, sacred monasteries, and traditional village culture.
            Explore serene monasteries and local rituals that highlight the region's spiritual side.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Pemayangtse Monastery", "Sanga Choeling Monastery", "Local Villages"].map((item, i) => (
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
                  Explore peaceful spiritual landmarks that define West Sikkim.
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

export default WestSikkim;