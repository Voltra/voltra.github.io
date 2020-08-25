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
						timeSpan: "Juillet 2020 - Août 2020",
						title: "Stage en développement web (Full Stack)",
						description: `Dans le cadre de la seconde année du
						cycle ingénieur à Polytech, la plupart des élèves effectuent
						un stage à l'étranger pour remplir les obligations de la formation d'ingénieur.
						Suite à la pandémie de Covid 19, les obligations de mobilité à l'étranger ont dû
						être supprimées. Pour bénéficier de plus d'expérience professionnelle,
						j'ai pu à nouveau rejoindre l'équipe technique de SWPL et leur prêter main forte.`,
						company: Companies.SWPL,
						interests: [
							"Compétences connexes diverses",
							"Connaissance de l'écosystème du monde du web",
							"Connaissance des technologies utilisées",
							"Organisation",
							"Capacité d'adaptation",
							"Travail en équipe",
							"Autonomie",
						],
					},
					{
						timeSpan: "Novembre 2019 - Mai 2020",
						title: "Projet transversal : mon-taraud.com",
						description: `Dans le cadre de la seconde année du
						cycle ingénieur à Polytech, les élèves prennent part
						à un projet annuel en lien avec un entreprise pour
						répondre à un besoin réel.
						Au sein d'une équipe de 3 étudiants, j'ai occupé le
						rôle de directeur technique. J'ai pu notamment définir
						un état de l'art des technologies pertinentes à la
						réalisation du projet&nbsp;&nbsp; État de l'art qui a
						servi notamment à déterminer les technologies à utiliser
						et ce en prenant en compte les affinités des membres de
						l'équipe pour cesdites technologies.`,
						company: Companies.LMDT,
						interests: [
							"Conception de Systèmes d'Information",
							"Méthodologie Agile",
							"Connaissance de l'écosystème du monde du web",
							"Communication au travail",
						],
					},
					{
						timeSpan: "Juin 2019 - Juillet 2019",
						title: "Stage en développement web (Full Stack)",
						description: `Stage de fin de première année de cycle
						ingénieur à Polytech. Au sein du pôle Digital, j'ai pu
						assister au suivi des interactions utilisateurs via
						Google Tag Manager et l'émission d'évènements personnalisé.
						J'ai également pu réaliser la migration de sites utilisant
						une version de l'API LinkedIn ayant été dépréciée en vue
						d'un arrêt de fonctionnement futur.<br/>
						<br/>
						J'ai de surcroît pu continuer à me familiariser avec
						les systèmes de gestion de contenu Drupal et Wordpress
						tout en utilisant pour la première fois l'outil Prestashop.
						J'ai également pu mettre en place une landing page qui a
						servi de Proof of Concept pour l'utilisation de Vue pour
						les futurs sites web de l'agence.`,
						company: Companies.SWPL,
						interests: [
							"Connaissance de l'écosystème du monde du web",
							"Connaissance des technologies utilisées",
							"Organisation",
							"Capacité d'adaptation",
							"Travail en équipe",
							"Autonomie",
						],
					},
					{
						timeSpan: "Avril 2018 - Juin 2018",
						title: "Stage en intégration web",
						description: `Stage de fin de formation en IUT et également
						premier contact avec le monde de l'entreprise. J'ai pu
						découvrir en partie le monde de l'entreprise et des
						pratiques en terme de développement et intégration web.
						J'ai également pu élargir l'horizon de mes connaissances
						avec diverses nouvelles technologies telles que les systèmes
						de gestion de contenu ou MJML.`,
						company: Companies.SWPL,
						interests: [
							"Connaissance de l'écosystème du monde du web",
							"Organisation",
							"Capacité d'adaptation",
							"Travail en équipe",
							"Autonomie",
						],
					},
				],
			};
		}
	}
</script>


