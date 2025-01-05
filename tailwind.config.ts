import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_primary: "#F0F0F0",
        navlink_bottom_border: "#D0C9C0",
        sidebar_bg: "rgba(0, 0, 0, 0.7)",
      },
      screens: {
        custom_tablet: { min: "320px", max: "1000px" },
        custom_mobile: { min: "320px", max: "750px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
