import { ref } from "vue";
import axios from "axios";

const getCompanies = (search) => {
	let companies = ref([]);
	const isLoading = ref(false);

	const load = async () => {
		try {
			const url = search
				? "https://jovialcore.tech/wsc/api/company/stack/all?item=php"
				: "https://jovialcore.tech/wsc/api/company/stack/all";

			const res = await axios.get(url);
			companies.value = res.data.data;
			console.log(companies.value )
			isLoading.value = true; console.log(companies.value);
		} catch (err) {
			console.log(err.message);
			companies.value = [];
		}
	};

	load();

	return { companies, isLoading };
};

export default getCompanies;
