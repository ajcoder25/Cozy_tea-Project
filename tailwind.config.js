/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'bg-Image': "url('../Image/img-locations-background.jpg')",
      }

    },
  },
  plugins: [],
}


