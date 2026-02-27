// app/types/sections.ts

export type HeroProps = {
  title: string
  subtitle: string
  ctaText?: string
  highlightedWord?: string
  mockupImage?: string
}

export type FeaturesProps = {
  title: string
  items: {
    title: string
    description: string
    icon?: string
  }[]
}

export type CtaProps = {
  title: string
  button: string
}

export type TestimonialsProps = {
  testimonials: {
    name: string
    quote: string
    role?: string
  }[]
}
