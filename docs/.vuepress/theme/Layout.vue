<script setup lang="ts">
import { usePageData } from "vuepress/client";

import { profile } from "./options";
import { isExternal } from "./links";

const page = usePageData();
</script>

<template>
  <div class="flex min-h-dvh justify-center p-[clamp(20px,4vw,48px)]">
    <div class="flex w-full max-w-[600px] flex-col">
      <main class="site-main" :class="{ 'is-home': page.path === '/' }">
        <Content />
      </main>

      <nav
        class="flex animate-rise gap-6 pt-5 text-xs tracking-[0.04em] text-muted [animation-delay:0.4s]"
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
