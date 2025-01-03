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
        bg_primary: "rgb(240, 240, 240)",
        navlink_bottom_border: "rgb(208, 201, 192)",
      },
      screens: {
        custom_tablet: { min: "320px", max: "1000px" },
        custom_mobile: { min: "320px", max: "750px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
