/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        'brand-bg': '#05060a',
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

