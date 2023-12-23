<template>
  <div class="layout-wrapper layout-content-navbar layout-without-menu">
    <div class="layout-container">
      <div class="layout-page">
         <div class="content-wrapper"> 
          <HeaderComponent />
          
          <RouterView />
              
          <FooterComponent/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FooterComponent from '@/components/footer/FooterComponent.vue';
import HeaderComponent from '@/components/header/HeaderComponent.vue';
export default {
  name: 'App',
  components: { 
    FooterComponent,
    HeaderComponent
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
