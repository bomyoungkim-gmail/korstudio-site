/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#FAF8F5',
        'brand-bg-alt': '#F5F2ED',
        'brand-brown': '#8B6F47',
        'brand-brown-dark': '#6F5738',
        'brand-dark': '#2A2A2A',
        'brand-gray': '#666666',
        'brand-gray-light': '#999999',
        'brand-border': '#E5E1D8',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
