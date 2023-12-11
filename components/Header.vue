<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])

const { header } = useAppConfig()

</script>

<template>
  <UHeader :links="header.links">
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        <Logo class="w-6" />
        <span>
          <span class="sm:text-primary-500 dark:sm:text-primary-400">Vue</span>Email
        </span>
        <UBadge label="Docs" variant="subtle" class="mb-0.5" />
      </template>
    </template>



    <template #right>
      <UDocsSearchButton v-if="header?.search" :label="null" />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.socials"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
