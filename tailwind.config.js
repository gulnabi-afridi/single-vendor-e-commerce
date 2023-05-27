/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "my-background-image": "url('/path/to/your/background-image.jpg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "325px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
      },
      colors: {
        main: {
          brand: "#23232C",
          secondary:"#00D994"
        },
        white: {
          main: "#FFFFFF",
          off:"#f1f2f4",
          cool:"#929299",
        },
        black: {
          main: "#000000",
        },
        gray: {
          main: "#EFEFEF",
          cool:"#e4e6eb",
          lightGray: "#f8f8f8",
        },
        red:{
          main:"#FF0000",
        },
        input: "#8E8E8E",
      },
    },
  },
  plugins: [],
};
