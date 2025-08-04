<template>
  <div class="container mx-auto p-4">
    <div v-if="top" class="text-center">
      <h1 class="text-4xl font-bold mb-4">{{ top.title || 'Loading…' }}</h1>
      <img
        v-if="top.banner"
        :src="bannerUrl"
        alt="Banner"
        class="mx-auto mb-6 rounded-lg shadow-lg"
      />
      <div v-html="top.description" class="prose mx-auto"></div>
    </div>
    <div v-else class="text-center py-20">Loading...</div>
  </div>
</template>

<script setup lang="ts">
// Composables から Strapi クライアントを取得
const strapi = useStrapi()
const top = ref<any>(null)

const fetchTop = async () => {
  // Collection が 1 件しかない想定で最初の1件を取得
  const { data } = await strapi.find('articles', {
    populate: ['banner']
  })

  console.log('data[0]', data[0])
  top.value = data[0]
}

onMounted(fetchTop)


// バナー画像のフル URL を組み立て
const bannerUrl = computed(() => {
  console.log('top.value.banner.url', top.value.banner[0].url)
  const data = top.value.banner[0] || {}
  return data
    ? `${data.url}`
    : ''
})
</script>

<style>
/* Tailwind またはお好みのスタイルを有効化しておいてください */
</style>