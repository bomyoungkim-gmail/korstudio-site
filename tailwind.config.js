/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'white': '#FFFFFF',
          'off-white': '#FAFAFA',
          'black': '#1A1A1A',
          'dark': '#2A2A2A',
          'gray': '#666666',
          'light-gray': '#E5E5E5',
          'accent': '#8B6F47', // Mantendo apenas para micro-detalhes, se necessário
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1' }],
        'display-lg': ['6rem', { lineHeight: '1' }],
      }
    },
  },
  plugins: [],
}
