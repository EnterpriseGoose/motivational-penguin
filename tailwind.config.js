module.exports = {
  //mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          1: "#1DA1F2",
          2: "#4267B2"
        }
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
