<i18n lang="yaml">
fr:
  legalLabel: Mentions légales

en:
  legalLabel: Legal notice
</i18n>

<template>
	<ALayout class="main" v-konami="openFloatingPlayer">
		<Navbar/>

		<Loader ref="loader" :isLoading="!loaded"/>

		<ALayoutContent style="display: flex">
			<!--			<client-only>
							<FloatingPlayer
								:isOpen="displayFloatingPlayer"
								@open="openFloatingPlayer"
								@close="closeFloatingPlayer"/>
						</client-only>-->

			<ARow class="container" type="flex" justify="center" align="middle">
				<ACol style="position: relative" :xs="11" :lg="9" :xl="8">
					<Nuxt/>
				</ACol>

				<ABackTop style="right: 3%; bottom: 3%;">
					<AButton type="primary" shape="circle" size="large">
						<AIcon type="up"/>
					</AButton>
				</ABackTop>
			</ARow>
		</ALayoutContent>

		<ALayoutFooter class="footer">
			<p class="foot">
				<span>
					Ludwig GUERIN &copy;<span v-html="copyrightYear"/>
				</span>
				<client-only>
					<GdprOpener @click="showBanner" class="opener"/>
				</client-only>
				<NuxtLink :to="localePath({name: 'mentions-legales'})">
					{{ $t("legalLabel") }}
				</NuxtLink>
			</p>

			<keep-alive>
				<client-only>
					<GdprBanner ref="banner"/>
				</client-only>
			</keep-alive>
		</ALayoutFooter>
	</ALayout>
</template>

<script>
	import { getYear } from "date-fns";

	const defaultTransition = "fade";

	export default {
		head() {
			return this.$nuxtI18nHead({
				addSeoAttributes: true,
			});
		},
		jsonld() {
			const firstName = "Ludwig";
			const lastName = "GUÉRIN";

			const name = `${firstName} ${lastName}`;

			const url = (uri = "") => `${process.env.NUXT_ENV_BASE_URL}${uri}`;

			return [
				{
					"@context": "https://schema.org",
					"@type": "WebSite",
					name: process.env.NUXT_ENV_PROJECT_NAME,
					url: url(),
				},
				{
					"@context": "http://xmlns.com/foaf/0.1/",
					"@id": "https://www.linkedin.com/in/ludwig-guerin",
					"@type": "Person",
					name,
					firstName,
					lastName,
					img: url("/img/ludwig.jpg"),
					homepage: url(),
				},
			];
		},
		data() {
			return {
				loaded: false,
				currentYear: getYear(new Date()),
				displayFloatingPlayer: false,
			};
		},
		mounted() {
			this.loaded = true;
		},
		transition(to, from) {
			if (!from) {
				return defaultTransition;
			}

			const toLength = to.path.split("/");
			const fromLength = from.path.split("/");

			return toLength < fromLength ? "slide-left" : "slide-right";
		},
		computed: {
			copyrightYear() {
				return `2020&nbsp-&nbsp;${this.currentYear}`;
			},
		},
		methods: {
			showBanner() {
				this.$refs.banner?.showModal();
			},
			openFloatingPlayer() {
				this.displayFloatingPlayer = true;
			},
			closeFloatingPlayer() {
				this.displayFloatingPlayer = false;
			},
		},
	};
</script>

<style lang="scss">
	@import "~@/scss/settings.scss";

	.router {
		transition-duration: 0.6s;
		transition-property: height, opacity, transform;
		transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);

		opacity: 1;
	}

	#app {
		width: 100%;
		height: 100vh;
	}

	.main {
		min-height: 100vh !important;
	}

	.container {
		min-height: 100%;
		width: 100%;
	}

	.foot {
		display: flex;
		justify-content: center;
		align-items: center;

		& > * {
			display: block;

			margin-left: 1em;

			&:first-child {
				margin-left: 0;
			}
		}
	}

	.footer {
		text-align: center;
		padding: 1em !important;
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
	.fade-leave-active {
		opacity: 0
	}
</style>
