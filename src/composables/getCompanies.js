import { ref, watch } from "vue";
import axios from "axios";

const getCompanies = (search) => {
    const companies = ref([]);
    const isLoading = ref(false);
    const searchTerm = ref(search)

	const load = async () => {
		try {
			if (searchTerm.value) {

				const res = await axios.get(
					`https://jovialcore.tech/wsc/api/company/stack/all?item=${searchTerm.value}`
				);
				companies.value = res.data.data;
				console.log(companies.value)
				isLoading.value = true
			}
			// } else {
			// 	const res = await axios.get("https://jovialcore.tech/wsc/api/company/stack/all");
			// 	companies.value = res.data.data;
			// }

			isLoading.value = true;
		} catch (err) {
			console.log(err.message);
			companies.value = [];
		}
	}

	watch(searchTerm, () => {
        load()
    })

	load()

	return { companies, isLoading };
};

export default getCompanies;