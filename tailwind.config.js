/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-text-color': '#f5f6f7',
        'secondary-text-color': '#a5a09f',
        'main-color': '#1cd4d4',
      },
    },
  },
  plugins: [],
};
