<template>
	<a-card title="Oups, il y a eu un petit soucis">
		<a-row type="flex" justify="center" align="middle">
			<a-col :span="12">
				Il semblerait que cette page n'existe pas.<br/>
				<br/>
				
				<a-row type="flex" justify="space-around" align="middle">
					<a-col>
						<a-button type="primary">
							<router-link :to="{name: 'Home'}">
								Retourner à l'accueil
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
	const title = "Erreur 404";
	const description = "Cette page n'existe pas.";

	export default{
		metaInfo: makeMeta({
			title,
			description,
			tags: "",
		}),
	}
</script>