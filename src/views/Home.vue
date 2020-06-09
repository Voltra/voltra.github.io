<template>
	<!--TODO: Fix spacing issues w/ header & footer -->
	<a-card title="Qui suis-je ?" class="wrapper">
		<a-avatar slot="extra" class="logo" src="/img/voltra.png" alt="Logo" size="large"/>

		<a-row type="flex" justify="center" align="middle">
			<a-col :xs="8" :lg="4" style="text-align: center">
				<a-avatar src="/img/ludwig.png" alt="Photo" :size="128"/>
			</a-col>

			<a-col :xs="10" :lg="8" style="text-align: justify">
				Je m'appelle Ludwig GUERIN et je suis passionné d'informatique
				depuis l'âge de 15 ans. Je suis autodidacte en programmation et ingénieur
				en informatique de formation. Bien que développeur polyvalent,
				je me spécialise dans le monde du web et plus précisemment en intégration web.<br/>
				<br/>
				Ma vie est dirigée par les diverses passions qui m'animent, que
				ce soit :
				<ul>
					<li>La programmation (notamment le développement d'outils Open Source)</li>
					<li>La musique (je suis pianiste depuis l'âge de 7 ans)</li>
					<li>Les jeux vidéo (pour la stimulation mentale continue)</li>
					<li>Les comics</li>
				</ul>
				J'utilise également le pseudonyme de développeur <em>Voltra the dev</em>,
				ou plus simplement <em>Voltra</em>, identifiable au logo bleu avec un L blanc.<br/>
				<br/>
				<a-row type="flex" justify="center" align="middle">
					<a-col class="btn" :xs="12" :md="8" :lg="6">
						<a-button type="secondary">
							<router-link :to="{name: 'Projects'}">
								Voir mes projets personnels
							</router-link>
						</a-button>
					</a-col>

					<a-col class="btn" :xs="12" :md="8" :lg="6">
						<a-button type="primary">
							<router-link :to="{name: 'Cv'}">
								Voir mon CV en ligne
							</router-link>
						</a-button>
					</a-col>
				</a-row>
			</a-col>
		</a-row>
	</a-card>
</template>

<script>
	import { makeMeta } from "@/plugins/meta"	

	const placement = "bottomRight";
	const title = "Accueil";
	const description = "Je m'appelle Ludwig GUERIN et je suis un développeur front-end.";

	export default {
		metaInfo: makeMeta({
			title,
			description,
			tags: "ludwig,guerin,développeur,programmation,web,intégration,passion",
		}),
	}
</script>

<style lang="scss" scoped>
	@import "~@/scss/settings";

	.btn{
		& > *{
			margin: .5em auto;
		}

		width: auto;

		@include mq($from: md){
			& + &{
				margin-left: 1em;
			}
		}
	}
</style>
