const path = require("path");

const here = (uri = "") => path.resolve(__dirname, uri);

module.exports = {
	outputDir: here("assets"),
	indexPath: here("index.html"),
};