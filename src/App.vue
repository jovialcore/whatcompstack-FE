<template>
  <div class="layout-wrapper layout-content-navbar layout-without-menu">
    <div class="layout-container">
      <div class="layout-page">

       

        <div class="content-wrapper">
          
          <!-- I want to  suggest we use this place as the layout ( it will have our footer and navabar ) so all pages/views linked in the routes section can fall here and share the footer and navbar -->
     

          
          <RouterView />

              
          <FooterComponent/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FooterComponent from '@/components/footer/FooterComponent.vue';
export default {
  name: 'App',
  components: { 
    FooterComponent 
  
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
