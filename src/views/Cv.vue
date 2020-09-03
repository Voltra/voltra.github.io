<template>
	<a-tabs
		class="card-container"
		type="card"
		:defaultActiveKey="1"
		:tabBarGutter="8">	
		<a-tab-pane :key="1" tab="Introduction">
			<CvIntroduction/>
		</a-tab-pane>

		<a-tab-pane :key="2" tab="Formation">
			<Scholarships/>
		</a-tab-pane>

		<a-tab-pane :key="3" tab="Expériences professionnelles">
			<PastExperiences/>
		</a-tab-pane>

		<a-tab-pane :key="4" tab="Compétences">
			<Skills/>
		</a-tab-pane>

		<a-tab-pane :key="5" tab="Centres d'intérêts">
			<Interests/>
		</a-tab-pane>
	</a-tabs>
</template>

<script>
	import CvIntroduction from "@/components/CvIntroduction"
	import Scholarships from "@/components/Scholarships"
	import PastExperiences from "@/components/PastExperiences"
	import Skills from "@/components/Skills"
	import Interests from "@/components/Interests"
	import { makeMeta } from "@/plugins/metaHelpers"

	const placement = "bottomRight";
	const title = "CV en ligne";
	const description = "Curriculum Vitae en ligne, complémenté par le reste du site.";

	export default {
		metaInfo: makeMeta({
			title,
			description,
			tags: "curriculum,vitae,parcours,formation,expérience",
		}),
		components: {
			CvIntroduction,
			Scholarships,
			PastExperiences,
			Skills,
			Interests,
		},
	}
</script>

<style lang="scss">
	@import "~@/scss/settings";

	.card-container .ant-tabs-content /*> .ant-tabs-tabpane*/ {
		background: #fff;
		padding: 16px;
	}
	
	.card-container .ant-tabs-bar {
		border-color: #fff;
		margin-bottom: 0;
	}

	.card-container .ant-tabs-bar .ant-tabs-tab {
		border-color: transparent;
		background: transparent;
		border: none !important;

		/*margin-right: 0.5em !important;

		&:last-child{
			margin-right: 0 !important;
		}*/
	}

	.card-container .ant-tabs-bar .ant-tabs-tab-active {
		border-color: #fff;
		background: #fff;
	}
</style>
