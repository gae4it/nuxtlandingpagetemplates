<script setup lang="ts">
import { themes } from '~/cms/themes'
const defaultTheme = themes.saas

const templates = [
  { 
    id: 'saas', 
    name: 'SaaS Platform', 
    description: 'Clean, modern layout for software products.',
    icon: 'i-heroicons-cpu-chip',
    accent: 'blue'
  },
  { 
    id: 'agency', 
    name: 'Creative Agency', 
    description: 'Bold and sophisticated for design studios.',
    icon: 'i-heroicons-paint-brush',
    accent: 'orange'
  },
  { 
    id: 'portfolio', 
    name: 'Personal Portfolio', 
    description: 'Minimal and professional for freelancers.',
    icon: 'i-heroicons-user',
    accent: 'purple'
  }
]
</script>

<template>
  <div class="relative min-h-screen bg-gray-50 dark:bg-gray-950 isolate overflow-hidden">
    <BackgroundGlow :theme="defaultTheme" />
    
    <div class="max-w-7xl mx-auto py-24 px-6 sm:py-32">
      <header class="mb-20 text-center relative z-10">
        <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-bold tracking-wider uppercase mb-6 ring-1 ring-primary-500/20">
          Nuxt 4 • Study Project
        </div>
        <h1 class="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-7xl tracking-tight">
          Premium Landing <br class="hidden sm:block" /> <span class="text-primary-500">Templates</span>
        </h1>
        <p class="mt-8 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Explore our collection of high-performance, CMS-driven landing pages built with Nuxt UI and Tailwind CSS.
        </p>
      </header>
      
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        <NuxtLink 
          v-for="t in templates" 
          :key="t.id"
          :to="`/templates/${t.id}`"
          class="group block p-8 bg-white/80 dark:bg-gray-900/50 rounded-3xl shadow-sm ring-1 ring-gray-200 dark:ring-white/10 backdrop-blur-xl transition-all hover:shadow-2xl hover:-translate-y-2"
        >
          <div 
            :class="[
              'h-16 w-16 rounded-2xl flex items-center justify-center mb-8 transition-colors bg-gray-50 dark:bg-gray-800',
              `group-hover:bg-${t.accent}-500 group-hover:text-white`
            ]"
          >
            <UIcon :name="t.icon" class="text-3xl" />
          </div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t.name }}</h2>
          <p class="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">{{ t.description }}</p>
          <div :class="[`mt-8 flex items-center text-sm font-bold uppercase tracking-wider text-${t.accent}-500`]">
            Preview Template
            <UIcon name="i-heroicons-arrow-right" class="ml-2 transition-transform group-hover:translate-x-2" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
