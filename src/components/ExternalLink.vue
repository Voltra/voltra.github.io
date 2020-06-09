<template functional>
	<a :class="{
		'ext-link': true,
		[`ext-link--${props.type}`]: true
	}" :href="props.href" target="_blank">
		<slot/>
	</a>
</template>

<script>
	import VueTypes from "vue-types"

	export default {
		props: {
			href: VueTypes.string.def("#"),
			type: VueTypes.oneOf(["primary", "secondary"]).def("primary"),
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
