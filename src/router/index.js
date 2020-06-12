import Vue from "vue"
import VueRouter from "vue-router"
import Route from "vue-routisan"

Vue.use(VueRouter)
Route.setViewResolver(uri => {
	return typeof uri === "string"
	? () => import("../views/" + uri + ".vue")
	: uri;
});

Route.view("/", "Home").name("Home").options({
	meta: {
		nav: {
			title: "Accueil",
			icon: "home",
		},
	},
});

Route.view("/projets", "Projects").name("Projects").options({
	meta: {
		nav: {
			title: "Projets",
			icon: "project", // code
		},
	},
});

Route.view("/cv", "Cv").name("Cv").options({
	meta: {
		nav: {
			title: "CV",
			icon: "file-text",
		},
	},
});

Route.view("/contact", "Contact").name("Contact").options({
	meta: {
		nav: {
			title: "Me Contacter",
			icon: "notification",
		},
	},
});

Route.view("/mentions-legales", "About").name("About");

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes: Route.all(),
})

export default router
