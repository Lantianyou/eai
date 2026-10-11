<script setup lang="ts">
import { profile } from "../options";

const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="mt-[clamp(72px,14vh,160px)] flex justify-between gap-4 border-t border-hairline pt-[22px] text-xs text-muted animate-rise [animation-delay:0.45s]"
  >
    <p>{{ profile.name }} © {{ year }}</p>
    <p>{{ profile.footerNote }}</p>
  </footer>
</template>
