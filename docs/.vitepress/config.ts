import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitepress";

import { profile } from "./theme/options";

export default defineConfig({
  lang: "zh-CN",
  title: profile.englishName,
  description: profile.description,
  cleanUrls: true,
  // Keep the private resume available to local development, but exclude it
  // from production builds used by the deploy script.
  srcExclude: process.env.PUBLIC_BUILD ? ["resume.md"] : [],
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  markdown: {
    anchor: false,
    image: { lazyLoad: true },
    theme: "github-light",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
