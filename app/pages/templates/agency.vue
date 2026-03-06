<script setup lang="ts">
const { data: page } = await useAsyncData('template-agency', () =>
  queryCollection('templates').path('/templates/agency').first()
)

if (!page.value) {
  throw createError({ statusCode: 404, message: 'Template not found' })
}

useSeoMeta({
  title: `${page.value.label} Template`,
  description: page.value.description
})
</script>

<template>
  <div v-if="page">
    <!-- Hero (with different layout for agency maybe) -->
    <UPageHero
      :description="page.hero?.description"
      :links="page.hero?.links"
    >
      <template #top>
        <HeroBackground />
      </template>
      <template #title>
        <MDC v-if="page.hero?.title" :value="page.hero.title" unwrap="p" />
      </template>
    </UPageHero>

    <!-- Stats -->
    <UPageSection v-if="page.stats" :title="page.stats.title" :description="page.stats.description">
      <dl class="grid grid-cols-2 gap-8 sm:grid-cols-4">
        <div v-for="stat in page.stats.items" :key="stat.label" class="flex flex-col gap-1">
          <dt class="text-4xl font-bold text-highlighted tracking-tight">{{ stat.value }}</dt>
          <dd class="text-sm font-semibold text-default">{{ stat.label }}</dd>
          <p v-if="stat.description" class="text-sm text-muted">{{ stat.description }}</p>
        </div>
      </dl>
    </UPageSection>

    <!-- Feature Sections (horizontal with image placeholder) - Services -->
    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
    >
      <ImagePlaceholder />
    </UPageSection>

    <!-- Logo Bar -->
    <UPageSection v-if="page.logos">
      <UPageLogos :title="page.logos.title">
        <UIcon
          v-for="item in page.logos.items"
          :key="item.name"
          :name="item.icon || 'i-lucide-circle'"
          class="w-12 h-12 shrink-0 text-muted"
        />
      </UPageLogos>
    </UPageSection>

    <!-- Testimonials -->
    <UPageSection
      v-if="page.testimonials"
      id="testimonials"
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns class="xl:columns-4">
        <UPageCard
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
        >
          <template #footer>
            <UUser
              v-bind="testimonial.user"
              size="lg"
            />
          </template>
        </UPageCard>
      </UPageColumns>
    </UPageSection>

    <!-- FAQ -->
    <UPageSection
      v-if="page.faq"
      :title="page.faq.title"
      :description="page.faq.description"
    >
      <UAccordion
        :items="page.faq.items"
        :unmount-on-hide="false"
        type="multiple"
        class="max-w-3xl mx-auto"
        :ui="{
          trigger: 'text-base text-highlighted',
          body: 'text-base text-muted'
        }"
      />
    </UPageSection>

    <USeparator />

    <!-- CTA -->
    <UPageCTA
      v-if="page.cta"
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
