import { ref , reactive} from "vue";
import axios from "axios";

const getCompanies = (search) => {
	let companies = reactive({});
	const isLoading = ref(false);
	const searchTerm = ref(search)



	const load = async () => {
		try {
			if (searchTerm.value) {
				const res = await axios.get(
					`https://jovialcore.tech/wsc/api/company/stack/all?item=${searchTerm.value}`
				);
			
				companies.value = res.data.data
				console.log(companies.value)
				console.log(Array.isArray(companies.value) )

				// if (data.length === 0) {
				// 	const allResponse = await axios.get('https://jovialcore.tech/wsc/api/company/stack/all')
				// 	companies.value = allResponse.data
				// } else {
				// 	companies.value = data
				// }
			}

			// } else {
			// 	const res = await axios.get("https://jovialcore.tech/wsc/api/company/stack/all");
			// 	companies.value = res.data[0].data;
			// }

			isLoading.value = true;
		} catch (err) {
			console.log(err.message);
			companies.value = [];
		}
	}

	load();

	return { companies, isLoading, };
};

export default getCompanies;