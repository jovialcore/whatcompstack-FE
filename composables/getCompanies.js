import { onMounted, ref, computed } from "vue";


const useGetCompanies = () => {
	let allCompanies = ref([]); // stores all companies
	let companies = ref([]);
	let searchTerm = ref("");
	let paginationCount = ref(1);
	let bePlangs = ref([]);
	let beFrameworks = ref([]);
	let feLang = ref([]);
	let mobileLang = ref([]);
	let currentPage = ref(1);
	let isLoading = ref(true);

	const fetchData = async () => {
		try {
			const response = await useFetch(
				`${process.env.VUE_APP_ROOT_API}/api/company/stack/all`
			);
			allCompanies.value = response.data;
			console.log(process.env.VUE_APP_ROOT_API)
			paginateData();
			isLoading.value = false;
		} catch (err) {
			console.error("Error fetching data:", err.message);
			companies.value = [];
		}
	};

	const paginateData = () => {
		const perPage = 15;
		const startIndex = (currentPage.value - 1) * perPage;
		const endIndex = startIndex + perPage;
		companies.value = allCompanies.value.data.slice(startIndex, endIndex);
		paginationCount.value = Math.ceil(allCompanies.value.data.length / perPage);
	};


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
			return companies.value;
		}
	});

	return {
		companies,
		searchTerm,
		fetchData,
		filteredCompanies,
		paginationCount,
		currentPage,
		isLoading,
	};
};

export default useGetCompanies;
