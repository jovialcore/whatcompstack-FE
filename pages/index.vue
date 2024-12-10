<template>
	<div
		class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
		id="layout-navbar"
	>
		<div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
			<div class="navbar-nav align-items-center w-100" id="nav-container">
				<div class="d-flex align-items-center w-100" id="nav-body">
					<i class="bx bx-search fs-4 lh-0"></i>
					<input
						type="text"
						class="form-control border-0 shadow-none w-100"
						v-model="searchTerm"
						placeholder="Search..."
						aria-label="Search..."
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="container-xxl flex-grow-1 container-p-y">
		<div class="row mb-5">
			<HomeCompanyListItem
				v-for="company in filteredCompanies"
				:key="company.id"
				:company="company"
			/>
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
	const debouncedSearchTerm = ref('');
	const searchTimeout = ref(null);
	const filteredCompanies = ref([]);
	const expectedNoOfPages = ref(0);

	const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/companies' : 'https://admin.whatcompanystack.com/api/companies';
		
	const getExpectedNoOfPages = (companiesMeta) => {
		if (companiesMeta.total > companiesMeta.per_page) {
			return Math.ceil(companiesMeta.total / companiesMeta.per_page);
		}
	};

	const getCompanies = (url) =>  useFetch(() => url);

    const { data: allCompanies, pending, error, refresh } = await getCompanies(baseUrl);

	filteredCompanies.value = allCompanies.value.data;

	watch(searchTerm, (newTerm) => {
        if (searchTimeout.value) {
            clearTimeout(searchTimeout.value);
            searchTimeout.value = null;
        } 
        searchTimeout.value = setTimeout(() => {
            debouncedSearchTerm.value = newTerm;
        }, 300);
    });

	watch(debouncedSearchTerm, async (newTerm) => {
		if (!newTerm) {
			filteredCompanies.value = allCompanies.value.data;
			expectedNoOfPages.value = getExpectedNoOfPages(allCompanies.value.meta);
			return;
		}
		const { data, error } = await getCompanies(`${baseUrl}?term=${newTerm}`);
		if(!data.value){
			filteredCompanies.value = [];
			return;
		}
		filteredCompanies.value = data.value.data;
		expectedNoOfPages.value = getExpectedNoOfPages(data.value.meta);
	});

	expectedNoOfPages.value = getExpectedNoOfPages(allCompanies.value.meta);

    const getPaginatedData = async (pageNumber) => {
        const pageEndValue = searchTerm.value ? `?term=${searchTerm.value}&page=${pageNumber}` : `?page=${pageNumber}`;
		const { data: paginatedCompanies } = await getCompanies(`${baseUrl}${pageEndValue}`);
		if(paginatedCompanies?.value?.data){
			filteredCompanies.value = paginatedCompanies.value.data;
			expectedNoOfPages.value = getExpectedNoOfPages(paginatedCompanies.value.meta);
		}
    };
</script>
