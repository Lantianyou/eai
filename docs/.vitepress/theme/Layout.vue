<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";

import { profile } from "./options";
import { isExternal } from "./links";

const { page } = useData();
const route = useRoute();
const dates = computed(() => {
  const { date, updated } = page.value.frontmatter;
  return {
    published: typeof date === "string" ? date : undefined,
    modified: typeof updated === "string" ? updated : undefined,
  };
});
</script>

<template>
  <div
    class="flex min-h-dvh justify-center p-[clamp(20px,4vw,48px)]"
    :class="{ 'resume-layout': page.path === '/resume/' }"
  >
    <div
      class="flex w-full flex-col"
      :class="
        route.path !== '/' && route.path !== '/about/' && route.path !== '/resume/'
          ? 'max-w-[760px]'
          : 'max-w-[600px]'
      "
    >
      <main
        class="site-main"
        :class="{
          'is-home': route.path === '/',
          'is-article vp-doc': route.path !== '/' && route.path !== '/about/',
        }"
      >
        <Content />
        <p v-if="route.path !== '/' && route.path !== '/resume/'" class="article-meta">
          <a href="/" rel="author">{{ profile.name }}</a>
          <template v-if="dates.published">
            · 发布于 <time :datetime="dates.published">{{ dates.published.slice(0, 10) }}</time>
          </template>
          <template v-if="dates.modified && dates.modified !== dates.published">
            · 更新于 <time :datetime="dates.modified">{{ dates.modified.slice(0, 10) }}</time>
          </template>
        </p>
      </main>

      <nav
        v-if="route.path !== '/resume/'"
        class="rise-in flex gap-6 pt-5 text-xs tracking-[0.04em] text-muted [transition-delay:0.4s]"
        aria-label="Elsewhere"
      >
        <a
          v-for="item in profile.nav"
          :key="item.link"
          :href="item.link"
          :target="isExternal(item.link) ? '_blank' : undefined"
          :rel="isExternal(item.link) ? 'noopener' : undefined"
          class="transition-colors duration-[250ms] ease-[ease] hover:text-ink"
        >
          {{ item.text }}
          <span v-if="isExternal(item.link)" class="sr-only"> (opens in a new tab)</span>
        </a>
      </nav>
    </div>
  </div>
</template>
