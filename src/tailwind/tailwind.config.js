/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neo: {
          bg: 'var(--bg-primary)',
          card: 'var(--bg-card)',
          text: 'var(--text-primary)',
          muted: 'var(--text-secondary)',
          border: 'var(--border-color)',
          accent: 'var(--accent-primary)',
          accentText: 'var(--accent-text)',
          purple: 'var(--brand-purple)',
          blue: 'var(--brand-blue)',
          orange: 'var(--accent-primary)',
          green: 'var(--accent-primary)',
          red: 'var(--accent-primary)',
          yellow: 'var(--accent-primary)',
          pink: 'var(--accent-primary)'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', '"Syne"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        syne: ['"Syne"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif']
      },
      boxShadow: {
        'neo': '4px 4px 0px var(--border-color)',
        'neo-hover': '6px 6px 0px var(--border-color)',
        'neo-active': '1px 1px 0px var(--border-color)',
        'neo-lg': '8px 8px 0px var(--border-color)',
      }
    },
  },
  plugins: [],
}
