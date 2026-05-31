import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        civilia: {
          red: "#cd1417",
          ink: "#181818",
          paper: "#fffdfa",
          cream: "#fef7ec",
          warm: "#e7e2dc",
          muted: "#8e8e8e",
        },
      },
      fontFamily: {
        display: ["var(--font-civilia)", "Georgia", "serif"],
        body: ["var(--font-civilia)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(25, 25, 25, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
