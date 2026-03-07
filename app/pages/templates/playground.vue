<script setup lang="ts">
const { data: page } = await useAsyncData('template-playground', () =>
  queryCollection('templates').path('/templates/playground').first()
)

if (!page.value) {
  throw createError({ statusCode: 404, message: 'Template not found' })
}

useSeoMeta({
  title: page.value.title || 'Playground',
  description: page.value.description
})
</script>

<template>
  <div v-if="page">
    <UPage class="pt-10">
      <UPageHeader :title="page.title || 'Playground'" :description="page.description" />

      <UPageBody>
        <ContentRenderer v-if="page.body" :value="page" />
      </UPageBody>
    </UPage>
  </div>
</template>
