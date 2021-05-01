<template>
	<!-- cf. https://markus.oberlehner.net/blog/vue-router-page-transitions/ -->

	<div id="app">
		<a-layout class="main" v-konami="openFloatingPlayer">
			<Navbar/>

			<a-layout-content style="display: flex">
				<FloatingPlayer
					:isOpen="displayFloatingPlayer"
					@open="openFloatingPlayer"
					@close="closeFloatingPlayer"/>

				<a-row class="container" type="flex" justify="center" align="middle">
					<a-col style="position: relative" :xs="11" :lg="9"> <!-- :md="10" :xl="6" -->
						<keep-alive>
							<transition class="router" :name="transitionName" mode="out-in">
								<router-view/>
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
				<p class="foot">
					<span>Ludwig GUERIN &copy;<span v-html="copyrightYear"></span></span>
					<GdprOpener class="opener" :gdpr="$refs.gdpr"/>
					<router-link :to="{name: 'About'}">
						Mentions légales
					</router-link>
				</p>
				<!--<br/>-->
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
	import FloatingPlayer from "@/components/FloatingPlayer"
	import moment from "moment"

	const defaultTransition = "fade";

	export default {
		data(){
			return {
				transitionName: defaultTransition,
				currentYear: moment().format("YYYY"),
				displayFloatingPlayer: false,
			};
		},
		methods: {
			openFloatingPlayer(){
				this.displayFloatingPlayer = true;
			},
			closeFloatingPlayer(){
				this.displayFloatingPlayer = false;
			},
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
			// const url = (uri = "") => `${location.origin}${uri}`;
			const url = (uri = "") => `${process.env.VUE_APP_BASE_URL}${uri}`;
			const logo = url(`/${process.env.VUE_APP_OG_IMAGE_URI}`);
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
			FloatingPlayer,
		},
		computed: {
			copyrightYear(){
				return parseInt(this.currentYear, 10) > 2020
				? `2020&nbsp-&nbsp;${this.currentYear}`
				: this.currentYear;
			},
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

		& > *{
			display: block;

			margin-left: 1em;

			&:first-child{
				margin-left: 0;
			}
		}
	}

	.footer{
		text-align: center;
		padding: 0 1em !important;

		padding-top: 1em !important;
	}

	/*.opener{
		margin-left: 1em;
	}*/


	// Transitions
	/*.slide-left-enter-active,
	.slide-left-leave-active,
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition-duration: 0.6s;
		transition-property: height, opacity, transform;
		transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
		//overflow: hidden;
	}*/

	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0.5;
		transform: translateX(100%);
	}

	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0.5;
		transform: translateX(-100%);
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
