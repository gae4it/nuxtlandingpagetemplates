// app/types/page.ts

import type {
  HeroProps,
  CtaProps,
  TestimonialsProps,
  FeaturesProps
} from './sections'

export type Section =
  | { type: 'hero'; props: HeroProps }
  | { type: 'cta'; props: CtaProps }
  | { type: 'testimonials'; props: TestimonialsProps }
  | { type: 'features'; props: FeaturesProps }

import type { ThemeName } from '~/cms/themes'

export type PageDefinition = {
  theme: ThemeName
  sections: Section[]
}

export type SeoDefinition = {
  title: string
  description: string
  ogImage?: string
}
