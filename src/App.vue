<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <ResultComp />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ResultComp from './components/mainbody/ResultComp.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ResultComp
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
