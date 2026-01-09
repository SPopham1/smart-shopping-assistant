import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://spopham1.github.io",
  base: "/smart-shopping-assistant",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
