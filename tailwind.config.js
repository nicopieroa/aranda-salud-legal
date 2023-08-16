/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        13: "50px",
        15: "60px",
      },
    },
  },
  plugins: [],
};
