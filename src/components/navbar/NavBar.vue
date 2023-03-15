<template>
    <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
        <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            <div class="navbar-nav align-items-center" id="nav-container">
                <div class="nav-item d-flex align-items-center" id="nav-body">
                    <i class="bx bx-search fs-4 lh-0"></i>
                    <input type="text" class="form-control border-0 shadow-none" v-model="search" placeholder="Search..." aria-label="Search..." />
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const search = ref('')

        return { search }
    }
}
</script>

<style>
input[type=text] {
    width: 100%;
}
#nav-container {
    width: 100%;
}
#nav-body {
    width: 100%;
}
</style>