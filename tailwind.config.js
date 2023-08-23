/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        13: "50px",
        15: "60px",
      },
      width: {
        68: "280px",
      },
    },
    screens: {
      sm500: "500px",
      smMin: "600px",
      mdMin: "760px",
      lgMin: "900px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1400px",
      xxxl: "1536px",
    },
  },
  plugins: [],
};
