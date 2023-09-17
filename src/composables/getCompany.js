import { ref } from "vue";
import axios from "axios";
import getStacks from "@/composables/getStacks";

const getCompany = (id) => {
	const company = ref(null);
	const isLoading = ref(false);
	const stack_be = ref([]);
	const stack_fe = ref([]);
	const be_framework = ref([]);
	const fe_framework = ref([]);

	const load = async () => {
		try {
			const res = await axios.get(
				`https://api.jovialcore.tech/api/company/stack/details/${id}`
			);
			company.value = res.data.data;

			isLoading.value = true;

			stack_be.value = getStacks(company.value.stack_be_plang);

			stack_fe.value = getStacks(company.value.stack_fe_plang);

			be_framework.value = getStacks(company.value.stack_be_framework);

			fe_framework.value = getStacks(company.value.stack_fe_framework);
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
		fe_framework,
	};
};

export default getCompany;
