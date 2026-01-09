// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://spopham1.github.io",
  base: "/smart-shopping-assistant", // No trailing slash
  output: "static",
});
