/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'form-pattern': "url('/src/assets/formbackground.svg')",
        'signup-pattern': "url('/src/assets/signup.svg')",
        's':"url('/src/assets/Group 35.svg')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [
  ],
  darkMode:'class'
}

