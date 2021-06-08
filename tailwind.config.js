module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/pattern-bg.png')",
      },
      colors: {
        gray: {
          dark: 'hsl(0, 0%, 59%)',
          'very-dark': 'hsl(0, 0%, 17%)',
        },
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        base: '18px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
