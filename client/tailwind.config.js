/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        mainText: "#008080",
        contentText: "#7D7D7D",
        boardColor: "#00A8A8",
        defaultGray: "#333336",
      },
    },
  },
  plugins: [],
};
