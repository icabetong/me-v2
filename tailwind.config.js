/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        firacode: ['Fira Code'],
        inter: ['Inter'],
      },
      colors: {
        russian: '#0E0E14',
        aquamarine: '#69F0AE',
        cornfields: '#FFF9B8',
        'azureish-white': '#DBEDF3',
        'navajo-white': '#acdbff',
        content: {
          900: '#17171f',
          800: '#373740',
        },
        footer: '#060609',
      },
    },
  },
  plugins: [],
}
