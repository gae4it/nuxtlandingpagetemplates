// app/cms/agency/index.ts
import type { PageDefinition, SeoDefinition } from '~/types/page'

export const seo: SeoDefinition = {
  title: 'BoldStudio | Creative Brand Design Agency',
  description: 'We help visionary brands stand out in a digital-first world through bold design and strategic storytelling.',
  ogImage: '/images/agency-preview.png'
}

export const page: PageDefinition = {
  theme: 'agency',
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Building digital brands that command attention.',
        highlightedWord: 'attention.',
        subtitle: 'We are a creative studio that bridges the gap between design and technology. No templates, no shortcuts, just pure craftsmanship.',
        ctaText: 'View Our Portfolio',
        mockupImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3'
      }
    },
    {
      type: 'testimonials',
      props: {
        testimonials: [
          {
            name: 'Marco Valenti',
            role: 'CEO of LuxFurniture',
            quote: 'BoldStudio didn’t just redesign our site; they redefined our entire identity. Revenue is up 300%.'
          },
          {
            name: 'Sophie Dubois',
            role: 'Marketing Manager',
            quote: 'Unparalleled creativity and a deep understanding of consumer psychology. Highly recommended.'
          }
        ]
      }
    },
    {
      type: 'cta',
      props: {
        title: 'Ready to elevate your brand?',
        button: 'Let’s Talk'
      }
    }
  ]
}
