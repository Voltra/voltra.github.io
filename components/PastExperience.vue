<i18n lang="yaml">
fr:
  abilitiesLabel: Compétences mobilisées&nbsp;&colon;

en:
  abilitiesLabel: Abilities put in practice&colon;
</i18n>

<template>
	<ExternalLink :href="experience.company.url">
		<a-card class="experience" hoverable :title="experience.title">
			<p class="experience__extra" slot="extra">
				{{ experience.timeSpan }}
				<img class="experience__logo" :src="experience.company.logo" :alt="experience.company.name"/>
			</p>

			<h2>
				{{ experience.title }}
			</h2>
			<p v-html="experience.description"></p>
			<template v-if="experience.interests.length">
				<br/>
				<p v-html="$t('abilitiesLabel')"/>
				<ul>
					<li v-for="interest in experience.interests" :key="interest">
						{{ interest }}
					</li>
				</ul>
			</template>

			<template #actions>
				<a-button type="primary">
					{{ experience.company.name }}
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
			experience: VueTypes.shape({
				timeSpan: VueTypes.string.isRequired,
				title: VueTypes.string.isRequired,
				description: VueTypes.string.def(""),
				company: VueTypes.shape({
					name: VueTypes.string.isRequired,
					url: VueTypes.string.isRequired,
					logo: VueTypes.string.isRequired,
				}).loose,
				interests: VueTypes.arrayOf(VueTypes.string).def([]),
			}).loose,
		},
	}
</script>

<style lang="scss">
	.experience{
		.ant-card-extra{
			padding: 0;
		}

		&__extra{
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&__logo{
			width: auto;
			height: auto;
			max-width: 6em;
			max-height: 4em;
			margin-top: 1em;
			margin-left: 1em;
		}
	}
</style>
