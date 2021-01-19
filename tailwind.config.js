const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      // display: ['Inter', 'system-ui', 'sans-serif'],
      // body: ['Inter', 'system-ui', 'sans-serif'],
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        violet: colors.violet,
        mainColor: '#e4dfcf',
        secondary: '#8F0222',
        stylishBlack: '#414645',
        h1: `#100c08`,
      },
      minHeight: {
        '85vh': '85vh',
      },
      maxHeight: {
        '85vh': '85vh',
      },
      display: {
        hide: 'hidden!important',
      },
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

/**
 * === Already Included Colors ===
 * gray: coolGray
 * red: red
 * yellow: amber
 * green: emerald
 * blue: blue
 * indigo: indigo
 * purple: violet
 * pink: pink
 */

/**
 * === All Colors ===
 * blueGray
 * coolGray
 * gray
 * trueGray
 * warnGray
 * red
 * orange
 * amber
 * yellow
 * lime
 * green
 * emerald
 * teal
 * cyan
 * lightBlue
 * blue
 * indigo
 * violet
 * purple
 * fuchsia
 * pink
 * rose
 */
