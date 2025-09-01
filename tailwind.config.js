/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './*.html'
  ],
  theme: {
    extend: {
       fontFamily: {
        // Fuente externa
        'mukta': ['Mukta Vaani', 'sans-serif'],
        // Fuente anterior, declarada por defecto
        'sans': ['Mukta Vaani', 'system-ui', 'sans-serif']
      },
      // Los pesos que incluiste en el link de Google Fonts
      fontWeight: {
        'extralight': '200',  // Mukta Vaani ExtraLight
        'light': '300',       // Mukta Vaani Light
        'normal': '400',      // Mukta Vaani Regular
        'medium': '500',      // Mukta Vaani Medium
        'semibold': '600',    // Mukta Vaani SemiBold
        'bold': '700',        // Mukta Vaani Bold
        'extrabold': '800',   // Mukta Vaani ExtraBold
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'black' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        typing: 'typing 3s steps(30, end) forwards',
        blink: 'blink 0.7s step-end infinite',
        'scroll-left': 'scroll-left 25s linear infinite',
      },
    },
  },
  plugins: [], 
}