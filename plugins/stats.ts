export default defineNuxtPlugin(async () => {
  const stats = useStats()

  stats.value = await $fetch('/api/stats')
})
