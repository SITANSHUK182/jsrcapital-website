/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // JSR Capital Advisors Color Palette
        'custom-cream': '#F1EFE6',
        'prussian-blue': '#13293D',
        'smoky-black': '#141301',
        'tang-blue': '#265CC7',
        'burnt-sienna': '#DE6449',
        
        // Alternative naming convention (if you prefer)
        'primary': '#13293D',      // Prussian Blue
        'secondary': '#265CC7',    // Tang Blue
        'accent': '#DE6449',       // Burnt Sienna
        'background': '#F1EFE6',   // Custom Cream
        'text-dark': '#141301',    // Smoky Black
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['EB Garamond', 'Georgia', 'Times New Roman', 'serif'],
        'body': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'heading': ['EB Garamond', 'Georgia', 'Times New Roman', 'serif'],
      }
    },
  },
  plugins: [],
}