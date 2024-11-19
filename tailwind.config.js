/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        iranyekan : "IRANYekanWeb"
      },
      backgroundColor: {
        apppurple : "#5D50C6" ,
        appbgcolor : "#E8E8E8",
        newsbg : "rgba(250 , 205, 73, 8%)"
      },
      textColor: {
        pinkcustom : "#F85E9F",
        graycustom: "rgba(25 , 24 , 37 , 50%)",
        orangecustom: "#FF5722"
      },
      backgroundImage: {
        layer: "url(../images/layer.png)"
      }
    },
  },
  plugins: [],
}