<script setup lang="ts">
const route = useRoute();
const currentTemplate = computed(() => (route.params.name as string) || "saas");

const templates = [
  {
    label: "SaaS Platform",
    id: "saas",
    icon: "i-heroicons-cpu-chip",
    color: "blue",
  },
  {
    label: "Creative Agency",
    id: "agency",
    icon: "i-heroicons-paint-brush",
    color: "orange",
  },
  {
    label: "Portfolio",
    id: "portfolio",
    icon: "i-heroicons-user",
    color: "purple",
  },
];

const items = [
  templates.map((t) => ({
    label: t.label,
    icon: t.icon,
    click: () => navigateTo(`/templates/${t.id}`),
  })),
];
</script>

<template>
  <div class="fixed top-6 left-1/2 -translate-x-1/2 z-50">
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <UButton
        color="neutral"
        variant="solid"
        class="rounded-full px-6 py-2 shadow-xl ring-1 ring-black/5 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 items-center gap-2"
      >
        <span class="text-xs font-bold uppercase tracking-wider opacity-50"
          >Template:</span
        >
        <span class="font-semibold">{{
          templates.find((t) => t.id === currentTemplate)?.label
        }}</span>
        <UIcon
          name="i-heroicons-chevron-down-20-solid"
          class="transition-transform duration-200"
        />
      </UButton>
    </UDropdown>
  </div>
</template>
