<template>
	<a-row type="flex" justify="center" align="middle" :gutter="[16, 16]">
		<a-col :xs="10" :lg="4" class="intro__avatar">
			<a-avatar src="/img/ludwig.png" alt="photo" :size="128"/>
		</a-col>

		<a-col :xs="11" :lg="8">
			<a-card :bordered="false" title="Ludwig GUERIN, Nantes">
				Passionné du monde du web, j'aime mettre à profit les dernières
				technologies afin de mettre en place des applications uniques
				et robustes.<br/>
				<br/>
				3 qualités&nbsp;:
				<a-collapse :defaultActiveKey="1">
					<a-collapse-panel :key="1" header="J'ai une grande capacité d'adaptation">
						Bien que je sois plus efficace avec mon envionnement de
						prédilection, j'ai toujours été poussé à faire des choses
						à l'encontre de mon intuition, de mes habitudes ou avec
						un environnement dégradé.<br/>
						<br/>
						Cela s'est mis spécialement en valeur lors de mes études
						où pour certaines évaluations ou projets, les moyens
						mis à ma disposition sont bien moins confortables mais
						n'ont pas été un frein à leur réalisation.<br/>
						<br/>
						De plus, lorsqu'il s'agit d'appréhender de nouvelles
						situations, je suis rapide à établir des correspondances
						avec des concepts et méthodologies transposables déjà
						connus.
					</a-collapse-panel>

					<a-collapse-panel :key="2" header="Je suis un catalyste du progrès technique">
						Étant passionné d'informatique et restant toujours à
						l'affut des nouvelles technologies, j'aime mettre à
						profit mes connaissances pour améliorer l'intégralité
						du domaine pour le pousser à toujours plus progresser.<br/>
						<br/>
						Cela est mis en évidence notamment par les bibliothèques
						Open Source que je développe, à la fois pour régler mes
						propres problèmes récurrents mais également pour permettre
						à tous d'en profiter.<br/>
						On peut également noter que je suis actif sur
						<ExternalLink href="https://stackoverflow.com/users/7316365/vivick" type="primary">
							StackOverflow
						</ExternalLink>
						et ce principalement pour répondre aux questions.
					</a-collapse-panel>

					<a-collapse-panel :key="3" header="J'ai une bonne gestion de la pression">
						Que ce soit lors de mes divers stages ou lors de mes études,
						beaucoup de situations que l'on pourrait qualifier de
						stressantes ou critiques se sont présentées à moi.
						J'ai abordée chacune avec sang froid et sans jamais
						ressentir une quelconque forme de pression.<br/>
						<br/>
						Un bon exemple serait, suite à un malentendu sur mon
						emploi du temps des tâches à réaliser, la nécessité d'intégrer
						une Landing Page ainsi que le mail associé en une seule journée.
						J'ai pu terminer cette tâche avec sérénité et confiance, et ce,
						dans le temps imparti.
					</a-collapse-panel>
				</a-collapse>
				<br/>
				3 défauts&nbsp;:
				<a-collapse :defaultActiveKey="1">
					<a-collapse-panel :key="1" header="Je suis paresseux">
						Je réduis à un minimum la quantité d'effort à produire,
						me poussant ainsi à trouver les solutions les plus simples
						et efficaces à mes problèmes.<br/>
						<br/>
						Cela peut se voir notamment dans les choix de design de
						mes bibliothèques Open Source, étant le plus souvent les
						plus directs, simples et permettant une grande expressivité
						tout en maximisant le contrôle.<br/>
						<br/>
						Cela peut également se voir au fait que je réponds dès à
						présent à des questions d'entretien.
					</a-collapse-panel>

					<a-collapse-panel :key="2" header="Je suis timide">
						Je ne suis pas très à l'aise en présence d'autres personnes.
						Cela me pousse donc à réduire mes communications au strict
						minimum requis dans le contexte, ainsi qu'à maximiser
						leur efficacité. Jusqu'à présent cela n'a jamais été
						problématique pour les tâches nécessitant du travail
						en équipe.
					</a-collapse-panel>

					<a-collapse-panel :key="3" header="Je manque de tact">
						En conséquence certains de mes propos paraissent plus
						durs qu'ils me paraissaient être, plus arrogants qu'ils
						ne le sont et pouvant induire une mauvaise interprétation
						de ma franchise.
					</a-collapse-panel>
				</a-collapse>
			</a-card>
		</a-col>
	</a-row>
</template>

<script>
	import ExternalLink from "@/components/ExternalLink"

	export default {
		components: {
			ExternalLink,
		},
	}
</script>

<style lang="scss" scoped>
	.intro{
		&__avatar{
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
