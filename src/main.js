import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import router from "./routes";
import VueGtag from "vue-gtag";

// General Css

import "./assets/vendor/css/theme-default.css";
import "./assets/vendor/css/core.css"; // i don't know if this is boostrap core but boostrap 5 is already downloaded

// I don't really know how important these is are but you can always check it from your end
import "./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";

/**  the commented styles are primarily due to temporary inabiltiy to call them or reference them properly */
// google font
// import   "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap "
// import "https://fonts.googleapis.com"
// import "https://fonts.gstatic.com"

// native theme fonts
import "./assets/vendor/fonts/boxicons.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// import "./assets/css/demo.css";

const store = createStore({
	state() {
		return {
			companyId: null,
		};
	},

	mutations: {
		setCompanyId(state, id) {
			state.companyId = id;
		},
	},

	actions: {
		setCompanyId(context, id) {
			context.commit("setCompanyId", id);
		},
	},
});

library.add(faArrowLeft);

createApp(App)
	.use(router)
	.use(store)
	.use(
		VueGtag,
		{
			config: {
				id: "G-GFP168Q9E8",
			},
		},
		router
	)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app");
