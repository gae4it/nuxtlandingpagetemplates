<script setup lang="ts">
interface Template {
  label?: string;
  title: string;
  path: string;
  icon?: string;
  color?: string;
}

type ValidColor =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "neutral"
  | undefined;

const colorMap: Record<string, ValidColor> = {
  red: "error",
  blue: "primary",
  green: "success",
  yellow: "warning",
  gray: "neutral",
};

const { data: templates, error } = await useAsyncData("template-menu", () =>
  queryCollection("templates").all(),
);

if (error.value) {
  console.error("Failed to load templates:", error.value);
}

const items = computed(() => {
  const baseItems =
    templates.value?.map((t: Template) => ({
      label: t.label || t.title,
      to: t.path,
      icon: t.icon || "i-lucide-layout",
      color: t.color ? colorMap[t.color] || "neutral" : undefined,
    })) || [];

  // Add Home Page as first item (with `color` of type `ValidColor`)
  return [
    {
      label: "Home",
      to: "/",
      icon: "i-lucide-home",
      color: "primary" as ValidColor,
    },
    ...baseItems,
  ];
});

const route = useRoute();
const currentLabel = computed(() => {
  if (route.path === "/") return "Home";
  const current = templates.value?.find((t: Template) => t.path === route.path);
  return current?.label || current?.title || "Templates";
});
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
        trailingIcon: [
          'transition-transform duration-200',
          open ? 'rotate-180' : undefined,
        ]
          .filter(Boolean)
          .join(' '),
      }"
    />
  </UDropdownMenu>
</template>
