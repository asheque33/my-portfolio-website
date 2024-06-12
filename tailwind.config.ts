// import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

// const config: Config = {
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.orange,
      color1: "#D02F16",
      color2: "#2A65F1",
      color3: "#38BDF8",
      color4: "#F5DD1B",
      color5: "#80BD00",
    },
  },
  plugins: [],
};
