import { ref } from "vue";
import axios from "axios";
import getStacks from "@/composables/getStacks";

const getCompany = (id) => {
	const company = ref(null);
	const isLoading = ref(false);
	const stack_be = ref([]);
	const stack_fe = ref([]);
	const be_framework = ref([]);

	const load = async () => {
		try {
			const res = await axios.get(
				`https://admin.whatcompanystack.com/api/company/stack/details/${id}`
			);
			company.value = res.data.data;

			isLoading.value = true;

			stack_be.value = getStacks(company.value.stack_be_plang);

			stack_fe.value = getStacks(company.value.stack_fe_framework);

			be_framework.value = getStacks(company.value.stack_be_framework);

		} catch (err) {
			company.value = null;
		}
	};

	load();

	return {
		company,
		isLoading,
		stack_be,
		stack_fe,
		be_framework,
	};
};

export default getCompany;
