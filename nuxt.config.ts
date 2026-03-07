// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-studio',
    ...(process.env.NODE_ENV === 'development' ? ['@nuxt/eslint'] : [])
  ],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: process.env.NODE_ENV === 'development'
  },

  future: {
    compatibilityVersion: 4
  },

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  nitro: {
    preset: 'vercel'
  }
})