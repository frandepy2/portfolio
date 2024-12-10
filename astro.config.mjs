// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://frandepy2.github.io/portfolio/",
  base: "/portfolio/", // Ajusta el base path para GitHub Pages
  integrations: [tailwind({ applyBaseStyles: true })],
  build: {
    client: "dist", // Carpeta de salida
    assets: "_astro", // Mantén los assets en `_astro`
  },
});
