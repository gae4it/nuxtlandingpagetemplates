<script setup lang="ts">
const { data: templates } = await useAsyncData('template-menu', () => queryCollection('templates').all())

const items = computed(() => {
  const baseItems = templates.value?.map(t => ({
    label: t.label || t.title,
    to: t.path,
    icon: t.icon || 'i-lucide-layout',
    color: t.color as any
  })) || []

  // Add the Homepage as the first item
  return [
    { label: 'Home', to: '/', icon: 'i-lucide-home' },
    ...baseItems
  ]
})

const route = useRoute()
const currentLabel = computed(() => {
  if (route.path === '/') return 'Home'
  const current = templates.value?.find(t => t.path === route.path)
  return current?.label || current?.title || 'Templates'
})
</script>

<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="items"
    :content="{ align: 'start' }"
    :ui="{ content: 'min-w-fit' }"
    size="xs"
  >
    <UButton
      :label="currentLabel"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class="-mb-[6px] font-semibold rounded-full truncate"
      :class="[open && 'bg-primary/15']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }"
    />
  </UDropdownMenu>
</template>
