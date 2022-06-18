// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      // hero:
      // link abacus_3.jpg from public folder
      hero: "url('/public/images/Abacus_3.jpg')",
       

      // 'hero': 'url("images/abacus_3.jpg")',
        // "url('https://html.creativegigstf.com/vCamp/vCamp/images/assets/bg_01.png')",
    },
    extend: {
      colors: {
         pblack: "#160051",
        pblue: "#143d59",
        pyellow: "#f4b41a",
        pviolet: "#e758d4",

    
    },
   
      fontFamily: {
        pop: ['Poppins']
      },
      animation: {
        blob: "blob 7s infinite",
        blob2: "blob2 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
            filter: "blur(0px)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            filter: "blur(2px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "50%": {
            transform: "translate(20px, -20px) scale(1.1)",
            filter: "blur(0px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
