import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        foreground: "#FFFFFF",
        card: "#111827",
        "card-foreground": "#FFFFFF",
        popover: "#111827",
        "popover-foreground": "#FFFFFF",
        primary: "#6366F1",
        "primary-foreground": "#FFFFFF",
        secondary: "#1F2937",
        "secondary-foreground": "#F9FAFB",
        muted: "#9CA3AF",
        "muted-foreground": "#9CA3AF",
        accent: "#6366F1",
        "accent-foreground": "#FFFFFF",
        destructive: "#EF4444",
        "destructive-foreground": "#FFFFFF",
        border: "#1F2937",
        input: "#1F2937",
        ring: "#6366F1",
        text: "#FFFFFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
