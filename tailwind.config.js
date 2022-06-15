/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      "russian": "#0E0E14",
      "aquamarine": "#69F0AE",
      "cornfields": "#FFF9B8",
      "azureish-white": "#DBEDF3",
      "content": "#17171F"
    },
  },
  plugins: [],
}
