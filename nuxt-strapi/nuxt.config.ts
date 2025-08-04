// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";


export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      title: 'まぐまぐ',  //default fallback title
      htmlAttrs: {
        lang: 'jp',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
    modules: [
      '@nuxtjs/strapi',
      'nuxt-swiper',
      ['unplugin-icons/nuxt', { 
        icons: FileSystemIconLoader("./assets/icons"),
      }]
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4' as const,
  },
  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL || 'http://localhost:1337',
      baseDomain: process.env.NUXT_PUBLIC_BASE_DOMAIN,
      apiLink: process.env.NUXT_PUBLIC_API_LINK
    }
  },
    css: ['~/assets/css/main.css'],
    vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})