/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  purge: {
    enabled: true,
    content: ['public/assets/js/main.js'],
  },
  theme: {
    extend: {
      inset: {
        100: '100%',
      },

      padding: {
        120: '120px',
      },

      colors: {
        'theme-color': '#361CC1',
        'theme-color-2': '#FE7A7B',
      },
    },
  },
  variants: {},
  plugins: [],
}
