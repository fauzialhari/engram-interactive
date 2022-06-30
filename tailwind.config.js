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
        primary: "#03c7ff",
        secondary: "#103d54",
        tertiary: "#0b4a6a",
        mainbg: "#090e19",
      },
      fontSize: {
        h1: "5rem",
      },
      letterSpacing: {
        button: "0.2em",
      },
      transitionProperty: {
        'maxwidth': 'max-width',
      },
      keyframes: {
      },
      animation: {
      },
    },
  },
  plugins: [],
};
