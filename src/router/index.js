import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
    {
        path: '/',
        name: '光通',
        component: HomePage,
    }
]
const router = createRouter({
    routes, history: createWebHistory()
})
export default router;