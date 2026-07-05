/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — white + light sky blue + grassy/leaf green
        leaf: {
          DEFAULT: '#2F4A3C', // deep forest (logo circle)
          900: '#22382C',
          700: '#2F4A3C',
          500: '#5B8C5A', // grass green
          300: '#A8C99A', // soft leaf
          200: '#C8E0BC',
          100: '#DCEBD4',
          50: '#EEF6E8',
        },
        sky: {
          DEFAULT: '#A9D6F5',
          500: '#7FC0EE',
          300: '#A9D6F5',
          200: '#CDE8F8',
          100: '#E8F4FB',
        },
        cream: '#F7FAF5',
        ink: {
          DEFAULT: '#1F2D27',
          soft: '#3F5247',
          muted: '#6B7E72',
        },
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(1.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.5rem)' },
        },
        bloom: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 6s ease-in-out infinite',
        bloom: 'bloom 1s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
