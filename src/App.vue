<template>
	<div id="app">
		<a-layout class="main">
			<Navbar/>

			<a-layout-content style="display: flex">
				<a-row class="container" type="flex" justify="center" align="middle">
					<a-col :xs="11" :sm="10" :l="8" :xl="6">
						<keep-alive>
							<router-view/>
						</keep-alive>
					</a-col>
					
					<a-back-top/>
				</a-row>
			</a-layout-content>

			<a-layout-footer class="footer">
				<span class="foot">Ludwig GUERIN &copy;2020<GdprOpener class="opener" :gdpr="$refs.gdpr"/></span><br/>
				<keep-alive>
					<GdprBanner ref="gdpr"/>
				</keep-alive>
			</a-layout-footer>
		</a-layout>
	</div>
</template>

<script>
	import GdprBanner from "@/components/GdprBanner"
	import GdprOpener from "@/components/GdprOpener"
	import Navbar from "@/components/Navbar"
	
	export default {
		metaInfo(){
			const url = (uri = "") => location.origin + uri;
			const logo = url("/img/og.png");
			const description = "Site officiel de Ludwig GUERIN, aka Voltra the dev";

			return {
				htmlAttrs: {
					prefix: "og: http://ogp.me/ns#",
				},
				title: "Ludwig GUERIN",
				titleTemplate: "%s | Ludwig GUERIN",
				meta: [
					//static
					{
						property: "og:type",
						content: "website",
					},
					{
						property: "og:site_name",
						content: "Ludwig GUERIN",
					},
					{
						property: "og:image",
						content: logo,
					},
					{
						property: "twitter:card",
						content: "summary",
					},
					{
						property: "twitter:image",
						content: logo, 
					},

					//dynamic
					{
						vmid: "og:title",
						property: "og:title",
						content: "Ludwig GUERIN",
						template: "%s | Ludwig GUERIN",
					},
					{
						vmid: "og:description",
						property: "og:description",
						content: description,
					},
					{
						vmid: "description",
						property: "og:description",
						content: description,
					},
					{
						vmid: "keywords",
						property: "keywords",
						content: "",
					},
				],
			};
		},
		components: {
			GdprBanner,
			GdprOpener,
			Navbar,
		},
	}
</script>

<style lang="scss">
	@import "~@/scss/settings.scss";
	
	#app{
		width: 100%;
		height: 100vh;
	}
	
	.main{
		min-height: 100vh !important;
	}

	.container{
		min-height: 100%;
		width: 100%;
	}
	
	.foot{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.footer{
		text-align: center;
		padding: 0 1em !important;

		padding-top: 1em !important;
	}
	
	.opener{
		margin-left: 1em;
	}
</style>
