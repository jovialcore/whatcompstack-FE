import { ref } from "vue";

const getCompany = (id) => {
    const company = ref(null)
	const companies = [
		{
			id: "1",
			name: "PayStack",
			stack_be: ["php", "nodejs", "java", "rubyonrails"],
			stack_fe: ["javascript", "react", "vuejs", "svelte"],
			database_driver: ["mariadb"],
			devops: ["azure", "digitalOcean", "heroku"],
			ceo: "Ox",
			ceo_contact: "linked.com/in/ox",
			cto: "Odogwu Ox",
			cto_contact: "liniked.com/in/cndnkd",
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
			ceo_contact: "linked.com/in/unicodedeveloper",
			cto: "Odogwu Machalla",
			cto_contact: "liniked.com/in/cndnkd",
			hr: "Mrs chidiadi",
			hr_contact: null,
			testimonials: null,
			salary_range: null,
			created_at: "2023-03-11T12:40:02.000000Z",
			updated_at: "2023-03-11T12:40:02.000000Z",
		},
	];

    company.value = companies.filter(company => company.id === id)[0]

	return { company };
};

export default getCompany;
