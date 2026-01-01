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
        primary: {
          50: '#fef3e2',
          100: '#fde5c5',
          200: '#fbc98b',
          300: '#f9ad51',
          400: '#f79524',
          500: '#f57e00',
          600: '#d96600',
          700: '#b34f00',
          800: '#8d3d00',
          900: '#6b2e00',
        },
        secondary: {
          50: '#e6f4f1',
          100: '#cce9e3',
          200: '#99d3c7',
          300: '#66bdab',
          400: '#33a78f',
          500: '#009173',
          600: '#00745c',
          700: '#005745',
          800: '#003a2e',
          900: '#001d17',
        },
        warm: {
          50: '#fefaf5',
          100: '#fdf5eb',
          200: '#fbebd7',
          300: '#f9e1c3',
          400: '#f7d7af',
          500: '#f5cd9b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

