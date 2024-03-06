module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue: { A700: "#195be5" },
        gray: { 200: "#e5e8ea", 300: "#dbdde5", 900: "#111116" },
        blue_gray: { 50: "#eff2f4", 500: "#637087" },
      },
      boxShadow: {},
      fontFamily: { lexend: "Lexend" },
      backgroundImage: { gradient: "linear-gradient(90deg, #00000019,#00000066)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
