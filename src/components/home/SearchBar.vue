<template>
    <div class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar">
        <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            <div class="navbar-nav align-items-center w-100" id="nav-container">
                <div class="d-flex align-items-center w-100" id="nav-body">
                    <i class="bx bx-search fs-4 lh-0"></i>
                    <input type="text" class="form-control border-0 shadow-none w-100" @input="searchCompanies"
                        v-model="search" placeholder="Search..." aria-label="Search..." />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import getCompanies from '@/composables/getCompanies';

import { ref, } from 'vue';

const search = ref('')

function searchCompanies() {
    // console.log("enter pressed", this.search)
    getCompanies(search)

}

</script>