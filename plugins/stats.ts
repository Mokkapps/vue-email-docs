export default defineNuxtPlugin(async () => {
  const stats = useStats()

  if (process.server)
    stats.value = await $fetch('/api/stats')

  onNuxtReady(async () => {
    if (!stats.value)
      stats.value = await useFetch('/api/stats')
  })
})
