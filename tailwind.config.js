module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkgray: '#121212',
        darkgraylight: '#1a1a1a'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
