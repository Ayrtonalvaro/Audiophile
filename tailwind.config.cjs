/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'hero-pattern': "url('/src/assets/home/desktop/image-hero.jpg')"
      },
      fontFamily: {
        manrope: ["'Manrope'", 'sans-serif']
      }
    }
  },
  plugins: []
};
