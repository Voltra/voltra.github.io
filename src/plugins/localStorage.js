import Vue from "vue"
import store from "store"
import plugins from "store/plugins/v1-backcompat"

plugins.forEach(plugin => store.addPlugin(plugin));

[Vue, Vue.prototype].forEach(target => {
	Object.defineProperties(target, {
		$localStorage: {
			get(){
				return store;
			},
		},
	});
});