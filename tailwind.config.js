/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
          800: '#1e293b',
          500: '#64748b',
          400: '#94a3b8',
          200: '#e2e8f0',
        },
        teal: {
          400: '#2dd4bf',
          300: '#5eead4',
        },
      },
    },
  },
  plugins: [],
}
