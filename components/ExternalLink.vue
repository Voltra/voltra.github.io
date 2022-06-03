<template>
	<a :class="{
		'ext-link': true,
		[`ext-link--${type}`]: true
	}"
	   :href="url"
	   target="_blank"
	   tabindex="0"
	   v-bind="$attrs"
	   v-on="$listeners"
	>
		<slot/><!-- &nbsp;<a-icon type="export"/> -->
	</a>
</template>

<script>
	import VueTypes from "vue-types"
	import { withUtm } from "@/js/utils"

	export default {
		props: {
			href: VueTypes.string.def("#"),
			type: VueTypes.oneOf(["primary", "secondary"]).def("primary"),
		},
		computed: {
			url(){
				return withUtm(this.href);
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "~@/scss/settings";

	.ext-link{
		&--secondary{
			color: white !important;
			&::selection{
				background: white !important;
				color: $primary !important;
			}
		}
	}
</style>
