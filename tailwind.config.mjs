/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-soft": "var(--color-primary-soft)",
        surface: "var(--color-surface)",
        neutral: "var(--color-neutral)",
        "neutral-strong": "var(--color-neutral-strong)",
        "neutral-muted": "var(--color-neutral-muted)",
        "border-subtle": "var(--color-border-subtle)"
      },
      maxWidth: {
        page: "var(--layout-page-max)",
        content: "var(--layout-content-max)",
        wide: "var(--layout-wide-max)"
      }
    }
  },
  plugins: []
};
