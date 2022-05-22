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
	import { makeMeta } from "~/js/utils";
	import Skills from "~/components/Skills";
	import PastExperiences from "~/components/PastExperiences";
	import Scholarships from "~/components/Scholarships";
	import CvIntroduction from "~/components/CvIntroduction";
	import Interests from "~/components/Interests";

	export default {
		head: makeMeta({
			title: "CV en ligne",
			description: "Curriculum Vitae en ligne, complémenté par le reste du site.",
			tags: [
				"cv",
				"curriculum",
				"vitae",
				"parcours",
				"formation",
				"expérience",
			],
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
