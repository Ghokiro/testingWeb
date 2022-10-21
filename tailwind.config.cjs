/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3-1': "10%, 80%, 10%"
      },
      height: {
        'conf' : '420px'
      }
      ,

      maxWidth: {
        '32': '7rem'
      },
      gridColumnStart: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '0': '0'
      },
      gridColumnEnd: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '0': '0'
      }
    }
  },
  plugins: [],
}
