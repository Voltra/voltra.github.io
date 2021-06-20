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
   				class="project">
					<keep-alive>
						<Flipped :flipId="project.title" :translate="true" :opacity="true" :scale="true">
							<GithubProject v-if="project.type === 'github'" :project="project"/>
							<WebsiteProject v-else-if="project.type === 'website'" :project="project"/>
						</Flipped>
					</keep-alive>
			</a-col>

			<a-col :span="12" v-if="projects.length > pageSize">
				<a-pagination
          			class="project__paginator"
					v-model="page"
					:total="projects.length"
					:pageSize="pageSize"/>
			</a-col>
		</a-row>
	</Flipper>
</template>

<script>
	import { Flipped, Flipper } from "vue-flip-toolkit"
	import GithubProject from "@/components/GithubProject"
	import WebsiteProject from "@/components/WebsiteProject"
	import { makeMeta } from "@/plugins/metaHelpers"

	const placement = "bottomRight";
	const title = "Mes Projets";
	const description = "Un aperçu des projets auxquels je participe.";

	export default {
		metaInfo: makeMeta({
			title,
			description,
			tags: "projets,sites,bibliothèques,librairies",
		}),
		components: {
			Flipped,
			Flipper,
			GithubProject,
			WebsiteProject,
		},
		computed: {
			pageProjects(){
				const { projects, page, pageSize } = this;
				return projects.slice((page - 1) * pageSize, page * pageSize);
			},
		},
		data(){
			return {
				page: 1,
				pageSize: 3,
				projects: [
					{
						type: "github",
						cover: `/${process.env.VUE_APP_OG_IMAGE_URI}`,
						repo: "voltra.github.io",
						title: "Site officiel",
						description: `Site statique de Ludwig GUERIN, aka <em>"Voltra the dev"</em>.
						Progressive Web App réalisé via l'écosystème Vue.
						Il utilise notamment des outils tel que Vue CLI, vue-router,
						vue-meta, SCSS et Ant Design pour accélérer le développement.`,
					},
					{
						type: "website",
						cover: "{{ site }}/assets/img/og/recherche.png",
						url: "https://mon-taraud.com",
						title: "Projet Transversal (mon-taraud.com)",
						description: `Site web utilitaire permettant de
						déterminer facilement les références produit d'un
						taraud à partir de ses dimensions. Réalisé dans le cadre
						de mes études à Polytech Nantes, sur toute une année.
						Le but du projet transversal étant de mettre les étudiants
						en situation réelle avec contact client, retours, etc&hellip;&nbsp;.
						Étant reponsable des choix techniques, le site a été réalisé
						en Vue et Adonis.`,
						extras: [
							{
								name: "La Maison Du Taraud",
								url: "https://lamaisondutaraud.com",
							},
							{
								name: "Polytech Nantes",
								url: "https://polytech.univ-nantes.fr",
							},
						],
					},
					{
						type: "github",
						repo: "jsonclient",
						cover: "{{ repo }}/raw/master/logo.png",
						title: "Client JSON ($json)",
						description: `Client HTTP spécialisé dans les communications
						JSON permettant d'échanger facilement des données avec
						une API REST par exemple. Il s'agit en réalité d'une petite
						surcouche pour l'API Fetch.`,
					},
					{
						type: "github",
						repo: "mvea",
						cover: "{{ repo }}/raw/master/res/interactions.png",
						title: "MVEA",
						description: `Patron d'architecture logicielle, variante de MVC,
						en cours de spécification. Il vise à augmenter la réutilisabilité
						des composants ainsi qu'à maximiser la séparation des responsabilités
						tout en intégrant et en spécifiant des pratiques récurrentes dans les
						applications MVC.`,
					},
					{
						type: "github",
						repo: "validatueur",
						cover: "{{ repo }}/raw/dev/res/validatueur.svg",
						title: "Validatueur",
						description: `Bibliothèque JavaScript d'aissainissement et de validation
						visant à être utilisable dans toute application, quelle que soit
						la complexité des formulaires. Destiné à pouvoir être utilisé
						à la fois pour la validation côté client (UX) et pour la
						validation côté serveur (sécurité).`,
					},
					{
						type: "github",
						repo: "gdpr-guard",
						cover: "{{ repo }}/raw/master/gdpr-guard.png",
						title: "GDPR Guard",
						description: `Bibliothèque de gestion de préférences
						RGPD permettant un listing précis ainsi qu'une logique conditionnelle
						en fonction des paramètres enregistrés par l'utilisateur.
						Le but étant de permettre une flexibilité d'utilisation aussi
						bien du point de vue utilisateur que du point de vue développeur.
						À noter qu'il existe divers outils permettant l'intégration de la
						bibliothèque avec d'autres technologies (e.g. frameworks front-end).`,
					},
					{
						type: "github",
						repo: "lightquery",
						cover: "{{ repo }}/raw/master/logo/logo.png",
						title: "Lightquery",
						description: `Mon premier projet Open Source, une alternative
						plus légère et plus moderne à jQuery.`,
					},
					{
						type: "github",
						repo: "lazy-collection",
						cover: "{{ repo }}/raw/master/res/lazy-collection.png",
						title: "Lazy collection",
						description: `Bibliothèque de manipulation de collections en PHP favorisant
						l'expressivité tout en gardant une complexité linéaire indépendamment
						du nombre d'opérations.`,
					},
				],
			};
		},
	}
</script>

<style lang="scss" scoped>
	.project{
		&__paginator{
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
