import React from "react";
import aboutImg from "../assets/about-bg-img.jpg";
import aboutImg2 from "../assets/about-sikkim-img.png";
import aboutImg3 from "../assets/about-sikkim-img2.jpg";
import CountUpStats from "../components/CountUpStats";

export default function About() {
  return (
    <section className="bg-light text-dark">
      {/* Hero / Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          src={aboutImg}
          alt="About Sikkim"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5 sm:px-10">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold text-white mb-2">
            About GoSikkim
          </h1>
          <p className="text-white text-sm md:text-base max-w-xl">
            Discover the beauty of Sikkim and why travelers choose us for unforgettable experiences.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="py-16 px-5 sm:px-10 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            GoSikkim is a premier travel service dedicated to offering curated and authentic experiences across Sikkim. Our team of local experts ensures that you explore hidden gems, breathtaking landscapes, and cultural wonders safely and comfortably.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We combine expert knowledge, affordable packages, and personalized assistance to make your journey seamless. Whether you want adventure, relaxation, or cultural exploration, we’ve got you covered.
          </p>
        </div>

        <div>
          <img
            src={aboutImg2}
            alt="Travel Experience"
            className="w-full rounded-2xl shadow-lg object-cover h-full"
          />
        </div>
      </div>

      {/* Why Choose Us Stats */}
      <CountUpStats />

      {/* Mission Section */}
      <div className="py-16 px-5 sm:px-10 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <img
            src={aboutImg3}
            alt="Our Mission"
            className="w-full rounded-2xl shadow-lg object-cover h-120"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our mission is to make Sikkim accessible, safe, and unforgettable for every traveler. We aim to provide high-quality services, local expertise, and memorable experiences while respecting the environment and local culture.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            From adventure trekking to cultural tours, we ensure every journey is seamless and memorable.
          </p>
        </div>
      </div>
    </section>
  );
}
