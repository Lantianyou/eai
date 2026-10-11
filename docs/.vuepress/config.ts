import tailwindcss from "@tailwindcss/vite";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

import minimalTheme from "./theme";
import { profile } from "./theme/options";

export default defineUserConfig({
  lang: "en-US",
  title: profile.name,
  description: profile.description,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { property: "og:title", content: profile.name }],
    ["meta", { property: "og:description", content: profile.description }],
    ["meta", { name: "twitter:card", content: "summary" }],
  ],
  bundler: viteBundler({
    viteOptions: {
      plugins: [tailwindcss()],
    },
  }),
  theme: minimalTheme,
});
