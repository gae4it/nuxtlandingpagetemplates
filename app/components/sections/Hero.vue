<script setup lang="ts">
import type { Theme } from '~/cms/themes'
import type { HeroProps } from '~/types/sections'

const props = defineProps<HeroProps & { theme: Theme }>()

// Function to split title and insert highlight
const splitTitle = computed(() => {
  if (!props.highlightedWord || !props.title.includes(props.highlightedWord)) {
    return { before: props.title, highlight: '', after: '' }
  }
  const parts = props.title.split(props.highlightedWord)
  return { 
    before: parts[0], 
    highlight: props.highlightedWord, 
    after: parts.slice(1).join(props.highlightedWord) 
  }
})
</script>

<template>
  <section 
    :class="[
      theme.background, 
      theme.font, 
      theme.text, 
      'relative pt-24 pb-20 px-6 sm:pt-40 sm:pb-32 flex flex-col items-center text-center overflow-hidden'
    ]"
  >
    <div class="max-w-5xl mx-auto z-10">
      <h1 class="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
        {{ splitTitle.before }}
        <span 
          v-if="splitTitle.highlight" 
          :class="`text-${theme.primary}-500 inline-block drop-shadow-[0_0_15px_rgba(var(--color-primary-500),0.3)]`"
        >
          {{ splitTitle.highlight }}
        </span>
        {{ splitTitle.after }}
      </h1>
      
      <p class="mt-8 text-xl leading-relaxed opacity-70 max-w-3xl mx-auto font-medium">
        {{ subtitle }}
      </p>
      
      <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
        <UButton
          v-if="ctaText"
          :color="(theme.primary as any)"
          variant="solid"
          size="xl"
          class="rounded-full px-10 py-5 text-lg font-bold shadow-lg shadow-primary-500/20 hover:scale-105 transition-transform"
        >
          {{ ctaText }}
        </UButton>
        <UButton
          variant="ghost"
          size="xl"
          class="rounded-full px-10 py-5 text-lg font-bold"
        >
          Learn More
        </UButton>
      </div>

      <!-- Mockup Section -->
      <div 
        v-if="mockupImage" 
        class="mt-20 relative w-full max-w-6xl mx-auto group"
      >
        <div class="absolute inset-0 bg-primary-500/20 blur-[100px] rounded-full scale-90 opacity-50 group-hover:opacity-70 transition-opacity" />
        <div 
          class="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-1"
        >
          <NuxtImg 
            :src="mockupImage" 
            class="w-full h-auto object-cover"
            placeholder
          />
        </div>
      </div>
    </div>
  </section>
</template>
