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
        'rainbow':"url('/src/assets/rainbow.png')",
        's-rainbow':"url('/src/assets/Group 1.png')",
        'small-form':"url('/src/assets/Group 43.svg')",
        'anotherOne':"url('/src/assets/anotherSignUp.svg')",
        'footer':"url('/src/assets/footer.svg')",
      },
      fontFamily: {
        'poppins': ['Poppins'],
      }
    },
  },
  plugins: [
  ],
  darkMode:'class'
}

// 'rainbow':"url('/src/assets/Group 1 (1).png')",