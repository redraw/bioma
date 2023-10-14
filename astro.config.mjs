import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { url } from "./src/site.json";

// https://astro.build/config
export default defineConfig({
  site: url,
  output: "hybrid",
  integrations: [mdx(), sitemap(), tailwind({
    applyBaseStyles: false
  })],
  adapter: vercel()
});