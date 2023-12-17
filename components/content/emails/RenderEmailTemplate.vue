<script setup lang="ts">
import { resolveComponent } from 'vue'
import { useRender } from 'vue-email'

const emailTemplate = resolveComponent('EmailTemplate') as Component

const html = await useRender(emailTemplate, undefined, {
  pretty: true,
})
</script>

<template>
  <iframe :srcdoc="html.html" class="h-[1000px] w-full" frameborder="0" width="100%" />
</template>
