import { makeMeta } from "~/js/utils";

export default function(ctx, inject) {
	inject("i18nMakeMeta", function(obj = {}) {
		const $t = this.$t;

		return makeMeta({
			title: $t('seo.title'),
			description: $t('seo.description'),
			tags: $t('seo.keywords'),
			...obj,
		});
	});
}
