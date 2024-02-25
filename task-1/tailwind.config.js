/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{,js}"],
  theme: {
    extend: {
      fontSize: {
        '20px': '20px',
      },
      fontWeight: {
        '500': 500,
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"]
      },
      animation: {
        slidein: "slidein 600ms ease-in-out"
      },
      keyframes: {
        slidein: {
          "0%": {
            opacity: 0,
            transform: 'translateY(-20px)'
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)"
          }
        }
      }
    },
  },
  plugins: [],
}