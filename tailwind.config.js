const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'text': '#ffffff',
      'background': '#020517',
      'primary': '#0aff9d',
      'secondary': '#f2f2f2',
      'accent': '#a985ff',
     },     
     fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Poppins',
      body: 'Poppins',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
      black: '900',
    },    
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          'text': '#ffffff',
          'background': '#020517',
          'primary': '#0aff9d',
          'secondary': '#f2f2f2',
          'accent': '#a985ff',
        }
      }
    }
  })]
}

