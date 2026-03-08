/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#fff7fb',
          surface: '#fffdfd',
          primary: '#9e0059',
          secondary: '#f7d6e6',
          accent: '#d86a93',
          text: '#2f2431',
          muted: '#7a6574',
          line: '#eedfe8',
        },
        primary: {
          50: '#fff1f7',
          100: '#ffdbe9',
          200: '#ffbfd8',
          300: '#f999bc',
          400: '#ec729f',
          500: '#cc4d88',
          600: '#9e0059',
          700: '#7f0048',
          800: '#751f40',
          900: '#581732',
        },
        apple: {
          gray: '#f9f1f6',
          darkgray: '#2f2431',
          lightgray: '#fffdfd',
        },
        accent: {
          DEFAULT: '#d86a93',
          dark: '#9e0059',
          light: '#f7d6e6',
        },
      },
      fontFamily: {
        heading: ['Trend Sans One', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Work Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Work Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
