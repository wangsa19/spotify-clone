/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkBody": "#050505",
        "darkComponent": "#121212",
        "darkSection": "#262424",
      }
    },
  },
  plugins: [],
}

