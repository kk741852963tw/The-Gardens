module.exports = {

  content: [
    './src/**/*.{html,js, jsx, ts, tsx}',
  ],
  theme: {
    extend: {
      maxHeight: {
        'halfscreen': '50vh'
      },
      colors: {
        'imgbg': 'rgba(75, 85, 99, 0.8)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
