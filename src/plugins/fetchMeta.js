import Vue from "vue"
import unfurl from "simple-unfurl"

const defaultOptions = {
	title: "title",
	description: "description",
	image: "og:image",
};

[Vue, Vue.prototype].forEach(target => {
	target["$fetchMeta"] = function(url, userOptions = {}){
		const options = {
			...defaultOptions,
			...userOptions,
		};

		return unfurl(url, options);
	};
});

/*
import { unfurl } from "unfurl.js"


const defaultOptions = {
	oembed: false,
	compress: true,
};

const hasOG = m => {
	return m
		&& "open_graph" in m
		&& m.open_graph
		&& "images" in m.open_graph
		&& Array.isArray(m.open_graph.images)
		&& m.open_graph.images.length > 0
		&& "url" in m.open_graph.images[0]
		&& m.open_graph.images[0].url

		&& ["title", "description", "url"]
		.every(key => key in m && m[key]);
};



[Vue, Vue.prototype].forEach(target => {
	target["$fetchMeta"] = async function(url, userOptions = {}){
		const options = {
			...defaultOptions,
			...userOptions,
		};

		const all = await unfurl(url, options);

		const hasOG = hasOG(all);

		return {
			hasOG,
			...all.open_graph,
			imageUrl: all.open_graph.images[0].url.replace("http://", "https://"),
		};
	};
});
*/
