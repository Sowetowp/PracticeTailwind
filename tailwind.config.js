/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // darkMode: ['variant', [
  //   '@media (prefers-color-scheme: dark) { &:not(.light *) }',
  //   '&:is(.dark *)',
  // ]],
  plugins: [],
}

