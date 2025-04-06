/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // scans all EJS files inside views
    "./public/**/*.html", // optional
    "./src/**/*.{js,css}" // optional
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
