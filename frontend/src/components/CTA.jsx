// import React from "react";
// import ctaBg from "../assets/cta-bg.jpg";

// export default function CTA() {
//   return (
//     <section
//       className="relative bg-cover bg-center py-24 px-5 sm:px-10 md:px-20 mb-20"
//       style={{ backgroundImage: `url(${ctaBg})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

//       <div className="relative text-center text-light">
//         <h2 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
//           Ready to Explore Sikkim?
//         </h2>
//         <p className="text-sm md:text-lg mb-6 max-w-2xl mx-auto">
//           Book your dream trip now and create unforgettable memories!
//         </p>
//         <button className="bg-primary text-light px-6 py-3 rounded-lg font-medium hover:bg-secondary transition text-sm md:text-base">
//           Book Now
//         </button>
//       </div>
//     </section>
//   );
// }


import React from "react";
import ctaBg from "../assets/cta-bg.jpg";

export default function CTA() {
  return (
    <section
      className="relative bg-cover bg-center py-24 px-5 sm:px-10 md:px-20 mb-20 rounded-xl overflow-hidden"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-merriweather font-bold mb-4 leading-tight">
          Ready to Explore <span className="text-primary">Sikkim</span>?
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Book your dream trip now and create unforgettable memories with us.
        </p>
        <button className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-secondary transition transform hover:scale-105 shadow-lg text-sm sm:text-base">
          Book Now
        </button>
      </div>
    </section>
  );
}
