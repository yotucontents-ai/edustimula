/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fredoka', 'sans-serif'],
      },
      colors: {
        'category-a': '#ea580c',
        'category-b': '#db2777',
        'category-c': '#0284c7',
        'category-d': '#16a34a',
      }
    }
  },
  plugins: [],
}
