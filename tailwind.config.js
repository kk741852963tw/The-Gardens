module.exports = {

  content: [
    './src/**/*.{html,js, jsx, ts, tsx}',
  ],
  theme: {
    extend: {
      maxHeight: {
        'halfscreen': '50vh'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
