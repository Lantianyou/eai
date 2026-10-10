<script setup lang="ts">
import { profile } from "../options";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <p>{{ profile.name }} © {{ year }}</p>
    <p>{{ profile.footerNote }}</p>
  </footer>
</template>
