import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import GetStarted from "../views/GetStarted.vue"
import NotFound from "../views/NotFound.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/getstarted/note",
            name: "getStarted",
            component: GetStarted
        },
        {
            path: "/:catchall(.*)*",
            name: "notfound",
            component: NotFound
        }
    ]
})

export default router