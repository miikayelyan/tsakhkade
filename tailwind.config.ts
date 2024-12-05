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
        grayCustom: "rgb(112, 112, 112)",
        cardBg: "#f0f0f0",
        descGapBg: "#d0c9c0",
      },
    },
  },
  plugins: [],
} satisfies Config;
