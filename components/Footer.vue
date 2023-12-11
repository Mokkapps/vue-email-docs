<script setup lang="ts">
const { footer, header } = useAppConfig()
</script>

<template>
  <UFooter :links="header.links">
    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <UColorModeButton v-if="footer?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header?.socials"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
