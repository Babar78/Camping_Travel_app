/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        'login-bg': "linear-gradient(to bottom, rgba(48, 175, 91, 0.2), rgba(0, 0, 0)), url('/bg/login.jpg')",
        'about-us-hero': "url('/bg/about-us-hero.jpg')",
        "about-us-perfect-camping": "url('/sections/about-us/perfectCamping.jpg')",
        "about-us-stats": "url('/bg/about-us-stats.jpeg')",
        "destinations-hero": "url('/bg/destinations-hero.jpg')",
        "mountain-camping": "url('/sections/Destinations/Region/mountain-camping.jpg')",
        "forest-camping": "url('/sections/Destinations/Region/forest-camping.jpg')",
        "coastal-camping": "url('/sections/Destinations/Region/costal-camping.jpg')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
