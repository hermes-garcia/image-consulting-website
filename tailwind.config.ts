import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lemonade: '#f8e4dd',
        bone: '#e8dfd0',
        ash: '#a1a692',
        silver: '#bac9ce',
      },
      fontFamily: {
        florentino: ['var(--font-florentino)'],
        muse: ['var(--font-muse)'],
      },
    },
  },
  plugins: [],
};
export default config;
