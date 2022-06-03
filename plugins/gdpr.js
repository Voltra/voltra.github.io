import Vue from "vue"
import { VueGdprGuard } from "vue-gdpr-guard"
import { GdprManagerBuilder, GdprStorage, LocalStorageSavior, defaults } from "gdpr-guard-local";
import { addMonths } from "date-fns";

const storeKey = "gdpr";
const versionKey = `${storeKey}__version`;
const version = "3.3.0";

const expiration = () => addMonths(new Date(), 13);

const factory = () => {
	// Since we use i18n, titles and descriptions will come directly from translation files

	return GdprManagerBuilder.make()
		.startRequiredGroup(GdprStorage.None, "features", "")
			.withEnabledGuard("i18n_redirected", "", GdprStorage.Cookie)
			.withEnabledGuard(storeKey, "", GdprStorage.LocalStorage)
			.withEnabledGuard(versionKey, "", GdprStorage.LocalStorage)
		.endGroup()
	.build();
};

const savior = new LocalStorageSavior(defaults.makeConfig({
	storeKey,
	versionKey,
	version,
	expiration,
}));

Vue.use(VueGdprGuard, {
	factory,
	savior,
});
