import { onMounted, ref, computed } from 'vue'
import axios from 'axios'



const useGetCompanies = () => {

	const companies = ref([])
	const searchTerm = ref('');
	const fetchData = async () => {

		try {
			const response = await axios.get("http://localhost:8000/api/company/stack/all");
			companies.value = response.data;
		} catch (err) {
			console.error("Error fetching data:", err.message);
			companies.value = [];
		}
	}


	onMounted(() => {
		fetchData();
	});


	const filteredCompanies = computed(() => {
		const term = searchTerm.value.toLocaleLowerCase()
		if (searchTerm.value) {
			return companies.value.data.filter((item) => {
				if (item.company.toLowerCase().includes(term)) {
					return true;
				}

			})
		}
		else {
			return companies.value.data
		}

	})

	return { companies, searchTerm, fetchData, filteredCompanies }
}

export default useGetCompanies 