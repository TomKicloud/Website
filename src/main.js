import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import vueHeadful from 'vue-headful';
import ComputerDating from "./components/ComputerDating.vue";
import HomePage from "./components/HomePage.vue";
import RulesPage from "./components/RulesAndRegulations.vue";
import ThankYou from "./components/FeedbackThankYou.vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router'


Vue.component('vue-headful', vueHeadful);


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [{
    path: "/",
    component: HomePage,
    name: "home",
    beforeEnter: (to, from, next) => {
        const { uri } = to.query;
        if (uri != null && uri != '/') {
            next(false);
            router.push(uri);
        } else {
            next();
        }
    }
}, { path: "/computerdating", component: ComputerDating, name: "computerdating" }, { path: "/rules", component: RulesPage, name: "rules" }, { path: "/thankyou", component: ThankYou, name: "thankyou" }];
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')