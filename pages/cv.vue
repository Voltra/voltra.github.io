<i18n lang="yaml">
fr:
  seo:
    title: CV en ligne
    description: Curriculum Vitae en ligne, complémenté par le reste du site.
    keywords: cv,curriculum,vitae,parcours,formation,expérience
  tabs:
    intro: Introduction
    studies: Formation
    pastExperiences: Expériences professionnelles
    skills: Compétences
    hobbies: Centres d'intérêts

en:
  seo:
    title: Online Résumé
    description: Online résumé, complemented by the rest of the website.
    keywords: résumé,resume,studies,experiences,skills
  tabs:
    intro: Introduction
    studies: Studies
    pastExperiences: Past experiences
    skills: Skills
    hobbies: Hobbies
</i18n>

<template>
	<a-tabs
		class="card-container"
		type="card"
		defaultActiveKey="intro"
		:tabBarGutter="8">
		<a-tab-pane key="intro" :tab="$t('tabs.intro')">
			<CvIntroduction/>
		</a-tab-pane>

		<a-tab-pane key="studies" :tab="$t('tabs.studies')">
			<Scholarships/>
		</a-tab-pane>

		<a-tab-pane key="pastExperiences" :tab="$t('tabs.pastExperiences')">
			<PastExperiences/>
		</a-tab-pane>

		<a-tab-pane key="skills" :tab="$t('tabs.skills')">
			<Skills/>
		</a-tab-pane>

		<a-tab-pane key="hobbies" :tab="$t('tabs.hobbies')">
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
	import { pageMixin } from "~/js/mixins/page";

	export default {
		mixins: [pageMixin],
		nuxtI18n: {
			paths: {
				en: "/resume",
			},
		},
		components: {
			CvIntroduction,
			Scholarships,
			PastExperiences,
			Skills,
			Interests,
		},
	}
</script>
