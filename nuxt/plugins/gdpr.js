import Vue from "vue";
import { VueGdprGuard } from "vue-gdpr-guard/dist/vue-gdpr-guard.common";
import { GdprManagerBuilder, GdprDeserializer, GdprStorage } from "gdpr-guard";
import moment from "moment";

const storeKey = "gdpr";
const versionKey = `${storeKey}__version`;
const version = "3.1.0";

//GDPR says max 13 months
const expiration = () => moment().startOf("month").add(13, "months").toDate();

const factory = () => {
  return GdprManagerBuilder.make()
    .startRequiredGroup(GdprStorage.LocalStorage, "RGPD", "Gestion des préférences relatives à la protection des données")
    .withEnabledGuard(storeKey, "Sauvegarde de vos préférences RGPD")
    .withEnabledGuard(versionKey, "Version des paramètres RGPD")
    .endGroup()
    .build();
};

const updateSharedManager = (Vue, manager) => {
  //Vue.nextTick(() => {
  if ("$gdpr" in Vue.prototype) {
    const { $gdpr } = Vue.prototype;
    if (manager == $gdpr.manager)
      return;

    $gdpr.manager = manager;

    $gdpr.$emit("change"); // trigger updates
    //Vue.nextTick(() => exists(Vue, false)); // completely trigger updates
  } else
    Vue.nextTick(() => updateSharedManager(Vue, manager));
  //});
};

const restore = (Vue, shouldUpdate = true) => {
  Vue.$localStorage.removeExpiredKeys(); // explicitely remove expired keys

  if (!Vue.$localStorage.has(versionKey)) {
    // If no version is registered, boot up
    Vue.$localStorage.set(versionKey, version, expiration());
    Vue.$localStorage.remove(storeKey); //avoid localStorage'jacking
  }

  const ser = Vue.$localStorage.get(storeKey);
  const storageVersion = Vue.$localStorage.get(versionKey);

  try {
    const manager = GdprDeserializer.manager(ser);
    const sameVersion = version === storageVersion;

    if (!sameVersion) { // Handle semantic update
      Vue.$localStorage.remove(storeKey);
      Vue.$localStorage.set(versionKey, version, expiration());
      return null;
    } else if (!!manager) { // no changes, give it back
      if (shouldUpdate)
        updateSharedManager(Vue, manager);
      return manager;
    }

    return null; // changed, get the new one
  } catch (e) {
    return null;
  }
};

const exists = (Vue, shouldUpdate = true) => {
  return restore(Vue, shouldUpdate) !== null;
};

const store = (Vue, manager) => {
  Vue.$localStorage.set(storeKey, manager, expiration());
  try {
    return exists(Vue);
  } catch (e) {
    return false;
  }
};

const storeIfNotExists = (Vue, manager) => {
  return exists(Vue) || store(Vue, manager);
};

const restoreOrCreate = (Vue, factory) => {
  const restored = restore(Vue);
  const generated = factory(Vue, storeKey);

  if (!restored) {
    updateSharedManager(Vue, generated);
    return generated;
  }

  return restored;
};

const manager = restoreOrCreate(Vue, factory);
Vue.use(VueGdprGuard, { manager });

[Vue, Vue.prototype].forEach(target => {
  Object.defineProperties(target, {
    $gdpr_serde: {
      get() {
        return {
          restore(...args) { return restore(Vue, ...args); },
          store(...args) { return store(Vue, ...args); },
          storeIfNotExists(...args) { return storeIfNotExists(Vue, ...args); },
          exists(...args) { return exists(Vue, ...args); },
          check(...args) {
            Vue.nextTick(() => {
              setTimeout(() => {
                exists(Vue, ...args);
              }, 100);
            });
          },
        };
      }
    },
    $gdprStorageToString: {
      get() {
        return storage => {
          switch (storage) {
            case GdprStorage.Cookie:
              return "cookies";

            case GdprStorage.FileSystem:
              return "fichiers locaux";

            case GdprStorage.IndexedDb:
              return "base de données intégrée";

            case GdprStorage.LocalStorage:
              return "localStorage";

            case GdprStorage.SessionStorage:
              return "sessionStorage";

            case GdprStorage.ServerStorage:
              return "serveur";

            default:
              return null;
          };
        };
      },
    },
  });
});
