/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-screen": "url('./assets/bg-images/emoji-texture.jpg')",
      },
      width: {
        card: "400px",
      },
      height: {
        card: "500px",
      },
      colors: {
        primary: "#135EEC",
        secondary: "#427EF0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        handrawn: ["Delicious Handrawn", "cursive"],
      },
    },
    screens: {
      xs: "425px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1440px",
    },
  },
  plugins: [],
};
