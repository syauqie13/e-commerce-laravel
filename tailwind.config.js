/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./storage/framework/views/*.php",
    "node_modules/preline/dist/*.js", // pastikan ini ada
  ],
  darkMode: "class", // pakai 'class' biar bisa toggle dark mode
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'), // aktifkan plugin Preline
  ],
}
