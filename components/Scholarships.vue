<template>
	<a-list :dataSource="scholarships" :grid="grid" :pagination="pagination">
		<template #renderItem="scholarship">
			<a-list-item>
				<Scholarship :scholarship="scholarship"/>
			</a-list-item>
		</template>
	</a-list>
</template>

<script>
	import Scholarship from "@/components/Scholarship"
	import { withUtm } from "@/js/utils"

	export default {
		components: {
			Scholarship,
		},
		data(){
			return {
				grid: {
					gutter: 16,
					column: 1,
				},
				pagination: {
					hideOnSinglePage: true,
					pageSize: 3,
				},
				scholarships: [
					{
						year: 2021,
						title: "Formation d'Ingénieur en Informatique",
						description: `Cycle de 3 ans dès BAC+2 aboutissant
						au titre d'ingénieur.`,
						school: {
							name: "Polytech Nantes",
							url: "https://polytech.univ-nantes.fr",
						},
						interests: [
							"Programmation (logiciel)",
							"Multimédia",
							"Bases de données",
							"Réseaux",
							"Anglais",
							"Gestion de projets (notions)",
							"Économie (notions)",
							"Communication (notions)",
						],
					},
					{
						year: 2018,
						title: "DUT Informatique",
						description: `Formation de 2 ans aboutissant au titre
						analyste développeur.`,
						school: {
							name: "IUT de Nantes",
							url: "https://iutnantes.univ-nantes.fr",
						},
						interests: [
							"Algorithmique",
							"Programmation (logiciel, web, mobile)",
							"Conception",
							"Bases de données",
							"Réseaux",
							"Anglais",
							"Économie (notions)",
							"Gestion (notions)",
							"Communication (notions)",
						],
					},
				],
			};
		},
	}
</script>
