/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navbar: "#1d93f2",
        textt: "#8c8c8c",
        border: "#8c8c8c",
      },
    },
  },
  plugins: [],
};
