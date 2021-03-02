import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue,BootstrapVueIcons } from 'bootstrap-vue'
import vueHeadful from 'vue-headful';
import ComputerDating from "./components/ComputerDating.vue";
import HomePage from "./components/HomePage.vue";
import RulesPage from "./components/RulesAndRegulations.vue";
import ThankYou from "./components/FeedbackThankYou.vue";
import WhatsNew4 from "./components/WhatsNew4.vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router'


Vue.component('vue-headful',vueHeadful);


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [{
    path: "/",
    component: HomePage,
    name: "home",
    },
    { path: "/rules",component: RulesPage,name: "rules" },
    { path: "/thankyou",component: ThankYou,name: "thankyou" },
    { path: "*",component: HomePage },
    { path: "/computerdating",component: ComputerDating, name: "computerdating" },
    { path: "/version4", component: WhatsNew4, name: "whatsnew40" }
];

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');