<template>
	<ExternalLink :href="project.url">
		<a-card hoverable>
			<img
				slot="cover"
				class="project__cover"
				alt="Image de couverture"
				:src="coverUrl"/>

			<a-badge v-if="project.job" count="Au boulot"/>

			<a-card-meta :title="project.title">
				<p slot="description" v-html="project.description">
				</p>
			</a-card-meta>

			<a-row
				v-if="project.extras.length"
				:gutter="[16, 16]"
				slot="actions"
				type="flex"
				justify="center"
				align="middle">
				<a-col
					v-for="extra in project.extras"
	 				:key="extra.name">
					<a-button
   						type="primary">
						<ExternalLink :href="extra.url" type="secondary">
							{{ extra.name }}
						</ExternalLink>
					</a-button>
				</a-col>
			</a-row>
		</a-card>
	</ExternalLink>
</template>

<script>
	import VueTypes from "vue-types"
	import ExternalLink from "@/components/ExternalLink"

	const placement = "bottomRight";

	export default {
		components: {
			ExternalLink,
		},
		props: {
			project: VueTypes.shape({
				type: VueTypes.custom(x => x === "website").isRequired,
				url: VueTypes.string.isRequired,
				cover: VueTypes.oneOfType([
					VueTypes.string,
					VueTypes.custom(x => x === null),
				]).def(null),
				title: VueTypes.string.isRequired,
				description: VueTypes.string.isRequired,
				extras: VueTypes.arrayOf(VueTypes.shape({
					name: VueTypes.string.isRequired,
					url: VueTypes.string.isRequired,
				}).loose),
				job: VueTypes.bool.def(false),
			}).loose,
		},
		computed: {
			coverUrl(){
				if(this.project.cover === null)
					return "#";

				return this.project.cover.replace("{{ site }}", this.project.url);
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
