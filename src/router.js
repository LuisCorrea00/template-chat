import Vue from 'vue';
import Router from 'vue-router';
import homeView from "@/views/HomeView.vue";
import loginView from "@/views/LoginView.vue";

Vue.use(Router);

const routes = [
    { path: '/', name: 'login', component: loginView },
    { path: '/home', name: 'home', component: homeView}
];

export default new Router({ routes });