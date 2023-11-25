/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {  
    colors: {
      text: '#FFFFFF',
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
