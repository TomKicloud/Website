import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { httpClient } from "./services/APIClient.js";
import VueCookies from 'vue3-cookies';


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if(window.getCookie("jwt") == null) {
            next({
                path: "/login",
                params: { nextUrl: to.fullPath }
            })
        } else {
            if (!store.getters.user) {
                httpClient.get("users/currentuser").then(resp => { store.commit("updateUser", resp.data); next(); }).catch(() => next({ path: "/login"}));
            } else {
                next();
            }
        }
    } else {
        next();
    }
});

httpClient.interceptors.response.use(
    response => {
        console.log("response");
        return response;
    },
    error => {
        console.log("Error &");
        let jwt = window.getCookie("jwt");
        let refresh = window.getCookie("refresh");
        let uuid = window.getCookie("uuid");
        console.log(`${jwt} < ${refresh} < ${uuid} <`);
        if (error.response.status == 401 && jwt && refresh && uuid && !error.config._isRetrying) {

            httpClient.get(`auth/refresh/${uuid}`)
                .then((resp) => {
                    store.commit("updateUser", resp.data);
                    VueCookies.set("jwt", resp.data.userAuthTokens.authenticationToken);
                    VueCookies.set("refresh", resp.data.userAuthTokens.refreshToken);
                    VueCookies.set("uuid", resp.data.userUUID);
                    error.config._isRetrying = true;
                    return httpClient.request(error.config);
                })
                .catch(() => {
                    console.log("catch");
                    store.commit("updateUser", null);
                    VueCookies.remove("jwt");
                    VueCookies.remove("refresh");
                    VueCookies.remove("uuid");
                    return Promise.reject(error);
                });
        } else {
            return Promise.reject(error);
        }
    }
);

window.getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

var app = createApp(App);
app.use(store);
app.use(router);
app.use(VueCookies);

app.config.globalProperties.http = httpClient;

app.mount("#app");
