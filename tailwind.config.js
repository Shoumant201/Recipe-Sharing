/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,jsx}",
    "./component/**/*.{js,jsx}",
    "./recipe-sharing/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        cormorant: ['Cormorant SC', 'serif'],
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

