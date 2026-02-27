<script setup lang="ts">
const route = useRoute()
const templateName = route.params.name as string

// Dynamic import of CMS data
// In a real app, you might use a useFetch or a global state
// For this study project, we use a simple import map or dynamic import
const config = ref<any>(null)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    // Attempt to import the template data
    const module = await import(`../../cms/${templateName}/index.ts`)
    config.value = module.page
    
    // Apply SEO
    if (module.seo) {
      useSeoMeta({
        title: module.seo.title,
        description: module.seo.description,
        ogImage: module.seo.ogImage
      })
    }
  } catch (e) {
    console.error(e)
    error.value = `Template "${templateName}" not found.`
  }
})
</script>

<template>
  <main>
    <div v-if="error" class="p-20 text-center">
      <h1 class="text-2xl font-bold">{{ error }}</h1>
      <NuxtLink to="/" class="mt-4 text-primary-500 underline block">Return to Gallery</NuxtLink>
    </div>
    
    <SectionRenderer v-if="config" :page="config" />
    
    <div v-else-if="!error" class="h-screen flex items-center justify-center">
      <UIcon name="i-heroicons-arrow-path" class="animate-spin text-4xl text-gray-400" />
    </div>
  </main>
</template>
