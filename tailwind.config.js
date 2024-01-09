/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "san-serif"],
      },
      textColor: {
        primary: "#1A181E",
        secondary: "#4D4D4D",
        highlight: "#336CAF",
      },
    },
  },
  plugins: [],
};

