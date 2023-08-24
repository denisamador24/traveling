/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        denis: '#8d8f8621',
        primary: {
          200: '#8ADBF0',
          500: '#48B7D6D6',
          600: '#42A7C3',
          800: '#347F90',
        },
        orange: '#FA8443',
        gray: {
          900: '#121212',
          800: '#333',
          600: '#636363',
          500: '#8F8F8F',
          100: '#faf0f073'
        }
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Lato: ['Lato', 'sans-serif']
      },
      screens: {
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1336
      }
    },
  },
  plugins: [],
}
