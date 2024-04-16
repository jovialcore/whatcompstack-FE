// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true},

  css: [
    '~/assets/main.scss',
    '~/assets/vendor/css/theme-default.css',
    '~/assets/vendor/css/core.css',
    '~/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
  ]
})
