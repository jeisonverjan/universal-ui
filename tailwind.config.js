/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Oswald", "sans-serif"],
      },
      colors: {
        "bg-light": "#e8e8e8",
        "bg-dark": "#212121",
      },
      keyframes: {
        slowSpin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        slowSpin: "slowSpin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
