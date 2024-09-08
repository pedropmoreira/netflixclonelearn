// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'my-image': "url('/assets/background.jpg')",
      },
      filter: {
        'brilho': 'brightness(1.5) drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
      },
    },
  },
  plugins: [],
};
export default config;
