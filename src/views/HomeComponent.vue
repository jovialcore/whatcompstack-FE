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

    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row mb-5">
            <CompanyListItem v-for="company in filteredCompanies" :key="company.id" :company="company" />
        </div>
    </div>
</template> 
<script>
import CompanyListItem from '@/components/home/CompanyListItem.vue';
import useGetCompanies from '@/composables/getCompanies';


export default {
    name: 'HomeComponent',
    components: {
        CompanyListItem
    },

    setup() {

        const { companies, searchTerm, filteredCompanies } = useGetCompanies();

        // const searchTerm = ref('');
        // const companies = ref([]);

        // const fetchData = async () => {

        //     try {
        //         const response = await axios.get("http://localhost:8000/api/company/stack/all");
        //         companies.value = response.data;
        //     } catch (err) {
        //         console.error("Error fetching data:", err.message);
        //         companies.value = [];
        //     }
        // }

        // onMounted(() => {
        //     fetchData();
        // });

        // const filteredData = computed(() => {
        //     const term = searchTerm.value.toLocaleLowerCase()
        //     if (searchTerm.value) {
        //         return companies.value.data.filter((item) => {
        //             if (item.company.toLowerCase().includes(term)) {
        //                 return true;
        //             }

        //         })
        //     }
        //     else {
        //         return companies.value.data
        //     }

        // })

        return { companies, searchTerm,filteredCompanies };
    }
}
</script>

  