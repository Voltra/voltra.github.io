import Vue from "vue"
import store from "store"
import compat from "store/plugins/v1-backcompat"
import expire from "store/plugins/expire"

const plugins = [
	...compat,
	expire,
];

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
