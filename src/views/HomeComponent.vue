<template>

    <SearchBar />
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row mb-5" v-if="isLoading">
            <CompanyListItem v-for="company in companies" :key="company.id" :company="company" />
        </div>
        <div class="d-flex justify-content-center mt-5" v-else>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/home/SearchBar.vue';
import CompanyListItem from '@/components/home/CompanyListItem.vue';
import getCompanies from '@/composables/getCompanies';

export default {
    name : 'HomeComponent',
    components: { 
        SearchBar, 
        CompanyListItem 
    },
 
    setup() {
        const { companies, isLoading } = getCompanies();

        return { companies, isLoading }
    }
}

</script>