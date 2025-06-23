/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    fill: {
      current: 'currentColor',
    },
    extend: {
      backgroundImage: {
        vAuthBgImage: "url('~/assets/svg/auth-image.svg')",
      },
    },
  },
};
