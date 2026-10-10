<script setup lang="ts">
import { profile } from "../options";

const isWeb = (link: string): boolean => /^[a-z]+:\/\//i.test(link);
</script>

<template>
  <header class="site-header">
    <a class="wordmark" href="/">{{ profile.name }}</a>
    <nav class="site-nav" aria-label="Elsewhere">
      <a
        v-for="item in profile.nav"
        :key="item.link"
        :href="item.link"
        :target="isWeb(item.link) ? '_blank' : undefined"
        :rel="isWeb(item.link) ? 'noopener' : undefined"
      >
        {{ item.text }}
      </a>
    </nav>
  </header>
</template>
