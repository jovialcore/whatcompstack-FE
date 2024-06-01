// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/main.css',
    '~/assets/vendor/css/theme-default.css',
    '~/assets/vendor/css/core.css',
    '~/assets/vendor/fonts/boxicons.css',
    //  '~/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
  ]
  ,
  modules: [
    // ...
    '@pinia/nuxt',
  ],
})
