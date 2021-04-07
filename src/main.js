import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { httpClient } from "./services/APIClient.js"

var app = createApp(App);
app.use(store);
app.use(router);

app.config.globalProperties.http = httpClient;

app.mount("#app");
