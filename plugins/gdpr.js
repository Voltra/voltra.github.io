import Vue from "vue"
import { VueGdprGuard } from "vue-gdpr-guard"
import { GdprManagerBuilder, GdprStorage, LocalStorageSavior, defaults } from "gdpr-guard-local";
import { addMonths } from "date-fns";

const storeKey = "gdpr";
const versionKey = `${storeKey}__version`;
const version = "3.1.0";

const expiration = () => addMonths(new Date(), 13);

const factory = () => {
	return GdprManagerBuilder.make()
		.startRequiredGroup(GdprStorage.LocalStorage, "RGPD", "Gestion des préférences relatives à la protection des données")
		.withEnabledGuard(storeKey, "Sauvegarde de vos préférences RGPD")
		.withEnabledGuard(versionKey, "Version des paramètres RGPD")
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
