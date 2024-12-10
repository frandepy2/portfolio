// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://frandepy2.github.io/portfolio/",
  integrations: [tailwind({ applyBaseStyles: true })],
  build: {
    client: "dist", // The build folder
    assets: "portfolio/_astro", // Place `_astro` inside `/portfolio`
  },
});
