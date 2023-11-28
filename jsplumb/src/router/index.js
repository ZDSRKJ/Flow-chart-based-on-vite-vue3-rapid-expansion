import { createRouter, createWebHistory } from 'vue-router';
import home from '../view/index.vue';
const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: 'home',
        },
        {
            path: '/home',
            name: 'home',
            component: home,
        },
    ],
});
export default router;
