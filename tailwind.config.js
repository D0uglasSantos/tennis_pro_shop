/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       'banner': 'url("/images/banner.png")',
      },
      colors: {
        'bg-green': '#645F25',

      },
      boxShadow: {
        "shadow1": "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      },
      fontFamily: {
        "font-merri-sans": ["Merriweather Sans", "-apple-system"],
      },
    },
  },
  plugins: [],
};
