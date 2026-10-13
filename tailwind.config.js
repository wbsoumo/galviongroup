/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#937AFF",
          light: "#4D36D0",
          hover: "#8265FF",
          glow: "rgba(147, 122, 255, 0.35)",
        },
        secondary: {
          DEFAULT: "#FF5353",
          light: "#FF7575",
        },
        body: "#03010E",
        dark: "#040404",
        light: "#0B0C17",
        surface: "#101223",
        border: "#202128",
        "border-light": "rgba(255, 255, 255, 0.08)",
        "border-glow": "rgba(147, 122, 255, 0.4)",
        text: {
          DEFAULT: "#DAD4DE",
          dark: "#817E84",
          light: "#FFFFFF",
        },
        galvion: {
          purple: "#937AFF",
          violet: "#4D36D0",
          coral: "#FF5353",
          void: "#03010E",
          card: "#0B0C17",
          border: "#202128",
          muted: "#817E84",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter Tight", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        secondary: ["Urbanist", "var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        'glow-primary': '0 0 35px -5px rgba(147, 122, 255, 0.35)',
        'glow-secondary': '0 0 35px -5px rgba(255, 83, 83, 0.3)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
