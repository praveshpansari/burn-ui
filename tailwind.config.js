const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      monster: ["Inter"],
    },
    extend: {
      colors: {
        primary: colors.slate,
      },
    },
  },
};
