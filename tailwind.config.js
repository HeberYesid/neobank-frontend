/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // Indigo 500
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#1e293b', // Slate 800
          foreground: '#ffffff',
        },
        background: '#f8fafc', // Slate 50
        surface: '#ffffff',
        muted: '#94a3b8', // Slate 400
        border: '#e2e8f0', // Slate 200
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
