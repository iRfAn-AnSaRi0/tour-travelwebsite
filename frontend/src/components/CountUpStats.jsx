import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function CountUpStats() {
  const stats = [
    { id: 1, value: 10000, label: "Happy Travelers" },
    { id: 2, value: 50, label: "Destinations Covered" },
    { id: 3, value: 24, label: "Support" },
    { id: 4, value: 10, label: "Years of Experience" },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 30); // update every 30ms

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }, 30);
      });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="bg-primary text-light py-16 px-5 sm:px-10 md:px-20"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={stat.id}>
            <h3 className="text-4xl font-bold mb-2 text-white">
              {counts[i].toLocaleString()}+
            </h3>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
