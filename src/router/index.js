import Vue from "vue"
import VueRouter from "vue-router"
import Route from "vue-routisan"
import Home from "../views/Home.vue"

Vue.use(VueRouter)
Route.setViewResolver(uri => import(`../views/${uri}.vue`));

Route.view("/", Home).name("Home");
Route.view("/about", "About").name("About");

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes: Route.all(),
})

export default router
