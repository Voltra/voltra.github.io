<template>
	<transition name="fade" appear>
		<div id="loader" v-if="shouldBeDisplayed">
			<img src="/img/voltra.png" alt="Voltra The Dev" width="200" height="200"/>

			<div class="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</transition>
</template>

<script>
	import VueTypes from "vue-types";

	export default {
		props: {
			isLoading: VueTypes.bool.def(false),
		},
		data() {
			return {
				loading: false,
			};
		},
		computed: {
			shouldBeDisplayed() {
				return this.isLoading || this.loading;
			},
		},
		methods: {
			start() {
				this.loading = true;
			},
			finish() {
				this.loading = false;
			},
		},
	};
</script>
