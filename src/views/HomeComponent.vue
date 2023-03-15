<template>
    <div class="layout-wrapper layout-content-navbar layout-without-menu">
        <div class="layout-container">
            <div class="layout-page">

                <NavBar />

                <div class="content-wrapper">

                    <ContentComponent />
                    
                    <FooterComponent />

                    <div class="content-backdrop fade"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue'
import ContentComponent from '@/components/content/ContentComponent.vue'
import FooterComponent from '@/components/content/FooterComponent.vue'

export default {
    name: 'HomeComponent',
    components: { 
        NavBar, 
        ContentComponent, 
        FooterComponent 
    }
}
</script>