<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

const module = useStats()

const { format } = Intl.NumberFormat('en-GB', { notation: 'compact' })
const breakpoints = useBreakpoints(breakpointsTailwind)

const mdAndLarger = breakpoints.greaterOrEqual('md')
const lgAndLarger = breakpoints.greaterOrEqual('lg')
const xlAndLarger = breakpoints.greaterOrEqual('xl')

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
  ogImage: 'https://vuemail.net/social-preview.jpg',
  twitterImage: 'https://vuemail.net/social-preview.jpg',
})
</script>

<template>
  <div>
    <span class="gradient" />
    <ULandingSection v-if="page.hero" v-bind="page.hero">
      <template #title>
        <MDC :value="page.hero.title" />
      </template>

      <Illustration class="h-[480px] hidden md:block" />
    </ULandingSection>

    <ULandingSection :links="page.features.links">
      <template #title>
        <MDC :value="page.features.title" />
      </template>
      <UPageGrid>
        <ULandingCard v-for="(item, index) of page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection class="!pt-0">
      <ULandingCTA
        align="left"
        card
        :ui="{
          background: 'dark:bg-gradient-to-b from-gray-800 to-gray-900',
          shadow: 'dark:shadow-2xl',
          body: {
            background: 'bg-gray-50/50 dark:bg-gray-900/50',
          },
          title: 'text-center lg:text-left',
          links: 'justify-center lg:justify-start',
        }"
      >
        <template #title>
          <span>
            Trusted and supported by our<br class="hidden lg:block">
            amazing community
          </span>
        </template>

        <template #links>
          <ClientOnly>
            <UAvatarGroup :max="xlAndLarger ? 13 : lgAndLarger ? 10 : mdAndLarger ? 16 : 8" size="md" class="flex-wrap-reverse [&_span:first-child]:text-xs justify-center">
              <UTooltip
                v-for="(contributor, index) of module.contributors"
                :key="index"
                :text="contributor.username"
                class="rounded-full"
                :ui="{ background: 'bg-gray-50 dark:bg-gray-800/50' }"
                :popper="{ offsetDistance: 16 }"
              >
                <UAvatar
                  :alt="contributor.username"
                  :src="`https://ipx.nuxt.com/s_40x40/gh_avatar/${contributor.username}`"
                  :srcset="`https://ipx.nuxt.com/s_80x80/gh_avatar/${contributor.username} 2x`"
                  class="lg:hover:scale-125 lg:hover:ring-2 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform"
                  width="40"
                  height="40"
                  size="md"
                  loading="lazy"
                >
                  <NuxtLink :to="`https://github.com/${contributor.username}`" :aria-label="contributor.username" target="_blank" class="focus:outline-none" tabindex="-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                  </NuxtLink>
                </UAvatar>
              </UTooltip>
            </UAvatarGroup>
          </ClientOnly>
        </template>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16">
          <NuxtLink class="text-center group" to="https://npmjs.org/package/vue-email" target="_blank">
            <p class="text-6xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400">
              {{ format(module.stats.downloads) }}+
            </p>
            <p>monthly downloads</p>
          </NuxtLink>

          <NuxtLink class="text-center group" to="https://github.com/vue-email/vue-email" target="_blank">
            <p class="text-6xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400">
              {{ format(module.stats.stars) }}+
            </p>
            <p>stars</p>
          </NuxtLink>
        </div>
      </ULandingCTA>
    </ULandingSection>
  </div>
</template>

<style>
.gradient {
  position: fixed;
  top: 25vh;
  width: 100%;
  height: 30vh;
  background: radial-gradient(50% 50% at 50% 50%, #00dc82 0%, rgba(0, 220, 130, 0) 100%);
  filter: blur(180px);
  opacity: 0.6;
  z-index: -1;
}
</style>
