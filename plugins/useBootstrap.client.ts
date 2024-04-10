import bootstrap from 'bootstrap';

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      bootstrap: bootstrap
    }
  }
})