/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //"./*.{html}",
    "./*.html",
    "./node_modules/flowbite/**/*.js",
    "./scripts/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

