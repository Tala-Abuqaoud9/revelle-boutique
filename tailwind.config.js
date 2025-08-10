/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#F59E0B",
        neutral: "#6B7280",
        accent: "#10B981",
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
