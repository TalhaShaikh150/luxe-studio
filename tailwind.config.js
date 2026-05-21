/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        charcoal: "#0F0F0F",
        concrete: "#888888",
        silk: "#EAEAEA",
        gold: "#D4AF37",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      backgroundImage: {
        noise: "url('https://grainy-gradients.vercel.app/noise.svg')",
      },
    },
  },
  plugins: [],
};