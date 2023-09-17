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

<script>
import { ref } from 'vue'

export default {
    name: 'SearchBar',
    emits: ['enterr'],

    setup(props, { emit }) {
        const search = ref('')
        const searchCompanies = (event) => {
            search.value = event.target.value
            emit('enterr', search.value)
        }

        return { search, searchCompanies }
    }
}
</script>