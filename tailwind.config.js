/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-light": "#e8e8e8",
        "bg-dark": "#212121",
      },
    },
  },
  plugins: [],
};
