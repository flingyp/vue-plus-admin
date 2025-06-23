/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    fill: {
      current: 'currentColor',
    },
    extend: {
      colors: {
        primary: 'var(--primaryColor)',
        primaryHover: 'var(--primaryColorHover)',
        primaryPressed: 'var(--primaryColorPressed)',
        primarySuppl: 'var(--primaryColorSuppl)',
        info: 'var(--infoColor)',
        infoHover: 'var(--infoColorHover)',
        infoPressed: 'var(--infoColorPressed)',
        infoSuppl: 'var(--infoColorSuppl)',
        success: 'var(--successColor)',
        successHover: 'var(--successColorHover)',
        successPressed: 'var(--successColorPressed)',
        successSuppl: 'var(--successColorSuppl)',
        warning: 'var(--warningColor)',
        warningHover: 'var(--warningColorHover)',
        warningPressed: 'var(--warningColorPressed)',
        warningSuppl: 'var(--warningColorSuppl)',
        error: 'var(--errorColor)',
        errorHover: 'var(--errorColorHover)',
        errorPressed: 'var(--errorColorPressed)',
        errorSuppl: 'var(--errorColorSuppl)',
      },
      backgroundImage: {
        vAuthBgImage: "url('~/assets/svg/auth-image.svg')",
      },
      backgroundColor: {
        vPageBgColor: '#fff',
        vPageBgDarkColor: 'rgb(24, 24, 28)',
        vHeaderBgColor: '#F3F4F6',
        vHeaderBgDarkColor: '#1F2937',
      },
      borderColor: {
        vBorderLight: 'rgb(239, 239, 245)',
        vBorderDark: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
};
