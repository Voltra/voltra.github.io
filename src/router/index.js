import Vue from "vue"
import VueRouter from "vue-router"
import Route from "vue-routisan"
import Home from "../views/Home.vue"

Vue.use(VueRouter)
Route.setViewResolver(uri => {
	return typeof uri === "string"
	? import("../views/" + uri + ".vue")
	: uri;
});

Route.view("/", Home).name("Home").options({
	meta: {
		nav: {
			title: "Accueil",
			icon: "home",
		},
	}
});
Route.view("/about", "About").name("About").options({
	meta: {
		nav: {
			title: "Truc bidule",
			icon: "border-outer",
		},
	}
});

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes: Route.all(),
})

export default router
