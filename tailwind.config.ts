/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: {
        0: '#ffffff',
        100: '#b3b3b3',
        200: '#adadad',
        300: '#2a2a2a',
        400: '#282828',
        500: '#535353',
        600: '#212121',
        700: '#121212',
        900: '#000000',
      },
      spotifyGreen: '#1db954',
      transparent: 'transparent',
      background: 'var(--background)',
      foreground: 'var(--foreground)',
    },
    fontSize: {
      xxs: '12px',
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '32px',
      '4xl': '36px',
      '5xl': '80px',
    },
    lineHeights: {
      xxs: '12px',
      xs: '16px',
      sm: '24px',
      md: '32px',
      lg: '40px',
      xl: '48px',
      '2xl': '52px',
    },
    extend: {
      height: {
        dvh: 'var(--dynamic-vh)',
      },
      minHeight: {
        dvh: 'var(--dynamic-vh)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
