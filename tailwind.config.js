/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./themes/**/layouts/**/*.html",
    "./content/**/*.{md,html}",
    "./assets/**/*.{js,ts}",
  ],
  safelist: [
    // Ensure production keeps link hover styles inside Typography prose
    'prose-a:text-teal-500',
    'prose-a:hover:text-teal-300',
    'prose-a:hover:underline',
    'prose-a:underline-offset-2',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'a': {
              color: theme('colors.teal.500'),
              textDecoration: 'none',
              fontWeight: '500',
              transitionProperty: 'color',
            },
            'a:hover': {
              color: theme('colors.teal.300'),
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            },
          },
        },
        invert: {
          css: {
            'a': {
              color: theme('colors.teal.500'),
              textDecoration: 'none',
              fontWeight: '500',
              transitionProperty: 'color',
            },
            'a:hover': {
              color: theme('colors.teal.300'),
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
