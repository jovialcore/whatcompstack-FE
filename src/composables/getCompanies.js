import { ref } from "vue";
import axios from "axios";

const getCompanies = () => {
	const companies = ref([]);
	const isLoading = ref(false);

	const load = async (search) => {
		try {
			const res = await axios.get("https://api.jovialcore.tech/api/company/stack/all");

			if (search) {
				companies.value = res.data.data.filter((company) => {
					return company.company.toLowerCase().includes(search.toLowerCase());
				});
			} else {
				companies.value = res.data.data;
			}

			isLoading.value = true;
		} catch (err) {
			console.log(err.message);
			companies.value = [];
		}
	};

	load();

	return { companies, isLoading, load };
};

export default getCompanies;
