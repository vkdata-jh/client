import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(router).mount("#app");
