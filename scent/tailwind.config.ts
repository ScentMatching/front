import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: { min: "769px", max: "1200px" },
      mobile: { max: "768px" },
      deskTop: { min: "769px" },
    },
    extend: {
      colors: {
      smColor : "#F6F6DB",
      smBorderColor : "#d3d396",
      },
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
