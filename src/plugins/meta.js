import Vue from "vue"
import VueMeta from "vue-meta"

Vue.use(VueMeta, {
	refreshOnNavigation: true,
});

const makeKeywords = tags => {
	if(Array.isArray(tags))
		return tags.join(",");
	else if(typeof tags == "string")
		return tags;
	else
		return "";
};

export const makeMeta = ({ title, description, tags }) => ({
	title,
	meta: [
		{
			vmid: "og:title",
			property: "og:title",
			content: title,
		},
		{
			vmid: "og:description",
			property: "og:description",
			content: description,
		},
		{
			vmid: "description",
			property: "description",
			content: description,
		},
		{
			vmid: "keywords",
			property: "keywords",
			content: makeKeywords(tags),
		},
	],
});
