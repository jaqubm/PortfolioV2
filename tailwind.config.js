/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {  
    colors: {
      white: '#FFFFFF05',
      gray: '#D9D9D9',
      text: '#FFFFFF',
      'text-80': '#FFFFFFCC',
      'text-60': '#FFFFFF99',
      primary: '#0AFF9D',
      accent: '#A985FF',
      background: '#020617',
    },   
    fontFamily: {
      heading: 'Poppins',
      body: 'Poppins',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },   
    extend: {},
  },
  plugins: []
}
