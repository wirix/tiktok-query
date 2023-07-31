/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/*.tsx"],
  theme: {
    extend: {
      gridTemplateRows: {
        'layoutRows': 'auto 1fr auto',
      },
      gridTemplateColumns: {
        'layoutColumnsLg': 'auto 240px minmax(500px, 600px) auto',
        'layoutColumnsSm': 'auto minmax(500px, 600px) auto',
      }
    },
    container: {
      center: true,
      padding: '0.75rem',
      maxWidth: '1536px',
    },
  },
  plugins: [],
}

