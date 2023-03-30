import { ref } from "vue";
import axios from "axios";

const getCompany = (id) => {
	const company = ref(null);
	const isLoading = ref(false);

	const load = async () => {
		try {
			const res = await axios.get(
				`https://jovialcore.tech/wsc/api/company/stack/details/${id}`
			);
			company.value = res.data.company_details;
			isLoading.value = true;
		} catch (err) {
			console.log(err.message);
			company.value = null;
		}
	}

	load();

	return { company, isLoading };
};

export default getCompany;
