<template>
	<ExternalLink :href="project.url">
		<a-card hoverable>
			<img
				slot="project.cover"
				alt="Image de couverture"
				:src="meta.imgUrl"/>

			<a-card-meta :title="project.title"> 
				<p slot="description" v-html="project.description">
				</p>
			</a-card-meta>

			<a-row
				:gutter="16"
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

	export default {
		components: {
			ExternalLink,
		},
		props: {
			project: VueTypes.shape({
				type: VueTypes.custom(x => x === "website").isRequired,
				url: VueTypes.string.isRequired,
				title: VueTypes.string.isRequired,
				description: VueTypes.string.isRequired,
				extras: VueTypes.arrayOf(VueTypes.shape({
					name: VueTypes.string.isRequired,
					url: VueTypes.string.isRequired,
				}).loose),
			}).loose,
		},
		data(){
			//TODO: Load metadata from URL
			return {
				meta: {
					imgUrl: "#",
				},
			};
		},
	}
</script>
