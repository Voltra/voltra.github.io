<template>
	<ExternalLink :href="scholarship.school.url">
		<a-card hoverable :title="scholarship.title">
			<p slot="extra">
				{{ yearText }}
			</p>

			<h2>
				{{ scholarship.title }}
			</h2>

			<p v-html="scholarship.description"></p>
			<template v-if="scholarship.interests.length">
				<br/>
				<p>Matières principales&nbsp;:</p>
				<ul>
					<li v-for="interest in scholarship.interests" :key="interest">
						{{ interest }}
					</li>
				</ul>
			</template>

			<template #actions>
				<a-button type="primary">
					{{ scholarship.school.name }}
				</a-button>
			</template>


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
			scholarship: VueTypes.shape({
				year: VueTypes.integer.def(2020),
				anticipated: VueTypes.bool.def(false),
				title: VueTypes.string.isRequired,
				description: VueTypes.string.def(""),
				school: VueTypes.shape({
					name: VueTypes.string.isRequired,
					url: VueTypes.string.isRequired,
				}).loose,
				interests: VueTypes.arrayOf(VueTypes.string).def([]),
			}).loose,
		},
		computed: {
			yearText(){
				const year = `${this.scholarship.year}`;

				return this.scholarship.anticipated
					? `${year} (anticipé)`
					: year;
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "~@/scss/settings";

	.scholarship{
		display: block;
		margin-left: auto;
		margin-right: auto;

		@include mq($from: lg){
			width: 60%;
		}
	}
</style>
