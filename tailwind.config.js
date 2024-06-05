/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      Antonio: "var(--Antonio)",
      Anton: "var(--Anton)",
      Poppins: "var(--Poppins)",
    },
    extend: {
      colors: {
        primaryfontCOlor: "var(--primaryfontCOlor)",
        secondaryColor: "var(--secondaryColor)",
        primaryBgColor: "var(--primaryBgColor)",
        secondaryBgColor: "var(--secondaryBgColor)",
      },
    },
  },
  plugins: [],
};
