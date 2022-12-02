import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
    {
        path: '/hello',
        redirect: '/hello/hello',
        name: 'HelloWorld',
        children: [
            {
                path: 'hello',
                component: HelloWorld,
                name: 'HelloWorld',
            }
        ]
    }
]
const router = createRouter({
    routes, history: createWebHistory()
})
export default router;