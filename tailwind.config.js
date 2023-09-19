/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gh-dark": "#0d1117",
        "gh-dark-light": "#161b22",
        "gh-dark-lighter": "#21262d",
        "gh-dark-lightest": "#2f363d",
        "cool-dark": "#0e0e0e",
      }
    },
  },
  plugins: [],
}
