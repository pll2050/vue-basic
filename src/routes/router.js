import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/index';
import About from '../views/about';
import LifeCycle from '../views/lifecycle';
import GetAxios from '../views/axios/get.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/about", component: About },
        { path: "/lifecycle", component: LifeCycle },
        { path: "/axios/get", component: GetAxios },
    ]
});