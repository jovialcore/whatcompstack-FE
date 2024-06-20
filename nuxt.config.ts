// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

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