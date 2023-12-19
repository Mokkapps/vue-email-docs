<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

// const { data: sponsors } = await useFetch('https://api.nuxt.com/sponsors')
const sponsors = ref({
  platinum: [{ sponsorId: 'test', sponsorName: 'Amazon Web Services', sponsorLogo: 'https://avatars.githubusercontent.com/u/2232217?v=4', sponsorUrl: 'https://amazon.com/aws', monthlyPriceInDollars: 2500 }, { sponsorId: 'vercel', sponsorName: 'Vercel', sponsorLogo: 'https://avatars.githubusercontent.com/u/14985020?v=4', sponsorUrl: 'https://vercel.com', monthlyPriceInDollars: 2500 }, { sponsorId: 'HeadshotPro', sponsorName: 'HeadshotPro', sponsorLogo: 'https://avatars.githubusercontent.com/u/138780549?v=4', sponsorUrl: 'https://www.headshotpro.com', monthlyPriceInDollars: 1000 }, { sponsorId: 'planfredapp', sponsorName: 'PLANFRED', sponsorLogo: 'https://images.opencollective.com/planfredapp/4ae56a1/logo/460.png', sponsorUrl: 'https://www.planfred.com', monthlyPriceInDollars: 1000 }, { sponsorId: 'strapijs', sponsorName: 'Strapi', sponsorLogo: 'https://images.opencollective.com/strapijs/d5c9a68/logo/460.png', sponsorUrl: 'https://strapi.io/', monthlyPriceInDollars: 1000 }, { sponsorId: '2021-frameworks-fund', sponsorName: 'Chrome Frameworks Fund', sponsorLogo: 'https://images.opencollective.com/2021-frameworks-fund/logo/460.png', sponsorUrl: 'https://opencollective.com/2021-frameworks-fund', monthlyPriceInDollars: 2500 }],
})

const title = page.value.head?.title || page.value.title
const description = page.value.head?.description || page.value.description
useSeoMeta({
  titleTemplate: '%s · Community',
  title,
  description,
  ogDescription: description,
  ogTitle: `${title} · Community`,
})

defineOgImage({
  component: 'Docs',
  title,
  description,
  headline: 'Community',
})
</script>

<template>
  <UContainer>
    <UPageHero v-bind="page" />

    <UPage>
      <UPageBody class="divide-y blur-lg divide-gray-200 dark:divide-gray-800 relative pointer-events-none">
        <div v-for="([key, value]) of Object.entries(sponsors)" :key="key" class="relative grid lg:grid-cols-5 gap-8 py-24">
          <div class="lg:self-start flex lg:flex-col items-center lg:items-start justify-between lg:sticky lg:top-0 lg:pt-24 lg:-mt-24">
            <h2 class="capitalize font-bold text-2xl text-gray-900 dark:text-white">
              {{ key }}
            </h2>
          </div>

          <div class="lg:col-span-4">
            <div v-if="['platinum', 'gold', 'silver'].includes(key)" class="grid grid-cols-2 gap-8 gap-x-4 sm:grid-cols-3 md:grid-cols-4 -mt-4">
              <UButton
                v-for="(sponsor, index) in value"
                :key="index"
                color="white"
                variant="ghost"
                class="flex-col flex-1 justify-center"
                size="xl"
              >
                <UAvatar :src="sponsor.sponsorLogo" :alt="sponsor.sponsorName" class="mx-auto mt-4" size="2xl" />
                <h3 class="mt-6 font-semibold leading-7 tracking-tight text-gray-900 dark:text-white mb-2">
                  {{ sponsor.sponsorName }}
                </h3>
              </UButton>
            </div>
            <div v-else class="flex flex-wrap gap-8 ml-12">
              <NuxtLink v-for="(sponsor, index) in value" :key="index" :to="sponsor.sponsorUrl" target="_blank" class="inline-flex">
                <UAvatar :src="sponsor.sponsorLogo" :alt="sponsor.sponsorName" size="lg" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
