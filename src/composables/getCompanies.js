import { ref, } from "vue";
import axios from "axios";

const getCompanies = () => {
	const companies = ref([]);
	const isLoading = ref(false);
	const searchTerm = ref('');

	const load = async () => {
		try {
			let url = 'https://jovialcore.tech/wsc/api/company/stack/all';

			if (searchTerm.value) {
				url += `?item=${searchTerm.value}`;
			}

			const res = await axios.get(url);

			if (searchTerm.value) {
				companies.value = res.data.data;
			} else {
				companies.value.push(...res.data.data);
			}

			isLoading.value = true;
		} catch (err) {
			console.log(err.message);
			companies.value = [];
		}
	};

	load();

	return { companies, isLoading, searchTerm };
};

export default getCompanies;