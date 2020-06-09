<template>
	<!-- cf. https://markus.oberlehner.net/blog/vue-router-page-transitions/ -->

	<div id="app">
		<a-layout class="main">
			<Navbar/>

			<a-layout-content style="display: flex">
				<a-row class="container" type="flex" justify="center" align="middle">
					<a-col :xs="11" :sm="10" :l="8"> <!-- :xl="6" -->
						<keep-alive>
							<transition :name="transitionName" mode="out-in">
								<router-view class="router"/>
							</transition>
						</keep-alive>
					</a-col>
					
					<a-back-top style="right: 3%; bottom: 3%;">
						<a-button type="primary" shape="circle" size="large">
							<a-icon type="up"/>
						</a-button>
					</a-back-top>
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

	const defaultTransition = "fade";

	export default {
		data(){
			return {
				transitionName: defaultTransition,
			};
		},
		created(){
			this.$router.beforeEach((to, from, next) => {
				let transitionName = to.meta.transitionName || from.meta.transitionName || "slide";

				if(transitionName === "slide"){
					const toDepth = to.path.split("/").length;
					const fromDepth = from.path.split("/").length;
					transitionName = toDepth <= fromDepth ? "slide-right" : "slide-left";
				}

				this.transitionName = transitionName || defaultTransition;
				next();
			});
		},
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

	.router{
		transition-duration: 0.6s;
		transition-property: height, opacity, transform;
		transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);

		opacity: 1;
	}

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


	// Transitions
	.slide-left-enter-active,
	.slide-left-leave-active,
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition-duration: 0.6s;
		transition-property: height, opacity, transform;
		transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
		//overflow: hidden;
	}

	.slide-left-enter,
	.slide-right-leave-active {
		//opacity: 0;
		transform: translate(100%, 0);
	}

	.slide-left-leave-active,
	.slide-right-enter {
		//opacity: 0;
		transform: translate(-100%, 0);
	}

	.fade-enter-active,
	.fade-leave-active {
		transition-duration: 0.6s;
		transition-property: opacity;
		transition-timing-function: ease;
	}

	.fade-enter,
	.fade-leave-active{ 
		opacity: 0
	}
</style>
