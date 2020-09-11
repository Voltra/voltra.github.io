const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const DotEnv = require("dotenv-webpack");
const {
	asSequence
} = require("sequency");

const { routes } = require("./src/router/routes");

/**
 * Retrieve the value of an environment variable
 * @param {string} name - The name of the environment variable to retrieve
 * @returns {string}
 */
const env = name => process.env[name];

/**
 * Transform a relative URI to an absolute URL in the current working directory
 * @param {string} uri - The relative URI
 * @returns {string}
 */
const here = (uri = "") => path.resolve(__dirname, uri);

const primary = env("PRIMARY_COLOR");
// const favicon = "favicon.ico";
const projectName = env("PROJECT_NAME");
const baseURL = env("BASE_URL");

module.exports = {
	outputDir: here("docs/"),
	filenameHashing: false,
	pluginOptions: {
		meta: {
			projectName,
			url: baseURL,
			description: env("PROJECT_DESCRIPTION"),
			socialImage: env("OG_IMAGE_URI"),
		},
		sitemap: {
			baseURL,
			routes,
		},
	},
	pwa: {
		name: env("PWA_NAME"),
		themeColor: primary,
		msTileColor: primary,
		manifestOptions: {
			start_url: "/",
			short_name: projectName,
			display: "standalone",
			orientation: "portrait",
			background_color: primary,
		},
	},
	configureWebpack(config) {
		config.plugins.push(new CopyPlugin({
			patterns: [
				here("src/assets/"),
			],
		}));

		config.plugins.push(new DotEnv({
			safe: true, // ensure all env from example are present
			expand: true, // ensure variables are fully expanded
		}));
	},
	chainWebpack(config){
		config.plugins.delete("prefetch");
		config.plugin("preload");
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
