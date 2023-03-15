import { ref } from "vue";

const getCompanies = () => {
	const companies = ref([
		{
			id: "1",
			name: "PayStack",
			stack_be: ["php", "nodejs", "java", "rubyonrails"],
			stack_fe: ["javascript", "react", "vuejs", "svelte"],
			database_driver: ["mariadb"],
			devops: ["azure", "digitalOcean", "heroku"],
			ceo: "Ox",
			ceo_contact: "linked.icom",
			cto: "Odogwu Ox",
			cto_contact: "linikedcom/cndnkd",
			hr: "Mrs chidinma",
			hr_contact: null,
			testimonials: null,
			salary_range: null,
			created_at: "2023-03-11T12:40:02.000000Z",
			updated_at: "2023-03-11T12:40:02.000000Z",
		},
		{
			id: "2",
			name: "EdenLife",
			stack_be: ["php", "nodejs", "java", "rubyonrails"],
			stack_fe: ["javascript", "react", "vuejs", "svelte"],
			database_driver: ["mysql"],
			devops: ["azure", "digitalOcean", "heroku"],
			ceo: "odogwu Machalla (unicode developer) ",
			ceo_contact: "linked.icom/unicodedeveloper",
			cto: "Odogwu Machalla",
			cto_contact: "linikedcom/cndnkd",
			hr: "Mrs chidiadi",
			hr_contact: null,
			testimonials: null,
			salary_range: null,
			created_at: "2023-03-11T12:40:02.000000Z",
			updated_at: "2023-03-11T12:40:02.000000Z",
		},
	]);

    return { companies };
};

export default getCompanies;
