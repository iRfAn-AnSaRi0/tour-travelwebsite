// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   FaMapMarkedAlt,
//   FaRupeeSign,
//   FaHeadset,
//   FaUsers,
// } from "react-icons/fa";

// const features = [
//   { id: 1, icon: <FaMapMarkedAlt />, title: "Local Sikkim Experts", desc: "Born and raised in Sikkim, we know every hidden gem and safe route." },
//   { id: 2, icon: <FaRupeeSign />, title: "Affordable Packages", desc: "Best prices with no hidden costs, customized for every traveler." },
//   { id: 3, icon: <FaHeadset />, title: "24/7 Support", desc: "Travel stress-free with round-the-clock assistance during your trip." },
//   { id: 4, icon: <FaUsers />, title: "Trusted by 1000+ Travelers", desc: "Happy customers who return and recommend us again and again." },
// ];

// export default function WhyChooseUs() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="bg-light py-16 px-5 sm:px-10 md:px-20">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-dark mb-3">
//           Why Choose Us
//         </h2>
//         <p className="text-muted text-sm md:text-base max-w-2xl mx-auto">
//           We don’t just plan trips — we create unforgettable Sikkim experiences.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {features.map((item, index) => (
//           <div
//             key={item.id}
//             data-aos="fade-up"
//             data-aos-delay={index * 200}
//             className="bg-white rounded-2xl cursor-pointer p-6 text-center shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 transform duration-300 group"
//           >
//             <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary text-light text-2xl mb-4 group-hover:bg-secondary transition">
//               {item.icon}
//             </div>
//             <h3 className="font-semibold text-lg text-dark mb-2">{item.title}</h3>
//             <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkedAlt,
  FaRupeeSign,
  FaHeadset,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaMapMarkedAlt />,
    title: "Local Sikkim Experts",
    desc: "Born and raised in Sikkim, we know every hidden gem and safe route.",
  },
  {
    id: 2,
    icon: <FaRupeeSign />,
    title: "Affordable Packages",
    desc: "Best prices with no hidden costs, customized for every traveler.",
  },
  {
    id: 3,
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Travel stress-free with round-the-clock assistance during your trip.",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Trusted by 1000+ Travelers",
    desc: "Happy customers who return and recommend us again and again.",
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-light py-16 px-5 sm:px-10 md:px-20">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-dark mb-3">
          Why Choose Us
        </h2>
        <p className="text-muted text-sm md:text-base max-w-2xl mx-auto">
          We don’t just plan trips — we create unforgettable Sikkim experiences.
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-transform duration-500 group"
          >
            {/* ICON WITH GRADIENT */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary text-white text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-lg md:text-xl text-dark mb-2">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
