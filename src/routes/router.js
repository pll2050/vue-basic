import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/index';
import About from '../views/about';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/about", component: About },
    ]
});

export default router;

// export default{
//     router,
// };