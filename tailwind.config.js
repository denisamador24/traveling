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
          200: '#faf0f073',
          100: '#F8F8F8'
        }
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Lato: ['Lato', 'sans-serif']
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1336px'
      }
    },
  },
  plugins: [],
}
