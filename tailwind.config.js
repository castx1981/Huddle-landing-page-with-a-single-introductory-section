/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-violet': 'hsl(257, 40%, 49%)',
        'soft-magenta': 'hsl(300, 69%, 71%)'
      },
      backgroundImage: {
        'mobile': "url('images/bg-mobile.svg')",
        'desktop': "url('images/bg-desktop.svg')",
      },
      width: {
        '3.5': '0.875rem',
      },
    }
  },
  plugins: [],
}
