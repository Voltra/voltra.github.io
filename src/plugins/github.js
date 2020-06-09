import Vue from "vue"
import { Octokit } from "@octokit/rest"

const octokit = new Octokit({
	userAgent: "voltra.github.io vX.Y.Z"
});

[Vue, Vue.prototype].forEach(target => Object.defineProperties(target, {
	"$github": {
		get(){
			return octokit;
		},
	},
}));

