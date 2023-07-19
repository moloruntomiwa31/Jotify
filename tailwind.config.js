/** @type {import('tailwindcss').Config} */
export default {
  screens: {
    sm: "460px",
    md: "668px",
    lg: "960px",
    xl: "1440px"
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

