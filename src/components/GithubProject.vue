<template>
	<ExternalLink :href="url">
		<a-card hoverable>
			<img
				slot="cover"
				class="project__cover"
				alt="Image de couverture"
				:src="coverUrl"/>

			<a-card-meta :title="project.title">
				<p style="text-align: justify;" slot="description" v-html="project.description">
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
				return `https://github.com/Voltra/${this.project.repo}`;
			},
			coverUrl(){
				if(typeof this.project.cover === "string")
					return this.project.cover.replace("{{ repo }}", this.url);

				return `/${process.env.VUE_APP_OG_IMAGE_URI}`;
			},
		},
	}
</script>

<style lang="scss" scoped>
	.project{
		&__cover{
			max-width: 100%;
			width: auto;
			height: auto;
			max-height: 200px;
			margin: 0 auto;
      	//object-fit: cover;
		}
	}
</style>
