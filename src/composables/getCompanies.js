import { onMounted, ref, computed } from "vue";
import axios from "axios";

const useGetCompanies = () => {
	let companies = ref([]);
	let searchTerm = ref("");
	let isLoading = ref(false);
	let paginationCount = ref(1);
	let bePlangs = ref([]);
	let beFrameworks = ref([]);
	let feLang = ref([]);
	let currentPage = ref(1);

	const fetchData = async (page = 1) => {
		try {
			const response = await axios.get(
				`${process.env.VUE_APP_ROOT_API}/api/company/stack/all?page=${page}`
			);
			companies.value = response.data;
			isLoading.value = true;
			paginationCount.value = Math.ceil(
				response.data.meta.total / response.data.meta.per_page
			);
		} catch (err) {
			console.error("Error fetching data:", err.message);
			companies.value = [];
		}
	};

	onMounted(() => {
		fetchData();
	});

	const filteredCompanies = computed(() => {
		const term = searchTerm.value.toLocaleLowerCase();

		if (searchTerm.value) {
			return companies.value.data.filter((item) => {
				if (item.company.toLowerCase().includes(term)) {
					return true;
				}

				if (item.stack_be_plang.length !== 0) {
					bePlangs.value = item.stack_be_plang.map((obj) => Object.keys(obj)[0]);
				}

				if (bePlangs.value.some((key) => key.toLowerCase().includes(term))) {
					return true;
				}

				if (item.stack_be_framework.length !== 0) {
					beFrameworks.value = item.stack_be_framework.map(
						(obj) => Object.keys(obj)[0]
					);
				}

				if (beFrameworks.value.some((key) => key.toLowerCase().includes(term))) {
					return true;
				}

				if (item.stack_fe_framework.length !== 0) {
					feLang.value = item.stack_fe_framework.map((obj) => Object.keys(obj)[0]);
				}

				if (feLang.value.some((key) => key.toLowerCase().includes(term))) {
					return true;
				}

				return false;
			});
		} else {
			return companies.value.data;
		}
	});

	return {
		companies,
		searchTerm,
		fetchData,
		filteredCompanies,
		isLoading,
		paginationCount,
		currentPage,
	};
};

export default useGetCompanies;
