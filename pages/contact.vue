<i18n lang="yaml">
fr:
  seo:
    title: Me contacter
    description: Me contacter dans un cadre professionnel
    keywords: contact,professionnel,linkedin,mail
  title: Me Contacter
  intro: Pour plus d'informations ou pour me contacter dans un cadre
    professionnel, merci d'utiliser les moyens suivants&nbsp;&colon;

en:
  seo:
    title: Get in touch
    description: Get in touch, for business only
    keywords: contact,professional,business,work,linkedin,mail
  title: Get in touch
  intro: For more info, or to contact me for business, use the means below&colon;
</i18n>

<template>
	<a-card :xs="12" :sm="10" :md="8" :lg="6" :xl="4" :title="$t('title')">
		<template #extra>
			<a-icon type="notification" />
		</template>

		<a-row type="flex" justify="center" align="middle">
			<a-col :span="12">
				<p v-html="$t('intro')"/>
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
						</a-button-group>
					</a-col>
				</a-row>
			</a-col>
		</a-row>
	</a-card>
</template>

<script>
	import { pageMixin } from "~/js/mixins/page";

	const placement = "bottomRight";

	export default {
		mixins: [pageMixin],
		data() {
			return {
				linkedin: "https://www.linkedin.com/in/ludwig-guerin",
			};
		},
	}
</script>
