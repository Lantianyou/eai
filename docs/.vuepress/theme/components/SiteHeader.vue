<script setup lang="ts">
import { profile } from "../options";
import { isExternal } from "../links";
</script>

<template>
  <header class="flex animate-rise items-baseline justify-between gap-6">
    <a class="text-[13px] font-semibold tracking-[0.02em]" href="/">{{ profile.name }}</a>
    <nav class="flex gap-[22px] max-[560px]:gap-4" aria-label="Elsewhere">
      <a
        v-for="item in profile.nav"
        :key="item.link"
        :href="item.link"
        :target="isExternal(item.link) ? '_blank' : undefined"
        :rel="isExternal(item.link) ? 'noopener' : undefined"
        class="text-xs tracking-[0.04em] text-muted transition-colors duration-[250ms] ease-[ease] hover:text-ink"
      >
        {{ item.text }}
        <span v-if="isExternal(item.link)" class="sr-only"> (opens in a new tab)</span>
      </a>
    </nav>
  </header>
</template>
