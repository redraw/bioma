import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import decapCmsOauth from "astro-decap-cms-oauth";

// https://astro.build/config
export default defineConfig({
  site: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:4321",
  output: "hybrid",
  adapter: vercel({ functionPerRoute: false }),
  integrations: [
    mdx(),
    sitemap(),
    decapCmsOauth(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
