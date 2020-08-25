import Vue from "vue"
import { $json } from "@voltra/json"

[Vue, Vue.prototype]
.forEach(target => {
	Object.defineProperties(target, {
		"$json": {
			get(){
				return $json;
			},
		},
	})
});