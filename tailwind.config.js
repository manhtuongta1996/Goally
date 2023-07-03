/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        padding: '2rem',
      },
      fontFamily:{
        poppins:['var(--font-poppins)']
      },
      colors:{
        primary: "#ff6b6b",
        secondary:"#16db93",
        blackApp:"#272635",
        grayApp:"#e8e9f3"
      }
    },
  },
  plugins: [],
}
