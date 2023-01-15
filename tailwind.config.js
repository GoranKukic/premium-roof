/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    colors: {
      transparent: 'transparent',
      blue: '#1A8CCC',
      black: '#000000',
      'solid-black': '#161616',
      gray: '#606060',
      brown: '#B0793F',
      white: '#FFFFFF',
      'solid-white': '#F8FAFB',
    },

    screens: {
      xs: { min: '320px' },
      // => @media (min-width: 320px) { ... }

      mp: { min: '480px' },
      // => @media (min-width: 480px) { ... }

      sm: { min: '640px' },
      // => @media (min-width: 640px) { ... }

      md: { min: '768px' },
      // => @media (min-width: 768px) { ... }

      lg: { min: '1024px' },
      // => @media (min-width: 1024px) { ... }

      xl: { min: '1280px' },
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      '2base': '2rem', // 32px
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      backgroundImage: {
        heroBg1: "url('/images/hero-bg1.webp')",
        'hero-bg-2': "url('/images/herobg41.jpg')",
        'about-us-bg': "url('/images/aboutbg.jpg')",
        'cta-gradient':
          'linear-gradient(180deg, rgba(22, 22, 22, 1), rgba(22, 22, 22, 1), rgba(22, 22, 22, 0.5), rgba(22, 22, 22, 0.2), rgba(22, 22, 22, 0) 100%)',
        'cta-bg': "url('/images/cta-bg.webp')",
        'why-we-gradient': 'linear-gradient(to bottom, white 80%, #161616 20%)',
      },
      filter: ['var(--tw-invert)'],
      content: {
        badge: "url('/images/hero-badge.svg')",
      },
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
    plugins: [],
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  rules: {
    // Other rules
    '@next/next/no-img-element': 'off',
  },
};
