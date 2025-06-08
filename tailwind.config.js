/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors:{
        "coffee": {
          50: "#E8D6D0",
          200: "#C89F94",
          400: "#A25F4B",
          600: "#744838"
        }
      },
      fontFamily:{
        "karla": ["Karla", "sans-serif"]
      },
       animation: {
        'slideDown': 'slideDown .3s linear ',
        'slideUp': 'slideUp .3s linear ',
        'fadeIn': 'fadeIn .3s linear ',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
         slideUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
         fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      backgroundImage: {
        slider: "url('./img/slider.jpg')",
      }
    },
  },
  plugins: [],
}

