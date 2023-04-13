import { ref } from "vue";
import axios from "axios";

const getCompanies = () => {
	const companies = ref([]);
	const isLoading = ref(false);

	const load = async (search) => {
		try {
			if (search) {
				const res = await axios.get(
					`https://jovialcore.tech/wsc/api/company/stack/all?item=${search}`
				);
				companies.value = res.data.data;
			} else {
				const res = await axios.get("https://jovialcore.tech/wsc/api/company/stack/all");
				companies.value = res.data.data;
			}

			isLoading.value = true;
		} catch (err) {
			console.log(err.message);
			companies.value = [];
		}
	}

	load();

	return { companies, isLoading, load };
};

export default getCompanies;