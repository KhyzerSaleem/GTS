
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
          fontFamily: {
            bricolage: ['var(--font-bricolage)'], 
            },
          container: {
            center: true,
            padding: {
              DEFAULT: "16px",  // Base padding (mobile)
              sm: "24px",        // Small devices
              md: "24px",        // Medium devices
              lg: "38px",        // Large devices
              xl: "50px",        // Extra large devices
              "2xl": "60px",     // 2XL screens
            },
          },
          screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
          },
            
        },
      },
  plugins: [],
}














