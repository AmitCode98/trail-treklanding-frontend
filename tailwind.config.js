/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //colors
      colors: {
        backgroundColor: '#0B1D26',
        textColor: '#FBD784',
      },
      //fontFamily
      fontFamily: {
        'ChronicleDisplay': ['Chronicle Display', 'serif'],
        'Gilroy': ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
