import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../views/HomeComponent.vue";
import DetailsComponent from "../views/DetailsComponent.vue";

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
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
