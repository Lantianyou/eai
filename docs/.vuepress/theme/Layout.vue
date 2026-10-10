<script setup lang="ts">
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
</script>

<template>
  <div class="site">
    <SiteHeader />

    <main class="site-main">
      <Content />
    </main>

    <SiteFooter />
  </div>
</template>
