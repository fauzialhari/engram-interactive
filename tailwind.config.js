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
        secondarybg: "var(--secondarybg-color)"
      },
      fontSize: {
        h1: "3.75rem",
        h2: "1.875rem",
        h3: "1.5rem",
        h4: "1.1255rem"
      },
      letterSpacing: {
        button: "0.15em",
      },
      transitionProperty: {
        'maxwidth': 'max-width',
        'filter': 'filter',
        'right': 'right'
      },
      keyframes: {
      },
      animation: {
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
