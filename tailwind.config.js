// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


function range(start, end, increment = 1) {
  const count = Math.floor((end - start + increment) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}

const minFontSize = 5;
const maxFontSize = 140;

const minSpacingPixel = 0;
const maxSpacingPixel = 1200;
const spacingPixelIncrement = 5;

const minRoundedPixel = 0;
const maxRoundedPixel = 1000;

const minPaddingPixel = -100;
const maxPaddingPixel = 300;


const vhs = ['10vh', '20vh', '30vh', '40vh', '50vh', '60vh', '70vh', '80vh', '90vh', '100vh'];

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    colors: {
      white: '#FFFFFF',
      transparent: 'transparent',
      primary: {
        DEFAULT: '#07A39D',
        50: '#E5F6F6',
        75: '#74D6D2',
        100: '#07A39D',
        200: '#009993',
        300: '#008F89',
        400: '#00857F',
        500: '#47D0CB'
      },
      secondary: {
        DEFAULT: '#0A2540',
        50: '#143D64',
        100: '#0A2540',
      },
      success: {
        DEFAULT: '#74B06F',
        50: '#E8FCE6',
        75: '#BFE3BC',
        100: '#74B06F',
        200: '#63965F',
      },
      warning: {
        DEFAULT: '#F18F01',
        50: '#FFF5E5',
        75: '#FFCB80',
        100: '#F18F01',
        200: '#E78500',
        300: '#DD7B00',
        400: '#D37100',
      },
      danger: {
        DEFAULT: '#E54D4D',
        50: '#FFEDED',
        75: '#FFA3A3',
        100: '#E54D4D',
        200: '#CC4545',
        300: '#35070d',
        400: '#711b26'
      },
      light: {
        DEFAULT: '#D6D6D6',
        50: '#F8F8F8',
        75: '#EAEAEA',
        100: '#D6D6D6',
        200: '#BEBEBE',
        300: '#989898',
        400: '#6D6D6D',
        500: '#2C2C2C',
        600: '#F5F5F5'
      },
      dark: {
        DEFAULT: '#111111',
        100: '#111111'
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
      },
    },
    fontSize: {
      ...range(minFontSize, maxFontSize).reduce((merged, f) => ({ ...merged, [f]: `${f}px`}), {})
    },
    borderRadius : {
      ...range(minRoundedPixel, maxRoundedPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px`}), {}),
    },
    padding : {
      ...range(minPaddingPixel, maxPaddingPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px`}), {})
    },
    lineHeight:{
      ...range(minPaddingPixel, maxPaddingPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px`}), {})
    },
    spacing: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {})
    },
    maxWidth: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {})
    },
    minWidth: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {})
    },
    maxHeight: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      ...vhs.reduce((merged, vh) => ({ ...merged, [vh]: vh }), {})
    },
    minHeight: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      ...vhs.reduce((merged, vh) => ({ ...merged, [vh]: vh }), {})
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    boxShadow: {
      primary: '0 5px 24px -10px rgba(0, 0, 0, 0.15)',
      DEFAULT: '0 10px 20px -5px rgba(211, 113, 0, 0.4)',
      secondary: '0 5px 20px rgba(0, 0, 0, 0.07)',
      yellow: '0 10px 10px -10px rgba(211, 113, 0, 0.2)',
      light: '0 4px 20px -14px rgba(38, 50, 56, 0.35)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [ ],
}
