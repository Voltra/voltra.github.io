const Route = require("vue-routisan").default;

const url = (uri = "") => `/#${uri}`;

Route.setViewResolver(uri => {
	return typeof uri === "string"
	? () => import(`../views/${uri}.vue`)
	: uri;
});

Route.view("/", "Home").name("Home").options({
	meta: {
		nav: {
			title: "Accueil",
			icon: "home",
		},
		sitemap: {
			loc: url("/"),
			lastmod: "2020-09-11",
			priority: 1,
		},
	},
});

Route.view("/projets", "Projects").name("Projects").options({
	meta: {
		nav: {
			title: "Projets",
			icon: "project", // code
		},
		sitemap: {
			loc: url("/projets"),
			lastmod: "2020-10-10",
			priority: 0.8,
		},
	},
});

Route.view("/cv", "Cv").name("Cv").options({
	meta: {
		nav: {
			title: "CV",
			icon: "file-text",
		},
		sitemap: {
			loc: url("/cv"),
			lastmod: "2020-09-11",
			priority: 0.9,
		},
	},
});

Route.view("/contact", "Contact").name("Contact").options({
	meta: {
		nav: {
			title: "Me Contacter",
			icon: "notification",
		},
		sitemap: {
			loc: url("/contact"),
			lastmod: "2020-10-06",
			priority: 0.7,
		},
	},
});

Route.view("/mentions-legales", "About").name("About").options({
	meta: {
		sitemap: {
			loc: url("/mentions-legales"),
			lastmod: "2020-09-11",
			priority: 0.1,
		},
	},
});

Route.view("*", "404").name("404").options({
	meta: {
		sitemap: {
			ignoreRoute: true,
		},
	},
});

/**
 * @type {import("vue-router").RouteConfig[]}
 */
const routes = Route.all();

module.exports = {
	routes,
};
