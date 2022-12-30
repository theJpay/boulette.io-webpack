import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./services/firebaseConfig";
import App from "./App.vue";
import router from "./router";

initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
