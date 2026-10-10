import { getDirname, path } from "vuepress/utils";

import type { Theme } from "vuepress";

const __dirname = getDirname(import.meta.url);

const minimalTheme: Theme = {
  name: "minimal-theme",
  clientConfigFile: path.resolve(__dirname, "client.ts"),
};

export default minimalTheme;
