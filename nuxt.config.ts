// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://127.0.0.1:8000'
    }
  },

  app:{
    head:{
      titleTemplate: '%s | What Company Stack',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover the tech stacks behind the companies you know — frontend, backend, mobile, and infrastructure.' },
        { property: 'og:site_name', content: 'What Company Stack' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link:[
        {rel: 'icon', type: 'image/x-icon', href: '/logoWhat.ico'}
      ]
    }
  },

  css: [
    '~/assets/vendor/fonts/boxicons.css',
    '~/assets/vendor/css/core.css',
    '~/assets/vendor/css/theme-default.css',

    //  '~/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
  ]
  ,
  modules: [// ...
    '@pinia/nuxt'],

  build: {
    transpile: ['vue-sonner']
  }

})