/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green:   "#0D8040",
          dark:    "#075C2C",
          soil:    "#0D1710",
          light:   "#E8F5EE",
          harvest: "#C8A84B",
          cream:   "#FAF7F0",
          steel:   "#2E3830",
        }
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body:    ['"Nunito Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      }
    }
  },
  plugins: [],
}
