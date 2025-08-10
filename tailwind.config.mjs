/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/*.{js,ts,jsx,tsx,mdx}',
    './src/components/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0B0D17',
        'secondary-dark': '#1D1F2B',
        'text-light': '#D0D6F9',
        'accent-cyan': '#00F6FF',
      },
      fontFamily: {
        'lato-black': ['lato-black', 'sans-serif'],
        'lato-blackitalic': ['lato-blackitalic', 'sans-serif'],
        'lato-bold': ['lato-bold', 'sans-serif'],
        'lato-bolditalic': ['lato-bolditalic', 'sans-serif'],
        'lato-light': ['lato-light', 'sans-serif'],
        'lato-regular': ['lato-regular', 'sans-serif'],
        'lato-thin': ['lato-thin', 'sans-serif'],
        'lato-thinitalic': ['lato-thinitalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
