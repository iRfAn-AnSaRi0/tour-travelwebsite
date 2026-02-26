/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b4332",
        secondary: "#40916c",
        light: "#f8f9fa",
        dark: "#212529",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
       keyframes: {
        phoneVibrate: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(8deg)" },
          "40%": { transform: "rotate(-8deg)" },
          "60%": { transform: "rotate(6deg)" },
          "80%": { transform: "rotate(-6deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        phoneVibrate: "phoneVibrate 0.6s ease-in-out",
      },
    },
  },
};
