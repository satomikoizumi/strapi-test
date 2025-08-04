<script setup lang="ts">
import { Icon } from "@iconify/vue";
const { getLink } = useEnvironment()


</script>
<template>
<header class="h-12.5 bg-white flex justify-between items-center border-b border-b-sumi-50">
    <div class="px-4 shrink-0 h-12.5 w-40">
        <nuxt-link to="/" >
            <img src="@/assets/img/mag2logo.svg" class="h-full w-40" alt="まぐまぐ">
        </nuxt-link>
    </div>
    <ul class="pr-4 items-center text-sumi-700 hidden lg:flex">
        <li class="min-w-[400px] px-2 w-full ">
            <form
            :action="getLink('search')"
            method="get"
            class="search-form-6 flex align-center overflow-hidden bg-sumi-50 rounded-full hover:border hover:border-sumi-100 flex items-center focus-within:border-sumi-100 focus-within:border">
                <label class="w-full">
                    <input type="text" aria-label="メルマガを探す" class="w-full h-full border-none px-4 py-2 focus:outline-hidden" placeholder="メルマガを探す" name="keyword">
                </label>
                <button class="px-2" id="submit" type="submit">
                    <Icon icon="ic:round-search" width="24" height="24" />
                </button>
            </form>
        </li>
        <!-- <li>
            <button class="relative h-12.5 px-2.5 flex items-center hover:bg-sumi-50">
                <Icon icon="ic:outline-notifications" width="30" height="30" />
            </button>
        </li>今回は対象外 -->
        <li>
            <a href="start" rel="noopener noreferrer" target="_blank" class="relative h-12.5 px-2 inline-flex items-center hover:bg-sumi-50">
                <span class="text-mag2-sm font-normal leading-normal not-italic tracking-semi-wider text-sumi-700 whitespace-nowrap">まぐまぐとは</span>
            </a>
        </li>
        <li><!-- balloon -->
            <a href="" rel="noopener noreferrer" target="_blank" class="relative h-12.5 px-2 inline-flex items-center hover:bg-sumi-50">
                <span class="text-mag2-sm font-normal leading-normal not-italic tracking-semi-wider text-sumi-700 whitespace-nowrap">メルマガ発行</span>
            </a>
        </li><!-- /balloon -->
        <li>
            <a href="/kaijo.html" rel="noopener noreferrer" target="_blank" class="relative h-12.5 px-2 inline-flex items-center hover:bg-sumi-50">
                <span class="text-mag2-sm font-normal leading-normal not-italic tracking-semi-wider text-sumi-700 whitespace-nowrap">メルマガ解除</span>
            </a>
        </li>
        <li>
            <a :href="getLink('help')" rel="noopener noreferrer" target="_blank" class="relative h-12.5 px-2 inline-flex items-center hover:bg-sumi-50">
                <span class="text-mag2-sm font-normal leading-normal not-italic tracking-semi-wider text-sumi-700 whitespace-nowrap">ヘルプ</span>
            </a>
        </li>
        <li>
            <button class="relative h-12.5 px-2.5 flex items-center hover:bg-sumi-50">
                <Icon icon="ic:baseline-account-circle" width="40" height="40" />
            </button>
        </li>
    </ul>

    <ul class="pr-4 items-center text-sumi-700 lg:hidden flex">
        <li>
            <button class="relative h-12.5 px-2.5 flex items-center hover:bg-sumi-50">
                <Icon icon="ic:round-menu" width="40" height="40" />
            </button>
        </li>
    </ul>
</header>

</template>
