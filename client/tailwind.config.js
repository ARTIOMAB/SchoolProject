/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        red: "#ff0000",
        mainText: "#008080",
        contentText: "#7D7D7D",
        boardColor: "#6AAAAA",
        defaultGray: "#333336",
        cardsColor: "#8AB3B3",
        glassBg: "rgba(255, 255, 255, 0.03)",
        glassBorder: "rgba(255, 255, 255, 0.02)",
        hoverGlass: "rgba(255, 255, 255, 0.41)",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.8)",
      },
      backdropFilter: {
        "blur-3.1": "blur(9px)",
      },
      fontFamily: {
        rubikBubblesRegular: ["Rubik Bubbles", "system - ui"],
      },
    },
  },
  plugins: [],
};
