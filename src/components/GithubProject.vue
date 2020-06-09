<template>
	<ExternalLink :href="url">
		<a-card hoverable>
			<img
				slot="cover"
				alt="Image de couvertue"
				:src="coverUrl"/>

			<a-card-meta :title="project.title">
				<p slot="description" v-html="project.description">
				</p>
			</a-card-meta>
		</a-card>
	</ExternalLink>
</template>

<script>
	import VueTypes from "vue-types"
	import ExternalLink from "@/components/ExternalLink"

	//TODO: Load data from github API

	export default {
		components: {
			ExternalLink,
		},
		props: {
			project: VueTypes.shape({
				cover: VueTypes.oneOfType([
					VueTypes.string,
					VueTypes.custom(x => x === null)
				]).def(null),
				type: VueTypes.custom(x => x === "github").isRequired,
				repo: VueTypes.string.isRequired,
				title: VueTypes.string.isRequired,
				description: VueTypes.string.isRequired,
			}).loose,
		},
		computed: {
			url(){
				return `https://github.com/Voltra/${this.repo}`;
			},
			coverUrl(){
				if(typeof this.cover === "string")
					return this.cover;

				return "/img/og.png";
			},
		},
	}
</script>
