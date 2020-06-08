<template>
	<a-card title="Me Contacter">
		<a-icon slot="extra" type="notification"/>
		<a-row type="flex" justify="center" align="middle">
			<a-col :span="12">
				Pour plus d'informations ou me contacter dans un cadre
				professionnel, merci d'utiliser les medium suivants&nbsp;:<br/>

				<a-row type="flex" justify="space-around" align="middle">
					<a-col>
						<a-button type="primary" icon="linkedin">
							<ExternalLink :href="linkedin" type="secondary">
								LinkedIn
							</ExternalLink>
						</a-button>
					</a-col>

					<a-col>
						<a-button
							type="primary"
							icon="mail"
							@click="doCopy"/>
							<ExternalLink :href="`mailto:${mail}`" type="secondary">
								Mail
							</ExternalLink>
						</a-button>
					</a-col>
				</a-row>
			</a-col>
		</a-row>
	</a-card>
</template>

<script>
	import ExternalLink from "@/components/ExternalLink"

	const placement = "bottomRight";

	export default {
		data(){
			return {
				mail: "ludwig.guerin.98@gmx.fr",
				linkedin: "https://www.linkedin.com/in/ludwig-guerin",
			};
		},
		components: {
			ExternalLink,
		},
		methods: {
			doCopy(){
				this.$copyText(this.mail)
					.then(() => this.$notification.success({
						placement,
						message: "L'adresse e-mail a bien été copiée",
					})).catch(() => this.$notification.error({
						placement,
						message: "Nous n'avons pas pu mettre l'adresse e-mail dans le presse-papier",
					}));
			},
		},
	}
</script>
