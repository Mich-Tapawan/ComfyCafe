/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b2929",
        secondary: "#fdea9b",
      },
    },
  },
  plugins: [],
};
