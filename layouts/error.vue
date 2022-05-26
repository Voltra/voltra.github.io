<template>
	<a-card :xs="12" :sm="10" :md="8" :lg="6" :xl="4" title="Oups">
		<template #extra>
			<a-icon type="notification" />
		</template>

		<a-row type="flex" justify="center" align="middle">
			<a-col :xs="8" :lg="6" style="text-align: center">
				<span>
					La page que vous avez demandé n'existe pas,
					voici un peu de musique en attendant
				</span>

				<iframe
					:width="width"
					:height="height"
					:src="url"
					:title="title"
					loading="lazy"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen>
				</iframe>

				<a-row type="flex" justify="center" align="middle">
					<a-col class="btn" :xs="12" :md="8" :lg="6">
						<a-button type="primary">
							<router-link :to="$route_('index')">
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
	export default {
		props: ["error"],
		layout: "default",
		data() {
			return {
				width: 300,
				// width: 560,
				// height: 315,
				height: 168,
				id: "Sz5aa7SdA24",
				title: "Mushroom Paradise - Felxprod",
			};
		},
		computed: {
			url(){
				return `https://www.youtube-nocookie.com/embed/${this.id}`;
			},
		},
	}
</script>

<style scoped>
	iframe {
		display: block;
		width: 100%;
		height: 100%;
		max-width: 90vw;
		max-height: 90vh;
		margin: 2em auto;
		aspect-ratio: 16/9;
	}
</style>
