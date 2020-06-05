const path = require("path");

const here = (uri = "") => path.resolve(__dirname, uri);

module.exports = {
	outputDir: here("assets"),
	assetsDir: "assets",
	indexPath: here("index.html"),
	filenameHashing: false,
	css: {
		requireModuleExtension: false,
		loaderOptions: {
			scss: {},
			less: {
				lessOptions: {
					modifyVars: {
						"primary-color": "#0087B3",
						"info-color": "#006181",
						"error-color": "#B62222",
						"warning-color": "#E9D30F",
						"normal-color": "#D9D9D9",
					},
					javascriptEnabled: true,
				},
			},
			postcss: {
				plugins: [
					require("css-mquery-packer")(),
					require("autoprefixer")(),
					require("cssnano")(),
				],
			},
		},
	},
};