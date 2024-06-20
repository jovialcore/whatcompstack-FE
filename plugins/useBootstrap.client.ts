import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'; // this works. ignore the error. it is chiefly a linter error . try editing the path, the major error will throw in browser

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bs', bootstrap);
})
