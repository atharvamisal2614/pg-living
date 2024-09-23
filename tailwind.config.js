/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
        secondaryPurple: 'rgb(46 47 89)',
        pastelAliceBlue: 'rgb(234 244 255)',
      },
    },
  },
  plugins: [],
};
