/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"myFont"', 'Bricolage Grotesque'],
      },
      colors: {
        accent: '#0E7C7B',
        vermili: '#F54A05',
        greyWhite: '#F8F9FA',
        cardBg: '#25313A',
      },
    },
  },
  plugins: [],
};
