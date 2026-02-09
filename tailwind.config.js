/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e0fe',
          300: '#7cc4fa',
          400: '#36a7f4',
          500: '#0a7ea4',
          600: '#0066cc',
          700: '#0055b3',
          800: '#004494',
          900: '#003a7a',
        },
        apple: {
          gray: '#f5f5f7',
          darkgray: '#1d1d1f',
          lightgray: '#fbfbfd',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-sm': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
