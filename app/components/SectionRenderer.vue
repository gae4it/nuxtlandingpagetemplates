<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import type { PageDefinition } from '~/types/page'

const props = defineProps<{ 
  page: PageDefinition 
}>()

const theme = useTheme(props.page.theme)

// Nuxt auto-imports components from app/components/sections/
// They will be available as SectionsHero, SectionsCTA, etc.
const componentsMap: Record<string, any> = {
  hero: resolveComponent('SectionsHero'),
  cta: resolveComponent('SectionsCTA'),
  testimonials: resolveComponent('SectionsTestimonials'),
  features: resolveComponent('SectionsFeatures')
}
</script>

<template>
  <div class="relative min-h-screen isolate">
    <BackgroundGlow :theme="theme" />
    <TemplateSwitcher />
    
    <component
      v-for="(section, i) in page.sections"
      :key="i"
      :is="componentsMap[section.type]"
      v-bind="section.props"
      :theme="theme"
    />
  </div>
</template>
