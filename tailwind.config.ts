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
          50: '#f0f4f9',
          100: '#dce6f0',
          200: '#b9cde1',
          300: '#92b2d1',
          400: '#6096c2',
          500: '#2e5284',
          600: '#254269',
          700: '#1d324f',
          800: '#152136',
          900: '#0c111d',
        },
        secondary: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#fdfdfd',
          300: '#fcfcfc',
          400: '#fafafa',
          500: '#ffffff',
          600: '#cccccc',
          700: '#999999',
          800: '#666666',
          900: '#333333',
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

