const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const {
	asSequence
} = require("sequency");

const here = (uri = "") => path.resolve(__dirname, uri);
const primary = "#0087B3";
const favicon = "favicon.ico";

module.exports = {
	outputDir: here("docs"),
	filenameHashing: false,
	pluginOptions: {
		meta: {
			projectName: "Ludwig GUERIN",
			url: "https://ludwigguerin.fr",
			description: "Je m'appelle Ludwig GUERIN et je suis un développeur front-end.",
			socialImage: "img/og.png",
		}
	},
	pwa: {
		name: "Ludwig GUERIN - Voltra the dev",
		themeColor: primary,
		msTileColor: primary,
		manifestOptions: {
			start_url: "/",
			short_name: "Ludwig GUERIN",
			display: "standalone",
			orientation: "portrait",
			background_color: primary,
		},
	},
	configureWebpack(config) {
		config.plugins.push(new CopyPlugin({
			patterns: [
				here("src/assets/"),
			]
		}));
	},
	css: {
		//		requireModuleExtension: false,
		loaderOptions: {
			scss: {},
			less: {
				lessOptions: {
					javascriptEnabled: true,
				},
			},
			postcss: {
				plugins: asSequence([
					"css-mquery-packer",
					"autoprefixer",
					"cssnano",
				]).map(plugin => require(plugin))
					.map(factory => factory())
					.toArray(),
			},
		},
	},
};
