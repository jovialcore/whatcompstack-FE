import { onMounted, ref } from 'vue'
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


	onMounted(() => {
		fetchData()
	})

	return { companies, searchTerm, fetchData }
}

export default useGetCompanies 