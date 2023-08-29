/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
        redaction: ['var(--font-redaction)'],
        poppins: ['var(--font-poppins)'],
        poppinsLight: ['var(--font-poppinsLight)'],
      },
      fontSize:{
        '10xl': '5rem',
        '11xl': '11rem',
        '20xl': '20rem',

      },
      colors: {
        dark: "#1b1b1b",
        light: "#e0e1dd",
        gray: '#5A5A5A',
        backGray: '#ced4da',
        primary: "#eb5e28", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        
      },
      animation:{
        'spin-slow': 'spin 5s linear infinite',
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.5) 1px,#e0e1dd ,#e0e1dd 100px,	#eb5e28,#5A5A5A);',
        circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.5) 1px,#e0e1dd ,#e0e1dd 80px,	#eb5e28,#5A5A5A);',
        circularLightMd: 'repeating-radial-gradient(rgba(0,0,0,0.5) 1px,#e0e1dd ,#e0e1dd 60px,	#eb5e28,#5A5A5A);',
        circularLightSm: 'repeating-radial-gradient(rgba(0,0,0,0.5) 1px,#e0e1dd ,#e0e1dd 40px,	#eb5e28,#5A5A5A);',
        
      }
    },
    screens:{
      '2xl': {max: '1535px'},
      // => @media (max-width: 1535px)
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }

    },
  },
  plugins: [],
}

