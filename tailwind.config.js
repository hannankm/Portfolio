/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // light mode
        // beige: "#070F2B",
        // navy: "#F8FAE5",
        navy: "#070F2B",
        beige: "#F8FAE5",
        highlight: "#FE7A36",
      },
      keyframes: {
        "spin-pause": {
          "0%": { transform: "rotate(0deg)" },
          "83.33%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-pause": "spin-pause 10s linear infinite",
      },
    },
  },
  plugins: [],
};
