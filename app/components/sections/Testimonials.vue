<script setup lang="ts">
import type { Theme } from '~/cms/themes'
import type { TestimonialsProps } from '~/types/sections'

defineProps<TestimonialsProps & { theme: Theme }>()
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
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="t in testimonials" 
          :key="t.name"
          :class="[
            'p-10 transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 relative group cursor-default',
            theme.radius,
            theme.background === 'bg-gray-950' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-sm'
          ]"
        >
          <!-- Subtle Glow Overlay -->
          <div 
            class="absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity blur-2xl -z-10 rounded-full scale-75"
            :class="`bg-${theme.primary}-500`"
          />

          <blockquote class="text-xl leading-relaxed italic opacity-90">
            "{{ t.quote }}"
          </blockquote>
          
          <div class="mt-10 flex items-center gap-x-5">
            <div 
              :class="[
                'h-12 w-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg',
                `bg-${theme.primary}-500`
              ]"
            >
              {{ t.name.charAt(0) }}
            </div>
            <div class="text-base">
              <p class="font-bold">{{ t.name }}</p>
              <p v-if="t.role" class="opacity-50 text-sm font-medium">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
