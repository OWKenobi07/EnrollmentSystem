module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants:{
   
    extend: {
      backgroundColor: ["active"],
      borderColor:["visited"],
      textColor:["visited"],
      transform: ["active"],
      scale:["active"]
    },
  },

  plugins: [],
};
