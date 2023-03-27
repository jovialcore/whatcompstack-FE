import { ref } from "vue";
import axios from "axios";

const getCompanies = () => {
	const companies = ref([]);
	const isLoading = ref(false);

	const load = async () => {
		try {
			const res = await axios.get("https://jovialcore.tech/wsc/api/company/stack/all");
			companies.value = res.data[0].data;

			isLoading.value = true;
		} catch (err) {
			console.log(err.message);
			companies.value = [];
		}
	}

	load();

    return { companies, isLoading };
};

export default getCompanies;
