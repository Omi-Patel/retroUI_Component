/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", "ui-sans-serif", "system-ui"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        serif: ["'Instrument Serif'", "ui-serif", "Georgia"],
      },
      colors: {
        border: "var(--border)",
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface-2)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        accentFg: "var(--accent-fg)",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(0,0,0,0.02), 0 1px 2px 0 rgba(0,0,0,0.04)",
        pop: "0 2px 4px -2px rgba(0,0,0,0.06), 0 4px 12px -2px rgba(0,0,0,0.08)",
        retro: "3px 3px 0 0 var(--border-strong)",
        "retro-lg": "4px 4px 0 0 var(--border-strong)",
      },
    },
  },
  plugins: [],
};
