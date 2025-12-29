/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C778DD', // Purple accent
        background: '#282C33', // Dark background
        secondary: '#ABB2BF', // Light gray text
        border: '#ABB2BF', // Border color
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        sans: ['"Fira Code"', 'monospace'], // Forcing mono everywhere for this specific design
      },
    }
  },
  plugins: [],
};
