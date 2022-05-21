<template>
	<WindowWrapper class="floating">
		<hsc-window v-bind="windowProps" @closebuttonclick="close">
			<iframe
				v-if="isOpen"
				:width="width"
				:height="height"
				:src="url"
				:title="title"
				loading="lazy"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen>
			</iframe>
		</hsc-window>
	</WindowWrapper>
</template>

<script>
	import { StyleFactory } from "@hscmap/vue-window"
	import { secondary } from "@/scss/settings.scss"
import VueTypes from 'vue-types';

	const windowStyle = {
		window: {
			color: "white",
			boxShadow: "0 2pt 4pt rgba(0, 0, 0, 0.5)",
			backgroundColor: "#e9ebee",
			bottom: "20px",
			right: "20px",
		},
		titlebar: {
			backgroundColor: secondary,
		},
		content: {
		},
		button: {
			color: "white",
			lineHeight: 1,
			fontSize: "1.5rem",
			cursor: "pointer",
		},
	};

	export default {
		props: {
			isOpen: VueTypes.bool.def(false),
		},
		components: {
			WindowWrapper: StyleFactory(windowStyle),
		},
		data(){
			return {
				width: 300,
				// width: 560,
				// height: 315,
				height: 168,
				id: "Sz5aa7SdA24",
				title: "Mushroom Paradise - Felxprod",
				windowStyle,
			};
		},
		computed: {
			url(){
				return `https://www.youtube-nocookie.com/embed/${this.id}?autoplay=1`;
			},
			windowProps(){
				return {
					positionHint: "10 / 10",
					title: this.title,
					isOpen: this.isOpen,
					closeButton: true,
					padding: 0,
					overflow: "hidden",
					width: this.width,
					height: this.height - 15,
				};
			},
		},
		methods: {
			open(){
				this.$emit("open");
			},
			close(){
				this.$emit("close");
			},
		},
	}
</script>

<style lang="scss">
	@import "~@/scss/settings.scss";

	.floating {
		z-index: 14;
	}
</style>