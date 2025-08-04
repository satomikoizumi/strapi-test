<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { register } from 'swiper/element/bundle'
register()

const swiperBasicRef = ref<HTMLElement | null>(null)

const swiperRef = ref(null)

onMounted(async () => {
  await nextTick()
  const swiper = swiperRef.value?.swiper
})
</script>
<template>
<div class="swiper-wrapper min-h-[560px]">
<div class="swiper-wrapper__inner">

<ClientOnly>
<swiper-container
    class="swiper-basic lg:h-[560px]"
    ref="swiperBasicRef"
    :loop="true"
    :pagination="{
    clickable: true,
    el: '.custom-pagination',
    bulletClass: 'my-bullet',
    bulletActiveClass: 'my-bullet-active'
    }"
    :mousewheel="{
    forceToAxis: true,
    }"
    :speed="1500"
>
    <swiper-slide :key="0" class="h-full">
    <div class="p-4 h-full">
        <div class=" rounded-xl bg-[url(@/assets/img/bg_tile.png)] bg-repeat overflow-hidden outline outline-dashed -outline-offset-1 lg:px-6 h-full">
        <div class="px-0 xmd:px-6 xl:px-[0px] max-w-[1240px] w-full m-auto lg:flex lg:justify-between lg:gap-4 xl:gap-6 h-full">
            <section class="max-w-[600px] lg:max-w-full m-auto lg:m-[0px] flex flex-col gap-2 lg:gap-0 lg:justify-center lg:gap-12 pt-4 pb-4 pl-4 pr-4 md:pt-10 md:pb-10 md:pl-10 md:pr-10 lg:pt-4 lg:pb-4 lg:pl-4 xl:pr-10 xl:pt-10 xl:pb-10 xl:pl-10 xl:pr-10 lg:pr-0">
            <div class="flex items-center gap-2">
                <div class="h-6 w-6 lg:h-8 lg:w-8 bg-[#FF6B6B] rounded-full border aspect-square"></div>
                <div class="h-6 w-6 lg:h-8 lg:w-8 bg-[#FFB366] rounded-full border aspect-square"></div>
                <p class="font-bold text-mag2-sm md:text-mag2-lg">コンテンツ発信サービス「まぐまぐ」</p>
            </div>
            <h2 class="text-[1.9rem] md:text-[3rem] xl:text-[3.6rem] leading-[1.35] font-bold">
                記事を公開して<br>
                読者からのサポートを<br>
                受けませんか？
            </h2>
            <div class="lg:block hidden">
                <a href="" class="flex justify-center items-center gap-2 max-w-[400px] w-full text-white h-14 rounded-full border border-sumi-900 transition-[padding] duration-150ms hover:p-1">
                <div class="bg-sumi-900 flex justify-center items-center w-full h-full rounded-full ">
                    <div>まぐまぐで発行する</div>
                    <div>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>send_plane_line</title><g id="send_plane_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#FFFFFFFF' d='M20.25 3.532a1 1 0 0 1 1.183 1.329l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235-1.203 1.202c-.636.636-1.724.186-1.724-.714v-3.288L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5Zm-2.114 4.305-7.998 6.607 3.97 3.798zm-1.578-1.29L4.991 9.52l3.692 3.53 7.875-6.505Z'/></g></svg>
                    </div>
                </div>
                </a>
            </div><!-- btn -->
            </section>
            <section class="lg:flex lg:flex-col lg:justify-end">
            <div class="max-w-[500px] lg:max-w-[450px] xl:max-w-[500px] w-full m-auto lg:m-[0px] px-4 md:px-0 shrink-0">
                <div class="bg-[url('~/assets/img/top-bg-triangle.svg')] bg-position-[right_bottom_2rem] bg-no-repeat">
                <img src="~/assets/img/topsample/topvisual.png" alt="" class="m-auto">
                </div>
            </div>
            <button class="lg:hidden w-full">
                <a href="" class="flex justify-center items-center gap-2 w-full text-white h-14 border border-sumi-900 transition-[padding] duration-150ms hover:p-1">
                <div class="bg-sumi-900 flex justify-center items-center w-full h-full">
                    <div>まぐまぐで発行する</div>
                    <div>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>send_plane_line</title><g id="send_plane_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#FFFFFFFF' d='M20.25 3.532a1 1 0 0 1 1.183 1.329l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235-1.203 1.202c-.636.636-1.724.186-1.724-.714v-3.288L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5Zm-2.114 4.305-7.998 6.607 3.97 3.798zm-1.578-1.29L4.991 9.52l3.692 3.53 7.875-6.505Z'/></g></svg>
                    </div>
                </div>
                </a>
            </button><!-- btn -->

            </section>
        </div>
        </div>
    </div>
    </swiper-slide>
    <swiper-slide :key="0" class="h-full">
    <div class="p-4 h-full">
        <div class=" rounded-xl bg-[url(@/assets/img/bg_tile.png)] bg-repeat overflow-hidden outline outline-dashed -outline-offset-1 lg:px-6 h-full">
        <div class="px-0 xmd:px-6 xl:px-[0px] max-w-[1240px] w-full m-auto lg:flex lg:justify-between lg:gap-4 xl:gap-6 h-full">
            <section class="max-w-[600px] lg:max-w-full m-auto lg:m-[0px] flex flex-col gap-2 lg:gap-0 lg:justify-center lg:gap-12 pt-4 pb-4 pl-4 pr-4 md:pt-10 md:pb-10 md:pl-10 md:pr-8 lg:pt-8 lg:pb-8 lg:pl-8 xl:pr-10 xl:pt-10 xl:pb-10 xl:pl-10 xl:pr-10 lg:pr-0">
            <div class="flex items-center gap-2">
                <div class="h-6 w-6 lg:h-8 lg:w-8 bg-[#98E4D6] rounded-full border aspect-square"></div>
                <div class="h-6 w-6 lg:h-8 lg:w-8 bg-[#B8C5FF] rounded-full border aspect-square"></div>
                <p class="font-bold text-mag2-sm md:text-mag2-lg">注目の新着メルマガ</p>
            </div>
            <h2 class="text-[1.9rem] md:text-[3rem] xl:text-[4rem] leading-[1.35] font-bold line-clamp-3">
