<i18n lang="yaml">
fr:
  title: Mentions légales
  headers:
    gdpr: Protection des données
    hosting: Hébergement
    intellectualProperty: Propriété Intellectuelle
  content:
    gdpr:
      asExpectedBy: Comme prévu par le
      cnilLink: https://www.cnil.fr/fr/reglement-europeen-protection-donnees
      acronym: Règlement Général sur la Protection des Données
      dataDescription: |
          l'intégralité des données personnelles utilisées sont recensées
          et modifiables à la guise de l'utilisateur (que ce soit via le
          bandeau lors de la visite initiale, ou par le bouton de cookies
          en bas de page). Ces données sont conservées pour la durée maximale
          prévue par la loi.
      consent: |
          De plus, le consentement à l'utilisation de ces données est valide
          pour une durée maximale de 13 mois, après laquelle il sera redemandé.
      analysis: |
          Aucune donnée n'est collectée à des fins d'analyses et sont donc
          uniquement présentes sur le matériel de l'utilisateur. Ainsi,
          il est possible de supprimer ces données à tout moment et ce à
          la guise de l'utilisateur.
    hosting:
      hostedBy: Ce site internet est hébergé par Github par le biais du service
      ownerStatusLabel: Statut du propriétaire&nbsp;&colon;
      ownerStatus: Personne physique
      emailLabel: Adresse de courrier électronique&nbsp;&colon;
      creatorLabel: Créateur du site&nbsp;&colon;
      webmasterLabel: Webmestre&nbsp;&colon;
      publisherLabel: Responsable de la publication&nbsp;&colon;
      hostingLabel: Hébergeur&nbsp;&colon;
      contactHostingLabel: Contacter l'hébergeur&nbsp;&colon;
    intellectualProperty:
      toEachTheirOwn: |
        Les contenus présentés sur ce site sont propriétés intellectuelles
        de leurs propriétaires respectifs. Ils ne sont pas à considérer comme
        attribués au propriétaire du site.
      openGraph: Les designs utilisés pour la bannière Open Graph sont la propriété de
  backHome: Retourner à l'accueil

en:
  title: Legal notice
  headers:
    gdpr: Data Management
    hosting: Hosting
    intellectualProperty: Intellectual Property
  content:
    gdpr:
      asExpectedBy: As expected by the
      cnilLink: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679
      acronym: General Data Protection Regulation
      dataDescription: |
          the entirety of the user's personal data (in use on this website) are listed and modifiable to the user's discretion
          (whether it be via the banner upon initial visit, or via the cookies' button at the bottom of the page).
          Personal data is only kept for the maximum duration allowed by the GDPR.
      consent: |
          Furthermore, consent to the use of said data is valid for a maximum duration of 13 months,
          after which the user will be prompted for consent again.
      analysis: |
          No data is collected for analysis purposes, and thus all personal data are stored on the user's machine.
          Therefore, said data can be accessed, modified or deleted at any time at the user's discretion.
    hosting:
      hostedBy: This website is hosted using
      ownerStatusLabel: Owner status&colon;
      ownerStatus: Physical person
      emailLabel: Email address&colon;
      creatorLabel: Website creator&colon;
      webmasterLabel: Webmaster&colon;
      publisherLabel: Head Publisher&colon;
      hostingLabel: Hosting provider&colon;
      contactHostingLabel: Contact hosting provider&colon;
    intellectualProperty:
      toEachTheirOwn: |
        Contents shown on this website are the intellectual properties of their respective owners.
        They are not to be considered as attributed to the owner of this website.
      openGraph: Designs used for the Open Graph banner are the property of
  backHome: Back to homepage
</i18n>

<template>
	<a-card :title="$t('title')">
		<template #extra>
			<a-icon type="audit" size="large"/>
		</template>

		<a-collapse :defaultActiveKey="1">
			<a-collapse-panel :key="1" :header="$t('headers.gdpr')">
				{{ $t('content.gdpr.asExpectedBy') }},
				<ExternalLink :href="$t('content.gdpr.cnilLink')">
					{{ $t('content.gdpr.acronym') }}
				</ExternalLink>
				{{ $t('content.gdpr.dataDescription') }}<br/>
				<br/>
				{{ $t('content.gdpr.consent') }}<br/>
				<br/>
				{{ $t('content.gdpr.analysis') }}
			</a-collapse-panel>

			<a-collapse-panel :key="2" :header="$t('headers.hosting')">
				{{ $t('content.hosting.hostedBy') }}
				<ExternalLink href="https://pages.github.com/">
					Github Pages.
				</ExternalLink>

				<ul>
					<li>
						<strong v-html="$t('content.hosting.ownerStatusLabel')"/>
						{{ $t('content.hosting.ownerStatus') }}
					</li>
					<li>
						<strong v-html="$t('content.hosting.emailLabel')"/>
						<ExternalLink href="#" @click="onMailClick">
							{{ mail }}
						</ExternalLink>
					</li>
					<li>
						<strong v-html="$t('content.hosting.creatorLabel')"/>
						Ludwig GUERIN
					</li>
					<li>
						<strong v-html="$t('content.hosting.publisherLabel')"/>
						Ludwig GUERIN
					</li>
					<li>
						<strong v-html="$t('content.hosting.webmasterLabel')"/>
						Ludwig GUERIN
					</li>
					<li>
						<strong v-html="$t('content.hosting.hostingLabel')"/>
						Github
					</li>
					<li>
						<strong v-html="$t('content.hosting.contactHostingLabel')"/>
						<ExternalLink :href="`mailto:${githubMail}`">
							{{ githubMail }}
						</ExternalLink>
					</li>
				</ul>
			</a-collapse-panel>

			<a-collapse-panel :key="3" :header="$t('headers.intellectualProperty')">
				{{ $t('content.intellectualProperty.toEachTheirOwn') }}<br/>
				<br/>
				{{ $t('content.intellectualProperty.openGraph') }}
				<ExternalLink href="https://www.freepik.com/pikisuperstar">
					Pikisuperstar.
				</ExternalLink>
			</a-collapse-panel>
		</a-collapse>
		<br/>
		<a-row type="flex" justify="center" align="middle" :gutter="[16,16]">
			<a-col>
				<a-button type="primary">
					<NuxtLink :to="$route_('index')">
						{{ $t('backHome') }}
					</NuxtLink>
				</a-button>
			</a-col>
		</a-row>
	</a-card>
</template>

<script>
	import { makeMeta } from "~/js/utils";

	const arobase = "[at}";

	export default {
		nuxtI18n: {
			paths: {
				en: "/legal",
			}
		},
		head: makeMeta({
			title: "Mentions légales",
			description: "Mentions légales et informations relatives à la protection des données.",
		}),
		data(){
			return {
				mail: `ludwig.guerin.98${arobase}gmx.fr`,
				githubMail: "privacy@github.com",
			};
		},
		methods: {
			onMailClick(e) {
				e.preventDefault();

				let anchor = document.createElement("a");
				anchor.href = `mailto:${this.mail.replace(arobase, "@")}`;
				anchor.target = "_blank";
				anchor.click();
				anchor = undefined;
			},
		},
	}
</script>
