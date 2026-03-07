<script setup lang="ts">
const { data: page } = await useAsyncData('template-saas', () =>
  queryCollection('templates').path('/templates/saas').first()
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
    <!-- Hero -->
    <UPageHero :description="page.hero?.description" :links="page.hero?.links">
      <template #top>
        <HeroBackground />
      </template>
      <template #title>
        <MDC v-if="page.hero?.title" :value="page.hero.title" unwrap="p" />
      </template>
    </UPageHero>

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

    <!-- Features Grid -->
    <UPageSection
      v-if="page.features"
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid>
        <UPageCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
          spotlight
        />
      </UPageGrid>
    </UPageSection>

    <!-- Feature Sections (horizontal with image placeholder) -->
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

    <!-- Pricing (Moved up for SaaS) -->
    <UPageSection
      v-if="page.pricing"
      :title="page.pricing.title"
      :description="page.pricing.description"
    >
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <UCard
          v-for="(plan, index) in page.pricing.plans"
          :key="index"
          :class="plan.highlight ? 'ring-2 ring-primary' : ''"
          class="relative"
        >
          <div class="flex flex-col gap-4 h-full">
            <div>
              <UBadge
                v-if="plan.highlight"
                label="Most Popular"
                color="primary"
                variant="subtle"
                class="mb-3"
              />
              <h3 class="text-lg font-bold text-highlighted">
                {{ plan.title }}
              </h3>
              <p class="text-sm text-muted mt-1">{{ plan.description }}</p>
            </div>
            <div class="flex items-baseline gap-1">
              <span class="text-4xl font-bold text-highlighted">{{ plan.price }}</span>
              <span v-if="plan.billing" class="text-sm text-muted">{{ plan.billing }}</span>
            </div>
            <ul class="flex flex-col gap-2 flex-1">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-start gap-2 text-sm text-default"
              >
                <UIcon name="i-lucide-check" class="text-primary mt-0.5 shrink-0" />
                {{ feature }}
              </li>
            </ul>
            <UButton
              v-if="plan.button"
              v-bind="plan.button"
              :color="plan.highlight ? 'primary' : 'neutral'"
              :variant="plan.button.variant || (plan.highlight ? 'solid' : 'outline')"
              block
              class="mt-4"
            />
          </div>
        </UCard>
      </div>
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
          :ui="{
            description: 'before:content-[open-quote] after:content-[close-quote]'
          }"
        >
          <template #footer>
            <UUser v-bind="testimonial.user" size="lg" />
          </template>
        </UPageCard>
      </UPageColumns>
    </UPageSection>

    <!-- FAQ -->
    <UPageSection v-if="page.faq" :title="page.faq.title" :description="page.faq.description">
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
    <UPageCTA v-if="page.cta" v-bind="page.cta" variant="naked" class="overflow-hidden">
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