ビジネス知識源プレミアム：１ヶ月ビジネス書５冊を超える情報価値をe-Mailで
            </h2>
            <div class="lg:block hidden">
                <a href="" class="flex justify-center items-center gap-2 max-w-[400px] w-full text-white h-14 rounded-full border border-sumi-900 transition-[padding] duration-150ms hover:p-1">
                <div class="bg-sumi-900 flex justify-center items-center w-full h-full rounded-full ">
                    <div>くわしく見る</div>
                    <div>
                    </div>
                </div>
                </a>
            </div><!-- btn -->
            </section>
            <section class="lg:flex lg:flex-col lg:justify-end shrink-0">
            <div class="max-w-[500px] lg:max-w-[450px] xl:max-w-[500px] w-full m-auto lg:m-[0px] px-4 md:px-0 shrink-0">
                <div class="bg-[url('~/assets/img/top-bg-triangle.svg')] bg-position-[right_bottom_2rem] bg-no-repeat">
                <img src="~/assets/img/topsample/hakkousya.png" alt="" class="m-auto">
                </div>
            </div>
            <button class="lg:hidden w-full">
                <a href="" class="flex justify-center items-center gap-2 w-full text-white h-14 border border-sumi-900 transition-[padding] duration-150ms hover:p-1">
                <div class="bg-sumi-900 flex justify-center items-center w-full h-full">
                    <div>まぐまぐで発行する</div>
                    <div>
                    </div>
                </div>
                </a>
            </button><!-- btn -->

            </section>
        </div>
        </div>
    </div>
    </swiper-slide>
</swiper-container>
</ClientOnly>
<div class="custom-pagination flex justify-center gap-2"></div>
</div>
</div>
</template>

<style>
.my-bullet {
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  display: inline-block;
  transition: background 0.3s;
}
.my-bullet-active {
  background: #000;
}

</style>