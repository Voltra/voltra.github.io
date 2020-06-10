<template>
	<a-list :dataSource="experiences" :grid="grid" :pagination="pagination">
		<a-list-item slot="renderItem" slot-scope="experience">
			<PastExperience :experience="experience"/>
		</a-list-item>
	</a-list>
</template>

<script>
	import PastExperience from "@/components/PastExperience"

	const Companies = {
		SWPL: {
			name: "SWPL",
			url: "https://swpl.fr",
			logo: "https://www.swpl.fr/banner.jpg",
		},
		LMDT: {
			name: "La Maison Du Taraud",
			url: "https://lamaisondutaraud.com",
			logo: "https://mon-taraud.com/assets/img/lmdt.png",
		},
	};

	export default {
		components: {
			PastExperience,
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
				experiences: [
					{
						timeSpan: "Novembre 2019 - Mai 2020",
						title: "Projet transversal : mon-taraud.com",
						description: `Dans le cadre de la seconde année du
						cycle ingénieur à Polytech, les élèves prennent part
						à un projet annuel en lien avec un entreprise pour
						répondre à un besoin réel.<br/>
						Au sein d'une équipe de 3 étudiants, j'ai occupé le
						rôle de directeur technique.`,
						company: Companies.LMDT,
						interests: [
							"Conception de Systèmes d'Information",
							"Méthodologie Agile",
						],
					},
					{
						timeSpan: "Juin 2019 - Juillet 2019",
						title: "Stage en développement web (Full Stack)",
						description: `Stage de fin de première année de cycle
						ingénieur à Polytech.`,
						company: Companies.SWPL,
						interests: [],
					},
					{
						timeSpan: "Avril 2018 - Juin 2018",
						title: "Stage en intégration web",
						description: `Stage de fin de formation en IUT et également
						premier contact avec le monde de l'entreprise.`,
						company: Companies.SWPL,
						interests: [],
					},
				],
			};
		}
	}
</script>


