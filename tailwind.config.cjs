/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    {
      pattern: /columns-\d+/,
      variants: ["sm", "md"],
    },
    {
      pattern: /grid-rows-\d+/,
      variants: ["sm", "md", "lg"],
    },
    {
      pattern: /grid-cols-\d+/,
      variants: ["sm", "md", "lg"],
    },
    {
      pattern: /items-\w+/,
      variants: ["sm", "md"],
    },
    {
      pattern: /justify-\w+/,
      variants: ["sm", "md"],
    },
  ],
  theme: {
    extend: {},
    // fontFamily: {
    //   sans: ["Helvetica", "Arial", "Inter", "sans-serif"],
    // }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["lofi"],
    logs: false,
  },
};
