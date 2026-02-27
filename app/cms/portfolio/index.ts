// app/cms/portfolio/index.ts
import type { PageDefinition, SeoDefinition } from '~/types/page'

export const seo: SeoDefinition = {
  title: 'Alex Rivera | Senior Full-Stack Engineer',
  description: 'Helping startups build scalable products with clean code and modern architecture.',
  ogImage: '/images/portfolio-preview.png'
}

export const page: PageDefinition = {
  theme: 'indie',
  sections: [
    {
      type: 'hero',
      props: {
        title: 'I build software that works. Clean, fast, and reliable.',
        highlightedWord: 'reliable.',
        subtitle: '10+ years of experience in JavaScript, Nuxt, and Distributed Systems. Currently specializing in AI-integrated applications.',
        ctaText: 'Let’s Collaborate',
        mockupImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3'
      }
    },
    {
      type: 'testimonials',
      props: {
        testimonials: [
          {
            name: 'David Ha',
            role: 'CTO at DataBeam',
            quote: 'Alex is one of the most efficient engineers I’ve ever worked with. A true professional.'
          }
        ]
      }
    },
    {
      type: 'cta',
      props: {
        title: 'Have a project in mind?',
        button: 'Send an Email'
      }
    }
  ]
}
