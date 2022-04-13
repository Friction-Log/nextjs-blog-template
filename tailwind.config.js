/* eslint-disable global-require */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    // Things to include because of dynamic use of classes
    safelist: [
      'bg-black',
      'bg-green-500',
      'bg-indigo-500',
      'bg-blue-500',
      'bg-yellow-500',
      'bg-red-500',
      'bg-gray-500',
      'bg-purple-500',
      'text-blue-500',
      'text-yellow-500',
      'text-red-500',
      'text-gray-500',
      'text-purple-500',
      'text-indigo-500',
      'text-green-500',
      'border-blue-500',
      'border-yellow-500',
      'border-red-500',
      'border-gray-500',
      'border-purple-500',
      'border-green-500',
      'border-indigo-500',
    ],
    content: ['./src/**/*.{js,ts,jsx,tsx}']
  },
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        ...colors
      },
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
      // Using this for dark mode: https://github.com/tailwindlabs/tailwindcss-typography#adding-new-modifiers
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme('colors.gray.300'),
              '[class~="lead"]': {
                color: theme('colors.gray.100'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.700'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
