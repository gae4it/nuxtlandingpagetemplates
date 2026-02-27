// app/cms/saas/index.ts
import type { PageDefinition, SeoDefinition } from '~/types/page'

export const seo: SeoDefinition = {
  title: 'CloudFlow - Streamline Your SaaS Operations',
  description: 'The ultimate platform for modern teams to manage workflows, automate tasks, and scale faster than ever before.',
  ogImage: '/images/saas-preview.png'
}

export const page: PageDefinition = {
  theme: 'saas',
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Work smarter, not harder, with CloudFlow',
        highlightedWord: 'CloudFlow',
        subtitle: 'Our intelligent workflow automation helps your team save up to 20 hours a week by eliminating manual tasks and streamlining communications.',
        ctaText: 'Start Free Trial',
        mockupImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3'
      }
    },
    {
      type: 'testimonials',
      props: {
        testimonials: [
          {
            name: 'Sarah Chen',
            role: 'Product Lead at TechCorp',
            quote: 'CloudFlow transformed how our engineering team handles deployments. It is a game changer.'
          },
          {
            name: 'James Wilson',
            role: 'Founder of GrowthLab',
            quote: 'Finally, a platform that understands what founders actually need. Seamless and powerful.'
          },
          {
            name: 'Elena Rodriguez',
            role: 'Operations Director',
            quote: 'The automation features are unmatched. We have reduced human error by 45% in just three months.'
          }
        ]
      }
    },
    {
      type: 'cta',
      props: {
        title: 'Ready to scale your business?',
        button: 'Get Started Today'
      }
    }
  ]
}
