/**
 * All defaults params
 * https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        default: '0px 0px 24px rgba(131, 170, 230, 0.3)',
        sm: '0px 0px 6px rgba(131, 170, 230, 0.3)',
        md: '0px 0px 12px rgba(131, 170, 230, 0.3)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
