import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['IM Fell English', 'Georgia', 'serif'],
        hand: ['Caveat', 'cursive'],
        stamp: ['Oswald', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
        mono: ['Courier Prime', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
