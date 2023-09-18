import { ref } from "vue";
import axios from "axios";

const getCompanies = () => {
	const companies = ref([]);
	const isLoading = ref(false);

	let stackBePlangKeys;
	let stackBeFrameworkKeys;
	let stackFePlangKeys;
	let stackFeFrameworkKeys;

	const load = async (search) => {
		try {
			const res = await axios.get("https://api.jovialcore.tech/api/company/stack/all");

			if (search) {
				companies.value = res.data.data.filter((item) => {
					if (item.company.toLowerCase().includes(search.toLowerCase())) {
						return true;
					}

					if (item.stack_be_plang.length !== 0) {
						stackBePlangKeys = item.stack_be_plang.map(
							(obj) => Object.keys(obj)[0]
						);
					}
					if (
						stackBePlangKeys.some((key) =>
							key.toLowerCase().includes(search.toLowerCase())
						)
					) {
						return true;
					}

					if (item.stack_be_framework.length !== 0) {
						stackBeFrameworkKeys = item.stack_be_framework.map(
							(obj) => Object.keys(obj)[0]
						);
					}
					if (
						stackBeFrameworkKeys.some((key) =>
							key.toLowerCase().includes(search.toLowerCase())
						)
					) {
						return true;
					}

					if (item.stack_fe_plang.length !== 0) {
						stackFePlangKeys = item.stack_fe_plang.map(
							(obj) => Object.keys(obj)[0]
						);
					}
					if (
						stackFePlangKeys.some((key) =>
							key.toLowerCase().includes(search.toLowerCase())
						)
					) {
						return true;
					}

					if (item.stack_fe_framework.length !== 0) {
						stackFeFrameworkKeys = item.stack_fe_framework.map(
							(obj) => Object.keys(obj)[0]
						);
					}
					if (
						stackFeFrameworkKeys.some((key) =>
							key.toLowerCase().includes(search.toLowerCase())
						)
					) {
						return true;
					}

					return false;
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
