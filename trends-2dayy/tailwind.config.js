/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    zIndex: {
      '-1': '-1',
      '-2': '-2',
      // Add more negative z-index values as needed
    },
  },
  plugins: [],
}

