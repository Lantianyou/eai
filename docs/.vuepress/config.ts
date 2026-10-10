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
  ],
  bundler: viteBundler(),
  theme: minimalTheme,
});
