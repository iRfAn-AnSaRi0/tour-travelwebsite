import React, { useState, useEffect } from "react";
import img1 from "../assets/bg-img1.jpg";
import img2 from "../assets/bg-img2.jpg";
import img3 from "../assets/bg-img3.jpg";
import img4 from "../assets/bg-img4.jpg";
import img5 from "../assets/bg-img5.jpg";

const slides = [
  {
    id: 1,
    image: img1,
    place: "North Sikkim",
    title: "Explore The Mountains",
    description:
      "Discover the peaceful beauty of Lachung, where snow-covered peaks, fresh air, and quiet valleys create a perfect escape.",
  },
  {
    id: 2,
    image: img2,
    place: "East Sikkim",
    title: "Witness The Frozen Lake",
    description:
      "Experience the calm charm of Tsomgo Lake, a high-altitude wonder reflecting changing skies and Himalayan serenity.",
  },
  {
    id: 3,
    image: img3,
    place: "North Sikkim",
    title: "Walk Through Flower Valleys",
    description:
      "Explore Yumthang Valley, famous for its colorful blooms, flowing rivers, and breathtaking mountain landscapes.",
  },
  {
    id: 4,
    image: img4,
    place: "Gangtok",
    title: "Feel The Mountain City Life",
    description:
      "Enjoy panoramic views, local culture, and peaceful evenings in the heart of Sikkim’s vibrant capital.",
  },
  {
    id: 5,
    image: img5,
    place: "East Sikkim",
    title: "Travel The Historic Silk Route",
    description:
      "Journey through Zuluk’s legendary roads, offering dramatic curves, sunrise views, and timeless mountain beauty.",
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Fade effect
  useEffect(() => {
    setFade(false);
    const t = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(t);
  }, [current]);

  const nextSlide = () => setCurrent((current + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[500px] overflow-hidden">
      {/* Slide */}
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-5 sm:px-10 md:px-20">
        {/* Place badge */}
        <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-xs sm:text-sm tracking-widest uppercase text-white backdrop-blur">
          {slides[current].place}
        </span>

        {/* Title */}
        <h1 className="text-white font-merriweather font-bold text-2xl sm:text-3xl md:text-5xl leading-tight mb-4 max-w-2xl">
          {slides[current].title}
        </h1>

        {/* Description */}
        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 max-w-xl">
          {slides[current].description}
        </p>

        {/* CTA */}
        <button className="group flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-secondary transition-all duration-300">
          Book Now
          <span className="transform group-hover:translate-x-1 transition">
            →
          </span>
        </button>
      </div>

      {/* Prev / Next */}
      <button
  onClick={prevSlide}
  className="hidden md:flex absolute top-1/2 left-3 md:left-5 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
>
  &#10094;
</button>
<button
  onClick={nextSlide}
  className="hidden md:flex absolute top-1/2 right-3 md:right-5 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
>
  &#10095;
</button>


      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
