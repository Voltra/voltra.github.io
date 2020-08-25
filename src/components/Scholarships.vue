<template>
	<a-list :dataSource="scholarships" :grid="grid" :pagination="pagination">
		<a-list-item slot="renderItem" slot-scope="scholarship">
			<Scholarship :scholarship="scholarship"/>
		</a-list-item>
	</a-list>
</template>

<script>
	import Scholarship from "@/components/Scholarship"
	import { withUtm } from "../utils"

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
						anticipated: true,
						title: "Formation d'Ingénieur en Informatique",
						description: `Cycle de 3 ans dès BAC+2 aboutissant
						au titre d'ingénieur.`,
						school: {
							name: "Polytech Nantes",
							url: "https://polytech.univ-nantes.fr",
						},
						interests: [
							"Gestion de projets",
							"Programmation (logiciel)",
							"Multimédia",
							"Bases de données",
							"Réseaux",
							"Anglais",
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
