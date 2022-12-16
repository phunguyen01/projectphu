import { createWebHistory, createRouter } from "vue-router";
import mot from "../components/mot.vue"
import error from "../components/error.vue"

const routes = [

   
    { path: "/mot", component: mot },

    { path: "/:pathMatch(.*)*", component: error }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router