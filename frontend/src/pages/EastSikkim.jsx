// src/pages/EastSikkim.jsx
import React from "react";
import { motion } from "framer-motion";

const attractions = [
  {
    name: "Gangtok",
    image:
      "https://images.unsplash.com/photo-1715878537374-1cb05ca16f8a?auto=format&fit=crop&w=800&q=80",
    description:
      "The capital city of Sikkim, famous for MG Marg, monasteries, and scenic views.",
    link: "https://your-gangtok-page-link.com",
  },
  {
    name: "Rumtek Monastery",
    image:
      "https://www.karmapa.org/wp-content/uploads/Rumtek_Monastery_-_Inside_Close_View-1400px-cropped.jpg?auto=format&fit=crop&w=800&q=80",
    description:
      "One of the most important Buddhist monasteries in Sikkim, with beautiful architecture.",
    link: "https://your-rumtek-page-link.com",
  },
  {
    name: "Tsomgo Lake",
    image:
      "https://images.unsplash.com/photo-1652709967934-a2377aa25d3c?auto=format&fit=crop&w=800&q=80",
    description:
      "A glacial lake surrounded by mountains, famous for yak rides and scenic beauty.",
    link: "https://your-tsomgo-page-link.com",
  },
  {
    name: "Nathula Pass",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep2BcrKHpOII3vNnJTidvKaazhDvwXQBnVwfvG_Y7wjEV9I1t3MIH2UUqSSTYbCHHtZCSpuay5ShnE4HwOh6FWqkoJHZW00wRY7FbA-YAaKTtXd4L0xTloRXLYfCKSRYRSyGNFh=w540-h312-n-k-no",
    description:
      "Historic mountain pass on the Indo-China border, offering breathtaking views.",
    link: "https://your-nathula-page-link.com",
  },
  {
    name: "Enchey Monastery",
    image:
      "https://www.tourism-of-india.com/pictures/travel_guide/attractions/thmb/enchey-gompa-sikkim-554.jpeg?auto=format&fit=crop&w=800&q=80",
    description:
      "A serene monastery with stunning views of Gangtok city and surrounding hills.",
    link: "https://your-enchey-page-link.com",
  },
  {
    name: "Hanuman Tok",
    image:
      "https://www.trawell.in/admin/images/upload/723415271Gangtok_Hanuman_Tok_Main.jpg?auto=format&fit=crop&w=800&q=80",
    description:
      "A temple dedicated to Lord Hanuman with panoramic views of the valleys.",
    link: "https://your-hanuman-tok-page-link.com",
  },
];

const scenicViews = [
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer140pnFsZkIKzzfnt6NywLRA4QvhbADrt5aA3c0tHUp_cIfDzXtpwmW9b7eIfk97WOzWWD3ePX4nPq0x0iCSQlhx-DW2oBZAYJk2h3XTB7Z5Z74EiTMqKNI2gAWWKHy85SJhW5Oxa9lhE=w540-h312-n-k-no",
  "https://img.traveltriangle.com/blog/wp-content/uploads/2024/08/28700720_1598046176979503_1295513695229481745_o.jpg?auto=format&fit=crop&w=1200&q=80",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepJsQTgxXoqx0-755NbRifw8XqO4S-SaL5l-ap4GILYXtmBcn24YVQTd_AX1s8Vm63GCyONyeIJA4B1OU-6kslgdDKJRBDkyjNQC61mv9bJmbE39e7sa6kYBEqMDbzGkhhFT_KbkQ=w540-h312-n-k-no",
];

const travelTips = [
  {
    title: "Best Time to Visit",
    description:
      "March to June and September to November for pleasant weather and clear mountain views.",
  },
  {
    title: "Things to Do",
    description:
      "City sightseeing, monastery visits, yak rides, trekking, and exploring local markets.",
  },
  {
    title: "Local Cuisine",
    description:
      "Savor Sikkimese delicacies like momo, thukpa, gundruk, and local sweets.",
  },
];

const EastSikkim = () => {
  return (
    <div className="font-[var(--font-poppins)] bg-[var(--color-light)] text-[var(--color-dark)]">
      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544509445-8a857ad6e2e5?auto=format&fit=crop&w=1600&q=80"
            alt="East Sikkim"
            className="w-full h-full object-cover object-center slow-zoom"
          />
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl sm:text-6xl font-[var(--font-merriweather)] text-[var(--color-light)] mb-6">
            Discover East Sikkim
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[var(--color-light)]/90">
            Gangtok city, scenic lakes, monasteries, and adventurous mountain
            passes.
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
            About East Sikkim
          </h2>
          <p className="text-lg leading-relaxed">
            East Sikkim blends urban charm in Gangtok with serene monasteries,
            glacial lakes, and historic mountain passes. Perfect for
            sightseeing, spiritual exploration, and adventure enthusiasts.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1632726823875-43dd9adad495?auto=format&fit=crop&w=800&q=80"
          alt="East Sikkim Overview"
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
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwep0mIqN1VoWrKYV2FzOMJCkSsQMWZlBYKdbnCzcjAEp-PZlvjuY7L_sF9JNw0yjrUtFtxarSw_2-uBbAqVFT2GCNllmMB719wP-xKFj1TpIQCjLwFi0UHIeakQD78G3-r6oTMcORw=w540-h312-n-k-no"
            alt="Tsomgo Lake"
            className="rounded-3xl shadow-xl object-cover w-full h-[420px]"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-6">
              Experience East Sikkim
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Explore glacial lakes, trek historic passes, and visit serene
              monasteries for a perfect blend of adventure and spirituality.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="border-l-4 border-[var(--color-secondary)] pl-4">
                Yak rides at Tsomgo Lake
              </li>
              <li className="border-l-4 border-[var(--color-secondary)] pl-4">
                Trekking to Nathula Pass
              </li>
              <li className="border-l-4 border-[var(--color-secondary)] pl-4">
                Visit Rumtek & Enchey Monasteries
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
            East Sikkim showcases vibrant Buddhist traditions, colorful
            festivals, and spiritual landmarks, offering a rich cultural and
            meditative experience for travelers.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Rumtek Monastery", "Enchey Monastery", "Hanuman Tok"].map(
              (item, i) => (
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
                    Explore serene spiritual landmarks and historic monasteries
                    of East Sikkim.
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* PERMIT SECTION */}
      <section className="py-28 px-6 bg-[var(--color-light)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-10">
            Permit & Entry Information
          </h2>

          <div className="grid gap-10 sm:grid-cols-2">
            {/* Tsomgo Lake */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500"
            >
              <h3 className="text-xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-3">
                Tsomgo Lake
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                All visitors require a **Special Inner Line Permit (ILP)**
                issued by Sikkim Tourism. Permits can be obtained online or at
                the Tourist Police Checkpost in Gangtok.
              </p>
              <p className="text-gray-700 text-sm">
                Entry is generally allowed between 6:00 AM – 4:00 PM.
                Photography is permitted at designated areas.
              </p>
            </motion.div>

            {/* Nathula Pass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500"
            >
              <h3 className="text-xl font-[var(--font-merriweather)] text-[var(--color-primary)] mb-3">
                Nathula Pass
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Nathula Pass is a **restricted area on the Indo-China border**.
                Visitors need a **Special ILP** and entry is allowed only with
                an authorized tour operator.
              </p>
              <p className="text-gray-700 text-sm">
                Passes are issued for groups only, and photography is strictly
                restricted. Timings: 6:00 AM – 4:00 PM.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS SECTION (Document Style) */}
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

export default EastSikkim;
