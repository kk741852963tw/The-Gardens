module.exports = {

  content: [
    './src/**/*.{html,js, jsx, ts, tsx}',
  ],
  theme: {
    extend: {
      maxHeight: {
        'halfscreen': '50vh',
        '1/2': '50%'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    //require('@tailwindcss/aspect-ratio'),
    require('ps-scrollbar-tailwind'),
  ]
};
