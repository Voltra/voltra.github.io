<template>
	<a-card :xs="12" :sm="10" :md="8" :lg="6" :xl="4" title="Me Contacter">
		<a-icon slot="extra" type="notification" />
		<a-row type="flex" justify="center" align="middle">
			<a-col :span="12">
				Pour plus d'informations ou pour me contacter dans un cadre
				professionnel, merci d'utiliser les moyens suivants&nbsp;:
				<br />
				<br />
				<a-row type="flex" justify="space-around" align="middle">
					<a-col>
						<a-button-group>
							<a-button type="primary" icon="linkedin">
								<ExternalLink :href="linkedin" type="secondary">
									LinkedIn
								</ExternalLink>
							</a-button>

							<a-button type="primary" @click="doCopy">
								<a-icon type="mail" />
								<a :href="`mailto:${mail}?subject=[CONTACT PRO] `" class="secondary" type="secondary">
									Mail
								</a>
							</a-button>
						</a-button-group>
					</a-col>
				</a-row>
			</a-col>
		</a-row>
	</a-card>
</template>

<script>
import ExternalLink from "@/components/ExternalLink";
import { makeMeta } from "@/plugins/metaHelpers";

const placement = "bottomRight";

const title = "Me contacter";
const description = "Me contacter dans un cadre professionnel";

export default {
	metaInfo: makeMeta({
		title,
		description,
		tags: "contact,professionnel,linkedin,mail",
	}),
	data() {
		return {
			mail: "ludwig.guerin.98@gmx.fr",
			linkedin: "https://www.linkedin.com/in/ludwig-guerin",
		};
	},
	components: {
		ExternalLink,
	},
	methods: {
		doCopy() {
			this.$copyText(this.mail)
				.then(() =>
					this.$notification.success({
						placement,
						message: "L'adresse e-mail a bien été copiée",
					})
				)
				.catch(() =>
					this.$notification.error({
						placement,
						message:
							"Nous n'avons pas pu mettre l'adresse e-mail dans le presse-papier",
					})
				);
		},
	},
};
</script>

<style lang="scss" scoped>
	.secondary {
		color: white;
	}
</style>
