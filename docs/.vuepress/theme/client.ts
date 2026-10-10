import { defineClientConfig } from "vuepress/client";

import Layout from "./Layout.vue";
import NotFound from "./NotFound.vue";

import "./styles.css";

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
  },
});
