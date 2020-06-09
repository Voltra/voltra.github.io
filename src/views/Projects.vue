<template>
	<a-row type="flex" align="middle" justify="center" :gutter="16">
		<a-col
			v-for="project in pageProjects"
			:key="project.title"
			:xs="11"
			:md="6">
			<GithubProject v-if="project.type === 'github'" :project="project"/>
			<WebsiteProject v-else-if="project.type === 'website'" :project="project"/>
		</a-col>

		<a-col :span="11" v-if="projects.length > pageSize">
			<a-pagination
				v-model="page"
				:total="projects.length"
				:pageSize="pageSize"/>
		</a-col>
	</a-row>
</template>

<script>
	import GithubProject from "@/components/GithubProject"
	import WebsiteProject from "@/components/WebsiteProject"
	import { makeMeta } from "@/plugins/meta"	

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
						cover: "/img/og.png",
						repo: "https://github.com/Voltra/voltra.github.io",
						title: "Site officiel",
						description: `Site statique de Ludwig GUERIN, aka "Voltra the dev".
						Progressive Web App réalisé via l'écosystème Vue.`,
					},
					{
						type: "website",
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
				],
			};
		},
	}
</script>
