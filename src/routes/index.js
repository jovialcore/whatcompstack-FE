import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../views/HomeComponent.vue";
import DetailsComponent from "../views/DetailsComponent.vue";
import AboutUs from "../views/AboutUs.vue";
import AddCompany from "../views/AddCompany.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeComponent,
	},
	{
		path: "/details/:id",
		name: "Details",
		component: DetailsComponent,
		props: true,
	},
	{
		path: "/about",
		name: "About",
		component: AboutUs,
	},
	{
		path: "/add-company",
		name: "AddCompany",
		component: AddCompany,
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
