/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Mulish", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        mainbg: "var(--mainbg-color)",
        secondarybg: "var(--secondarybg-color)",
      },
      fontSize: {
        h1: "3.75rem",
        h2: "1.875rem",
        h3: "1.5rem",
        h4: "1.1255rem",
        "3xl": "1.5rem",
        "4xl": "2.15rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      letterSpacing: {
        button: "0.15em",
      },
      transitionProperty: {
        maxwidth: "max-width",
        filter: "filter",
        right: "right",
      },
      keyframes: {},
      animation: {},
      screens: {
        "3xl": "2048px",
        "4xl": "3000px",
        "5xl": "3640px",
        "6xl": "4500px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
