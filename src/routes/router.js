import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/index';
import About from '../views/about';
import LifeCycle from '../views/lifecycle';
import GetAxios from '../views/axios/get.vue';
import vIf from '../views/v-if.vue';
import vFor from '../views/v-for.vue';
import vModel from '../views/v-model.vue';
import Components from '../views/components.vue';
import PropsPtoC from '../views/props-ptoc/parent.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/about", component: About },
        { path: "/lifecycle", component: LifeCycle },
        { path: "/axios/get", component: GetAxios },
        { path: "/vif", component: vIf },
        { path: "/vfor", component: vFor },
        { path: "/components", component: Components },
        { path: "/vmodel", component: vModel },
        { path: "/vmodel", component: vModel },
        { path: "/props/ptoc", component: PropsPtoC },
    ]
});