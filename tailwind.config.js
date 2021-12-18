module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'xs': {'max': '500px'},

      'sm': {'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
