<script setup lang="ts">
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
</script>

<template>
  <div class="flex min-h-dvh flex-col p-[clamp(20px,4vw,48px)]">
    <SiteHeader />

    <main class="site-main">
      <Content />
    </main>

    <SiteFooter />
  </div>
</template>
