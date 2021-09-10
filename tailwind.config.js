module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      textColor: ["checked"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
