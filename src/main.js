import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import router from "./routes";
import  VueGtag  from "vue-gtag";


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
import "./assets/vendor/fonts/boxicons.css"


// import "./assets/css/demo.css";
createApp(App).use(router, VueGtag, {
    config: {
        id: "GA_MEASUREMENT_ID"
    }
}).mount("#app");
