/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/bg.jpeg')",
        'footer-texture': "url('/img/')",
      },
      animation: {
        spaceMoon: 'animate 2s ease alternate infinite',
      },
      keyframes: {
        animate: {
          '100%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        MoveText: 'moveText .5s linear',
      },
      keyframes: {
        moveText: {
          '100%': { width: '100%' },
        },
      },
    },
    plugins: [],
  },
}
