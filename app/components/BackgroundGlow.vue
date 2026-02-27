<script setup lang="ts">
import type { Theme } from '~/cms/themes'

defineProps<{
  theme: Theme
}>()
</script>

<template>
  <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <!-- Technical Grid -->
    <div 
      class="absolute inset-0 mask-[radial-gradient(ellipse_at_center,black,transparent)] opacity-[0.03]"
      :class="theme.background === 'bg-gray-950' ? 'invert brightness-0' : ''"
      style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjQiPjxwYXRoIGQ9Ik0wIDM5aDF2MUgwVjM5em00MC0xdjFoLTFWMEgwdjFoMzl2Mzh6Ii8+PC9nPjwvZz48L3N2Zz4=');"
    />

    <!-- Radial Glows -->
    <div 
      class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 transition-colors duration-1000"
      :class="`bg-${theme.primary}-500/30`"
    />
    <div 
      class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 transition-colors duration-1000"
      :class="`bg-${theme.primary}-600/30`"
    />
    
    <!-- Dark Mode Center Glow -->
    <div 
      v-if="theme.background === 'bg-gray-950'"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] rounded-full blur-[150px] opacity-10 bg-primary-500/20"
    />
  </div>
</template>

<style scoped>
.renderer-bg {
  mask-image: radial-gradient(circle at center, white, transparent);
}
</style>
