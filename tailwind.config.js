/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/**/*.html"],

  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-27%)' },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite ',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        product: ['"Product Sans"', 'sans-serif'],
      },
      fontSize: {
        'h1-xl': ['120px', { lineHeight: '100%', letterSpacing: '-0.04em' }],
        'h1-base': ['64px', { lineHeight: '100%', letterSpacing: '-0.005em' }],

        'h2-xl': ['48px', { lineHeight: '100%', letterSpacing: '-0.04em' }],
        'h2-base': ['40px', { lineHeight: '130%', letterSpacing: '0.015em' }],

        'h3-default': ['32px', { lineHeight: '130%', letterSpacing: '0em' }],
        'h3-regular': ['32px', { lineHeight: '130%', letterSpacing: '0em' }],

        'p-xl': ['24px', { lineHeight: '150%', letterSpacing: '-0.002em' }],
        'p-lg': ['20px', { lineHeight: '130%', letterSpacing: '0.008em' }],
        'p-md': ['18px', { lineHeight: '130%', letterSpacing: '0em' }],
        'p-base': ['16px', { lineHeight: '120%', letterSpacing: '0em' }],
        'p-sm': ['14px', { lineHeight: '120%', letterSpacing: '0em' }],
        'p-xs': ['12px', { lineHeight: '120%', letterSpacing: '0em' }],
      },
      
      colors: {
        white: '#ffffff',
      
        primary100: '#5C8097',
        primary50: '#9DB3C1',
        primary20: '#DEE6EA',
        primary10: '#EFF2F5',
      
        secondary100: '#CEA154',
        secondary50: '#E2C798',
        secondary20: '#F0E3CC',
        secondary10: '#FAF6EE',
      
        grey100: '#CED4DB',
        grey50: '#EFF2F5',
        grey20: '#F5F7F9',
        grey10: '#F9FAFB',
      
        black100: '#090D0F',
        black50: '#323537',
        black20: '#adaeaf',
        black10: '#cecfcf',
      
        secondary: '#33FF57',
        background: '#F9F9F9',
        text: '#323537',
      },
      
    },
  },
  plugins: [],
}