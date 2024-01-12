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
      backgroundImage: {
        'welcome-intro': "url('/src/assets/img/intro.02414b0c.jpg')",
        'welcome-news': "url('/src/assets/img/news.285cf24d.jpg')",
      },
    },
  },
  plugins: [],
};
