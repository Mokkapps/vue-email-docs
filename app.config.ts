export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'neutral',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Vue Email',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [
      {
        label: 'Documentation',
        icon: 'i-heroicons-book-open-solid',
        to: '/getting-started',
      },
      {
        label: 'Playground',
        icon: 'i-simple-icons-stackblitz',
        to: '/playground',
      },
      {
        label: 'Releases',
        icon: 'i-heroicons-rocket-launch-solid',
        target: '_blank',
        to: 'https://github.com/vue-email/vue-email/releases',
      },
    ],
    socials: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/vue-email/vue-email',
      target: '_blank',
      'aria-label': 'Docs template on GitHub'
    }]
  },
  footer: {
    credits: 'Published under MIT License - Copyright © 2023',
    colorMode: false,
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/vue-email/vue-email/edit/main/docs/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/vue-email/vue-email',
        target: '_blank',
      }]
    }
  }
})
