/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      'mwhite': '#FFFFFF',
      'mblack': '#000000',
      'mgreen': '#2EC1AC',
      'mred': '#E97171',
      'mgold': '#B88E2F',
      'minfo': '#FAF3EA',
      'mzinc': '#F4F5F7',
      'mbanner': '#FFF3E3',
      'mtitlecolor': '#333333',
      'msubtitle': '#3A3A3A',
      'mspan': '#898989',
      'mline': '#D9D9D9',
      'mdiscount': '#B0B0B0',
    },
  },
  plugins: [],
};
