<i18n lang="yaml">
fr:
  seo:
    title: Mes Projets
    description: Un aperçu des projets auxquels j'ai pu participer.
    keywords: projets,sites,bibliothèques,librairies

en:
  seo:
    title: My Projects
    description: A selection of projects I've been a part of.
    keywords: projects,websites,libraries
</i18n>

<template>
	<Flipper :flipKey="page" spring="wobbly">
		<a-row type="flex" align="middle" justify="center" :gutter="[16, 16]">
			<a-col
				v-for="project in pageProjects"
				:key="project.title"
				:xs="11"
				:sm="8"
				:md="6"
				:lg="6"
				:xl="4"
				class="project"
			>
				<Flipped :flipId="project.title" :translate="true" :opacity="true" :scale="true">
					<keep-alive>
						<GithubProject v-if="project.type === 'github'" :project="project" />
						<WebsiteProject v-else-if="project.type === 'website'" :project="project" />
					</keep-alive>
				</Flipped>
			</a-col>

			<a-col :span="12" v-if="projects.length > pageSize">
				<a-pagination
					class="project__paginator"
					v-model="page"
					:total="projects.length"
					:pageSize="pageSize"
				/>
			</a-col>
		</a-row>
	</Flipper>
</template>

<script>
	import { Flipped, Flipper } from "vue-flip-toolkit"
	import GithubProject from "@/components/GithubProject"
	import WebsiteProject from "@/components/WebsiteProject"
	import { pageMixin } from "~/js/mixins/page";

	export default {
		mixins: [pageMixin],
		nuxtI18n: {
			paths: {
				en: "/projects",
			},
		},
		components: {
			Flipped,
			Flipper,
			GithubProject,
			WebsiteProject,
		},
		computed: {
			pageProjects() {
				const { projects, page, pageSize } = this;
				return projects.slice((page - 1) * pageSize, page * pageSize);
			},
		},
		data() {
			return {
				page: 1,
				pageSize: 3,
				projects: [
					{
						type: "github",
						cover: `/${process.env.NUXT_ENV_OG_IMAGE_URI}`,
						repo: "voltra.github.io",
						title: this.$t('projects.website.title'),
						description: this.$t('projects.website.description'),
					},

					//

					{
						type: "website",
						cover: "{{ site }}/og.jpg",
						url: "https://www.the-scientist-oath.com",
						title: this.$t('projects.scientistOath.title'),
						description: this.$t('projects.scientistOath.description'),
						extras: [],
					},
					{
						type: "website",
						cover: "{{ site }}/wp-content/uploads/2022/04/opengraph.jpeg",
						url: this.$t('projects.kiplin.url'),
						title: this.$t('projects.kiplin.title'),
						description: this.$t('projects.kiplin.description'),
						job: true,
						extras: [
							{
								name: "swimming pool",
								url: "https://www.swpl.fr",
							},
						],
					},
					{
						type: "website",
						cover: "{{ site }}/assets/img/og/recherche.png",
						url: "https://mon-taraud.com",
						title: this.$t('projects.monTaraud.title'),
						description: this.$t('projects.monTaraud.description'),
						extras: [
							{
								name: "La Maison Du Taraud",
								url: "https://lamaisondutaraud.com",
							},
							{
								name: "Polytech Nantes",
								url: this.$t('projects.monTaraud.urls.polytech'),
							},
						],
					},
					{
						type: "github",
						repo: "jsonclient",
						cover: "{{ repo }}/raw/master/logo.png",
						title: this.$t('projects.$json.title'),
						description: this.$t('projects.$json.description'),
					},
					{
						type: "github",
						repo: "mvea",
						cover: "{{ repo }}/raw/master/res/interactions.png",
						title: this.$t('projects.mvea.title'),
						description: this.$t('projects.mvea.description'),
					},
					{
						type: "github",
						repo: "validatueur",
						cover: "{{ repo }}/raw/dev/res/validatueur.svg",
						title: this.$t('projects.validatueur.title'),
						description: this.$t('projects.validatueur.description'),
					},
					{
						type: "github",
						repo: "gdpr-guard",
						cover: "{{ repo }}/raw/master/gdpr-guard.png",
						title: this.$t('projects.gdprGuard.title'),
						description: this.$t('projects.gdprGuard.description'),
					},
					{
						type: "github",
						repo: "lightquery",
						cover: "{{ repo }}/raw/master/logo/logo.png",
						title: this.$t('projects.gdprGuard.title'),
						description: this.$t('projects.gdprGuard.description'),
					},
					{
						type: "github",
						repo: "lazy-collection",
						cover: "{{ repo }}/raw/master/res/lazy-collection.png",
						title: this.$t('projects.lazyCollection.title'),
						description: this.$t('projects.lazyCollection.description'),
					},
				],
			};
		},
	}
</script>
