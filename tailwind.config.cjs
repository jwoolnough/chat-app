/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "azo-sans": ["azo-sans-web", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      accent: "#808AE5",
      white: "#FFF",
      black: "#17171C",
      card: {
        DEFAULT: "#F7F9FB",
        dark: "#1E1F29",
      },
      ui: "rgb(128 138 229 / 30%)",
      body: {
        DEFAULT: "#3B3F62",
        dark: "#9B9EB8",
      },
      background: "#E8EAF1",
    },
    ringColor: {
      DEFAULT: "#808AE5",
    },
    ringOpacity: {
      DEFAULT: 0.50,
      // dark: 0.75,
    },
    // ringOffsetColor: {
    //   DEFAULT: "#1E1F29",
    // },
    // ringOffsetWidth: {
    //   DEFAULT: 2,
    // },
  },
  darkMode: "class",
  plugins: [],
};
