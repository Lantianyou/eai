import tailwindcss from "@tailwindcss/vite";
import { viteBundler } from "@vuepress/bundler-vite";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";
import { defineUserConfig } from "vuepress";

import minimalTheme from "./theme";
import { profile } from "./theme/options";

export default defineUserConfig({
  lang: "zh-CN",
  title: profile.englishName,
  description: profile.description,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  plugins: [
    sitemapPlugin({
      hostname: profile.url,
      excludePaths: ["/404.html"],
      changefreq: "monthly",
    }),
  ],
  bundler: viteBundler({
    viteOptions: {
      plugins: [tailwindcss()],
    },
  }),
  theme: minimalTheme,
});
