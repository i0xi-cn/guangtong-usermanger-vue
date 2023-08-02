import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Home from "../components/Home.vue";

const routes = [
    {
        path: '/',
        name: '光通',
        component: Home,
    }
]
const router = createRouter({
    routes, history: createWebHistory()
})
export default router;