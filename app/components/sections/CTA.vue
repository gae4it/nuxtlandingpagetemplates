<script setup lang="ts">
import type { Theme } from '~/cms/themes'
import type { CtaProps } from '~/types/sections'

defineProps<CtaProps & { theme: Theme }>()
</script>

<template>
  <section 
    :class="[
      theme.background, 
      theme.font, 
      theme.text, 
      'py-24 px-6 sm:py-32'
    ]"
  >
    <div 
      :class="[
        'max-w-5xl mx-auto p-12 sm:p-20 text-center relative overflow-hidden group',
        theme.radius,
        theme.background === 'bg-gray-950' ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-black/5'
      ]"
    >
      <!-- Background Glow -->
      <div 
        class="absolute -top-24 -right-24 h-64 w-64 blur-[100px] opacity-20 transition-opacity duration-700 group-hover:opacity-40"
        :class="`bg-${theme.primary}-500`"
      />
      <div 
        class="absolute -bottom-24 -left-24 h-64 w-64 blur-[100px] opacity-10 transition-opacity duration-700 group-hover:opacity-30"
        :class="`bg-${theme.primary}-600`"
      />

      <div class="relative z-10">
        <h2 class="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
          {{ title }}
        </h2>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <UButton
            :color="(theme.primary as any)"
            variant="solid"
            size="xl"
            class="rounded-full px-12 py-5 text-xl font-bold shadow-xl shadow-primary-500/10 hover:scale-105 transition-transform"
          >
            {{ button }}
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
