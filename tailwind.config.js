module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        18: '72px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
