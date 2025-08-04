<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

// スライドデータ（例）
const slides = ref(['a', 'b', 'c'])

// 状態
const slideCount = ref(0)
const isMobile = ref(false)
const useSwiper = ref(false)

// ウィンドウ幅をリアルタイムに監視
const handleResize = () => {
  isMobile.value = window.innerWidth < 1130
}

// 初期化
onMounted(() => {
  slideCount.value = slides.value.length
  handleResize()
  window.addEventListener('resize', handleResize)
})

// クリーンアップ
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// 条件に応じて useSwiper を更新（slideCount と isMobile の両方に反応）
watch([slideCount, isMobile], () => {
  useSwiper.value = slideCount.value <= 3 && isMobile.value
})
</script>

<template>
  <ClientOnly>
    <div v-if="useSwiper" class="w-full">
      <!-- Swiper有効 -->
      <swiper-container
        class="flex mt-2 swiper-basic w-full"
        space-between="8"
        slidesPerView="auto"
        :centeredSlides="false"
        :loop="false"
        :mousewheel="{
          forceToAxis: true,
        }"
        :watchSlidesProgress="true"
      >
        <swiper-slide
          v-for="i in slides"
          :key="i"
          class="swiper6-count flex flex-col gap-8 w-full p-8 border border-sumi-200 rounded-md bg-white max-w-[350px]"
        >
        <div class="flex gap-6 items-center">
          <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
            <img src="https://placehold.jp/56x56.png" alt="" class="object-cover">
          </div>
          <div>
            <div class="text-mag2-4xl font-bold line-clamp-2 leading-[150%]">Aさんの場合Slide {{ i }}</div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="border border-sumi-400 px-2 w-fit rounded-full">記事数<span class="font-normal text-mag2-base">(月)</span></div>
          <div class="text-mag2-3xl font-bold">９本</div>
          <div class="border border-sumi-400 px-2 w-fit rounded-full">収益<span class="font-normal text-mag2-base">(月)</span></div>
          <div class="text-mag2-3xl font-bold">
            24万円<br>
            <span class="font-normal text-mag2-base">(定期購読者 9万/ バックナンバー15万)</span>
          </div>
        </div>

        </swiper-slide>
      </swiper-container>
    </div>

    <div v-else class="flex gap-4 flex-wrap justify-center  w-full">
      <!-- Swiperなし -->
      <div
        v-for="i in slides"
        :key="i"
        class="swiper6-count flex flex-col gap-8 w-full p-8 border border-sumi-200 rounded-md bg-white max-w-[350px]"
      >
        <div class="flex gap-6 items-center">
          <div class="w-14 h-14 min-w-14 min-h-14 aspect-square rounded-full overflow-hidden object-cover">
            <img src="https://placehold.jp/56x56.png" alt="" class="object-cover">
          </div>
          <div>
            <div class="text-mag2-4xl font-bold line-clamp-2 leading-[150%]">Aさんの場合Slide {{ i }}</div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="border border-sumi-400 px-2 w-fit rounded-full">記事数<span class="font-normal text-mag2-base">(月)</span></div>
          <div class="text-mag2-3xl font-bold">９本</div>
          <div class="border border-sumi-400 px-2 w-fit rounded-full">収益<span class="font-normal text-mag2-base">(月)</span></div>
          <div class="text-mag2-3xl font-bold">
            24万円<br>
            <span class="font-normal text-mag2-base">(定期購読者 9万/ バックナンバー15万)</span>
          </div>
        </div>

      </div>
    </div>
  </ClientOnly>
</template>