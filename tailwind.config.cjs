/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0D8040",
          dark: "#075C2C",
          light: "#E8F5EE"
        }
      }
    }
  },
  plugins: [],
}
