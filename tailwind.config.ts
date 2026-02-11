import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY: Warm amber/golden - represents education, hope, and Peruvian sunshine
        // Used for main CTAs and key UI elements that inspire action
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Main brand color - warm, hopeful
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // SECONDARY: Terracotta/Clay - earthy Peruvian warmth, human connection
        // Used for secondary CTAs and to add depth/warmth to the design
        secondary: {
          50: '#fef6ee',
          100: '#fce8d6',
          200: '#f8cfac',
          300: '#f4af77',
          400: '#ef8440',
          500: '#e8632a',  // Warm terracotta - inviting and human
          600: '#d14d1f',
          700: '#b03a1b',
          800: '#8d301e',
          900: '#732a1c',
        },
        // ACCENT: Deep teal - trust, stability, complements warm tones
        // Used for information, links, and trust signals
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',  // Trust and stability
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // WARM NEUTRALS: Cream/beige backgrounds - not sterile white
        // Creates warmth and reduces eye strain, feels more human
        warm: {
          50: '#fdfcfb',   // Almost white, subtle warmth
          100: '#faf8f5',  // Light cream - main background
          200: '#f5f1ea',  // Slightly darker cream for alternating sections
          300: '#ebe4d7',  // Soft beige for cards
          400: '#d4c8b5',
          500: '#b5a58d',
        },
        // BRAND TEXT: Rich browns instead of pure black - softer, warmer
        text: {
          primary: '#3d2817',    // Deep warm brown for headings
          secondary: '#5c4a37',  // Medium brown for body text
          muted: '#8b7661',      // Muted brown for secondary text
          light: '#a89885',      // Light brown for subtle text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      // Custom shadows for softer, warmer feel
      boxShadow: {
        'soft': '0 2px 8px rgba(61, 40, 23, 0.08)',
        'soft-md': '0 4px 12px rgba(61, 40, 23, 0.12)',
        'soft-lg': '0 8px 24px rgba(61, 40, 23, 0.15)',
        'soft-xl': '0 12px 32px rgba(61, 40, 23, 0.18)',
      },
    },
  },
  plugins: [],
}
export default config

