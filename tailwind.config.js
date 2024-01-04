/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
  },

  theme: {
    fontFamily: {
      primary: "Poppins",
    },

    screens: {
      sm: "320px",
      md: "768px",
      lg: "1440px",
      xl: "1920px",
    },
    extend: {
      colors: {
        darkGreen: "#0C5857",
        lightGreen: "#27C9A6",
      },
      boxShadow: {
        1: "0px 4px 30px rgba(0, 0, 0, 0.08)",
        2: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "md-all": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
    },
  },
}
