/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        slateGray: 'rgb(113, 118, 123)', // You can name it anything
      },




      fontFamily: {
        liter: ['Liter'],
        roboto: ['Roboto'],
        lobster: ['Lobster','cursive'],
        cursive: ['cursive'],
        pacifico: ['Pacifico'],
        dancing: ['Dancing Script' , 'cursive'],
        vibes: ['Great Vibes', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        anton: ['Anton', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
      },
    },
  },



  
 
  plugins: [],
}



