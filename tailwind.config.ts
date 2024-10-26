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
        300: '#535353',
        500: '#212121',
        700: '#121212',
        900: '#000000',
      },
      spotifyGreen: '#1db954',
      transparent: 'transparent',
      background: 'var(--background)',
      foreground: 'var(--foreground)',
    },
    fontSize: {
      xxs: '10px',
      xs: '12px',
      sm: '16px',
      md: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '32px',
      '4xl': '36px',
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
      fontFamily: {
        gotham: [
          'var(--font-gotham-book)',
          'var(--font-gotham-bold)',
          'var(--font-gotham-light)',
          'var(--font-gotham-medium)',
        ],
      },
      height: {
        dvh: 'var(--dynamic-vh)',
      },
      minHeight: {
        dvh: 'var(--dynamic-vh)',
      },
    },
  },
  plugins: [],
}
export default config
