<i18n lang="yaml">
fr:
  title: Qui suis-je ?
  intro: <a href="https://prnt.sc/u2n5-HcG_yds" tabindex="0" target="_blank">
    Je m'appelle Ludwig GUERIN, et je suis passionné d'informatique depuis l'âge de 15 ans.
    </a>
    Je suis autodidacte en programmation et
    ingénieur en informatique de formation. Bien que développeur
    polyvalent, je me spécialise dans le monde du web et plus
    précisemment en intégration web.
    <br/>
    <br/>
    Ma vie est dirigée par les diverses passions qui m'animent, que
    ce soit&nbsp;&colon;
    <ul>
    <li>
    La programmation (notamment le développement d'outils
    Open Source)
    </li>
    <li>La musique (je suis pianiste depuis l'âge de 7 ans)</li>
    <li>
    Les jeux vidéo (pour la stimulation mentale continue)
    </li>
    <li>Les comics</li>
    </ul>
    J'utilise également le pseudonyme de développeur
    <em>Voltra the dev</em>,
    ou plus simplement
    <em>Voltra</em>,
    identifiable au logo bleu marqué d'un L blanc.
  projectsCta: Voir mes projets
  cvCta: Voir mon CV en ligne
  seo:
    title: Accueil
    description: Je m'appelle Ludwig GUERIN et je suis un développeur front-end.
    keywords: ludwig,guerin,développeur,programmation,web,intégration,passion

en:
  title: Who am I?
  intro: <a href="https://prnt.sc/u2n5-HcG_yds" tabindex="0" target="_blank">
    My name is Ludwig GUERIN, and I've been passionate about Computer Science since I was 15 years old.
    </a>
    I'm a self-taught programmer and and graduated as an Engineer in Computer Science. Although I am polyvalent,
    I strongly prefer working as a web developer, especially front-end.
    <br/>
    <br/>
    I'm driven by passions that burn bright, such as&colon;
    <ul>
    <li>Programming (especially Open Source tools)</li>
    <li>Music (I've been playing the piano since I was 7 years old)</li>
    <li>Video Games (for constant mental stimulation)</li>
    <li>Comics</li>
    </ul>
    I usually go by the nickname <em>Voltra the dev</em>, or <em>Voltra</em> for short, easily identifiable
    via the blue logo with a white L.
  projectsCta: My projects
  cvCta: My online CV
  seo:
    title: Home
    description: My name is Ludwig GUERIN and I'm a front-end developer.
    keywords: ludwig,guerin,developer,web,front-end,passion
</i18n>

<template>
	<a-card :title="$t('title')" class="wrapper">
		<template #extra>
			<a-avatar
				class="logo"
				src="/img/voltra.png"
				alt="Logo"
				size="large"
			/>
		</template>

		<a-row type="flex" justify="center" align="middle">
			<a-col :xs="8" :lg="4" style="text-align: center">
				<a-avatar src="/img/ludwig.jpg" alt="Photo" :size="128"/>
			</a-col>

			<a-col :xs="12" :lg="8" style="text-align: justify">
				<div v-html="$t('intro')" />
				<br/>
				<br/>
				<a-row type="flex" justify="center" align="middle">
					<a-col class="btn" :xs="12" :md="8" :lg="6">
						<a-button type="secondary">
							<router-link :to="$route_('projets')">
								{{ $t('projectsCta') }}
							</router-link>
						</a-button>
					</a-col>

					<a-col class="btn" :xs="12" :md="8" :lg="6">
						<a-button type="primary">
							<router-link :to="$route_('cv')">
								{{ $t('cvCta') }}
							</router-link>
						</a-button>
					</a-col>
				</a-row>
			</a-col>
		</a-row>
	</a-card>
</template>

<script>
	import { pageMixin } from "~/js/mixins/page";

	export default {
		mixins: [pageMixin],
	};
</script>

<style lang="scss" scoped>
	@import "~@/scss/settings";

	.btn {
		& > * {
			margin: 0.5em auto;
		}

		width: auto;

		@include mq($from: md) {
			& + & {
				margin-left: 1em;
			}
		}
	}
</style>
