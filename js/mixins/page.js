import { makeMeta } from "~/js/utils";

export const pageMixin = {
	head() {
		return makeMeta({
			title: this.$t('seo.title'),
			description: this.$t('seo.description'),
			tags: this.$t('seo.keywords'),
		});
	},
};
