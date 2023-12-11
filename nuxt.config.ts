import { withoutTrailingSlash } from 'ufo'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    '@vueuse/nuxt'
  ],
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons', 'solar', 'ph']
  },
  // Fonts
  fontMetrics: {
    fonts: ['DM Sans']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },
  routeRules: {
    '/api/search.json': { prerender: true },
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
      ]
    }
  }
})
