/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fdf3e7',
        accent: '#ffd8b8',
        lilac: '#c4b5fd',
        mint: '#86efac',
        bookred: '#b91c1c'
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
