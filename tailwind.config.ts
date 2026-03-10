import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        navy: '#17243A',
        steel: '#51617A',
        cloud: '#F6F5F2',
        stone: '#D8D4CC',
        accent: '#506D5A'
      },
      boxShadow: {
        soft: '0 12px 40px rgba(17, 24, 39, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
