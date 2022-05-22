<template>
	<a-card title="Mentions légales">
		<a-icon slot="extra" type="audit" size="large"/>

		<a-collapse :defaultActiveKey="1">
			<a-collapse-panel :key="1" header="Protection des données">
				Comme prévu par le
				<ExternalLink href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees">
					Règlement Général sur la Protection des Données
				</ExternalLink>
				l'intégralité des données personnelles utilisées sont recensées
				et modifiables à la guise de l'utilisateur (que ce soit via le
				bandeau lors de la visite initiale, ou par le bouton de cookies
				en bas de page). Ces données sont conservées pour la durée maximale
				prévue par la loi.<br/>
				<br/>
				De plus, le consentement à l'utilisation de ces données est valide
				pour une durée maximale de 13 mois, après laquelle il sera redemandé.<br/>
				<br/>
				Aucune donnée n'est collectée à des fins d'analyses et sont donc
				uniquement présentes sur le matériel de l'utilisateur. Ainsi,
				il est possible de supprimer ces données à tout moment et ce à
				la guise de l'utilisateur.
			</a-collapse-panel>

			<a-collapse-panel :key="2" header="Hébergement">
				Ce site internet est hébergé par Github par le biais du service
				<ExternalLink href="https://pages.github.com/">
					Github Pages.
				</ExternalLink>

				<ul>
					<li>
						<strong>Statut du propriétaire&nbsp;:</strong>
						Personne physique
					</li>
					<li>
						<strong>Adresse de courrier électronique&nbsp;:</strong>
						<ExternalLink href="#" @click="onMailClick">
							{{ mail }}
						</ExternalLink>
					</li>
					<li>
						<strong>Créateur du site&nbsp;:</strong>
						Ludwig GUERIN
					</li>
					<li>
						<strong>Responsable de la publication&nbsp;:</strong>
						Ludwig GUERIN
					</li>
					<li>
						<strong>Webmestre&nbsp;:</strong>
						Ludwig GUERIN
					</li>
					<li>
						<strong>Hébergeur&nbsp;:</strong>
						Github
					</li>
					<li>
						<strong>Contacter l'hébergeur&nbsp;:</strong>
						<ExternalLink :href="`mailto:${githubMail}`">
							{{ githubMail }}
						</ExternalLink>
					</li>
				</ul>
			</a-collapse-panel>

			<a-collapse-panel :key="3" header="Propriété Intellectuelle">
				Les contenus présentés sur ce site sont propriétés intellectuelles
				de leurs propriétaires respectifs. Ils ne sont pas à considérer comme
				attribués au propriétaire du site.<br/>
				<br/>
				Les designs utilisés pour la bannière Open Graph sont la propriété de
				<ExternalLink href="https://www.freepik.com/pikisuperstar">
					Pikisuperstar.
				</ExternalLink>
			</a-collapse-panel>
		</a-collapse>
		<br/>
		<a-row type="flex" justify="center" align="middle" :gutter="[16,16]">
			<a-col>
				<a-button type="primary">
					<NuxtLink to="/">
						Retourner à l'accueil
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
