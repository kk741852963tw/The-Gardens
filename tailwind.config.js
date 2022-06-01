module.exports = {

  content: [
    './src/**/*.{html,js, jsx, ts, tsx}',
  ],
  theme: {
    fontFamily: {

    },
    extend: {
      maxHeight: {
        'halfscreen': '50vh',
        '1/2': '50%'
      }
    },
  },
  plugins: [
    //require('@tailwindcss/aspect-ratio'),
    require('ps-scrollbar-tailwind'),
  ]
};
