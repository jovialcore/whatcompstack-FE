<template>
    <div class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar">
        <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            <div class="navbar-nav align-items-center w-100" id="nav-container">
                <div class="d-flex align-items-center w-100" id="nav-body">
                    <i class="bx bx-search fs-4 lh-0"></i>
                    <input type="text" class="form-control border-0 shadow-none w-100" v-model="searchTerm"
                        placeholder="Search..." aria-label="Search..." />
                </div>
            </div>
        </div>
    </div>

    <div class="container-xxl flex-grow-1 container-p-y ">

        <div class="row mb-5">
            <HomeCompanyListItem v-for="company in filteredCompanies" :key="company.id" :company="company" />
        </div>

        <Pagination :totalPages="expectedNoOfPages" @get-paginated="getPaginatedData" />
    </div>
</template>
<script setup>

let searchTerm = ref("");

let bePlangs = ref([]);
let beFrameworks = ref([]);
let feLang = ref([]);
let mobileLang = ref([]);
let pageEnd = ref('all');

const { data: allCompanies, pending, error, refresh } = await useFetch(() => 'http://127.0.0.1:8000/api/company/stack/' + pageEnd.value);


// good use case of computed property

// for pagination
const expectedNoOfPages = computed(() => {

    if (allCompanies.value.meta.total > allCompanies.value.meta.per_page) {

    
            return Math.ceil(allCompanies.value.meta.total / allCompanies.value.meta.per_page)
        

    } 
})

const getPaginatedData = (pageNumber) => {

    pageEnd.value = 'all?page=' + pageNumber
}

const filteredCompanies = computed(() => {
    const term = searchTerm.value.toLocaleLowerCase();

    if (searchTerm.value) {
        return allCompanies.value.data.filter((item) => {

            if (item.company.toLowerCase().includes(term)) {
                return true;
            }

            if (item.stack_be_plang.length > 0) {
                bePlangs.value = item.stack_be_plang.map((obj) => Object.keys(obj)[0]);
            }

            if (bePlangs.value.some((key) => key.toLowerCase().includes(term))) {
                return true;
            }

            if (item.stack_be_framework.length > 0) {
                beFrameworks.value = item.stack_be_framework.map(
                    (obj) => Object.keys(obj)[0]
                );
            }

            if (beFrameworks.value.some((key) => key.toLowerCase().includes(term))) {
                return true;
            }

            if (item.stack_fe_framework.length > 0) {
                feLang.value = item.stack_fe_framework.map((obj) => Object.keys(obj)[0]);
            }

            if (feLang.value.some((key) => key.toLowerCase().includes(term))) {
                return true;
            }

            if (item.stack_mobile.length > 0) {
                mobileLang.value = item.stack_mobile.map((obj) => Object.keys(obj)[0]);
            }

            if (mobileLang.value.some((key) => key.toLowerCase().includes(term))) {
                return true;
            }

            return false;
        });
    } else {
        return allCompanies.value.data
    }

});



</script>
